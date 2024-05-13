interface Todo {
    title: string
    description: string
    completed: boolean
  }
  /**
   * picy T 中取K 指定的字段
   */
  type MyPick<T,K> = {
    [key in keyof T as key extends K ? key : never]:T[key]
  };
  type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }