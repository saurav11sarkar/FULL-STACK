"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// perser
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.text());
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get('/', logger, (req, res) => {
    res.status(200).send("Hello world");
});
// app.get('/', (req: Request, res: Response) => {
//     const { email, name } = req.query;
//     res.status(200).json({
//         name: name,
//         email: email
//     })
// });
// app.get("/:id", (req: Request, res: Response) => {
//     const id = req.params.id;
//     res.status(200).json({
//         message: `My id is ${id}`
//     })
// })
app.post('/', (req, res) => {
    console.log(req.body);
    res.status(201).json({
        message: "Successfully recieved data"
    });
});
// error handler
app.use((req, res, next) => {
    res.status(400).send("This page is a not create");
});
app.use((err, req, res, next) => {
    if (err) {
        res.status(400).json({
            sucess: false,
            message: "Something Went Worng"
        });
    }
});
exports.default = app;
