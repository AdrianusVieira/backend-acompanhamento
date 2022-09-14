import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Fundo from 'App/Models/Fundo'

export default class FundosController {
  public async index() {
    const fundos = await Fundo.all()

    return fundos
  }

  public async indexById({ request }: HttpContextContract) {
    const id = request.param('id')
    if (!id) return
    const fundo = await Fundo.query().where('id', id)

    return fundo
  }

  public async indexByNome({ request }: HttpContextContract) {
    const nome = request.param('nome')
    if (!nome) return
    const fundo = await Fundo.query().where('nome', nome)

    return fundo
  }

  public async store({ request }: HttpContextContract) {
    const nome = request.input('nome')
    const descricao = request.input('descricao')
    const total = request.input('total')

    const fundo = await Fundo.create({
      nome,
      total,
      descricao,
    })

    return fundo
  }
  public async update({ params, request }) {
    const fundo = await Fundo.findOrFail(params.id)
    const data = request.only(['nome','descricao', 'total'])

    fundo.merge(data)
    await fundo.save()

    return fundo
  }
  public async destroy({ request }: HttpContextContract) {

    const id = request.param('id')
    if (!id) return

		const fundo = await Fundo.findOrFail(id)
    await fundo.delete()

    return fundo
  }
}
