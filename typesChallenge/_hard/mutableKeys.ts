/**
 * 将对象中的所有非只读类型解析为联合类型
 */

type MutableKeys<T> = ;
// todo 思路 先将所有的非只读类型选出，之后将对象转为union 
type Keys = MutableKeys<{ readonly foo: string; bar: number }>;
// expected to be “bar”