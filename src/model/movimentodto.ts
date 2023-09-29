export class MovimentoDTO {
    id: number;
    ammontare: number;
    data: string;
    tipologia: "ENTRATA" | "USCITA";

    constructor(
        id: number,
        ammontare: number,
        data: string,
        tipologia: "ENTRATA" | "USCITA"
    ) {
        this.id = id
        this.ammontare = ammontare
        this.data = data
        this.tipologia = tipologia
    }
}