interface AddNumber {
    (a:number, b:number):number;
}

const addNumber: AddNumber = (a,b) =>{
    return a+b;
};
console.log(addNumber(1,2));