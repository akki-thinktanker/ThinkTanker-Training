const pr = new Promise((resolve, reject) => {
  const ans = true;

  if (ans) {
    resolve("This line is printed if true");
  } else {
    reject("This line is printed if false");
  }
});

pr.then((ans) => {
  console.log(ans);
}).catch((ans) => {
  console.log(ans);
});
