const function_obj = [
  "dataQM",
  "dataAge",
  "moreDetail",
  "pdpaDetail",
  "marketDetail",
];

const FIELDS = [
  "CSV_Customer_Image__c",
  "RTL_Total_Asset__c",
  "Total_Asset_image__c",
  "RTL_AUM__c",
  "RTL_AUM_Last_Calculated_Date__c",
  "TMB_Customer_ID_PE__c",
  "RTL_Customer_Name_TH__c",
  "Customer_Name_PE_Eng__c",
  "Customer_Type__c",
  "Core_Banking_Suggested_Segment__c",
  "Sub_segment__c",
  "Customer_Status__c",
  "RTL_Benefit_Status__c",
  "VIP_Status__c",
  "Mobile_Number_PE__c",
  "Email_Address_PE__c",
  "RTL_Date_Of_Birth__c",
  "RTL_Age__c",
  "RTL_Income__c",
  "RTL_Primary_Banking_All_Free_Benefit__c",
  "RTL_Do_Not_Call__c",
  "FATCA__c",
  "FATCA_Form_Completed__c",
  "RTL_Risk_Level_Details__c",
  "RTL_Suitability__c",
  "RTL_Fund_Risk_Mismatch__c",
  "RTL_Fund_High_Concentration_Risk__c",
  "ID_Type_PE__c",
  "NID__c",
  "RTL_Is_Employee__c",
  "RTL_Most_Visited_Branch__c",
  "RTL_Most_Operating_Branch__c",
  "RTL_Assigned_BRC__c",
  "RTL_Wealth_RM__c",
  "RTL_Commercial_RM__c",
  "Hobbies__c",
  "Favorite_Sport__c",
  "Favorite_Place_Travel__c",
  "Favorite_Music__c",
  "Favorite_Food__c",
  "RTL_Lifestyle__c",
  "RTL_Preferred_Activity__c",
  "RTL_Other1__c",
  "Operating_Model__c",
  "RTL_Special_Pref__c",
  "RTL_Life_Objective_1__c",
  "RTL_Life_Objective_2__c",
  "RTL_Life_Objective_3__c",
  "RTL_Other2__c",
  "Next_Generate_task_date__c",
  "Last_Generate_task_date__c",
  "RTL_Wealth_RM__r.Name",
  "Wealth_RM_EMP_Code__c",
  "RTL_Commercial_RM__r.Name",
  "RTL_Commercial_RM__r.Employee_ID__c",
  "RTL_Assigned_BRC__r.Name",
  "RTL_Assigned_BRC__r.Employee_ID__c",
  "RTL_Check_WM_RM_as_PWA__c",
  "RTL_Main_Bank_Desc__c",
  "RTL_Privilege1__c",
  "Segment_crm__c",
];

const FIELDS_TRANSLATE = [
  "Hobbies__c",
  "Favorite_Sport__c",
  "RTL_Lifestyle__c",
  "RTL_Preferred_Activity__c",
  "RTL_Other1__c",
  "Favorite_Place_Travel__c",
  "Favorite_Music__c",
  "Favorite_Food__c",
];

const account_field_section = {
  CSV_Customer_Image__c: "RtlCust:Customer Demographic (Medium)",
  Total_Asset_image__c: "RtlCust:Customer Product Holding (High)",
  RTL_AUM__c: "RtlCust:Customer Product Holding (High)",
  RTL_AUM_Last_Calculated_Date__c: "RtlCust:Customer Product Holding (High)",

  TMB_Customer_ID_PE__c: "RtlCust:Customer Demographic (Low)",
  RTL_Customer_Name_TH__c: "RtlCust:Customer Demographic (Low)",
  Customer_Name_PE_Eng__c: "RtlCust:Customer Demographic (Low)",
  Customer_Type__c: "RtlCust:Customer Relationship",
  Customer_Status__c: "ComCust:Account Information",
  RTL_Privilege1__c: "RtlCust:Customer Relationship",
  VIP_Status__c: "RtlCust:Customer Relationship",
  Mobile_Number_PE__c: "RtlCust:Contact Number and Email Address",
  Email_Address_PE__c: "RtlCust:Contact Number and Email Address",
  RTL_Date_Of_Birth__c: "RtlCust:Customer Demographic (Medium)",
  RTL_Age__c: "RtlCust:Customer Demographic (Medium)",
  RTL_Income__c: "RtlCust:Customer Demographic (Medium)",
  RTL_Primary_Banking_All_Free_Benefit__c: "RtlCust:MI Benefits", //osc 07
  RTL_Do_Not_Call__c: "RtlCust:Customer Relationship",
  FATCA__c: "RtlCust:Sales Support Information",
  FATCA_Form_Completed__c: "RtlCust:Sales Support Information",
  RTL_Risk_Level_Details__c: "RtlCust:Sales Support Information",
  RTL_Suitability__c: "RtlCust:Sales Support Information",
  RTL_Fund_Risk_Mismatch__c: "RtlCust:Sales Support Information",
  RTL_Fund_High_Concentration_Risk__c: "RtlCust:Sales Support Information",
  ID_Type_PE__c: "RtlCust:Customer Demographic (Medium)",
  NID__c: "RtlCust:Customer Demographic (Medium)",
  RTL_Is_Employee__c: "RtlCust:Customer Relationship",
  RTL_Most_Visited_Branch__c: "RtlCust:Customer Relationship", //osc 07
  RTL_Most_Operating_Branch__c: "RtlCust:Customer Relationship",
  RTL_Assigned_BRC__c: "RtlCust:Customer Relationship",
  RTL_Wealth_RM__c: "RtlCust:Customer Relationship",
  RTL_Commercial_RM__c: "RtlCust:Customer Relationship",
  RTL_Main_Bank_Desc__c: "RtlCust:MI Benefits",

  Hobbies__c: "RtlCust:Customer Insight - Personalized Information",
  Favorite_Sport__c: "RtlCust:Customer Insight - Personalized Information",
  Favorite_Place_Travel__c:
    "RtlCust:Customer Insight - Personalized Information",
  Favorite_Music__c: "RtlCust:Customer Insight - Personalized Information",
  Favorite_Food__c: "RtlCust:Customer Insight - Personalized Information",
  RTL_Lifestyle__c: "RtlCust:Customer Insight - Personalized Information",
  RTL_Preferred_Activity__c:
    "RtlCust:Customer Insight - Personalized Information",
  RTL_Other1__c: "RtlCust:Customer Insight - Personalized Information",
  Operating_Model__c: "RtlCust:Customer Relationship",
  RTL_Special_Pref__c: "RtlCust:Customer Insight - Personalized Information",
  RTL_Life_Objective_1__c:
    "RtlCust:Customer Insight - Personalized Information",
  RTL_Life_Objective_2__c:
    "RtlCust:Customer Insight - Personalized Information",
  RTL_Life_Objective_3__c:
    "RtlCust:Customer Insight - Personalized Information",
  RTL_Other2__c: "RtlCust:Customer Insight - Personalized Information",
  Next_Generate_task_date__c: "RtlCust:Customer Relationship",
  Last_Generate_task_date__c: "RtlCust:Customer Relationship",
  RTL_Check_WM_RM_as_PWA__c: "RtlCust:Customer Relationship",
  RTL_Benefit_Status__c: "RtlCust:Customer Relationship",
  RTL_Average_AUM__c: "RtlCust:Customer Product Holding (High)",
};

const function_field_section = {
  dataQM: "RtlCust:Sales Support Information",
  dataAge: "RtlCust:Sales Support Information",
  moreDetail: "RtlCust:Sales Support Information",
  pdpaDetail: "RtlCust:Sales Support Information",
  marketDetail: "RtlCust:Sales Support Information",
};

// let lst = {};
// let dataPartition = {};
// FIELDS.forEach(function (p) {
//   lst[p] = {
//     name: "",
//     value: "",
//     label: "",
//     type: "",
//     inlineHelpText: "",
//     isAccessible: false,
//   };
//   dataPartition[p] = {
//     isVisible: false,
//   };
// });

// function_obj.forEach(function (k) {
//     dataPartition[k] = {
//         isVisible: false,
//     };
// });

function addField(fields){
  let dataPartition = {};
  let lst = {};
  return new Promise((resolve, reject) => {
      fields.forEach(function (p) {
        lst[p] = {
          name: "",
          value: "",
          label: "",
          type: "",
          inlineHelpText: "",
          isAccessible: false,
        };
        dataPartition[p] = {
          isVisible: false,
        };
      });
      resolve(dataPartition);
      reject("error occur");
  })
}

function addFunObj(dataPartition, function_obj){
  return new Promise((resolve, reject) => {
    function_obj.forEach(function(p) {
      dataPartition[p] = {
        isVisible : true
      }
    })
    resolve(dataPartition);
    reject("error occur.");
  })
}

async function prepareVisible(fieldList, funObjlst){
  try{
    const fieldadded = await addField(fieldList);
    const funObjadded = await addFunObj(fieldadded, funObjlst);
    console.log(funObjadded);
  }catch{
    console.log("error occur");
  }
}

function getSection(account_field_section){
  let sectionList = [];
  return new Promise((resolve, reject) => {
    for(const key in account_field_section){
      sectionList.push(account_field_section[key]);
    }
    resolve(sectionList);
    reject("error occur");
  })
}

async function callGetSection(account_field_section){
  try{
    const listOfSection = await getSection(account_field_section);
    console.log(listOfSection);
  }catch{
    console.log("error occur.");
  }
}

prepareVisible(FIELDS, function_obj);
callGetSection(account_field_section);

