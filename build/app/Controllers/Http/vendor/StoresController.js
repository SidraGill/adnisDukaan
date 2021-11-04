"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Store_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Store"));
const StoreCreateValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/StoreCreateValidator"));
const StoreUpdateValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/StoreUpdateValidator"));
class StoresController {
    constructor() {
        this.model = Store_1.default;
        this.createValidator = StoreCreateValidator_1.default;
        this.updateValidator = StoreUpdateValidator_1.default;
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
}
exports.default = StoresController;
//# sourceMappingURL=StoresController.js.map