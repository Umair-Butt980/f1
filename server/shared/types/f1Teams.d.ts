// can use literal type and
export enum TeamName {
    RED_BULL = 'RED_BULL',
    MERCEDES = 'MERCEDES',
    FERRARI = 'FERRARI',
    MCLAREN = 'MCLAREN',
    ALPINE = 'ALPINE',
    ASTON_MARTIN = 'ASTON_MARTIN',
    ALFA_ROMEO = 'ALFA_ROMEO',
    HAAS = 'HAAS',
    ALPHATAURI = 'ALPHATAURI',
    WILLIAMS = 'WILLIAMS'
}

//with a literal type
export type TeamName1 = 'RED BULL' | 'MERCEDES'  | 'FERRARI' | 'MCLAREN'| 'ALPINE'| 'ASTON MARTIN'| 'ALFA ROMEO'| 'HAAS'| 'ALPHATAURI' | 'WILLIAMS'