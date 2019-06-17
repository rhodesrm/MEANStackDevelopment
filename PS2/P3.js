// Write a function that prints the cube value of its input (ie f(x)=x^3). Next, write a single line of
// code to call the function on each value of the array [1,2,3,4,5,6,7].

let cubic = (num) => {
    return Math.pow(num, 3);
}

arr = [1,2,3,4,5,6,7];
for(const val in arr) {console.log(cubic(arr[val]))};