"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Flighters extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'flighters';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name');
            table.string('email').unique;
            table.string('password');
            table.string('phone').nullable;
            table.integer('otp').nullable;
            table.string('image').nullable;
            table.string('cnic_front').nullable;
            table.string('cnic_back').nullable;
            table.string('cnic_number').nullable;
            table.boolean('active').defaultTo(0);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Flighters;
//# sourceMappingURL=1634307096939_flighters.js.map