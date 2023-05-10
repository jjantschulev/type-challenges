type MyPick<TDict extends Record<PropertyKey, any>, TPick extends keyof TDict> = {
  [K in TPick]: TDict[K];
}
