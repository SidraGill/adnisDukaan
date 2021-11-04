"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class AdminUpdateValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string.optional({ trim: true }, [
                Validator_1.rules.maxLength(255)
            ]),
            phone_Number: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(15)
            ]),
            otp: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(6)
            ]),
        });
        this.messages = {};
    }
}
exports.default = AdminUpdateValidator;
//# sourceMappingURL=AdminUpdateValidator.js.map