const swags = require('../models/swag');

module.exports = {
    add: (req, res, next)=>{
        const {id} = req.query;
        const {cart} = req.session.user;
        const index = cart.findIndex(swag => swag.id == id);

        if(index === -1){
            const selectedSwag = swags.find(swag => swag.id == id);
            cart.push(selectedSwag);
            req.session.user.total += selectedSwag.price;
        }
        res.status(200).send(req.session.user);
    },

    delete: (req, res, next)=>{
        const {id} = req.query;
        const {cart} = req.session.user;
        const selectedSwag = swags.find(swag => swag.id == id);
        
        if (selectedSwag) {
            const index = cart.findIndex(swag => swag.id == id);
            cart.splice(index, 1);
            req.session.user.total -= selectedSwag.price;
        }
        res.status(200).send(req.session.user);
    },

    checkout: (req, res, next)=>{
        const {user} = req.session;
        user.cart = [];
        user.total = 0;
        res.status(200).json(user)
    }
}