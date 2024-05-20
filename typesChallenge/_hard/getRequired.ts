/**
 * 获得必须的属性
 */

type GetRequired <T extends Object>= {[K in keyof T as T[K] extends Required<T>[K]?K:never]:T[K]};
type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }