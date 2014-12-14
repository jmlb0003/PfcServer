//http://sequelizejs.com/docs/latest/models#block-1-line-4
//http://sequelizejs.com/docs/1.7.8/usage#raw-queries
//Como hacer una consulta para sequelize

console.log('en poisquerys');
module.exports = function (sequelize) {
	var model = require("./model")(sequelize);
	var Poi = model.Poi;
	return {
		getAll: function (req, res) {
			Poi.findAll()
			.then(function (pois) {
				res.send(pois);
			}).catch(function(err) {
				console.log(err);
				res.send("User not found");
			});
		}
	};
};
console.log('quer2');
/*
var models  = require('../models');
var express = require('express');
var router  = express.Router();

// REGISTER OUR ROUTES
// =============================================================================
app.use('/api', router);

// IMPORT ROUTES
// =============================================================================

// on routes that end in /pois
// ----------------------------------------------------
router.route('/pois')

// get pois near to lat/lon 
//(accessed at GET http://localhost:8080/api/pois)
.get(function(req, res) {
	var poi = Poi.build();

	poi.all.success(function(pois) {
		if (pois) {
			res.json(pois);
		} else {
		  	res.send(401, "User not found");
		}
	}, function(error) {
		res.send("User not found");
	});
});

// on routes that end in /pois/lat=:c_lat&lon=:c_lon
// ----------------------------------------------------
router.route('/pois/lat=:c_lat&lon=:c_lon')

// get pois near to lat/lon 
//(accessed at GET http://localhost:8080/api/pois/lat=:c_lat&lon=:c_lon)
.get(function(req, res) {
	var poi = Poi.build();

	poi.retrieveAll(function(pois) {
		if (pois) {
			res.json(pois);
		} else {
		  	res.send(401, "User not found");
		}
	}, function(error) {
		res.send("User not found");
	});
});

*/

/*
// IMPORT ROUTES
// =============================================================================

// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/users/:user_id')

// update a user (accessed at PUT http://localhost:8080/api/users/:user_id)
.put(function(req, res) {
	var user = User.build();

	user.username = req.body.username;
	user.password = req.body.password;

	user.updateById(req.params.user_id, function(success) {
		console.log(success);
		if (success) {
			res.json({ message: 'User updated!' });
		} else {
		  res.send(401, "User not found");
		}
	  }, function(error) {
		res.send("User not found");
	  });
})

// get a user by id(accessed at GET http://localhost:8080/api/users/:user_id)
.get(function(req, res) {
	var user = User.build();

	user.retrieveById(req.params.user_id, function(users) {
		if (users) {
		  res.json(users);
		} else {
		  res.send(401, "User not found");
		}
	  }, function(error) {
		res.send("User not found");
	  });
})

// delete a user by id (accessed at DELETE http://localhost:8080/api/users/:user_id)
.delete(function(req, res) {
	var user = User.build();

	user.removeById(req.params.user_id, function(users) {
		if (users) {
		  res.json({ message: 'User removed!' });
		} else {
		  res.send(401, "User not found");
		}
	  }, function(error) {
		res.send("User not found");
	  });
});

// Middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});



*/