type BaseComputed<D> = Record<string, (this: D) => any>
type VueOptions<D, C extends BaseComputed<D>, M extends Record<string, () => any>> = {
  data: (this: never) => D
  computed: C
  methods: M & ThisType<M & D & { [K in keyof C]: ReturnType<C[K]> }>
}

declare function SimpleVue<D, C extends BaseComputed<D>, M extends Record<string, () => any>>(options: VueOptions<D, C, M>): any
declare function alert(...params: any[]): void
