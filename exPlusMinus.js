
const arr = [ -4, 3, -9, 0, 4, 1  ];

function plusMinus(arr) {
    let pos = 0, neg = 0 , zero = 0 , length = arr.length, i = 0;

    while ( i < length) {
        if ( arr[i]  > 0 ){
            pos++
        } else if (arr[i] < 0) {
            neg++
        } else if (arr[i] === 0) {
            zero++
        }
        i++
    }
    console.log( (pos / length).toFixed(6) )
    console.log( (neg / length).toFixed(6) )
    console.log( (zero / length).toFixed(6) )
}

plusMinus(arr)