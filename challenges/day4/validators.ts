import { parseDocument, ParsedDocument } from './parse-input';

export const isValid1 = (document: string) => {
  const parsedDocument = parseDocument(document);
  return containsRequiredFields(parsedDocument);
};

export const isValid2 = (document: string) => {
  const parsedDocument = parseDocument(document);
  return containsRequiredFields(parsedDocument)
    && hasValidBirthYear(parsedDocument)
    && hasValidIssueYear(parsedDocument)
    && hasValidExpirationYear(parsedDocument)
    && hasValidHeight(parsedDocument)
    && hasValidHairColor(parsedDocument)
    && hasValidEyeColor(parsedDocument)
    && hasValidPassportId(parsedDocument);
}

const containsRequiredFields = (parsedDocument: ParsedDocument) => {
  const requiredFields = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'
  ];

  return requiredFields.every(field => {
    return Boolean(parsedDocument[field as keyof typeof parsedDocument]);
  });
};

const hasValidBirthYear = (parsedDocument: ParsedDocument) => {
  const birthYear = parseInt(parsedDocument.byr as string);
  return 1920 <= birthYear && 2002 >= birthYear;
};

const hasValidIssueYear = (parsedDocument: ParsedDocument) => {
  const issueYear = parseInt(parsedDocument.iyr as string);
  return 2010 <= issueYear && 2020 >= issueYear;
};

const hasValidExpirationYear = (parsedDocument: ParsedDocument) => {
  const expirationYear = parseInt(parsedDocument.eyr as string);
  return 2020 <= expirationYear && 2030 >= expirationYear;
};

const hasValidHeight = (parsedDocument: ParsedDocument) => {
  const heightRegex = /^(\d+)(cm|in)$/; // number followed by either cm or in
  const heightString = parsedDocument.hgt as string;

  const match = heightRegex.exec(heightString);

  if (!match) {
    return false;
  }

  const height = parseInt(match[1]);
  const units = match[2];

  if (units === 'cm') {
    return 150 <= height && 193 >= height;
  } else if (units === 'in') {
    return 59 <= height && 76 >= height;
  }

  return false;
};

const hasValidHairColor = (parsedDocument: ParsedDocument) => {
  const hairColor = parsedDocument.hcl as string;
  const regex = /^#[0-9a-f]{6}$/; // # followed by six hexadecimals

  return regex.test(hairColor);
};

const hasValidEyeColor = (parsedDocument: ParsedDocument) => {
  const eyeColor = parsedDocument.ecl as string;
  const allowedValues = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

  return allowedValues.includes(eyeColor);
};

const hasValidPassportId = (parsedDocument: ParsedDocument) => {
  const passportId = parsedDocument.pid as string;
  const regex = /^[0-9]{9}$/;
  return regex.test(passportId);
};
