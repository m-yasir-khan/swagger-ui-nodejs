const express = require("express");
const {nanoid} = require('nanoid');
const router = express.Router();

const idLength = 8;

router.get('/', (req,res) => {

    let todos = req.app.db.get('todos').value();

    return res.send(todos);

});

router.get('/:id', (req,res) => {

    let todo = req.app.db.get('todos').find({ 
        id: req.params.id
    }).value();

    if(!todo){

        res.sendStatus(404);

        return res.send({
            message: "Todo cannot be found",
            internal_code: "Invalid id"
        });

    };

    return res.send(todo);

});

router.post('/', (req,res) => {

    let todo = {
        id:nanoid(idLength),
        ...req.body
    };

    try {

        req.app.db.get("todos").push(todo).write();
        
        return res.sendStatus(201).send("Account Created Successfully");

    }catch(error){

        return res.sendStatus(500).send(error);
    }
});

module.exports = router;