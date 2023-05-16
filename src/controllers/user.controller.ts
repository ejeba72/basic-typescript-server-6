// 16:12 thu apr20 2023

import { Request, Response } from 'express';

function signup(req: Request, res: Response): void {
    try {
        console.log(req.body);
        res.send(req.body);

    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(err.message);
            res.status(500).send(err);            
        } else {
            console.error(err);
            res.status(500).send(err);
        }
    }
}

function login(req: Request, res: Response): void {
    try {
        console.log(req.body);
        res.status(201).send(req.body);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(err.message);
            res.status(500).send(err);
        } else {
            console.error(err);
            res.status(500).send(err);
        }
    }
}

export { signup, login };