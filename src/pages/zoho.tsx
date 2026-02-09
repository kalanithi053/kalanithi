"use client";
import { useEffect, useState } from "react";

const CrmLookupWidget = () => {
  const [loading, setLoading] = useState(true);
  const [currentRecord, setCurrentRecord] = useState<any>(null);

  useEffect(() => {
    let attempts = 0;

    const waitForZoho = () => {
      attempts++;

      if ((window as any).ZOHO?.embeddedApp) {
        initializeZoho();
      } else if (attempts < 20) {
        setTimeout(waitForZoho, 300);
      } else {
        console.error("ZOHO SDK not available");
      }
    };

    waitForZoho();
  }, []);

  const initializeZoho = async () => {
    const ZOHO = (window as any).ZOHO;

    await ZOHO.embeddedApp.init();

    ZOHO.embeddedApp.on("PageLoad", async (data: any) => {
      if (!data?.Entity || !data?.EntityId) return;

      try {
        setLoading(true);

        const recordRes = await ZOHO.CRM.API.getRecord({
          Entity: data.Entity,
          RecordID: data.EntityId,
        });

        const orgInfo = await ZOHO.CRM.CONFIG.getOrgInfo();
        const env = await ZOHO.CRM.CONFIG.getCurrentEnvironment();
        const user = await ZOHO.CRM.CONFIG.getCurrentUser();

        console.log("Org:", orgInfo);
        console.log("Env:", env);
        console.log("User:", user);

        setCurrentRecord(recordRes.data[0]);
      } finally {
        setLoading(false);
      }
    });
  };

  if (loading) return <p>Loading CRM data...</p>;

  return (
    <div style={{ padding: 12 }}>
      <h3>Current Record</h3>
      {currentRecord && (
        <>
          <div>
            <strong>ID:</strong> {currentRecord.id}
          </div>
          <div>
            <strong>Name:</strong> {currentRecord.Account_Name?.name}
          </div>
        </>
      )}
    </div>
  );
};

export default CrmLookupWidget;
