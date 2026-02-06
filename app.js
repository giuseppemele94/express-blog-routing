const express = require('express');
const postsArr = require('./data/postsArr');
const app = express();
const port = 3000;

// importa router dei post
const blogsRouter = require('./routers/posts')

app.use(express.static('public'));


//rotta Home APP
app.get('/', (req,res) => {
    res.send("<h1>Rotta home</h1>")
})


// istanza delle rotte per risorsa  post
app.use("/posts", blogsRouter); 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})