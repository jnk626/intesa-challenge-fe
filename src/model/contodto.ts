export default class ContoDTO {
    id: number;
    nome: string;
    bilancio: number;
    valuta: string;
    IBAN: string;

    constructor(
        id: number,
    nome: string,
    bilancio: number,
    valuta: string,
    IBAN: string,
    ) {
        this.id = id
        this.nome = nome
        this.bilancio = bilancio
        this.valuta = valuta
        this.IBAN = IBAN
    }
}