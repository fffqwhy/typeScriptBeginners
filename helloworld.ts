let greetings :string = "Hello world";
let userId :number = 333.3;
console.log(userId.toExponential());
greetings.toLowerCase();

console.log(greetings);

interface configOriginI{
    name:string;
    age:number;
    address:string;
}
type nameAndAgeType = Pick<configOriginI,"name"|"age">;
type configNotAddress= Omit<configOriginI,"address">;

const a : nameAndAgeType = {
    name: "",
    age: 0
}
const b:configNotAddress = {
    name: "",
    age: 0
}
if(typeof a === typeof b){
    console.log("yse")
}


export {};