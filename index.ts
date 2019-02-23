// tslint:disable no-console

/* ==================================== [ Basic ] ================================= */

// String
const title: string = "Welcome Webchemist";
// Number
const count: number = 10;
// Boolean
const flag: boolean = true;
// Array ( IUser는 @types/index.d.ts에 존재합니다. )
const users: IUser[] = [{ name: "Lee", age: 20 }, { name: "Park", age: 32 }];

console.log(title);
console.log(count);
console.log(flag);
console.log(users);

/* ==================================== [ class ] ================================= */
class WelcomeMessage {
  public name: string;
  private age: number; // constructor로만 데이터 입력이 가능합니다.

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public say(): void {
    console.log(`My name is ${this.name}, ${this.age} old`);
  }

  get names(): string {
    return this.name;
  }

  set names(name: string) {
    this.name = name;
  }
}

const welcome = new WelcomeMessage("Lee", 26);
console.log(welcome.name);
welcome.say();
console.log(welcome.names);
welcome.names = "Yoon";
console.log(welcome.names);

/* =================================== [ Generic ] ================================ */

/*
  [ Generic ]
  Generic 다음과 같이 message의 내용으로 string 또는 number등의 type이 변경되어 들어갈 수 있는 경우
  Generic을 사용하여 설정합니다.  any와 다르게 Generic을 사용하면 리던된 값에 해당하는 helper가 작동합니다.
*/
function helloMessage<T>(message: T): T {
  return message;
}

// 결과값에 .을 찍으로 string에 맞는 property가 작동합니다.
console.log(helloMessage("string message").length);
// 결과값에 .을 찍으로 number에 맞는 property가 작동합니다.
console.log(helloMessage(123).toFixed(2));
// type을 설정하면 해당 type으로 확인 아니면 T로 추론 합니다.
console.log(helloMessage<string>("use type").length);

// React Input change에 주로 사용하는 방법으로 name, value의 type을 추론하는 방법입니다.
// ( IState는 @types/index.d.ts에 존재합니다. )
function onChange<T extends keyof IState, K>(name: T, value: K): void {
  console.log({ [name]: value });
}

onChange("email", "yoonwonyoul@webchemist.net");
