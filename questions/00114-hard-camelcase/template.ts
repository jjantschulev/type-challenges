type CamelCase<S extends string> = CamelCaseHelper<'', S, ''>
type CamelCaseHelper<S1 extends string, S2 extends string, Prev extends string> =
S2 extends `${infer H}${infer T}`
  ? Prev extends '_'
    ? (H extends LowercaseChar
        ? CamelCaseHelper<S1, T, Alphabet[H]>
        : CamelCaseHelper<S1, T, H>)
    : (
        H extends UppercaseChar
          ? CamelCaseHelper<`${S1}${Prev}`, T, RevAlphabet[H]>
          : CamelCaseHelper<`${S1}${Prev}`, T, H>)
  : `${S1}${Prev}`

