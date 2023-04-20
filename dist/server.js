"use strict";
// I perceive it is redundant to explicitly indicate the types in an express server, but I'm doing so for the sake of learning TypeScript as well as deepen my understanding of the various data types.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const dev_route_1 = require("./routes/dev.route");
// import { publicRouter } from './routes/public.route';
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = parseInt(process.env.PORT);
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// app.use('/public', publicRouter);
app.use('/dev', dev_route_1.devRoute);
app.listen(PORT, () => {
    console.log(`Server is attentively listening for requests @ http://127.0.0.1:${PORT}`);
});
