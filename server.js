var express         = require('express')
  , http            = require('http')
  , morgan          = require('morgan')
  , cookieParser    = require('cookie-parser')
  , bodyParser      = require('body-parser')
  , methodOverride  = require('method-override')
  , mongoose        = require('mongoose')
  , uriUtil         = require('mongodb-uri')
  , connection      = require('./config/database.js')
  , db              = mongoose.connection
  , app             = express();

/*
  - configure the express app -
*/
app.set( 'port', process.env.PORT || 3000 );
app.use('/', express.static( __dirname + '/app' ));
app.use('/bower_components',  express.static( __dirname + '/bower_components' ));
app.use( morgan('dev') );
app.use( cookieParser() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded ({ extended : true }) );
app.use( methodOverride() );
app.use( function( err, req, res, next ) {
  res.status( err.status || 500 );
  res.render( 'error', { message: err.message, error: {} }
  );
});

/*
  - configure the database -
  set socket options at both server and replica set level
  with a 30 second connection timeout, helps mitigate errors
*/
var dbOptions = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };

/*
  format mongo uri to mongoose uri, pass in uri, options and connect
*/
var mongooseUri = uriUtil.formatMongoose( connection.URI );
    mongoose.connect( mongooseUri, dbOptions );

/*  when the connection is opened, init server ( a one-time-event per connection instance ) */
db.once('open', function () {
  console.log('The database connection has successfully opened at ' + mongooseUri  );
    initialize();
});

/*  when the connection is established ( a sustained-event per connection instance )  */
db.on('connected', function () {
  console.log( 'The database is succesfully connected to : ' + mongooseUri );
});

/* when there's a connection error ( outside the context of an individual database operation ) */
db.on( 'error', console.error.bind( console, 'connection error:' ) );

/*  when disconnected */
db.on('disconnected', function () {
  console.log( 'The database has disconnected' );
});

/* if the node process ends, close the database connection */
process.on('SIGINT', function() {
  db.close(function () {
    console.log( 'The database has disconnected through app termination' );
    process.exit( 0 );
  });
});

/* load the router and pass in the configured express app */
require('./router/routes.js')( app );

/*  init server on db-connect once-event */
function initialize() {
  http.createServer( app ).listen( app.get( 'port' ), function(){
    console.log( 'Express server successfully listening on port : ' + app.get( 'port' ) );
  });
}