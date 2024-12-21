type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends keyof AllType>(
  top: Pick<AllType, T>,
  bottom: Pick<AllType, Exclude<keyof AllType, T>>
): AllType {
  return {
    name: (top as AllType).name || (bottom as AllType).name,
    color: (top as AllType).color || (bottom as AllType).color,
    position: (top as AllType).position ?? (bottom as AllType).position,
    weight: (top as AllType).weight ?? (bottom as AllType).weight,
  };
}
