"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Admin_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Admin"));
class AdminSeeder extends Seeder_1.default {
    async run() {
        Admin_1.default.createMany([
            {
                name: "admin",
                email: "admin@dukaan.com",
                phone_Number: "03009876732",
                otp: "122",
                password: "Hello2021"
            },
            {
                name: "sidra",
                email: "sidra@dukaan.com",
                phone_Number: "03009876732",
                otp: "343",
                password: "Hello2021"
            }
        ]);
    }
}
exports.default = AdminSeeder;
//# sourceMappingURL=Admin.js.map