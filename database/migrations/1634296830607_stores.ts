import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Stores extends BaseSchema {
  protected tableName = 'stores'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('email').unique
      table.string('password').nullable
      table.string('code').nullable
      table.string('type').nullable
      table.string('city').nullable
      table.boolean('physycal_store').defaultTo(0)
      table.enum('timing', ["specific", "full"]).defaultTo('full')
      table.dateTime('start_time').nullable
      table.dateTime('end_time').nullable
      table.string('lat').nullable
      table.string('long').nullable
      table.enum('payment_method', ["cod", "paypal"]).defaultTo('cod')
      table.boolean('status').defaultTo(0)
      table.uuid('vendor_id').nullable
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
