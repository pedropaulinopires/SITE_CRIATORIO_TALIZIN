const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Holle World!');
});

app.listen(5000, () =>{
    console.log('Iniciado back end!');
})