"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/core/build/standalone");
class CmdKeys extends standalone_1.BaseCommand {
    async run() {
        this.logger.info('Hello world!');
    }
}
exports.default = CmdKeys;
CmdKeys.commandName = 'cmd:keys';
CmdKeys.description = '';
CmdKeys.settings = {
    loadApp: false,
    stayAlive: false,
};
//# sourceMappingURL=CmdKeys.js.map