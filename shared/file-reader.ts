import fs from 'fs';

export const readLines = (path: string) => {
  const fileContent = fs.readFileSync(path, { encoding: 'utf8' });
  return fileContent.split('\n').filter(line => line !== '');
};

export const readLinesAsNumbers = (path: string) => {
  const lines = readLines(path);
  console.log('lines', lines.map((number) => parseInt(number, 10)));
  return lines.map((number) => parseInt(number, 10));
};
