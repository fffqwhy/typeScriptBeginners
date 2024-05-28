type Maximum<T extends Array<number>,I = never> = T["length"] extends 0 ? I : T extends [infer Item,...infer O] ? Maximum<O,I>;
type Maximum1  = Maximum<[]> // never
type Maximum2  =  Maximum<[0, 2, 1]> // 2
type Maximum3  =  Maximum<[1, 20, 200, 150]> // 200