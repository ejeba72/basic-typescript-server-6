"use strict";
// 16:12 thu apr20 2023
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
function signup(req, res) {
    try {
        console.log(req.body);
        res.send(req.body);
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            res.status(500).send(err);
        }
        else {
            console.error(err);
            res.status(500).send(err);
        }
    }
}
exports.signup = signup;
