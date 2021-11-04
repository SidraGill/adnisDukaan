"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.resource('admin', 'AdminsController').apiOnly();
Route_1.default.post('login', async ({ auth, response }) => {
    const email = "admin@dukaan.com";
    const password = "Hello2021";
    try {
        const token = await auth.use('api').attempt(email, password);
        return token;
    }
    catch (err) {
        return response.badRequest('Invalid credentials');
    }
});
//# sourceMappingURL=admin.js.map