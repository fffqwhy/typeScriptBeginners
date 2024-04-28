type PickByType<T extends Object,t extends any> = {[P in keyof T as T[P] extends t ? P : never]:T[P]}
type OnlyBoolean = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { isReadonly: boolean; isEnable: boolean; }