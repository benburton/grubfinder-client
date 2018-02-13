const typeCache: { [label: string]: boolean } = {};

/**
 * Helper function to ensure types are unique for Actions
 */
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}
