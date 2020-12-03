export function permutate<T extends unknown[]>(list: T, size=list.length): T[] {
  if (size > list.length) return [] as unknown as T[];
  else if (size === 1) return list.map(item=>[item]) as T[];
  return list.flatMap(d => permutate(list.filter(a => a !== d), size - 1).map(item => [d, ...item])) as T[];
}
