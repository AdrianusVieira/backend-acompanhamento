import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'movimentacaos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id').primary()
      table.string('id_carteira').references('id').inTable('carteiras').onDelete('CASCADE')
      table.string('id_fundo').references('id').inTable('fundos').onDelete('CASCADE')
      table.string('id_investimento').references('id').inTable('investimentos').onDelete('CASCADE')
      table.datetime('data_hora').notNullable()
      table.string('descricao').notNullable()
      table.float('valor').notNullable()
      table.string('tipo').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
