"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Customers extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'customers';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name');
            table.string('email').unique;
            table.string('password').nullable;
            table.string('phone').nullable;
            table.boolean('status').defaultTo(0);
            table.string('street').nullable;
            table.string('city').nullable;
            table.string('state').nullable;
            table.string('country').nullable;
            table.string('zip').nullable;
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Customers;
//# sourceMappingURL=1634301984814_customers.js.map