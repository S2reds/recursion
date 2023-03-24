function merge(arr1, arr2) {
    let i = 0, j = 0, k = 0;
  let newarr = []
  let length1 = arr1.length, length2 = arr2.length
  while (newarr.length < length1 + length2) {
    if (arr1[i] < arr2[j]) {
        newarr[k++] = arr1[i++]
    } else if (arr1[i] > arr2[j]){
        newarr[k++] = arr2[j++]
    } else if (!arr1[i]) newarr[k++] = arr2[j++]
      else if (!arr2[j]) newarr[k++] = arr1[i++]
  } 
  return newarr
}

function mergeSort(arr) {
    if (arr.length < 2) return arr
    const splitter = arr.splice(arr.length/2)
    return merge(mergeSort(arr), mergeSort(splitter))
}

console.log(mergeSort([1,3,2,5,8,9,7,6]))