const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});
declare function PromiseAll<T extends any[]>(values: readonly [...T]):
    Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>;
// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);

type Test1<T extends any[]> = {
    [K in keyof T]:T[K] extends string ? "haha" : "heihei"
}
type TestR = Test1<["12","33",111]>

const test: TestR = ["haha", "haha", "heihei"];
