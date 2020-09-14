function findMinAndReturn(arr) {
  let min = arr[0];
  let index = 0;
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
      index = i
    }
  }
  return arr.slice(index, 1);
}

function selectionSort(arr){
  let sorted = [];
  while (arr.length){
    sorted.push(findMinAndReturn(arr));
  }
  return sorted;
}
