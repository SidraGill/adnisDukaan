import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orders extends BaseSchema {
  protected tableName = 'orders'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.uuid('product_id').nullable
      table.uuid('customer_id').nullable
      table.uuid('flighter_id').nullable
      table.integer('quantity')
      table.enum('status',["draft", "progress", "delivered", "rejected",]).defaultTo('draft')
      table.string('street').nullable
      table.string('city').nullable
      table.string('state').nullable
      table.string('country').nullable
      table.string('zip').nullable

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
