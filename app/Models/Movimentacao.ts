import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo,BelongsTo,beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import Note from './Note'
import { v4 as uuid } from 'uuid'
import Carteira from './Carteira'
import Fundo from './Fundo'
import Investimento from './Investimento'

export default class Movimentacao extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @beforeCreate()
  public static async createUUID (model:Movimentacao){
    model.id = uuid()
  }
  @column()
  public data_hora: DateTime
  @column()
  public descricao: string
  @column()
  public valor: number
  @column()
  public tipo: string
  @column()
  public id_carteira: string
  @column()
  public id_fundo: string
  @column()
  public id_investimento: string

  @belongsTo(() => Carteira, {
    localKey: 'id_carteira'
  })
  public carteira: BelongsTo<typeof Carteira>

  @belongsTo(() => Fundo, {
    localKey: 'id_fundo'
  })
  public fundo: BelongsTo<typeof Fundo>

  @belongsTo(() => Investimento, {
    localKey: 'id_investimento'
  })
  public investimento: BelongsTo<typeof Investimento>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
