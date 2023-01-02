// const b = require('./util')
function sum(a:any, b:any) {
    const d = 1;
    let c = 2;
    if(a > 1){
        c = 3;
    }
    console.log(a,b,c,d);
   return a+b;
}

export default {
    sum,
};