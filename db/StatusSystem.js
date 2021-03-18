const { DataTypes, Model } = require('sequelize');

module.exports = class Usuarios extends Model {
    static init(sequelize) {
        return super.init({
            grupo: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            ip: { 
                type: DataTypes.STRING
            }
        }, {
            tableName: 'Status',
            timestamps: true,
            sequelize
        });
    }
}