const { DataTypes, Model } = require('sequelize');

module.exports = class Whitelist extends Model {
    static init(sequelize) {
        return super.init({
            grupo: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            dono: { 
                type: DataTypes.STRING
            }
        }, {
            tableName: 'BlackList',
            timestamps: true,
            sequelize
        });
    }
}