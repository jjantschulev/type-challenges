type OptionalKeys<T extends Record<PropertyKey, any>> = keyof ({
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K]
})
