const { DataTypes, Model } = require('sequelize');

module.exports = class Captcha extends Model {
    static init(sequelize) {
        return super.init({
            grupo: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            canal: { 
                type: DataTypes.STRING
            },
            cargo: {
                type: DataTypes.STRING
            }
        }, {
            tableName: 'Captcha',
            timestamps: true,
            sequelize
        });
    }
}