interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrial: () => string
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

// re opening of interface
interface User {
    githubToken: string
}

// inheritance
interface Admin extends User{
    role: "admin" | "ta" | "learner",
 

}

const hitesh: Admin = {
  dbId: 22,
  role: "admin",
  githubToken: "github",
  email: "akki@mail.com",
  userId: 11,
  startTrial: () => {
    return "Trial started";
  },
  getCoupon: (name: "Akki10", off: 10) => {
    return 10;
  },
};

hitesh.email = "akki@mail.com";
// hitesh.dbId = 33;
