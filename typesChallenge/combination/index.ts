// 给定一个字符串数组，进行排列和组合。它对于视频控件列表等道具类型也很有用
// expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" 
// | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
type Combination<T extends string[],All = T[number],Item=All> = Item extends string
? Item | `${Item} ${Combination<[], Exclude<All, Item>>}`
: never ;
type Keys = Combination<['foo', 'bar', 'baz']>
type a = Exclude<"1","2">
type combina<T extends string[],ALL = T[number],item=ALL> = item extends string ? item| `${item} ${combina<[],Exclude<ALL,item>>}` :item ;
type x =  combina<['1','3','4']>;
type tt = combina<[],"1"|"2">
type ttt<ALL = '1'|'2'|'3',item=ALL> = item | `${item}${ALL}`;
type t1 = ttt<"1","1"|"2"|"3">; 6