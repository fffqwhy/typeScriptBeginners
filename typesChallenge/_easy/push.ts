type Push<T extends any[],I> = [...T, I];
type ResultPush = Push<[1, 2], '3'> // [1, 2, '3']

type Unshift<T extends any[],I> = [I,...T];
type ResultUnshift = Unshift<[1, 2], 0> // [0, 1, 2]

type MyParameters<T extends Function> = T extends (...any :infer R)=>any ? R:never;
const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]