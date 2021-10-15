import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vendors extends BaseSchema {
  protected tableName = 'vendors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('email').unique
      table.string('password')
      table.string('phone').nullable
      table.integer('otp').nullable
      table.string('image').nullable
      table.string('cnic_front').nullable
      table.string('cnic_back').nullable
      table.string('cnic_number').nullable
      table.boolean('active').defaultTo(0)

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
