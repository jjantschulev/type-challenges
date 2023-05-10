type MyFunction<P extends any[], G> = (...args: P) => G
type MyReturnType<T> = T extends MyFunction<infer _P, infer R> ? R : never

