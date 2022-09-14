import Database from '@ioc:Adonis/Lucid/Database'
import MovimentacaosDTO from 'App/DTO/MovimentacaosDTO'
export default class MovimentacaosRepository {
  public static async find(params: MovimentacaosDTO) {
    const result = await Database.query().from('movimentacaos').where(params)
    return result
  }
}
