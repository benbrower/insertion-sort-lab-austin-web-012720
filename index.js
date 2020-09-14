function findMinAndReturn(arr) {
  let min = arr[0];
  let index = 0;
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
      index = i
    }
  }
  console.log(arr, min, index);
  return arr.slice(index, 1);
}

function selectionSort(arr){
  let sorted = [];
  while (arr.length){
    console.log('arr before return', arr);
    console.log('sorted before return', sorted);
    sorted.push(findMinAndReturn(arr));
    console.log('arr after return', arr);
    console.log('sorted after return', sorted);

  }
  return sorted;
}
