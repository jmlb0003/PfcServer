var Sequelize = require('sequelize');
console.log('en model');
module.exports = function(sequelize) {
	var Poi = sequelize.define('poi', {
		ID_Poi: { 
			type: Sequelize.INTEGER.UNSIGNED,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		Usuario_ID_usuario: {
			type: Sequelize.INTEGER.UNSIGNED,
			allowNull: false,
			defaultValue: 1
		},
		Nombre: {
			type: Sequelize.STRING,
			allowNull: false
		},
		Multimedia: {
			type: Sequelize.STRING,
			allowNull: false
		},
		Altitud: {
			type: Sequelize.DECIMAL(5,1),
			allowNull: false
		},
		Latitud: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		Longitud: {
			type: Sequelize.FLOAT,
			allowNull: false
		},
		Categoria: {
			type: Sequelize.STRING,
			allowNull: false
		},
		Subcategoria: {
			type: Sequelize.STRING,
			allowNull: true
		},
		Deporte_principal: {
			type: Sequelize.STRING,
			allowNull: true
		},
		Descripcion: {
			type: Sequelize.STRING,
			allowNull: true
		},
		Sitio_web: {
			type: Sequelize.STRING,
			allowNull: true
		},
		Horario_apertura: {
			type: Sequelize.STRING,
			allowNull: true,
			defaultValue: '00:00'
		},
		Horario_cierre: {
			type: Sequelize.STRING,
			allowNull: true,
			defaultValue: '00:00'
		},
		Edad_minima: {
			type: Sequelize.INTEGER.UNSIGNED,
			allowNull: true,
			defaultValue: 0
		},
		Edad_maxima: {
			type: Sequelize.INTEGER.UNSIGNED,
			allowNull: true,
			defaultValue: 0
		},
		Precio: {
			type: Sequelize.FLOAT.UNSIGNED,
			allowNull: true,
			defaultValue: 0
		}
	}, {
		tableName: 'poi',
		timestamps: false
	});
console.log('mod1');
	return {
		Poi: Poi
	};
	console.log('mod2');
};

