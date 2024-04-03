const Actor = require('../modules/actor')
const express = require('express')
const router = express.Router()

router.post('/', async(req, res) => {
    const actor = await Actor.findOne({name: req.body.name})
    if(actor)
        return res.status(400).send('Bunday malumot mavjud')
    if(!req.body.image) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.name) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.description) 
        return res.status(400).send("Malumot to'liq emas")





    let actorSave = new Actor({
            image: req.body.image,
            name: req.body.name,
            description: req.body.description,
    })
    const save = await actorSave.save()
    res.send(save)
})


router.get('/', async(req, res) => {
    const getData = await Actor.find()
    res.send(getData)
})





module.exports = router