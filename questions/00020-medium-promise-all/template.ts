type ToPromise<T extends any[]> = T extends [infer First, ...infer Rest] ? [Awaited<First>, ...ToPromise<Rest>] : []

const myF = PromiseAll([1, 2, async () => 3] as const)

declare function PromiseAll<Arr extends any[]>(values: Arr): ToPromise<Arr>
