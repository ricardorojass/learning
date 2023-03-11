// Write a function called sumZero which accepts a sorted array of integers.
// The fucntion should find the first pair where the sum is 0.
// return an array thta includes both values that sum to zero of undefined
// if a pair does not exist.

// O(n^2)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const first = arr[i];
      const second = arr[j];
      if (first + second === 0) {
        return [first, second];
      }
    }
  }
}

// 0(n)
function sumZeroRef(arr) {
  let left = 0;
  let right = arr.length -1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}



console.log(
  sumZero([-4,-3,-2,-1,0,1,2,5])
);
console.log(
  sumZeroRef([-4,-3,-2,-1,0,1,2,5])
);