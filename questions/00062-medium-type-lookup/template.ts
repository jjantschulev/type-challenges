type LookUp<U extends Record<PropertyKey & 'type', any>, TType extends U['type']> = U extends { type: TType } ? U : never
