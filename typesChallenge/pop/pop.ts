// 实现一个泛型Pop<T>，它接受一个数组T，并返回一个由数组T的前 N-1 项（N 为数组T的长度）以相同的顺序组成的数组。
type Pop<T extends Array<any>> = T extends [...infer R, any] ? R : never; 
type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

// 实现push shift unshift
type push<T extends any[],K> = [...T,K];
type shift<T> = T extends [any,...infer R] ? R : never; 
type unshift<T extends any[],R extends any[]|string|number> = R extends Array<any> ?[ ...R ,...T] : [R,...T];
type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]

type push1 = push<arr1,"e">;
type push2 = push<arr2,0>;

type shift1 = shift<arr1>;
type shift2 = shift<arr2>;
type unshift1 = unshift<arr1,"aaa">;
type unshift2 = unshift<arr2,22>;
type unshift4 = unshift<arr2,[22,33]>;
type unshift3 = unshift<arr1,["zz","ee"]>;

