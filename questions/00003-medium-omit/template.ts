type MyOmit<TDict extends Record<PropertyKey, any>, TRemove extends keyof TDict> = {
  [K in keyof TDict as K extends TRemove ? never : K]: TDict[K];
}
