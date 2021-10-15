import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CustomerCreateValidator {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({

		name: schema.string({ trim: true }, [
			rules.maxLength(255)
		]),
		email: schema.string({ escape: true }, [
			rules.email(),
			rules.unique({ table: 'stores', column: 'email' }),
			rules.maxLength(30)
		]),
		phone: schema.string.optional({}, [
			rules.maxLength(15)
		]),
		status: schema.boolean.optional(),
		password: schema.string({}, [
			rules.minLength(8)
		]),
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
