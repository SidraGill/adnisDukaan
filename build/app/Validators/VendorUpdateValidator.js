"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class VendorUpdateValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string.optional({ trim: true }, [
                Validator_1.rules.maxLength(255)
            ]),
            phone: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(15)
            ]),
            image: Validator_1.schema.file.optional({
                extnames: ['jpg', 'jpeg', 'png'],
            }),
            otp: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(6)
            ]),
            cnic_front: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(20)
            ]),
            cnic_back: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(20)
            ]),
            cnic_number: Validator_1.schema.string.optional({}, [
                Validator_1.rules.maxLength(20)
            ]),
            active: Validator_1.schema.boolean.optional(),
        });
        this.messages = {};
    }
}
exports.default = VendorUpdateValidator;
//# sourceMappingURL=VendorUpdateValidator.js.map