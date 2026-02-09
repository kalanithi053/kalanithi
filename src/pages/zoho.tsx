import React from "react";
import { useEffect, useState } from "react";
const CrmLookupWidget = () => {
  const [loading, setLoading] = useState(true);
  const [currentRecord, setCurrentRecord] = useState(null);
  useEffect(() => {
    window.ZOHO.embeddedApp.on("PageLoad", async (data) => {
      if (!data?.Entity || !data?.EntityId) return;
      console.log("data", data);
      console.log("window.ZOHO", window.ZOHO);
      try {
        setLoading(true);

        // 1️⃣ Get current record
        const recordRes = await window.ZOHO.CRM.API.getRecord({
          Entity: data.Entity,
          RecordID: data.EntityId,
        });
        const orgInfo = await window.ZOHO.CRM.CONFIG.getOrgInfo();
        const GetCurrentEnvironment = await window.ZOHO.CRM.CONFIG.GetCurrentEnvironment();
        const getCurrentUser = await window.ZOHO.CRM.CONFIG.getCurrentUser();
        console.log("orgInfo", orgInfo);
        console.log(" GetCurrentEnvironment", GetCurrentEnvironment);
        console.log(" getCurrentUser", getCurrentUser);
        window.ZOHO.CRM.API.upsertRecord({
          Entity: data.Entity,
          APIData: [
            {
              Name: "FromApi Co-sell",
              Stage: "Prospect",
            },
          ],
        })
          .then((dataInsert) => {
            console.log(dataInsert);
          })
          .catch((err) => {
            console.log(err);
          });

        console.log("recordRes", recordRes);
        const record = recordRes.data[0];
        setCurrentRecord(record);
        console.error("Zoho CRM error:", err);
      } finally {
        setLoading(false);
      }
    });

    window.ZOHO.embeddedApp.init();
  }, []);

  if (loading) return <p>Loading CRM data...</p>;

  return (
    <div style={{ padding: "12px", fontFamily: "Arial" }}>
      <h3>Current Record</h3>

      {currentRecord && (
        <div style={{ marginBottom: "16px" }}>
          <div>
            <strong>Name:</strong> {currentRecord?.Account_Name?.name}
          </div>
          <div>
            <strong>Id:</strong> {currentRecord?.id}
          </div>
          <div>
            <strong>Deal Name:</strong> {currentRecord?.Deal_Name}
          </div>
        </div>
      )}
    </div>
  );
};

export default CrmLookupWidget;
