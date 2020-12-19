type FrontOrBack = 'F' | 'B';
type LeftOrRight = 'L' | 'R';

type RowInfo = `${FrontOrBack}${FrontOrBack}${FrontOrBack}${FrontOrBack}${FrontOrBack}${FrontOrBack}${FrontOrBack}`;
type ColumnInfo = `${LeftOrRight}${LeftOrRight}${LeftOrRight}`;

export type BoardingPass = `${RowInfo}${ColumnInfo}`;
