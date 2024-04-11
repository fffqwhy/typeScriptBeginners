type Space = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R> : S


const testStr = "  hello world";

const TrimLeftStr:TrimLeft<typeof testStr> = "hello world";