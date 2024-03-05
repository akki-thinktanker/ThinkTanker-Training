// const user: (string | number)[] = [1, 'akki']
let tUser: [string, number, boolean];

tUser = ["akki", 1, true];

let rgb: [number, number, number] = [255, 123, 112];


type User = [number, string]

const newUser : User = [11, "akki@mail.com"]

newUser[1] = "akash@mail.com"
newUser.push(true) // in video it didn't show error, but here it is showing

export {};
