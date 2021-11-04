"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Stores extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'stores';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name');
            table.string('email').unique;
            table.string('password').nullable;
            table.string('code').nullable;
            table.string('type').nullable;
            table.string('city').nullable;
            table.boolean('physycal_store').defaultTo(0);
            table.enum('timing', ["specific", "full"]).defaultTo('full');
            table.dateTime('start_time').nullable;
            table.dateTime('end_time').nullable;
            table.string('lat').nullable;
            table.string('long').nullable;
            table.enum('payment_method', ["cod", "paypal"]).defaultTo('cod');
            table.boolean('status').defaultTo(0);
            table.uuid('vendor_id').nullable;
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Stores;
//# sourceMappingURL=1634296830607_stores.js.map