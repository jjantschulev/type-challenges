type LowercaseChar = keyof Alphabet
type UppercaseChar = Alphabet[LowercaseChar]
type Char = LowercaseChar | UppercaseChar

type CapitalizeWords<S extends string> = CapitalizeWordsHelper<'', false, S>
type CapitalizeWordsHelper<S1 extends string, PrevWasWord extends boolean, S2 extends string> =
    S2 extends `${infer H}${infer T}` ?
      H extends LowercaseChar ?
          (PrevWasWord extends false ? CapitalizeWordsHelper<`${S1}${Alphabet[H]}`, true, T> : CapitalizeWordsHelper<`${S1}${H}`, true, T>)
        : (H extends Char ? CapitalizeWordsHelper<`${S1}${H}`, true, T> : CapitalizeWordsHelper<`${S1}${H}`, false, T>)
      : S1

