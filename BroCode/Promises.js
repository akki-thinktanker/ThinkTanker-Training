function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = false;

      if (dogWalked) {
        resolve("You walked the dog 🐕");
      } else {
        reject("You didn't walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;

      if (kitchenCleaned) {
        resolve("You cleaned the kitchen 🔪");
      } else {
        reject("You didn't clean the kitchen");
      }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = false;

      if (trashTakenOut) {
        resolve("You took out the trash 🚮");
      } else {
        reject("You didn't tookout the trash")
      }
    });
  }, 500);
}

// callbacks
// walkDog(() => {
//   cleanKitchen(() => {
//     takeOutTrash(() => console.log("You finished all the chores"));
//   });
// });

// Method chaining

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("You finished all the chores");
  }).catch(error => console.error(error))
