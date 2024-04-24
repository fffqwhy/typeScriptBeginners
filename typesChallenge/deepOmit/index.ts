// 实现类型 DeepOmit ，与实用程序类型 Omit 一样，类型采用两个参数。
type obj = {
    person: {
      name: string;
      age: {
        value: number
      }
    }
};
  type DeepOmit<T extends any,K extends string> = K extends `${infer k}.${infer o}` 
  ? {[KK in keyof T]:KK extends k ? DeepOmit<T[KK],o>:T[KK]}
  :{[KK in keyof T as KK extends K ? never:KK ]:T[KK]}
  type test1 = DeepOmit<obj, 'person'>    // {}
  type test2 = DeepOmit<obj, 'person.name'> // { person: { age: { value: number } } }
  type test3 = DeepOmit<obj, 'name'> // { person: { name: string; age: { value: number } } }
  type test4 = DeepOmit<obj, 'person.age.value'> // { person: { name: string; age: {} } }