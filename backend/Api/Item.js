const express = require('express');
const mongoose = require('mongoose');
const Item = require('../DB/Item');
const route = express.Router();

route.post('/', async(req, res) => {
    const { desc, quantity, unit_price, total } = req.body;
    let obj = {};
    obj.desc = desc;
    obj.quantity= quantity;
    obj.unit_price = unit_price;
    obj.total = total;
    let itemModel = new Item(obj);
    await itemModel.save();
    res.json(itemModel);
})

route.get('/details',(req,res)=>{
    Item.find({}).then((songs) => {
        res.send(songs);
       console.log(songs);
    }).catch((e) => {
    })
})

module.exports=route