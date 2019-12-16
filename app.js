// ./express-server/app.js
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';
import bb from 'express-busboy';

//var CASAuthentication = require('cas-authentication');
 
/*var cas = new CASAuthentication({
    cas_url         : 'https://my-cas-host.com/cas',
    service_url     : 'https://my-service-host.com',
    cas_version     : '3.0',
    renew           : false,
    is_dev_mode     : false,
    dev_mode_user   : '',
    dev_mode_info   : {},
    session_name    : 'cas_user',
    session_info    : 'cas_userinfo',
    destroy_session : false
});

 
// Set up an Express session, which is required for CASAuthentication.
app.use( session({
    secret            : 'super secret key',
    resave            : false,
    saveUninitialized : true
}));

app.use(formidable.parse({ keepExtensions: true }));

 
// Create a new instance of CASAuthentication.
var cas = new CASAuthentication({
    cas_url     : 'https://my-cas-host.com/cas',
    service_url : 'https://my-service-host.com'
});
 
// Unauthenticated clients will be redirected to the CAS login and then back to
// this route once authenticated.
app.get( '/app', cas.bounce, function ( req, res ) {
    res.send( '<html><body>Hello!</body></html>' );
});
 
// Unauthenticated clients will receive a 401 Unauthorized response instead of
// the JSON data.
app.get( '/api', cas.block, function ( req, res ) {
    res.json( { success: true } );
});
 
// An example of accessing the CAS user session variable. This could be used to
// retrieve your own local user records based on authenticated CAS username.
app.get( '/api/user', cas.block, function ( req, res ) {
    res.json( { cas_user: req.session[ cas.session_name ] } );
});
 
// Unauthenticated clients will be redirected to the CAS login and then to the
// provided "redirectTo" query parameter once authenticated.
//app.get( '/authenticate', cas.bounce_redirect );
 
// This route will de-authenticate the client with the Express server and then
// redirect the client to the CAS logout page.
app.get( '/logout', cas.logout );
*/

// import routes
import aulaRoutes from './routes/aula.server.route';

// define our app using express
const app = express();

// express-busboy to parse multipart/form-data
bb.extend(app);

// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));


// set the port
const port = process.env.PORT || 3001;

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Inventario', {
  useMongoClient: true,
});

// add Source Map Support
SourceMapSupport.install();

app.use('/api', aulaRoutes);

app.get('/', (req,res) => {
  return res.end('Api working');
})

// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});



// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});
