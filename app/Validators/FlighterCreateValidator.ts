import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FlighterCreateValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({

		name: schema.string.optional({ trim: true }, [
			rules.maxLength(255)
		]),
		email: schema.string({ escape: true }, [
			rules.email(),
			rules.unique({ table: 'vendors', column: 'email' }),
			rules.maxLength(1000)
		]),
		phone: schema.string.optional({}, [
			rules.maxLength(15)
		]),
		image: schema.file.optional({
			// size: '2mb',
			extnames: ['jpg', 'jpeg', 'png'],
		}),
		otp: schema.string.optional({}, [
			rules.maxLength(6)
		]),
		password: schema.string({}, [
			rules.minLength(8)
		]),
		cnic_front: schema.string.optional({}, [
			rules.maxLength(20)
		]),
		cnic_back: schema.string.optional({}, [
			rules.maxLength(20)
		]),
		cnic_number: schema.string.optional({}, [
			rules.maxLength(20)
		]),
		active: schema.boolean.optional(),
  })

	/**
	 * Custom messages for validation failures. You can make use of dot notation `(.)`
	 * for targeting nested fields and array expressions `(*)` for targeting all
	 * children of an array. For example:
	 *
	 * {
	 *   'profile.username.required': 'Username is required',
	 *   'scores.*.number': 'Define scores as valid numbers'
	 * }
	 *
	 */
  public messages = {}
}
