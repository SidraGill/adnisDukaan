import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdminCreateValidator {
	constructor(protected ctx: HttpContextContract) {
	}

	/*
	 * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
	 *
	 * For example:
	 * 1. The username must be of data type string. But then also, it should
	 *    not contain special characters or numbers.
	 *    ```
	 *     schema.string({}, [ rules.alpha() ])
	 *    ```
	 *
	 * 2. The email must be of data type string, formatted as a valid
	 *    email. But also, not used by any other user.
	 *    ```
	 *     schema.string({}, [
	 *       rules.email(),
	 *       rules.unique({ table: 'users', column: 'email' }),
	 *     ])
	 *    ```
	 */
	public schema = schema.create({

		name: schema.string.optional({ trim: true }, [
			rules.maxLength(255)
		]),
		email: schema.string({ escape: true }, [
			rules.email(),
			rules.unique({ table: 'admins', column: 'email' }),
			rules.maxLength(1000)
		]),
		phone_Number: schema.string.optional({}, [
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
		])
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
