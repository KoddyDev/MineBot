const { DataTypes, Model } = require('sequelize');

module.exports = class Usuarios extends Model {
    static init(sequelize) {
        return super.init({
            grupo: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            MuteRole: { 
                type: DataTypes.STRING
            },
            PunishChannel: { 
                type: DataTypes.STRING
            }
        }, {
            tableName: 'Punish',
            timestamps: true,
            sequelize
        });
    }
}