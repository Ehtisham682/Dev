function main(){
    const a= 10;
    const b = 20;
    function second(){
        console.log(a+b);
    }
    return second
    
}
main()

const add = main()
console.log(add)
