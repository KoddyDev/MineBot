exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Você precisa entrar em um canal de voz primeiro!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue){ return message.channel.send({
        embed: {
            description: 'Não estou tocando nada no momento.`',
            color: 'BLACK'
        }
    })
}
    if(queue.songs.length !== 0) {
        message.react('✅')
        queue.connection.dispatcher.end('Prontinho! Pulei de musica.')
    }
}
exports.help = {
    'name': 'pular',
    'aliases': ['skip']
  }