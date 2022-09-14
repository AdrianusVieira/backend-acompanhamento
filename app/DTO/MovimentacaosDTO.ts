import { DateTime } from "luxon";

export default interface MovimentacaosDTO {
  id?: number
  data_hora?: DateTime
  tipo?: string
  descricao?: string
  valor?: number
  id_carteira?: number
  id_fundo?: number
  id_investimento?: number
}
