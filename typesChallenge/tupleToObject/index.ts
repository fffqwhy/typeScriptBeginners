const tuple = ['tesla', 'model 3', 'model X', 'model Y',2] as const
type TupleToObject<T extends readonly (string|number)[]> = {
    [P in T[number]]:P
} 

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}