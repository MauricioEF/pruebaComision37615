import express from 'express';

const app = express();


app.get('/',(req,res)=>{
    res.send("Inicio de mi servidor");
})

app.listen(8080,()=>console.log("Listening"))