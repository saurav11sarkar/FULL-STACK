import express, { NextFunction, Request, Response } from "express";
const app = express();

// perser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());

// middleware
const logger = (req:Request, res:Response, next:NextFunction)=>{
   console.log(req.url, req.method, req.hostname);
   next();
} 

app.get('/',logger, (req: Request, res: Response) => {
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

app.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.status(201).json({
        message: "Successfully recieved data"
    })
})

// error handler
app.use((req:Request, res:Response, next:NextFunction)=>{
    res.status(400).send("This page is a not create");
})

app.use((err:any, req:Request, res:Response,next:NextFunction)=>{
    if(err){
        res.status(400).json({
            sucess: false,
            message: "Something Went Worng"
        })
    }
})

export default app;