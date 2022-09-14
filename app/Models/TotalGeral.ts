import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

export default class TotalGeral extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @beforeCreate()
  public static async createUUID(model: TotalGeral) {
    model.id = uuid()
  }
  @column()
  public valor: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
