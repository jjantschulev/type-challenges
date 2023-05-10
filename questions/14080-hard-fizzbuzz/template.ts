type FizzBuzz<N extends number> = FizzBuzzType<N, [any]> extends [any, ... infer Rest] ? Rest : never
type FizzNum<N extends number> = FizzNumArr<N, []>
type FizzNumArr<N extends number, Arr extends any[]> = Arr['length'] extends N ? Arr : FizzNumArr<N, [...Arr, any]>
type Divisible<Arr extends any[], ModN extends any[]> = Arr extends [] ? true : Arr extends [...ModN, ... infer Rest] ? Divisible<Rest, ModN> : false
type FizzBuzzType<N extends number, Arr extends string[]> =
    Arr['length'] extends N ? (Divisible<Arr, FizzNum<5>> extends true
      ? (Divisible<Arr, FizzNum<3>> extends true
          ? [...Arr, 'FizzBuzz']
          : [...Arr, 'Buzz']
        )
      : (Divisible<Arr, FizzNum<3>> extends true
          ? [...Arr, 'Fizz']
          : [...Arr, `${Arr['length']}`]
        )
    ) :
        (Divisible<Arr, FizzNum<5>> extends true
          ? (Divisible<Arr, FizzNum<3>> extends true
              ? FizzBuzzType<N, [...Arr, 'FizzBuzz']>
              : FizzBuzzType<N, [...Arr, 'Buzz']>
            )
          : (Divisible<Arr, FizzNum<3>> extends true
              ? FizzBuzzType<N, [...Arr, 'Fizz']>
              : FizzBuzzType<N, [...Arr, `${Arr['length']}`]>
            )
        )

type FizzBuzzTestType = FizzBuzz<15>

const firstFiveFuzzBuzzOutputs: FizzBuzz<8> = ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8']

