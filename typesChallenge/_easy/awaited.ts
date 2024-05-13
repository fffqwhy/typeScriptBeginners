type ExampleType = Promise<string>
type MyAwaited<T extends Promise<any>> = T extends Promise<infer R> 
    ? R extends Promise<any> 
        ? MyAwaited<R> 
        : R 
    :never;
type ResultPromist = MyAwaited<ExampleType> // string
type ResultPromise1 = MyAwaited<Promise<Promise<number>>> // string