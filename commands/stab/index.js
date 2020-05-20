module.exports = {
    name: "stab",
    description: "STAB",
    execute(msg, tokens) {
        const memes = [
            "https://images7.memedroid.com/images/UPLOADED199/564b9147dbe18.jpeg",
            "https://i.kym-cdn.com/photos/images/original/001/235/567/bfd.jpg",
            "https://i.kym-cdn.com/entries/icons/original/000/027/328/character.jpg",
        ];
        const chosenmeme = [memes[Math.floor(Math.random() * memes.length)]];
        var mention = tokens[0];
        if (!mention) return;

        if (mention.startsWith("<@") && mention.endsWith(">")) {
            mention = mention.slice(2, -1);

            if (mention.startsWith("!")) {
                mention = mention.slice(1);
            }

            mention = "<@" + mention + ">";
            msg.channel.send(tokens[0], {
                mention,
                files: chosenmeme,
            });
        }
    },
};
