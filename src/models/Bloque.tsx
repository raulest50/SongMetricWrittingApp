
export const ESTRUCTURAS = {
    INTRO: 'INTRO',
    VERSO: 'VERSO',
    CORO: 'CORO',
    SOLISTA: 'SOLISTA',
    INTERLUDIO: 'INTERLUDIO',
    PUENTE: 'PUENTE',
    OUTRO: 'OUTRO',
    PRECORO: 'PRECORO',
    POSTCORO: 'POSTCORO',
    ESTROFA: 'ESTROFA',
    CODA: 'CODA',
    ESTRIBILLO: 'ESTRIBILLO',
    INSTRUMENTAL: 'INSTRUMENTAL',
    BREAK: 'BREAK',
} as const;

export const PERCUSION = {
    DERECHO:'DERECHO',
    MAJAO:'MAJAO',
    MAMBO:'MAMBO'
}


export class Bloque{
    
    public modo_percusion: string;
    public estructura:string;
    public enfasis:Enfasis[];
    
}

class Enfasis{
    tiempo:number;
    frase:number;
    instrumento:string;
}