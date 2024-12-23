// 辅助类型，用于提取 Promise 的解析类型
type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;

// 定义 PromiseAll 类型
declare function PromiseAll<T extends any[]>(values: readonly [...T]):
    Promise<{ [K in keyof T]: UnwrapPromise<T[K]> }>;

// 示例
const promisea1 = Promise.resolve(3);
const promisea2 = 42;
const promisea3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

// 预期类型为 `Promise<[number, 42, string]>`
const pp = PromiseAll([promise1, promise2, promise3] as const);