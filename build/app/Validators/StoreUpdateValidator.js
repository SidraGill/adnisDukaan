"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class StoreUpdateValidator {
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
            code: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(15)
            ]),
            type: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(25)
            ]),
            password: Validator_1.schema.string({}, [
                Validator_1.rules.minLength(8)
            ]),
            city: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(25)
            ]),
            physycal_store: Validator_1.schema.boolean.optional(),
            timing: Validator_1.schema.enum.optional(['specific', 'full']),
            start_time: Validator_1.schema.date.optional({ format: 'yyyy-MM-dd HH:mm:ss' }),
            end_time: Validator_1.schema.date.optional({ format: 'yyyy-MM-dd HH:mm:ss' }),
            lat: Validator_1.schema.string.optional(),
            long: Validator_1.schema.string.optional(),
            payment_method: Validator_1.schema.enum.optional(["cod", "paypal"]),
            status: Validator_1.schema.boolean.optional(),
            vendor_id: Validator_1.schema.string.optional({}, [
                Validator_1.rules.exists({ table: 'vendors', column: 'id' })
            ])
        });
        this.messages = {};
    }
}
exports.default = StoreUpdateValidator;
//# sourceMappingURL=StoreUpdateValidator.js.map