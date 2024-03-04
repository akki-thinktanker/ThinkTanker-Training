let score: number | string;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let akki: User | Admin = { name: "akki", id: 334 };

akki = { username: "akash", id: 334 };

// function getDbId(id: number | string){
//     // making some API calls
//     console.log(`DB id is: ${id}`)
// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") id.toUpperCase();
}

// ////////////////////////////////

// array

const dataNum: number[] = [1, 2, 3];
const dataStr: string[] = ["1", "2", "3"];
const dataNumNStr: (string | number | boolean)[] = [1, 2, 3, "four", true];

let pi: 3.14 = 3.14;


// //////////////////////

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"

// seatAllotment = "crew" // can't assign any other value except "aisle" | "middle" | "window"