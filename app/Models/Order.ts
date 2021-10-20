import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public product_id: string

  @column()
  public customer_id: string

  @column()
  public flighter_id: string

  @column()
  public quantity: number

  @column()
  public status: string
  @column()
  public street: string

  @column()
  public city: string

  @column()
  public state: string

  @column()
  public country: string

  @column()
  public zip: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
