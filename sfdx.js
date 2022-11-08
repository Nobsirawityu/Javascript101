const result = [{
    "ContractNo": "***********",
    "ContractStatusCode": "***********",
    "ContractStatusName": "***********",
    "HPTotalAmount": "***********",
    "HPNetAmount": "***********",
    "OutstandingAmount": "***********",
    "Installment": "***********",
    "NumberOfInstallmentBalance": "***********",
    "TotalInstallments": "***********",
    "CurrentOfInstallments": "***********",
    "OverdueNo": "***********",
    "OverdueAmount": "***********",
    "Channel": "***********"
  },
  {
    "ContractNo": "***********",
    "ContractStatusCode": "***********",
    "ContractStatusName": "***********",
    "HPTotalAmount": "***********",
    "HPNetAmount": "***********",
    "OutstandingAmount": "***********",
    "Installment": "***********",
    "NumberOfInstallmentBalance": "***********",
    "TotalInstallments": "***********",
    "CurrentOfInstallments": "***********",
    "OverdueNo": "***********",
    "OverdueAmount": "***********",
    "Channel": "***********"
  }];
let i = 0;
let isHidden = false;
for (const [key, value] of Object.entries(result[0])) {
    if(value == '***********'){
        isHidden = true;
        break;
    }
}
console.log(isHidden);
console.log(i);