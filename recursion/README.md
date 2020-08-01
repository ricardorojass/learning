# Recursion

### Factorial
* Write a function called factorial that receives a number and returns the       factorial of the number. The factorial is the multiplication of every positive number up to the number. For example, the factorial of 5 is 120 because 5 * 4 * 3 * 2 * 1 = 120.

```
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(6)); // 720
console.log(factorial(9)); // 362880
```

[File](factorial.js)

### Fibonnaci

[File](fibonacci.js)

### Harmonic Sum
* Write a function called harmonicSum that calculates
the harmonic sum of n. The harmonic sum is the sum
of reciprocals of the positive integers.

```
harmonicSum(1); // 1
harmonicSum(2); // 1 + 1/2 = 1.5
harmonicSum(3); // 1 + 1/2 + 1/3 = 1.833333
```

[File](harmonicSum.js)

# Flatten array
* Write a function called `flatten` that receives an array of arrays and returns a flattened array.

```
console.log(flatten([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); // [1, 1.1, 2, 3, 4, 5]
```