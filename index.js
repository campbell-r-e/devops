

function fibonacci(n){
    if(n==0 || n==1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
main()
function main(){
    console.log("we")
    for(x=0; x<3; x++){
    const w = fibonacci(x);
    console.log(w);}
}
module.exports = { fibonacci };