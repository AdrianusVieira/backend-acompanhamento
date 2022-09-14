import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MovimentacaosDTO from 'App/DTO/MovimentacaosDTO'
import Movimentacao from 'App/Models/Movimentacao'
import MovimentacaosRepository from 'App/Repositories/MovimentacaosRepository'

export default class MovimentacaosController {
  public async index() {
    const movimentacaos = await Movimentacao.all()

    return movimentacaos
  }
  public async indexByCarteira({ request }: HttpContextContract) {
    const carteiraData = {
      id_carteira: request.param('id_carteira'),
    } as MovimentacaosDTO
    const movimentacaos = await MovimentacaosRepository.find(carteiraData)
    return movimentacaos
  }

  public async indexByFundo({ request }: HttpContextContract) {
    const fundoData = {
      id_fundo: request.param('id_fundo'),
    } as MovimentacaosDTO
    const movimentacaos = await MovimentacaosRepository.find(fundoData)
    return movimentacaos
  }

  public async indexByInvestimento({ request }: HttpContextContract) {
    const investimentoData = {
      id_investimento: request.param('id_investimento'),
    } as MovimentacaosDTO
    const movimentacaos = await MovimentacaosRepository.find(investimentoData)
    return movimentacaos
  }

  public async indexByTipo({ request }: HttpContextContract) {
    const tipoData = {
      tipo: request.param('tipo'),
    } as MovimentacaosDTO

    const movimentacaos = await MovimentacaosRepository.find(tipoData)
    return movimentacaos
  }

  public async store({ request }: HttpContextContract) {
    const id_carteira = request.input('id_carteira')
    const id_fundo = request.input('id_fundo')
    const id_investimento = request.input('id_investimento')
    const data_hora = request.input('data_hora')
    const descricao = request.input('descricao')
    const valor = request.input('valor')
    const tipo = request.input('tipo')

    const movimentacao = await Movimentacao.create({
      id_carteira,
      id_fundo,
      id_investimento,
      data_hora,
      descricao,
      valor,
      tipo,
    })

    return movimentacao
  }
  public async update({ params, request }) {
    const movimentacao = await Movimentacao.findOrFail(params.id)
    const data = request.only([
      'id_carteira',
      'id_fundo',
      'id_investimento',
      'data_hora',
      'descricao',
      'valor',
      'tipo',
    ])

    movimentacao.merge(data)
    await movimentacao.save()

    return movimentacao
  }
  public async destroy({ request }: HttpContextContract) {
    const id = request.param('id')
    if (!id) return

    const movimentacao = await Movimentacao.findOrFail(id)
    await movimentacao.delete()

    return movimentacao
  }
}
