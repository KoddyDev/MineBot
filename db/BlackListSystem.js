const { DataTypes, Model } = require('sequelize');

module.exports = class Whitelist extends Model {
    static init(sequelize) {
        return super.init({
            dono: { 
                type: DataTypes.STRING,
                primaryKey: true
            },
            grupo: {
                type: DataTypes.STRING
            }
            
        }, {
            tableName: 'BlackList',
            timestamps: true,
            sequelize
        });
    }
}