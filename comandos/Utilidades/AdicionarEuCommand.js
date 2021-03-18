module.exports.help = {
    'name': 'add',
    'aliases': ['adicionar']
}
const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("🤖 | " + client.user.username)
    .addField("Me adicione em seu servidor!", "[Basta clicar Aqui!](https://discord.com/oauth2/authorize?client_id="+ client.user.id +"&permissions=8&scope=bot)")
    .setFooter(message.guild.name + " - © 2021").setColor("#00ffff").setTimestamp()
    message.reply(embed)
}