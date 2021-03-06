module.exports = {
    name: "scan",
    description: "Calculates upper and lower bound of scan",
    execute(msg, tokens) {
        var scanUnits = parseInt(tokens[0]);
        if (isNaN(scanUnits) || scanUnits < 0) {
            msg.channel.send(`Please input a positive integer retard.`);
            return;
        }
        var minUnits = Math.floor(scanUnits * 0.66);
        var maxUnits = Math.ceil(scanUnits * 2);
        msg.reply(`\nYour scan: ${scanUnits} units.\nMinimum: ${minUnits} units.\nMaximum: ${maxUnits} units.\nMay the odds be ever in your favour, commander.`);
    },
};
