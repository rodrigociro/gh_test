//this is an action type Node + Express + Typescript + EsLint
console.log("hi") 
import express ,{ Request, Response} from 'express';

const app = express();
const port = 8000;

app.get("/", (req: Request, res: Response) =>{
    res.send("Hola desde Express")
})

app.listen(port,()=>{
    console.log('App escucha por http://localhost:8000');
})