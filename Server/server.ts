import express, { Application, Request, Response } from "express";
import dotnev from "dotenv";
import cors from "cors";
import CountryRouter from "./Routers/CountryRouter";


const app:Application = express();

dotnev.config({
    path:"./.env"
})


app.use(express.json());

const port:number | undefined = Number(process.env.PORT)||9898;
const hostname:string | undefined = "127.0.0.1";


app.get("/",(request:Request, response:Response)=>{
    response.status(200);
    response.json({
        msg:"Welcome TO Express Server"
    })
})

app.use(cors());
app.use("/api/country", CountryRouter);

if(port){
    app.listen(port,()=>{
        console.log(`Express Js Server Started http://${hostname}:${port}`);
    })
}
