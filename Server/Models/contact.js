"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ContactSchema = new Schema({
    FirstName: String,
    LastName: String,
    ContactNumber: String,
    EmailAddress: String
}, {
    collection: "contacts"
});
const Model = mongoose_1.default.model("Contacts", ContactSchema);
exports.default = Model;
//# sourceMappingURL=contact.js.map