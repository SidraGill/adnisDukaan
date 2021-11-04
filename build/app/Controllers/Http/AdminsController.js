"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Admin_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Admin"));
const AdminCreateValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/AdminCreateValidator"));
const AdminUpdateValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/AdminUpdateValidator"));
const ImageHelper_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Helpers/ImageHelper"));
class AdminsController {
    constructor() {
        this.model = Admin_1.default;
        this.createValidator = AdminCreateValidator_1.default;
        this.updateValidator = AdminUpdateValidator_1.default;
    }
    async index({ request, response }) {
        let prm = request.all();
        let total = prm.per_page ? prm.per_page : 10;
        let page = prm.current_page ? prm.current_page : 1;
        let items = await this.model.query().paginate(page, total);
        return response.ok(items);
    }
    async store({ request, response }) {
        const payload = await request.validate(this.createValidator);
        let image = request.file('image');
        payload.image = ImageHelper_1.default.Upload(image, 'uploads/admin');
        const admin = await this.model.create(payload);
        return response.ok(admin);
    }
    async show({ params, response }) {
        const { id } = params;
        let admin = await this.model.findOrFail(id);
        return response.ok(admin);
    }
    async update({ params, request, response }) {
        const { id } = params;
        const payload = await request.validate(this.updateValidator);
        const item = await this.model.findOrFail(id);
        let updt = await item.merge(payload).save();
        return response.ok(updt);
    }
    async destroy({ params, response }) {
        const { id } = params;
        const ext = await this.model.findOrFail(id);
        ext.delete();
        return response.ok(ext);
    }
    async login({ auth, request }) {
        const data = Validator_1.schema.create({
            email: Validator_1.schema.string({ escape: true }, [
                Validator_1.rules.email(),
            ]),
            password: Validator_1.schema.string({}, [
                Validator_1.rules.minLength(8)
            ])
        });
        const email = "admin@dukaan.com";
        const password = "Hello2021";
        await auth.use('api').attempt(email, password);
    }
}
exports.default = AdminsController;
//# sourceMappingURL=AdminsController.js.map