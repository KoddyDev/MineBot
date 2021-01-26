module.exports.help = {
    'name': 'manage',
    'aliases': ['']
    }
    const BlackList = require("../../db/BlackListSystem")
    const Discord = require("discord.js")
exports.run = async (client, message, args) => {

    let serverid = args[0];
    let server = client.guilds.cache.get(serverid);
    if(!server) { message.reply("Servidor Inexistente ou então eu não estou nele.") } else {
        const findG = BlackList.findOne({where: {grupo: serverid}})
        if(!findG) {
            server.leave();
            findG.
            message.reply("Grupo adicionado na blacklist com sucesso.")
        } else {
            message.reply("Grupo removido da blacklist com sucesso!")
        }
    }


}