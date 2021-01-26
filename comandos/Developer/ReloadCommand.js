exports.run = (client, message, args) => {
const config = require("../config.json")
const user = message.author;
          if(user.id !== config.ids.users.dev) return message.reply("apenas o <@" + config.ids.users.dev + "> pode ultilizar este comando, por tanto, pare de tentar, ou será mutado.");
          
  if (!args || args.length < 1)
    return message.reply("escreva o comando que deseja dar reload!");

    const commandName = args[0];

    if(!client.commands.has(commandName)) {
      return message.reply("comando inexistente!");
    }

    delete require.cache[require.resolve(`./${commandName}.js`)];

    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`o comando de **${commandName}** foi recarregado com sucesso!`);
}
exports.help = {
  'name': 'reload',
  'aliases': ['recarregar']
}