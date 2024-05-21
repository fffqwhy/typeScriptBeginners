/**
 * 通过 联合类型推断出交叉类型
 * (a:A)=> 0 | (b:B)=> 0 |(c:C)=> 0  extends (arg:infer Param) => 0 ; 推断出 Param = A & B & C; 
 */
type UnionToIntersection<U>  = (U extends unknown ? (arg : U )=> 0:never) extends (arg:infer Param) => 0 ? Param : never;
/**
 * 函数 交叉类型在 解析 时 会 按照顺序推断到最后一个类型
 */
type LastUnion<U> = UnionToIntersection<U extends unknown ? (x:U)=>0:never> extends (x:infer L)=>0 ? L :never;

type UnionToTuple<T , last  =  LastUnion<T>> = [T] extends [never] ? [] : [...UnionToTuple<Exclude<T,last>>,last] ;
type UnionToTuplea = UnionToTuple<1>           // [1], and correct
type UnionToTupleb = UnionToTuple<'any' | 'a'> // ['any','a'], and correct




type UnionToIntersectionA  = UnionToIntersection<{f:string}|{b:string}>;
type LastUniona =  LastUnion<"1"|"2">;


type TestIntersectionFun<T> = (T extends unknown ? (x:T)=>0 : never) extends (x:infer X) => 0 ? X : never;
type ReTestIntersectionFun<T> =  (x:T)=>0;
type x = ReTestIntersectionFun<"xx"|"zz">;
type FunA = TestIntersectionFun<{1:"xx"}|{2:"zz"}>;