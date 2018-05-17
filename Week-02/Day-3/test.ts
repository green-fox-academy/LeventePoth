function division (a: number, b:number) {
    if (b === 0) {
        throw new Error('cant divide');
    } 
return a / b;    
}

try {
    console.log(division(3,4));
} catch(error) {
    console.log(error.name);
} finally {
    console.log('this is finally a block')
}    
