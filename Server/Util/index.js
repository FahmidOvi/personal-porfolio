"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = exports.userDisplayName = void 0;
function userDisplayName(req) {
    if (req.user) {
        let user = req.user;
        return user.DisplayName.toString();
    }
    return '';
}
exports.userDisplayName = userDisplayName;
function AuthGuard(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=index.js.map