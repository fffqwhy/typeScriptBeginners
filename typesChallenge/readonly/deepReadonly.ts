// 辅助类型，用于递归地将对象的所有属性设为只读
type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// 示例
type Example = {
    a: number;
    b: {
        c: string;
        d: {
            e: boolean;
        };
    };
};

type ReadonlyExample = DeepReadonly<Example>;

// 测试
const example: ReadonlyExample = {
    a: 1,
    b: {
        c: 'hello',
        d: {
            e: true,
        },
    },
};

// 下面的赋值操作会报错，因为所有属性都是只读的
// example.a = 2; // Error
// example.b.c = 'world'; // Error
// example.b.d.e = false; // Error