import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany,beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import Note from './Note'
import { v4 as uuid } from 'uuid'
import Movimentacao from './Movimentacao'

export default class TotalGeral extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @beforeCreate()
  public static async createUUID (model:TotalGeral){
    model.id = uuid()
  }
  @column()
  public valor: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
