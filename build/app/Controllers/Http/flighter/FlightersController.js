"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Flighter_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Flighter"));
const FlighterCreateValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/FlighterCreateValidator"));
const FlighterUpdateValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/FlighterUpdateValidator"));
const ImageHelper_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Helpers/ImageHelper"));
class FlightersController {
    constructor() {
        this.model = Flighter_1.default;
        this.createValidator = FlighterCreateValidator_1.default;
        this.updateValidator = FlighterUpdateValidator_1.default;
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
}
exports.default = FlightersController;
//# sourceMappingURL=FlightersController.js.map