type Last<T extends any[]> = T extends [] ? never : (T extends [infer L] ? L : (T extends [any, ...infer Rest] ? Last<Rest> : never))
