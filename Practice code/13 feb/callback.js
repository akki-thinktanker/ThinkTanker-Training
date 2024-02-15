function walkdog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walkdog = true;
      if (walkdog) {
        resolve("Walking the dog");
      } else {
        reject("You didn't walked the dog");
      }
    }, 2000);
  });
}
function dodishes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walkdog = true;
      if (walkdog) {
        resolve("Doing the dishes");
      } else {
        reject("You didn't do the dishes");
      }
    }, 1500);
  });
}
function cleankitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleankitchen = false;
      if (cleankitchen) {
        resolve("Cleaning the kitchen");
      } else {
        reject("You didn't clean the kitchen");
      }
    }, 1000);
  });
}

// walkdog(() => {
//   cleankitchen(() => dodishes(() => console.log("All tasks are completed")));
// });

walkdog()
  .then((value) => {
    console.log(value);
    return cleankitchen();
  })
  .then((value) => {
    console.log(value);
    return dodishes();
  })
  .then((value) => {
    console.log(value);
    console.log("All tasks done");
  })
  .catch((err) => console.log(err));
