"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class OrderUpdateValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            product_id: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.uuid()
            ]),
            customer_id: Validator_1.schema.string({ escape: true }, [
                Validator_1.rules.uuid()
            ]),
            flighter_id: Validator_1.schema.string.optional({}, [
                Validator_1.rules.uuid()
            ]),
            quantity: Validator_1.schema.number([]),
            status: Validator_1.schema.enum.optional(["draft", "progress", "delivered", "rejected"]),
            street: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(50)
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
    }
}
exports.default = OrderUpdateValidator;
messages = {};
//# sourceMappingURL=OrderUpdateValidator.js.map