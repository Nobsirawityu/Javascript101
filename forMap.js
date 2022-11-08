const arr = ['Bancassurance_Product_Details', 'Deposit_Product_Details', 'Investment_Product_Details', 'Credit_Card_RDC_Product_Details', 'Loan_Product_Details'];
const afterMap = arr.map((i) => {
    let type;
    if(i == 'Deposit_Product_Details'){
        type = 'Deposit Product Details';
    }
    else if(i == 'Investment_Product_Details'){
        type = 'Investment Product Details';
    }
    else if(i == 'Bancassurance_Product_Details'){
        type = 'Bancassurance Product Details';
    }
    else if( i== 'Credit_Card_RDC_Product_Details'){
        type = 'Credit Card / RDC Product Details';
    }
    else {
        type =  'Loan Product Details';
    }
    return {
        "isError" : true,
        "Tag" : i,
        "Type" : type
    }
});

console.log(afterMap);




