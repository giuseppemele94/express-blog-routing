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

//inizio crud 

//SHOW
router.get('/:id', function (req,res) {
    res.send('Dettagli del post con id ' + req.params.id); 
}); 

// STORE
router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
});

// UPDATE
router.put('/:id', function (req, res) {
    res.send('Modifica del post con id ' + req.params.id);
});

// MODIFY
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
});

// DELETE
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});

// esporta l'istanza di queste rotte
module.exports = router;