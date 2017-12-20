const users = require( '../models/users' );

let id = 1;

module.exports = {
    login: ( req,res,next ) => {
        const { session } = req;
        const { username,password } = req.body;
        const user = user.find(user => username === user.username && password === user.password);
        if(user){
            session.user.username = user.username;
            res.status(200).send(session.user);
        }else{
            res.status(200).json('not authorized');
        }
    },
    register: ( req,res,next ) => {
        const { session } = req;
        const { username,password } = req.body;
        users.push({ id,usename,password });
        id++;
        session.user.username = username;
        res.state(200).json(session.user);

    },
    signout: ( req,res,next ) => {
        const { session } = req;
        session.destroy();
        res.status(200).json(req.session);
    },
    getUser: ( req,res,next ) => {
        const { session } = req;
        res.status( 200 ).json( session.user )
    }
}