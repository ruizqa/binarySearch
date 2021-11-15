function recBinarySearch(sortedArray, number){
    let half = Math.floor(sortedArray.length/2);
    if(sortedArray[half]>number){
        return recBinarySearch(sortedArray.slice(0, half+1), number);
    }
    else if(sortedArray[half]<=number){
        i=half;
        while(sortedArray[i]<number){
            i+=1;
        }
        if(sortedArray[i]==number){
            return i;
        } 
        else{
            return -1;
        }
    }



}

console.log(recBinarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93))
console.log(recBinarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15))

// Non recursive solution

function nrBinarySearch(sortedArray,number){
    let i=Math.floor(sortedArray.length/2);
    while(sortedArray[i]>number){
        i=Math.floor(i/2);
    }
    for(let j=Math.floor(i/2);j<=i;j++){
        if(sortedArray[j]==number){
            return j
        }
    }
    return -1;

}


console.log(nrBinarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93))
console.log(nrBinarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15))
