function removeEveryOther(arr){
 let arr1 = [];
 for (let i = 0; i < arr.length; i++) {
 if (i % 2 == 0){
 arr1.push(arr[i]);
 }
 }
return arr1;
}
