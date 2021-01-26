exports.run = (client, message, args) => {

        const queue = message.client.queue.get(message.guild.id);
        queue.voiceChannel.leave();

}
exports.help = {
        'name': 'leave',
        'aliases': ['sair']
      }