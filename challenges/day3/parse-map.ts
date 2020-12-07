export const parseMap = (map: string[]) => {
  return map.map(line => line.split('').map(square => square === '#' ? 1 : 0));
};
