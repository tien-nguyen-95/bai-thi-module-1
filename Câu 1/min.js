function findMinScore(array) {
    let min = array[0];
    for(let i =0 ; i < array.length ; i ++){
        if(min > array[i]) {
            min = array[i];
        }
    }
    return min;
}

function main() {
    let score1 = [10,5,2,8,-1,6,8];
    let score2 = [2,4,0,5,1];
    let min1 = findMinScore(score1);
    let min2 = findMinScore(score2);
    console.log('min1: ' + min1);
    console.log('min2: ' + min2);
}

main();