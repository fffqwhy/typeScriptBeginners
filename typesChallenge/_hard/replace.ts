type Replace<T extends string, K extends string, R extends string> = K extends ""
  ? T
  : T extends `${infer L}${K}${infer RR}`
  ? `${L}${R}${RR}`
  : T;
type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
