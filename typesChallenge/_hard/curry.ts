const add = (a: number, b: number): number => a + b;
const three = add(1, 2);

type CurriedFunction<T extends any[], R> = T extends [infer A, ...infer Rest]
  ? (arg: A) => CurriedFunction<Rest, R>
  : R;

function Currying2<T extends any[], R>(
  fn: (...args: T) => R
): CurriedFunction<T, R> {
  return function Currying2(...args: any[]): any {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...next: any[]) => Currying2(...args, ...next);
    }
  };
}

const curriedAdd = Currying2(add);

const five = curriedAdd(2)(3);
