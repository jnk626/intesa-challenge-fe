export default class ContoDTO {
  id: number;
  nome: string;
  bilancio: number;
  valuta: string;
  iban: string;

  constructor(
    id: number,
    nome: string,
    bilancio: number,
    valuta: string,
    iban: string
  ) {
    this.id = id;
    this.nome = nome;
    this.bilancio = bilancio;
    this.valuta = valuta;
    this.iban = iban;
  }
}
