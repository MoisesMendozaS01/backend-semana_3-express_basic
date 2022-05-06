//Usando objeto express
const express =require('express')
// App de Express
const app = express()
// Puerta en que vamos a ver nuestra app: localhost:3000
const port = 3000

// path inicial, responderá a la url localhost:3000
app.get('/',(req,res)=>{
    res.send('Hello World!')
})

//respondiendo texto
//localhost:3000/launchx
app.get('/launchx',(req,res)=>{
    res.send('Bienvenidos a LaunchX!')
})

//Regresando un objeto
// localhost:3000/explorersInNode
app.get('/explorersInNode',(req,res)=>{
    const explorer = {name:"Explorer",msg : "Hello"}
    res.send(explorer)
})

//Query Params: Recibir parámetro por la url
//http://localhost:3000/explorers/moy
// req.params= {"explorerName":"moy"}
app.get('/explorers/:explorerName',(req,res)=>{
    res.send(req.params)
})

// COn esto inicialisamos esta app
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})