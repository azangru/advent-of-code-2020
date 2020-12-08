import { parseDocument } from './parse-input';

export const isValid1 = (document: string) => {
  const requiredFields = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid',
    // 'cid'
  ]
  const parsedDocument = parseDocument(document);
  return requiredFields.every(field => {
    return Boolean(parsedDocument[field as keyof typeof parsedDocument]);
  });
}
