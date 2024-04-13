type ReturnTypeT<T> = T extends (...arge:any[])=>infer R ? R : T;

const exampleA = function(a:number){
    return a+1;
}

let exampleAReturnType : ReturnTypeT<typeof exampleA>;

const exampleB = function(b:number){
    if(b>10){
        return b+"10more"
    }
    return b+1;
}
let exampleBReturnType : ReturnTypeT<typeof exampleB>;
