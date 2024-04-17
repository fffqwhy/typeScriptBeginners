type Space = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R> : S
type Trim<S extends string> = S extends `${Space}${infer R}`|`${infer R}${Space}` ? Trim<R> : S;

const testStr = "  hello world";
const testStr2 = " hello 2   ";
type TrimLeftStr =TrimLeft<typeof testStr>;
type TrimLeftStr2 = TrimLeft<typeof testStr2>;
type TrimStr2 = Trim<typeof testStr2>;
type TrimStr = Trim<typeof testStr>;