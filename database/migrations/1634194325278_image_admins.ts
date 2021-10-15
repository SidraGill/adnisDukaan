import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ImageAdmins extends BaseSchema {
  protected tableName = 'admins'

  public async up() {

    this.schema.alterTable(this.tableName, (table) => {
      table.string('image').nullable
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
