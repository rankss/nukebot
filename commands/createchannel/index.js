module.exports = {
    name: "createchannel",
    description: "Creates channel based on name",
    execute(msg, tokens) {
        var channelName = tokens[1];
        const allowedChannels = ["earth", "mars", "fantasy", "families"];
        if (!(tokens[0] in allowedChannels)) {
            msg.reply(
                "This world does not exist in our records. Perhaps you could fuck off to it?"
            );
        return;
        }
        var world = msg.guild.channels.resolve(tokens[0]);
        var server = msg.guild;
        var category = server.channels.cache.find(
            (channel) => channel.name === tokens[0]
        );

        if (
            msg.member.roles.cache.find((role) => role.name === "Admin") ||
            msg.member.roles.cache.find((role) => role.name === "Developer")
        ) {
            msg.guild.channels.create(channelName, {
                type: "text",
                parent: category,
                permissionOverwrites: [{
                    id: msg.author.id,
                    allow: ["VIEW_CHANNEL"],
                },],
            });
            msg.reply(`The channel ${channelName} has been created.`);
            return;
        } else {
            msg.reply(`You have no power here.`);
            return;
        }
    },
};
