type getExample = {
    foo: {
        bar: {
          value: 'foobar',
          count: 6,
        },
        included: true,
      },
      hello: 'world'
}

type Get<T,K> = K extends `${infer A}.${infer B}` 
? A extends keyof T ?  Get<T[A],B> :never
 : K extends keyof T ? T[K] : never;


type Get1 = Get<getExample,"foo">
type Get2 = Get<getExample,"foo.included">