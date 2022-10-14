import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'
import Movimentacao from './Movimentacao'

export default class Carteira extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @beforeCreate()
  public static async createUUID(model: Carteira) {
    model.id = uuid()
  }
  @column()
  public nome: string
  @column()
  public descricao: string
  @column()
  public total: number

  @hasMany(() => Movimentacao, {
    foreignKey: 'id_carteira',
  })
  public movimentacao: HasMany<typeof Movimentacao>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
