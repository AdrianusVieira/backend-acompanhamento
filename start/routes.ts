/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Route.get('/', async () => {
//   return { hello: 'world' }
// })

//CARTEIRA
Route.get('/carteira', 'CarteiraController.index')
Route.get('/carteira/:id', 'CarteiraController.indexById')
Route.post('/carteira', 'CarteiraController.store')
Route.put('/carteira/:id', 'CarteiraController.update')
Route.delete('/carteira/:id', 'CarteiraController.destroy')

//FUNDO
Route.get('/fundo', 'FundoController.index')
Route.get('/fundo/:id', 'FundoController.indexById')
Route.get('/fundonome/:nome', 'FundoController.indexByNome')
Route.post('/fundo', 'FundoController.store')
Route.put('/fundo/:id', 'FundoController.update')
Route.delete('/fundo/:id', 'FundoController.destroy')

//INVESTIMENTO
Route.get('/investimento', 'InvestimentoController.index')
Route.get('/investimento/:id', 'InvestimentoController.indexById')
Route.post('/investimento', 'InvestimentoController.store')
Route.put('/investimento/:id', 'InvestimentoController.update')
Route.delete('/investimento/:id', 'InvestimentoController.destroy')

//MOVIMENTACAO
Route.get('/movimentacao', 'MovimentacaoController.index')
Route.get('/movimentacaocarteira/:id_carteira', 'MovimentacaoController.indexByCarteira')
Route.get('/movimentacaotipo/:tipo', 'MovimentacaoController.indexByTipo')
Route.get('/movimentacaofundo/:id_fundo', 'MovimentacaoController.indexByFundo')
Route.get(
  '/movimentacaoinvestimento/:id_investimento',
  'MovimentacaoController.indexByInvestimento'
)
Route.post('/movimentacao', 'MovimentacaoController.store')
Route.put('/movimentacao/:id', 'MovimentacaoController.update')
Route.delete('/movimentacao/:id', 'MovimentacaoController.destroy')

//TOTAL GERAL
Route.get('/total_geral', 'TotalGeralController.index')
Route.post('/total_geral', 'TotalGeralController.store')
Route.put('/total_geral/:id', 'TotalGeralController.update')
Route.delete('/total_geral/:id', 'TotalGeralController.destroy')
