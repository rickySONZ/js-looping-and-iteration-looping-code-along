// Code your solutions in this file
function writeCards(names) {
    const newArray = []
    for (let n = 0; n < names.length; n++ ) {
        newArray.push(`Thank you, ${names[n]}, for the wonderful surprise gift!`)
    }
    return newArray
}

function countDown(a) {
 while (a >= 0){
     console.log(a--);
 }
}