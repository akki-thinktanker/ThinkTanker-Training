const score: Array<number> = [];

const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree(true)

// same as identityThree
function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

// identityFour<Bottle>({})

function getSearchProducts<T>(products: T[]): T {
  // do some db operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some db operations
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(21, { connection: "test", username: "test", password: "test" });

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T)
    {
        this.cart.push(product)
    }
}