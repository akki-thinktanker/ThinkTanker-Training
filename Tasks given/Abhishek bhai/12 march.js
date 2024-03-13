const arr = [1, 4, 6, 3, 7];

var missingNumber = function (nums) {
  const sorted = arr.sort();

  let temp = [];
  let temp1 = [];
  for (i = 0; i < sorted[sorted.length - 1]; i++) {
    temp.push(i + 1);
  }

 

  console.log(temp1);
};

missingNumber();
