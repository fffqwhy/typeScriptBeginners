type MyExlude<T, K> = T extends K ? never : T;
type MyReadonly2<T, K extends keyof T = keyof T> = { readonly [k in K]: T[k]} & { [k in MyExlude<keyof T, K>]: T[k] }
interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  const todo: MyReadonly2<Todo> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  }
  
  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  todo.completed = true // OK