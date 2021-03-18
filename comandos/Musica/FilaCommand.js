const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Você precisa entrar em um canal de voz primeiro!');
    const queue = message.client.queue.get(message.guild.id)
    let status;
    if(!queue) status = 'Não estou tocando nada.'
    else status = queue.songs.map(x => '• ' + x.title + ' - Pedido por ' + `<@${x.requester.id}>`).join('\n')
    if(!queue) np = status
    else np = queue.songs[0].title
    if(queue) thumbnail = queue.songs[0].thumbnail
    else thumbnail = message.guild.iconURL()
    let embed = new MessageEmbed()
    .setTitle('Lista de musica')
    .setThumbnail(thumbnail)
    .setColor('GREEN')
    .addField('Tocando agora', np, true)
    .setDescription(status)
    .setFooter(message.guild.name + " - © 2021").setColor("#00ffff")
    message.channel.send(embed)
}

exports.help = {
    'name': 'fila',
    'aliases': ['queue']
  }