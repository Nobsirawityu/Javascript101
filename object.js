const objectInfoField = {
  RTL_OnSite_Service_Update_Date__c: {
    isAccessible: true,
    label: "On Site Service Update Date",
    name: "RTL_OnSite_Service_Update_Date__c",
    type: "DATE",
    value: "",
  },
  RTL_OnSite_Service__c: {
    inlineHelpText: "",
    isAccessible: true,
    label: "On Site Service",
    name: "RTL_OnSite_Service__c",
    type: "STRING",
    value: "",
  },
  Name: { isAccessible: true, label: "NobNab", value: "Sirawit" },
};

const result = {
  currentPrivilege2Desc: "- ดอกเบี้ยพิเศษ NO FIXED",
  touchStatus: "Yes",
  ibStatus: "No",
};
console.log(result.touchStatus);
const pass = objectInfoField.RTL_OnSite_Service__c.label;
console.log(pass);
console.log(objectInfoField["RTL_OnSite_Service_Update_Date__c"].label);
