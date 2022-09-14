import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Investimento from 'App/Models/Investimento'

export default class InvestimentosController {
  public async index() {
    const carteiras = await Investimento.all()

    return carteiras
  }
  public async indexById({ request }: HttpContextContract) {
    const id = request.param('id')
    if (!id) return
    const investimento = await Investimento.query().where('id', id)

    return investimento
  }
  public async store({ request }: HttpContextContract) {
    const nome = request.input('nome')
    const descricao = request.input('descricao')
    const tipo = request.input('tipo')
    const total_atribuido = request.input('total_atribuido')
    const quantidade = request.input('quantidade')

    const investimento = await Investimento.create({
      nome,
      quantidade,
      total_atribuido,
      tipo,
      descricao,
    })

    return investimento
  }
  public async update({ params, request }) {
    const investimento = await Investimento.findOrFail(params.id)
    const data = request.only(['nome', 'tipo', 'descricao', 'total_atribuido', 'quantidade'])

    investimento.merge(data)
    await investimento.save()

    return investimento
  }
  public async destroy({ request }: HttpContextContract) {
    const id = request.param('id')
    if (!id) return

    const investimento = await Investimento.findOrFail(id)
    await investimento.delete()

    return investimento
  }
}
