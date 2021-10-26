"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
class Order extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Order.prototype, "product_id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Order.prototype, "customer_id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Order.prototype, "flighter_id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], Order.prototype, "quantity", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Order.prototype, "street", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Order.prototype, "city", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Order.prototype, "state", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Order.prototype, "country", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Order.prototype, "zip", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Order.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Order.prototype, "updatedAt", void 0);
exports.default = Order;
//# sourceMappingURL=Order.js.map