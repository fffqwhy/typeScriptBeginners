type First<T extends any[]> = T extends [infer R ,...infer X] ? R :never;
type First2<T extends any[]> = T extends [] ? never:T[0] ;
type First3<T extends any[]> = T["length"] extends 0 ? never:T[0] ;
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
type head22 = First2<arr2> // expected to be 3
type head23 = First3<arr2> // expected to be 3