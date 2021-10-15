import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdminUpdateValidator {
  constructor (protected ctx: HttpContextContract) {
  }


  public schema = schema.create({
	name: schema.string.optional({ trim: true }, [
        rules.maxLength(255)
      ]),
      phone_Number: schema.string.optional({}, [
        rules.maxLength(15)
      ]),
      otp: schema.string.optional({}, [
        rules.maxLength(6)
      ]),
  })


  public messages = {}
}
