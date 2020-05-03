module.exports = {
    name: 'shield',
    description: 'Calculates shield duration from the tick shield pops',
    execute(msg, tokens) {
        var pop = parseInt(tokens[0]);
        if (isNaN(pop) || pop < 1) {
            msg.channel.send(`Please input a positive integer retard.`);
            return;
        }

        if (pop > 3000) {
            msg.channel.send(`Eras don't last that long idiot.`);
            return;
        }

        var message = "\nOk, since you idiots can't do math, I will do it for you\n";
        for (var i = 3; i <= 12; i += 3) {
            message += `${i} Tick: Attack lands Tick **${pop + i - 1}**\n`;
        }
        msg.reply(message);
    },
}