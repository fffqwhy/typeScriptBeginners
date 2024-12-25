// 辅助类型，用于递归地将嵌套数组展平
type Flatten<T> = T extends Array<infer U> ? U extends Array<any> ? Flatten<U> : U : T;

// 示例
type NestedArray = [number, [string, [boolean]], string[]];

type FlattenedArray = Flatten<NestedArray>; // 预期类型为 number | string | boolean

// 测试
const flattenedArray: FlattenedArray[] = [1, 'hello', true, 'world'];