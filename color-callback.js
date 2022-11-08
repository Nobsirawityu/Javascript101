changeColor();

function changeColor(){
    setTimeout(()=>{
        console.log('color is red.');
        setTimeout(()=>{
            console.log('color is green');
            setTimeout(()=>{
                console.log('color is blue');
            }, 1000);
        }, 5000);
    }, 1000);
}