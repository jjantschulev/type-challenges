type MyAwaited<T extends { then: (onfulfilled: (arg: any) => any) => any }> = MyAwaitedHelper<T>
type MyAwaitedHelper <T> = T extends Promise<infer R> ? MyAwaitedHelper<R> : T extends { then: (onfulfilled: (arg: infer R) => any) => any } ? R : T
