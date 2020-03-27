const express = require('express');
const rotas = require('./src/routes');
const app = express();


app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './src/views');
app.use(rotas)
app.use((req, res)=>{
    return res.send("Acho que você se perdeu!");
})

app.listen(3300, ()=>console.log("Servidor rodando na porta 3300"))