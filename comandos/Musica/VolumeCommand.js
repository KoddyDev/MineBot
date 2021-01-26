exports.run = async(client, message, args) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Você precisa entrar em um canal de voz primeiro!');
    
    let queue = message.client.queue.get(message.guild.id)

    if(!args[0]) return message.channel.send({
        embed: {
            description: 'O volume atual é ' + queue.volume
        }
    })

    if(args[0] > 100000) return message.channel.send('Bem, vamos esperar que nos encontremos no céu :grin:')

    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    queue.volume = args[0]
    message.channel.send({
        embed: {
            description: 'Volume setado em ' + args[0]
        }
    })
}
exports.help = {
    'name': 'volume',
    'aliases': ['sound']
  }