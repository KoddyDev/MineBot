exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Você precisa entrar em um canal de voz primeiro!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed: {
            description: 'Não estou tocando nada'
        }
    })
    if(queue.playing !== false)
    queue.connection.dispatcher.resume()
    message.react('▶')
    message.channel.send('Continuando as musicas!')
}
exports.help = {
    'name': 'resumir',
    'aliases': ['resume', 'despausar', 'continuar']
  }