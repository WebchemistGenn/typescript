# Lean Typescript

> 기본타입 ( string, number, boolean, array, tuple, enum, any, void, null, undefined, naver )

### String

```typescript
let color: string = "blue";
color = "red";
```

### Number

```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

### Boolean

```typescript
let isDone: boolean = false;
```

### Array

```typescript
let list: number[] = [1, 2, 3];
// let list: Array<number> = [1, 2, 3]; 다음의 방식도 맞지만 위의 형태로 쓰는 것을 권고합니다.
```

### Object

```typescript
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

### Tuple

```typescript
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
```

### Enum - 열거형 타입

```typescript
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;

// 기본적으로 열거 형은 0부터 시작하여 멤버 번호를 시작합니다.  다음과 같이 처음값을 1로 지정하면 1로 시작하게 됩니다.
enum Color {
  Red = 1,
  Green,
  Blue
}
let c: Color = Color.Green;
```

### Void - 반환값을 반환하지 않는 함수에 사용합니다.

```typescript
function warnUser(): void {
  console.log("This is my warning message");
}
```
