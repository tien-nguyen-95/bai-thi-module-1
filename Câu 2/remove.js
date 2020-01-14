function checkIndex(num,length)
{
  if(parseInt(num) > num || parseInt(num) < num || isNaN(parseInt(num)) || num < 0 || num >= length)
  {
    return false;
  }
  return true;
}

function tryRemoveFromArray(array, index) {
    let length = array.length;
    let check = checkIndex(index,length);
    if(check){
        for( let i = index ; i < length ; i++) {
            array[i] = array[i+1];
        }
        array.pop();
    }
    return array;
}

function main() {
    let array1 =[1,2,3,4,5];
    let array2 =[6,7,8,9,10];
    let result1 = tryRemoveFromArray(array1,2);
    let result2 = tryRemoveFromArray(array2,-2);
    console.log(result1);
    console.log(result2);
}

main();