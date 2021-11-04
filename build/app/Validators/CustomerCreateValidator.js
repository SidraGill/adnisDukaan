"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CustomerCreateValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.maxLength(255)
            ]),
            email: Validator_1.schema.string({ escape: true }, [
                Validator_1.rules.email(),
                Validator_1.rules.unique({ table: 'stores', column: 'email' }),
                Validator_1.rules.maxLength(30)
            ]),
            phone: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(15)
            ]),
            status: Validator_1.schema.boolean.optional(),
            password: Validator_1.schema.string({}, [
                Validator_1.rules.minLength(8)
            ]),
            city: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(25)
            ]),
            street: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(25)
            ]),
            state: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(25)
            ]),
            country: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(25)
            ]),
            zip: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(25)
            ]),
        });
        this.messages = {};
    }
}
exports.default = CustomerCreateValidator;
//# sourceMappingURL=CustomerCreateValidator.js.map