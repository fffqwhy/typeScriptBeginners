/**
 * @description 将对象中的所有非只读类型解析为联合类型
 */
/**
 * 将只读类型转为非只读类型
 */
type Mutable<T> =  {-readonly [K in keyof T]:T[K]};
/**
 * 将对象中的只读类型过滤掉
 */
type FilterReadonlyField<T> = {
    [key in keyof T as IfEquals<{[Q in key]:T[key]}, {-readonly[ Q in key]:T[key]},never,key>]
    :T[key]
}
type IfEquals<X, Y, A = X, B = never> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? B : A;
  
type FilterReadonlyFieldE= FilterReadonlyField<{readonly a:1,b:2}>
/** 将对象中的key 转为 union */
type MutableKeys<T> = keyof FilterReadonlyField<T>;
// todo 思路 先将所有的非只读类型选出，之后将对象转为union 

// ! test example
type Keys = MutableKeys<{ readonly foo: string; bar: number }>;
// !result expected to be “bar”
