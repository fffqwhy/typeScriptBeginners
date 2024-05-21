type ParseUrlParams<T> = T extends `${string}:${infer R}` 
? R extends `${infer O}/${infer N}` ? O | ParseUrlParams<N>: R 
: never; 
type T1 = ParseUrlParams<':id'> // id
type T2 = ParseUrlParams<'posts/:id'> // id
type T3 = ParseUrlParams<'posts/:id/:user'> // id | user