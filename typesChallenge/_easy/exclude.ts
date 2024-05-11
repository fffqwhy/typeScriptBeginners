type MyExclude<T,U> = T extends U ? never:T;
type Result1 = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'