type Trunc<T extends number> = `${T}` extends `${infer R}.${any}` ? R : `${T}`;

type A = Trunc<12.34> // 12