const swags = require('../models/swag');

module.exports = {
    search: (req, res, next)=>{
        const {category} = req.query;
        const filteredCatagory = swags.filter(swag => swag.category === category);
        if(!category){
            res.status(200).json(swags);
        }else{
            res.status(200).json(filteredCatagory);
        }
    }
}