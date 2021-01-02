import fs from 'fs';

export const readFile = (path: string) => {
  return fs.readFileSync(path, { encoding: 'utf8' }).trim();
};

export const readLines = (path: string) => {
  const fileContent = fs.readFileSync(path, { encoding: 'utf8' });
  return fileContent
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '');
};

export const readLinesAsNumbers = (path: string) => {
  const lines = readLines(path);
  return lines.map((number) => parseInt(number, 10));
};
