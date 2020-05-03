const TOKEN = require('./token.json')
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
botCommands = require('./commands')

Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.login(TOKEN.TOKEN);

function parse(argument) {
    if (argument[0] === ".") {
        console.log(argument.slice(1).split(" "));
        return argument.slice(1).split(" ");
    }
    return []
}

bot.on("ready", () => {
    console.log("I am ready!");
});

bot.on('message', (msg) => {
    const tokens = parse(msg.content);
    const command = tokens.shift();
    if (!bot.commands.has(command)) return;

    try {
        bot.commands.get(command).execute(msg, tokens);
    } catch (error) {
        msg.reply(`Error!`);
    }
});

bot.on('guildMemberAdd', (member) => {
    const guild = member.guild;
    guild.channels.find("name", "world").send(`Welcome ${member.id}, please familiarize yourself with the server rules!`);
});

bot.on('guildMemberRemove', (member) => {
});