type Pop<T extends any[]> = T extends [] | [any] ? [] : (T extends [infer A, any] ? [A] : (T extends [infer First, ...infer Rest] ? [First, ...Pop<Rest>] : never))
