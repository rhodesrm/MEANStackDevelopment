// ‘4+2’
// ‘5*7’
// ‘6-1’
// ‘9/2’

let operator = (expr) => {
    var arr = expr.split("");
    if(arr[1] == '+')
    {
        // operator = addition
        return Number(arr[0]) + Number(arr[2]);
    }
    if(arr[1] == '-')
    {
        // operation = subtraction
        return Number(arr[0]) - Number(arr[2]);
    }
    if(arr[1] == '*')
    {
        // operator = multiplication
        return Number(arr[0]) * Number(arr[2]);
    }
    if(arr[1] == '/')
    {
        // operator = division
        return Number(arr[0]) / Number(arr[2]);
    }
}

console.log(operator('4+2'));
console.log(operator('5*7'));
console.log(operator('6-1'));
console.log(operator('9/2'));
