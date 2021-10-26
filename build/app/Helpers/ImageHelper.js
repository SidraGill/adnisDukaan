'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
let ImageHelper = exports = module.exports = {};
ImageHelper.Upload = function (image, path) {
    if (image && typeof (image) !== 'string') {
        let rnd = Math.random();
        rnd = Math.ceil(((rnd < 1.0) ? rnd : (rnd % Math.floor(rnd))) * 1000000000);
        let name = `${image.clientName}_ ${rnd}.${image.extname}`;
        image.clientName = name;
        let img;
        img = image.move(Application_1.default.tmpPath(path));
        return `${path}/${name}`;
    }
    else {
        return image;
    }
};
//# sourceMappingURL=ImageHelper.js.map