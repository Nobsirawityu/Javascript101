myFunction();

async function myFunction(){
    try{
        const blue = await addColor(5000, 'blue', true);
         console.log(blue);
        const red = await addColor(5000, 'red', false);
        console.log(red);
    }catch(error){
        console.log(error);
    }
}


function addColor(time, color, value){
    return new Promise((resolve, rejected) => {
        if(value){
            setTimeout(()=>{
                console.log('this is ' + color);
                resolve('now color is ' + color);
            }, time);
        }
        else{
            setTimeout(()=>{
                console.log('In the error.');
                rejected('The value is false.');
            }, time);
        }
    });
}