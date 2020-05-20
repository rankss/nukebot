module.exports = {
  name: "stab",
  description: "STAB",
  execute(msg, tokens) {
      var mention = tokens[0]
        if (!mention) return;

    if (mention.startsWith("<@") && mention.endsWith(">")) {
    mention = mention.slice(2, -1);

    if (mention.startsWith("!")) {
      mention = mention.slice(1);
    }
      console.log(mention);
    mention = "<@" + mention + ">";
  msg.channel.send(tokens[0], {mention,
    files: ["https://i.kym-cdn.com/photos/images/original/001/235/567/bfd.jpg"],
  });
  }
},
}
