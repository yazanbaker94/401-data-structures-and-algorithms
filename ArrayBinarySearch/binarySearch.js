function binarySearch(array, targetValue) {
    let min = 0;
    let max = array.length - 1;
    let number;
  
    while (min <= max) {
      number = Math.floor((max + min) / 2);
  
      if (array[number] === targetValue) {
        return number;
      } else if (array[number] < targetValue) {
        min = number + 1;
      } else {
        max = number - 1;
      }
    }
  
    return -1;
  }
  let arr = [1, 3, 5, 7, 8, 9];
  console.log(binarySearch(arr, 7));
  