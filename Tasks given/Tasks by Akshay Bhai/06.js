// 1. Linear Search Algorithm (Naive approach):
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

// function check(element) {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] == element) {
//       return `${element} is present at ${i} index`
//     }
//   }
// }

// const ans = check(6)
// console.log(ans)

///////////////////////////////////////

// const n = 112
// // using index of method
// if (num.indexOf(n) > 0) {
//   console.log("item present in list");
// } else {
//   console.log(`item not present in list`);
// }

///////////////////////////////////////

// binary search
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];


function bsearch(arr, l, r, x) {
  if (r >= 1) {
    let mid = l + Math.floor((r - 1) / 2);

    if (arr[mid] == x) return mid;

    if (arr[mid] > x) return bsearch(arr, l, mid - 1, x);

    return bsearch(arr, mid + 1, r, x);
  }
  return -1;
}


const ans = bsearch(num, 0,  num.length, 5)
console.log(ans)