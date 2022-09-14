import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TotalGeral from 'App/Models/TotalGeral'

export default class TotalGeralsController {
  public async index() {
    const total_geral = await TotalGeral.all()

    return total_geral
  }
  public async store({ request }: HttpContextContract) {
    const valor = request.input('valor')

    const total_geral = await TotalGeral.create({
      valor,
    })

    return total_geral
  }
  public async update({ params, request }) {
    const total_geral = await TotalGeral.findOrFail(params.id)
    const data = request.only(['valor'])

    total_geral.merge(data)
    await total_geral.save()

    return total_geral
  }
  public async destroy({ request }: HttpContextContract) {
    const id = request.param('id')
    if (!id) return

    const total_geral = await TotalGeral.findOrFail(id)
    await total_geral.delete()

    return total_geral
  }
}
