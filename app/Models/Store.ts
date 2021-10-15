import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { Time } from 'aws-sdk/clients/codedeploy'

export default class Store extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public code: string

  @column()
  type: string

  @column()
  public city: string

  @column()
  public physycal_store: boolean

  @column()
  public timing: string

  @column()
  public start_time: Time


  @column()
  public end_time: Time

  @column()
  public lat: string

  @column()
  public long: string

  @column()
  public payment_method: string

  @column()
  public status: boolean

  @column()
  public vendor_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
