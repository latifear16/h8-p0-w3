function cariMean(numbers) {
  var total = 0;
  for (i = 0; i < numbers.length; i ++) {
    total = total + numbers[i]
    // console.log(total)
  }
  return Math.round(total / numbers.length);
}

// return cariMean([1, 2, 3, 4, 5])
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7