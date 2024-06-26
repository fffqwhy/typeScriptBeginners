type Mutable<T> = {-readonly [K in keyof T ]:T[K]};
interface Todo {
    readonly title: string
    readonly description: string
    readonly completed: boolean
  }
  
  type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }
  