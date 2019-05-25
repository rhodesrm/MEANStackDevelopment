const alphaSplit = (str, func) => {
    return func(str);
}

// split uses positive lookahead zero-len assertion
let res = (alphaSplit('supercalifragilisticexpialidocious',st => st.split(/(?=c)/g)));
console.log("First Part:");
console.log(res);


const replaceLetters = (str, func) => {
    const obj = {
        originalString: str,
        modifiedString: func(str),
        numberReplaced:func(str).split('A').length-1,
        length: func(str).length,
    }
    return obj;
}

let res2 = (replaceLetters('supercalifragilisticexpialidocious', st => st.replace(/a/g,"A")));
console.log('\n');
console.log("Second Part:");
console.log(res2);