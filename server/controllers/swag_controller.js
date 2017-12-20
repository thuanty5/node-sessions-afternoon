const swag = require( '../models/swag' );


module.exports = {
    read: ( req,res,next) => {
        res.state(200).send(swag);
    }
}