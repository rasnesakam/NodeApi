// init express js
const express = require('express'); 

// init express js application instance
const app = express();

const port = 3000

app.get('/', (req,res) =>{
    res.send("Silence is golden")
})
app.get('/user/:id',(req,res)=>{

    res.json({
        name:'ensar',
        surname: 'makas',
        id:req.params.id
    })
})
 app.listen(port, () =>{
     console.log('app listening the port of '+port)
 })