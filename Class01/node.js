
function myfunc(params) {
    setTimeout(() => {
        console.log('settimeout 2sec')
    }, 2000);
    console.log('Simple ConsoleLog')
    
    setTimeout(() => {
        // for (let index = 0; index < array.length; index++) {
        //     const element = array[index];
            
        // }
        console.log('settimeout 3sec')
    }, 3000);
}
myfunc()
