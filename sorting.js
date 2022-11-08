function simpleSort(array, delay){
    return new Promise((resolve, reject) => {
        console.log('simple running');
        setTimeout(() => {
            const sorted = array.sort(function(a,b) {
                return b - a;
            });
            resolve(sorted);
            reject('error while sorting.');
        }, delay);
    })
}

function bubleSort(array, delay){
    array.push(18);
    return new Promise((resolve, reject) => {
        console.log('buble running');
        setTimeout(() => {
            let flag;
            const len = array.length;
            for(let i=0 ;i< len -1 ; i++){
                flag = false;
                for(let j=0 ;j< len-1-i; j++){
                    if(array[j] > array[j+1]){
                        const temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;
                        flag = true;
                    }
                }
                if(flag == false){
                    break;
                }
            }
            resolve(array);
            reject("error occur while sorting.");
        }, delay);
    })
}


async function callSorting(){
    const lst = [12, 5, 8, 13, 44, 7];
    try{
        const firstCall = await bubleSort(lst, 3000);
        const secondCall = await simpleSort(firstCall, 2000);
        console.log(secondCall);
    }
    catch{
        console.log('error occur.');
    }
}
callSorting();

