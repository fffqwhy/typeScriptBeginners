// 只出现一次的类型
type FindEles<T extends any[], Duplicates = never> = T extends [
    infer F,
    ...infer R
  ]
    ? F extends Duplicates
      ? FindEles<R, Duplicates>
      : F extends R[number]
      ? FindEles<R, Duplicates | F>
      : [F, ...FindEles<R, Duplicates>]
    : [];

type a = [1,2,3,4,1,2,3,1,5];
type b = FindEles<a>;