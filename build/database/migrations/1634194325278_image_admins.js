"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class ImageAdmins extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'admins';
    }
    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.string('image').nullable;
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = ImageAdmins;
//# sourceMappingURL=1634194325278_image_admins.js.map