// 定义 EnumUnion 类型
// type EnumUnion<T> = T[keyof T];
export const RPAModelList = "RPAModelList";
export const RPASever = "RPASever";
// 示例枚举
enum ExampleEnum  {
  RPAModelList,
  RPASever,
}

// 使用 EnumUnion 类型
type EnumUnion<T extends string> = T extends keyof typeof ExampleEnum ? ExampleEnum[T] : never;
// type ExampleEnumUnion = EnumUnion<ExampleEnum>; // 预期类型为 'a' | 'b' | 'c'
type ExampleEnumUnion = EnumUnion<keyof typeof ExampleEnum>;

// 测试
const exampleValue: ExampleEnumUnion = ExampleEnum.RPAModelList; // 可以是 'a'
const exampleValue2: ExampleEnumUnion = "RPASever"; // 可以是 'b'
