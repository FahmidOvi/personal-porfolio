"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const body_parser_1 = __importDefault(require("body-parser"));
const express_validator_1 = require("express-validator");
const urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
const auth_1 = require("../Controllers/auth");
const Util_1 = require("../Util");
router.get('/login', auth_1.DisplayLoginPage);
router.get('/register', auth_1.DisplayRegisterPage);
router.post('/login', auth_1.ProcessLoginPage);
router.post('/register', [
    (0, express_validator_1.check)('firstName', 'Name is short!')
        .exists()
        .isLength({ min: 3 }),
    (0, express_validator_1.check)('emailAddress', 'Enter a valid email address.')
        .exists()
        .isEmail()
        .normalizeEmail(),
    (0, express_validator_1.check)('password')
        .isLength({ min: 5 })
        .withMessage('Password must be at least 5 chars long')
        .matches(/\d/)
        .withMessage('Password must contain a number')
], (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const err = errors.array();
        console.log(err);
        return res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: (0, Util_1.UserDisplayName)(req), err });
    }
    next();
}, auth_1.ProcessRegisterPage);
router.get('/logout', auth_1.ProcessLogoutPage);
exports.default = router;
//# sourceMappingURL=auth.js.map