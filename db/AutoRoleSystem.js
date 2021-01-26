const { DataTypes, Model } = require('sequelize');

module.exports = class Usuarios extends Model {
    static init(sequelize) {
        return super.init({
            grupo: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            cargo: { 
                type: DataTypes.STRING
            }
        }, {
            tableName: 'AutoRole',
            timestamps: true,
            sequelize
        });
    }
}