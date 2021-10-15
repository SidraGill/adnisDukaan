import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VendorUpdateValidator {
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

	public messages = {}
}
