module.exports.help = {
    'name': 'gerarsenha',
    'aliases': ['pass', 'password']
}
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
      await message.reply("Gerando a senha..").then(async msg => {
        message.channel.startTyping();
        let embed = new Discord.MessageEmbed().setTitle("🔒 | Senha Segura")    .setFooter(message.guild.name + " - © 2021").setColor("#00ffff").setTimestamp()
        .setDescription("Enviei sua senha em seu privado!")
        message.reply(embed)
        msg.delete()
        message.channel.stopTyping();
        message.author.send("Gerando novamente").then(async msg2 => {
            let embed2 = new Discord.MessageEmbed().setTitle("🔒 | Senha Segura")    .setFooter(message.guild.name + " - © 2021").setColor("#00ffff").setTimestamp()
        .setDescription("A sua senha é: ||" + makeid(12) + "||")
        message.author.send(embed2)
     msg2.delete()




           
})
     })
    }