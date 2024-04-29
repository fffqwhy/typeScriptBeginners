// 给定一个字符串数组，进行排列和组合。它对于视频控件列表等道具类型也很有用
// expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" 
// | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
type Combination<T extends string[],All = T[number],Item=All> = Item extends string
? Item | `${Item} ${Combination<[], Exclude<All, Item>>}`
: never ;
type Keys = Combination<['foo', 'bar', 'baz']>