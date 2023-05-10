enum Comparison {
  Greater,
  Equal,
  Lower,
}

type Minus1<N extends number> = N

type ArrLength<Arr extends any[]> = Arr['length']
type BuildArray<Num extends number, Arr extends any[]> = Num extends Length<Arr> ? Arr : BuildArray<Num, [...Arr, any]>
type ToNum<Num extends number> = BuildArray<Num, []>
type CompareArrays<A extends any[], B extends any[]> = A extends [any, ... infer RestA]
  ? (B extends [any, ...infer RestB] ? CompareArrays<RestA, RestB> : Comparison.Greater)
  : (B extends [] ? Comparison.Equal : Comparison.Lower)

type Six = ToNum<6>
type Three = ToNum<3>
type Comp = CompareArrays<Three, Six>
// type Comparator<A extends number, B extends number> = CompareArrays<ToNum<A>, ToNum<B>>
