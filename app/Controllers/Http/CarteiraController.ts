// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Carteira from 'App/Models/Carteira'

export default class CarteirasController {
  public async index() {
    const carteiras = await Carteira.all()

    return carteiras
  }
  public async indexById({ request }: HttpContextContract) {
    const id = request.param('id')
    if (!id) return
    const carteira = await Carteira.query().where('id', id)

    return carteira
  }
  public async store({ request }: HttpContextContract) {
    const nome = request.input('nome')
    const total = request.input('total')
    const descricao = request.input('descricao')

    const carteira = await Carteira.create({
      nome,
      total,
      descricao,
    })

    return carteira
  }
  public async update({ params, request }) {
    const carteira = await Carteira.findOrFail(params.id)
    const data = request.only(['nome','descricao', 'total'])

    carteira.merge(data)
    await carteira.save()

    return carteira
  }
  public async destroy({ request }: HttpContextContract) {
    const id = request.param('id')
    if (!id) return

    const carteira = await Carteira.findOrFail(id)
    await carteira.delete()

    return carteira
  }
}
