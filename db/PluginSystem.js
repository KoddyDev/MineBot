const { DataTypes, Model } = require('sequelize');

module.exports = class Plugins extends Model {
    static init(sequelize) {
        return super.init({
            ticketId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            authorId: { type: DataTypes.STRING },
            pluginName: { type: DataTypes.STRING },
            description: { type: DataTypes.STRING },
            version: { type: DataTypes.STRING },
            download: { type: DataTypes.TEXT },
            valor: { type: DataTypes.STRING }
           
        }, {
            tableName: 'Plugins',
            timestamps: true,
            sequelize
        });
    }
}