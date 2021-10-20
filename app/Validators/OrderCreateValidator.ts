import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class OrderCreateValidator {
	constructor(protected ctx: HttpContextContract) {
	}

	public schema = schema.create({

		product_id: schema.string({ trim: true }, [
			rules.uuid()
		]),
		customer_id: schema.string({ escape: true }, [
			rules.uuid()
		]),
		flighter_id: schema.string.optional({}, [
			rules.uuid()
		]),
		quantity: schema.number([
			// rules.maxLength()
		]),
		status: schema.enum.optional(
			["draft", "progress", "delivered", "rejected"] as const
		),
		street: schema.string.optional({}, [
			rules.maxLength(50)
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
