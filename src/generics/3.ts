function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

export const merged = merge({ name: "Olga" }, { age: 31 });
