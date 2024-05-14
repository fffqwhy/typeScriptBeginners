// 只出现一次的类型
type FindEles<T extends any[], Duplicates = never> = T extends [
    infer F,
    ...infer R
  ]
    ? F extends Duplicates
      ? FindEles<R, Duplicates>
      : (F extends R[number] ? FindEles<R, Duplicates | F> : [F, ...FindEles<R, Duplicates>])
    : [];

type a = [1,2,3,4,1,2,3,1,5];
// Find the elements in the target array that appear only once. For example：input: [1,2,2,3,3,4,5,6,6,6]，ouput: [1,4,5].
type b = FindEles<a>;