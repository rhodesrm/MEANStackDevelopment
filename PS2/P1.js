let isEven = (res) => {
    if(res % 2 === 0)
    {
        return true; // can't use return, won't look at lines after
    }
    else
    {
        return false;
    }
}

function* fibs () {
    let [val1, val2, result] = [0, 1, 0];
    while (true) {
        result = val1+val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

function* onlyEvenFibs () {
    let myFibs = fibs();
    while (true) {
        let nextFib = myFibs.next().value;
        // console.log(nextFib);
        if(isEven(nextFib) === true)
        {
            yield nextFib;
        }

    }
}

const x = onlyEvenFibs();
let count = 5;
while(count --> 0)
{
    console.log(x.next().value);
}