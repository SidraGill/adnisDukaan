import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FlighterUpdateValidator {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({


		name: schema.string.optional({ trim: true }, [
			rules.maxLength(255)
		]),
		phone: schema.string.optional({}, [
			rules.maxLength(15)
		]),
		image: schema.file.optional({
			extnames: ['jpg', 'jpeg', 'png'],
		}),
		otp: schema.string.optional({}, [
			rules.maxLength(6)
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
