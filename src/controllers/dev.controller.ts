import express from "express";

function devController(req: express.Request, res: express.Response): void {
    try {
        console.log(`Get request from '/dev' endpoint.`);
        res.send([`fresh ideas!`]);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(err.message);
            res.send(err);
        } else {
            console.error(err);
            res.send(err);
        }
    }
}

export { devController };