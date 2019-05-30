// Write a generator that is initialized with a sentence and that emits each word of the sentence in turn.
// Use the generator to print the words, one per line, of the string “All I know is something like a bird within her sang”.

// function that works without applying generators
let split_str = (st) => {
    let byLetterStr = st.split(" ");
    for (const val of byLetterStr) {
        console.log(val);
    }
}

// function that works by applying generators
function* genWords (st) {
    let byLetterStr = st.split(" ");
    for (const val of byLetterStr) {
        yield val;
    }
}



let str = 'All I know is something like a bird within her sang';
// split_str(str);
const x = genWords(str);
for(i=0;i<11;i++)
{
    console.log(x.next().value);
}

