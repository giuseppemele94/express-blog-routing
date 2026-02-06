const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));


//rottta Home APP
app.get('/', (req,res) => {
    res.send("<h1>Rotta home</h1>")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})