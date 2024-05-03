// 使用in 进行枚举 
// 将一个数组处理为联合类型：[1,2][number] = 1|2 ，对象则使用[keyof T]
 
type ObjectEntries<T> =  {[K in keyof T ] -? :[K,T[K]] }[keyof T];
type ObjectEntries2<T> = {
    [P in keyof Required<T>]: [P, Required<T>[P] extends never ? undefined : Required<T>[P]]
  }[keyof T]
interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }

  type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
  type modelEntries2 = ObjectEntries2<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];