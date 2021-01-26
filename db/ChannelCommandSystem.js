const { DataTypes, Model } = require('sequelize');

module.exports = class Usuarios extends Model {
    static init(sequelize) {
        return super.init({
            grupo: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            canal: { 
                type: DataTypes.STRING
            },
            canalstf: {
                type: DataTypes.STRING
            }
        }, {
            tableName: 'ChannelCommand',
            timestamps: true,
            sequelize
        });
    }
}