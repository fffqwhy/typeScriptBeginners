type ReturnTypeT<T> = T extends (...arge:any[])=>infer R ? R : T;
type ReturnFunFirstParam<T> = T extends (f:infer R,...ages:any[]) => any ? R : T;
type PromiseType<T> = T extends Promise<infer P> ? P : T;
type ArrayTypes<T> = T extends (infer K) []? K :T;


const exampleA = (a: string) => Number(a + 1);

let exampleAReturnType : ReturnTypeT<typeof exampleA>;
let firstParamA :ReturnFunFirstParam<typeof exampleA>;

const exampleB = function(b:number,b2:string){
    if(b>10){
        return b+"10more"
    }
    return b+1;
}
let exampleBReturnType : ReturnTypeT<typeof exampleB>;
let firstParamB :ReturnFunFirstParam<typeof exampleB>;

const promiseA = new Promise<string>(()=>{});
const promiseB = new Promise<boolean>(()=>{});
let promiseType:PromiseType<typeof promiseA>
let promiseTypeB:PromiseType<typeof promiseB>


const array  = ["12",123,true];
let arrayType:ArrayTypes<typeof array>;