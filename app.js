const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Fucasdsadsadode');
})

app.listen(port);



function yeet(){
    console.log('asdsadasdsadsa')
}


module.exports = {yeet}













