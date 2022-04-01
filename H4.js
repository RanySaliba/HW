
//Ex1
function sum(num1, num2){
    output = num1 + num2;
    console.log(output);
}
sum(2, 5);

//Ex2
function hourglass(number){
    while(number % 2 != 0){
        for(let i = 2; i < number; i++){
            for(let j = 2; j < i; j++)
                process.stdout.write(' ');          
            for(let k = 0; k < (number - i) * 2 - 1; k++)
                process.stdout.write('*');           
            console.log();
        }
    }   
}
hourglass(5);

//Ex3
function addElement(numbers, element){
    var numbers = [24, 34, 44];
    numbers.push(element);
}
console.log(addElement(numbers, 76));

//Ex4
function isPrime(num){
    for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
    return num > 1;
}
console.log(isPrime(4));

//Ex5
function returnDataType(value){
    var dataTypes = [Number, String, Object, Boolean, Function], x, len;
    if(typeof value === "object" || typeof value === "function"){
        for(x=0, len = dataTypes.length; x < len; x++){
            if(value instanceof dataTypes[x]){
                return dataTypes[x];
            }
        }
    }
    return typeof value;
}
console.log(returnDataType(56));
console.log(returnDataType('online'));
console.log(returnDataType(true));