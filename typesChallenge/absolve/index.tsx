// 实现一个接收string,number或bigInt类型参数的Absolute类型,返回一个正数字符串。
type Test = -100;
type Absolute<T extends string | number | bigint> = `${T}` extends `-${infer R}` ? R : T;
type Result = Absolute<Test>; // expected to be "100"
