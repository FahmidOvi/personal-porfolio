"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function formOnSubmit() {
    let firstname = $('#first').val();
    let lastname = $('#last').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let message = $('#message').val();
    let userInfo = {
        "firstName": firstname,
        "lastName": lastname,
        "email": email,
        "phone": phone,
        "message": message
    };
    console.log(JSON.stringify(userInfo));
    let data = JSON.stringify(userInfo);
    fs_1.default.writeFile('/Asset/Files/userInfo.json', data, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
}
document.getElementById("btnSubmit")?.addEventListener('click', formOnSubmit);
//# sourceMappingURL=app.js.map