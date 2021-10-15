import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreCreateValidator {
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
		code: schema.string.optional({}, [
			rules.maxLength(15)
		]),
		type: schema.string.optional({}, [
			rules.maxLength(25)
		]),
		password: schema.string({}, [
			rules.minLength(8)
		]),
		city: schema.string.optional({}, [
			rules.maxLength(25)
		]),
		physycal_store: schema.boolean.optional(),

		timing: schema.enum.optional(
			['specific', 'full'] as const
		),
		start_time: schema.date.optional({ format: 'yyyy-MM-dd HH:mm:ss' }),
		end_time: schema.date.optional({ format: 'yyyy-MM-dd HH:mm:ss' }),
		lat: schema.string.optional(),
		long: schema.string.optional(),
		payment_method: schema.enum.optional(["cod", "paypal"] as const),
		status: schema.boolean.optional(),
		vendor_id: schema.string.optional({}, [
			rules.exists({ table: 'vendors', column: 'id' })
		]
		)
	})

	public messages = {}
}
