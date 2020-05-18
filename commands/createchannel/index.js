module.exports = {
  name: "createchannel",
  description: "Creates channel based on name",
  execute(msg, tokens) {
    var channelname = tokens[0];
    if (tokens[1] != "earth" || tokens[1] != "mars" || tokens[1] != "galaxy" || tokens[1] != "fantasy" || tokens[1] != "families")
    {
        msg.reply("This world does not exist in our records. Perhaps you could fuck off to it?")
        return;
    }
    var world = msg.guild.channels.resolve(tokens[1]);
    var server = msg.guild;
    var category = server.channels.cache.find((channel) => channel.name === tokens[1]);

    if (
      msg.member.roles.cache.find((role) => role.name === "Admin") ||
      msg.member.roles.cache.find((role) => role.name === "Developer")
    ) {
      msg.guild.channels.create(channelname, {
        type: "text",
        parent: category,
        permissionOverwrites: [
          {
            id: msg.author.id,
            allow: ["VIEW_CHANNEL"],
          },
        ],
      });
      msg.reply(`The channel ${channelname} has been created.`);
      return;
    }
    else
    {
        msg.reply(`You have no power here.`);
        return;
    }
  }
};
