"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const mailConfig = {
    mailer: 'ses',
    mailers: {
        ses: {
            driver: 'ses',
            apiVersion: '2010-12-01',
            key: Env_1.default.get('SES_ACCESS_KEY'),
            secret: Env_1.default.get('SES_ACCESS_SECRET'),
            region: Env_1.default.get('SES_REGION'),
            sslEnabled: true,
            sendingRate: 10,
            maxConnections: 5,
        },
        mailgun: {
            driver: 'mailgun',
            baseUrl: 'https://api.mailgun.net/v3',
            key: Env_1.default.get('MAILGUN_API_KEY'),
            domain: Env_1.default.get('MAILGUN_DOMAIN'),
        },
        smtp: {
            driver: "smtp",
            pool: true,
            port: Env_1.default.get("SMTP_PORT", 2525),
            host: Env_1.default.get("SMTP_HOST"),
            secure: false,
            auth: {
                user: Env_1.default.get("MAIL_USERNAME"),
                pass: Env_1.default.get("MAIL_PASSWORD"),
            },
        },
        sparkpost: {
            driver: 'sparkpost',
            baseUrl: 'https://api.sparkpost.com/api/v1',
            key: Env_1.default.get('SPARKPOST_API_KEY'),
        },
    },
};
exports.default = mailConfig;
//# sourceMappingURL=mail.js.map