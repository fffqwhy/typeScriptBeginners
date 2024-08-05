type OmitT<T,O extends keyof T> = {[P in ExcludeOmitT<keyof T,O>]:T[P]};
type ExcludeOmitT<T,K> = T extends K ?never:T;
const aa = {name:"string",age:"age",firstName:"wang"};
type aaT = OmitT<typeof aa,"name"|"age">