"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devController = void 0;
function devController(req, res) {
    try {
        console.log(`Get request from '/dev' endpoint.`);
        res.send([`fresh ideas!`]);
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            res.send(err);
        }
        else {
            console.error(err);
            res.send(err);
        }
    }
}
exports.devController = devController;
