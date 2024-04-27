type Reverse<T extends any[]> = T extends [infer K ,...infer P] ? [...Reverse<P>,K]:[];
type FlipArguments<T extends (...args:any[])=>any> = T extends (...args:infer P)=>infer R 
?(...args:Reverse<P>)=>R
:never;
type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
// (arg0: boolean, arg1: number, arg2: string) => void