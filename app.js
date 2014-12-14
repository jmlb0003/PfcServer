
// BASE SETUP
// =============================================================================
var app = require('express')();
var bodyParser = require('body-parser');
var env = app.get('env') == 'development' ? 'dev' : app.get('env');
var port = process.env.PORT || 8080;

// IMPORT MODELS
// =============================================================================
// db config
var config = require('./database.json')[env];
var password = config.password ? config.password : null;
console.log('ap1');
// initialize database connection
var Sequelize = require('sequelize')
	, sequelize = new Sequelize(
	config.database,
	config.user,
	config.password, {
	    dialect: config.driver,
	    port: config.port,
	    logging: console.log, 
	    define: {
	    	timestamps: false //Timestamp columns -> false
	    }
	});
console.log('ap2');
sequelize
	.authenticate()
  	.complete(function(err) {
    	if (!!err) {
      		console.log('Unable to connect to the database:', err);
    	} else {
      		console.log('Connection has been established successfully.');
      		// START THE SERVER
			// =============================================================================
			console.log('ap3');
			app.listen(port);
			console.log('ap4');
			console.log('Magic happens on port ' + port);

			var poisQueries = require('./pois_query')(sequelize);
			app.get('/pois', poisQueries.getAll);
    	}
  	});
console.log('ap5');

/*var poisQueries = require('./routes/pois_query')(sequelize);
sequelize.sync().success(function(err) {
	app.get('/pois', poisQueries.get);
})
*/