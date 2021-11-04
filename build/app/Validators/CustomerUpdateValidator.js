"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CustomerUpdateValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.maxLength(255)
            ]),
            phone: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(15)
            ]),
            status: Validator_1.schema.boolean.optional(),
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
exports.default = CustomerUpdateValidator;
//# sourceMappingURL=CustomerUpdateValidator.js.map