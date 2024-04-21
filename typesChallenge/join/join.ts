type Join<T extends any[],K extends string|number> = T extends [infer A ,...infer B] 
? 
B["length"] extends 0 ? A : `${A & string}${K}${Join<B,K>}`
:never;

type Res3 = Join<["o"], "u">; // expected to be 'o'
type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'