function isInt(num)
{
  if(parseInt(num)> num||parseInt(num)< num || isNaN(parseInt(num)))
  {
    return false;
  }
  return true;
}

function isPrime(number){ 
    if(number>=2) {
        let tmp = Math.floor(Math.sqrt(number)+1);
        for(let i=2 ; i < tmp ; i++){
            if(number%i==0){
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

function main() {
    let num = prompt("Enter a Number: ");
    let check = isInt(num);
    while(!check){
        alert("Invalid Number");
        num = prompt("Enter a Number: ");
        check = isInt(num);
    }
    let result = isPrime(num);
    alert(result);
}

main();