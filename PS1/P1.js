const alphaOrder = (str) => {
    arr = [];
    new_str = "";
    for(i=0;i<str.length;i++)
    {
        arr[i] = str[i];
        // if (arr[i] in ['!','.',',','?',';','1','2','3','4','5','6','7','8','9','0'])
        // {
        //     delete arr[i];
        // }
        if (['!','.',',','?',';','`','1','2','3','4','5','6','7','8','9','0'].includes(arr[i]))
        {
            delete arr[i];
        }
    }
    arr.sort()
    console.log(arr.toString());
}

alphaOrder('supercalifragilisticexpialidocious..');