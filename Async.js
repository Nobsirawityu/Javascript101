boilWater();
console.log('chop carrot');

function boilWater(){
    console.log('boiling...');
    setTimeout(()=>{
        console.log('done.');
        console.log('add carrots');
        setTimeout(()=>{
            console.log('boiling carrot done.');
            console.log('add onions');
            setTimeout(() => {
                console.log('everything done.');
            }, 5000);
        }, 5000);
        console.log('chop onion');
    }, 10000);
}