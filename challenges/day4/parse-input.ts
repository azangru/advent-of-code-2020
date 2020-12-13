export const splitDocuments = (input: string) => input.split('\n\n');

export type ParsedDocument = {
  byr: string | null; // Birth Year
  iyr: string | null; // Issue Year
  eyr: string | null; // Expiration Year
  hgt: string | null; // Height
  hcl: string | null; // Hair Color
  ecl: string | null; // Eye Color
  pid: string | null; // Passport ID
  cid: string | null; // Country ID
}

export const parseDocument = (document: string): ParsedDocument => {
  return {
    byr: getMatch(document, 'byr'),
    iyr: getMatch(document, 'iyr'),
    eyr: getMatch(document, 'eyr'),
    hgt: getMatch(document, 'hgt'),
    hcl: getMatch(document, 'hcl'),
    ecl: getMatch(document, 'ecl'),
    pid: getMatch(document, 'pid'),
    cid: getMatch(document, 'cid')
  }
};

export const getMatch = (string: string, label: string) => {
  const template = `${label}:(.+?)(\\s|$)`;
  const regex = new RegExp(template);
  const match = regex.exec(string);
  return match ? match[1] : null;
};
