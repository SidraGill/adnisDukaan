"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Orders extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'orders';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.uuid('product_id').nullable;
            table.uuid('customer_id').nullable;
            table.uuid('flighter_id').nullable;
            table.integer('quantity');
            table.enum('status', ["draft", "progress", "delivered", "rejected",]).defaultTo('draft');
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
exports.default = Orders;
//# sourceMappingURL=1634570954177_orders.js.map