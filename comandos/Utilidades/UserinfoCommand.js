const Discord = require('discord.js');
const moment = require("moment");

const status = {
  
    offline: "Offline/Fake Offline",
    online: "Online",
    idle: "Ausente",
    dnd: "Não Pertube"
};

exports.run = (client, message, args) =>{
    var permissions = [];
    var acknowledgements = 'Não';
   
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }); 
    
    if(message.member.hasPermission("KICK_MEMBERS")){
        permissions.push("Kickar Membros");
    }
    
    if(message.member.hasPermission("BAN_MEMBERS")){
        permissions.push("Banir Membros");
    }
    
    if(message.member.hasPermission("ADMINISTRATOR")){
        permissions.push("Administrador");
    }

    if(message.member.hasPermission("MANAGE_MESSAGES")){
        permissions.push("Gerenciar Messagens");
    }
    
    if(message.member.hasPermission("MANAGE_CHANNELS")){
        permissions.push("Gerenciar Canais");
    }
    
    if(message.member.hasPermission("MENTION_EVERYONE")){
        permissions.push("Mencionar Todos");
    }

    if(message.member.hasPermission("MANAGE_NICKNAMES")){
        permissions.push("Gerenciar Nicknames");
    }

    if(message.member.hasPermission("MANAGE_ROLES")){
        permissions.push("Gerenciar Roles");
    }

    if(message.member.hasPermission("MANAGE_WEBHOOKS")){
        permissions.push("Gerenciar Webhooks");
    }

    if(message.member.hasPermission("MANAGE_EMOJIS")){
        permissions.push("Gerenciar Emojis");
    }

    if(permissions.length == 0){
        permissions.push("Sem permissões.");
    }

    if(`<@${member.user.id}>` == message.guild.owner){
        acknowledgements = 'Criador do Servidor';
    }

    const embed = new Discord.MessageEmbed()
        .setDescription(`<@${member.user.id}>`)
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setColor(randomColor)
        .setFooter(`ID: ${message.author.id}`)
        .setThumbnail(member.user.displayAvatarURL)
        .setTimestamp()
        .addField("Status",`${status[member.user.presence.status]}`, true)
        .addField('Entrou em: ',`${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
        .addField("Criado em: ",`${moment(message.author.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
        .addField("Permissões: ", `${permissions.join(', ')}`, true)
        .addField(`Cargos [${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "No Roles"}`, true)
        .addField("Dono do Servidor: ", `${acknowledgements}`, true);
        
    message.channel.send({embed});

}
exports.help = {
    'name': 'userinfo',
    'aliases': ['infouser', 'usuariom']
  }