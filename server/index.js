const express = require( 'express' );
const { json } = require( 'body-parser' );
const session = require( 'express-session' );
require( 'dotenv' ).config();

const checkForSession = require( './middlewares/checkForSession' );
const swag_controller = require( './controllers/swag_controller');
const auth_controller = require( './controllers/auth_controller' );

const app = express();

app.use(json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))

app.use(checkForSession);

app.get('/api/swag', swag_controller.read);

app.get('/api/user', auth_controller.getUser);
app.post('/api/register', auth_controller.register);
app.post('/api/login', auth_controller.login);
app.post('/api/singout', auth_controller.signout);


const port = 3000;
app.listen(port, () => { console.log(`Listening of PORT: ${port}`) })