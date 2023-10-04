export class MovimentoDTO {
    id: number;
    ammontare: number;
    data: string;
    tipologia: "ENTRATA" | "USCITA";
    descrizione: string;

    constructor(
        id: number,
        ammontare: number,
        data: string,
        tipologia: "ENTRATA" | "USCITA",
        descrizione: string
    ) {
        this.id = id
        this.ammontare = ammontare
        this.data = data
        this.tipologia = tipologia
        this.descrizione = descrizione
    }
}