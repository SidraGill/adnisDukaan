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
class Vendor extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], Vendor.prototype, "id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Vendor.prototype, "name", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Vendor.prototype, "email", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Vendor.prototype, "phone", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], Vendor.prototype, "otp", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Vendor.prototype, "image", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Vendor.prototype, "cnic_front", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Vendor.prototype, "cnic_back", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Vendor.prototype, "cnic_number", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Vendor.prototype, "password", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Boolean)
], Vendor.prototype, "active", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Vendor.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Vendor.prototype, "updatedAt", void 0);
exports.default = Vendor;
//# sourceMappingURL=Vendor.js.map