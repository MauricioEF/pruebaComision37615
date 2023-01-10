import express from 'express';

const app = express();


app.get('/',(req,res)=>{
    res.send("Inicio de mi servidor");
})

app.get('/endpointsenior',(req,res)=>{
    res.send("Endpoint hecho por Mau Senior");
})

app.get('/endpointjunior',(req,res)=>{
    res.send("Endpoint hecho por Mau JR")
})


app.listen(8080,()=>console.log("Listening"))