function addTwo(num: number): number {
  //  return "hello"

  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

addTwo(5);
getUpper("test");

//////////////////////////////

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

signUpUser("akki", "akki@mail.com", false);

loginUser("Akash", "akash@mail.com");

/////////////////////////////

// function getValue(myVal:number)
// {
//     if(myVal > 5)
//     {
//         return true;
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});


function consoleError(errmsg: string) : void
{
    console.log(errmsg)
}

function handleError(errmsg: string) : never{
    throw new Error(errmsg)
}


export {};
