// richiamo istanza di framework Express
const express = require('express')
// creiamo un istanza dell'oggetto rotte di Express
const router = express.Router();

// importo i dati dei post
const postsList = require('./../data/postsArr');


// rotta GET /posts
router.get('/', function (req, res)  {

    //creo un oggetto con le prop che mi servono 
    const oggettoPost = {
        numeroPosts: postsList.length,
        listaPosts : postsList
    }; 

    //restituisco l'oggetto
    res.json(oggettoPost);
});



// esporta l'istanza di queste rotte
module.exports = router;