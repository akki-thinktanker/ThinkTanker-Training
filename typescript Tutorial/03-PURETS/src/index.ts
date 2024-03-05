// class User {
//   public email: string;

//   //   js syntax
//   //   #name: string;
//   private name: string;
//   readonly city: string = "Ahmedabad";

//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {
  protected _courseCount = 1;
  readonly city: string = "Ahmedabad";
  constructor(
    public email: string,
    public name: string // private userId: string
  ) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum: number) {
    this._courseCount;

    if (courseNum <= 1) throw new Error("Course count should be more than 1");

    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const akki = new User("akki@mail.com", "akki");
// akki.city = "delhi";
// akki.name

// akki.deleteToken()  // private property
