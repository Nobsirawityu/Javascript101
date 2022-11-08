const fieldSet = [
    'TMB_Customer_ID_PE__c',
    'KYC__c',
    'KYC_CCI1_Completed__c',
    'RTL_Lifetime_Code__c',
    'RTL_Lifetime_link__c',
    'RTL_Credit_Card_History__c',
    'RTL_Personal_Loan_History__c',
    'RTL_4THANA_Info__c',
    'RTL_4THANA_Fund_AMT__c',
    'RTL_4THANA_Aggregate_Bond_AMT__c',
    'RTL_4THANA_Bond_AMT__c',
    'RTL_4THANA_Short_Bond_AMT__c',
    'RTL_4THANA_Total_AMT__c',
    'RTL_Entitled_Privilege2__c',
    'RTL_Privilege2__c',
    'Consolidate_Status__c',
    'RTL_CC_STMT_status__c',
    'RTL_RDC_STMT_status__c',
    'RTL_C2G_STMT_status__c',
    'Fna_Product_Interested__c',
    'Fna_Product_Holding__c',
    'RTL_OnSite_Service__c',
    'RTL_OnSite_Service_Update_Date__c',
    'RTL_OnSite_Service_User_Update__c',
    'Name',
    'Core_Banking_Suggested_Segment__c'
]

const newFieldSet = fieldSet.map(function(p){
    return {'field' : p }
})

console.log(JSON.stringify(newFieldSet));