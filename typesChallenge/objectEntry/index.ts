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