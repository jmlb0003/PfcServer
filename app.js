
// BASE SETUP
// =============================================================================
var express = require('express'),
	app = express();
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
			app.listen(port);
			console.log('Magic happens on port ' + port);
    	}
  	});


  	var model = require("./model")(sequelize);
	var Poi = model.Poi;


	var router = express.Router();

	var cabecera = {"api_pfc" :[]};

	router.route('/pois/:valor?')
	.get (function(req,res) {
		if (req.query.lat&&req.query.lon&&req.query.dist) {
			console.log('Latitud es ' + req.query.lat + ' y longitud es ' +req.query.lon+ 'y la distancia esss '+ req.query.dist);
			sequelize.query(
				"SELECT * " +
				"FROM poi " +
				"WHERE " +
				 	"(6371 * acos( cos((" + req.query.lat + " * PI() / 180)) * " +
	  				"cos((Latitud * PI() / 180)) * cos((Longitud * PI() / 180) - (" + req.query.lon + " * PI() / 180)) " +
	  				"sin((" + req.query.lat + " * PI() / 180)) * sin((Latitud * PI() / 180)) )) < '" + req.query.dist + "'"
			).success(function(myTableRows) {
		  		res.json(myTableRows);
			});
			
		} else {
			Poi.findAll()
			.then(function (pois) {
				cabecera.api_pfc.push(pois);
				res.json(cabecera);
			}).catch(function(err) {
				console.log(err);
				res.send("User not found");
			});
		}
	});



	app.use('/',router);



	



/*var poisQueries = require('./routes/pois_query')(sequelize);
sequelize.sync().success(function(err) {
	app.get('/pois', poisQueries.get);
})
*/