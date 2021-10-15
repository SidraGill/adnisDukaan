import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CustomerUpdateValidator {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({

		name: schema.string({ trim: true }, [
			rules.maxLength(255)
		]),
		phone: schema.string.optional({}, [
			rules.maxLength(15)
		]),
		status: schema.boolean.optional(),
		city: schema.string.optional({}, [
			rules.maxLength(25)
		]),
		street: schema.string.optional({}, [
			rules.maxLength(25)
		]),
		state: schema.string.optional({}, [
			rules.maxLength(25)
		]),
		country: schema.string.optional({}, [
			rules.maxLength(25)
		]),
		zip: schema.string.optional({}, [
			rules.maxLength(25)
		]),

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
