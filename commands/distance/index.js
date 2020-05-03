module.exports = {
    name: 'distance',
    description: 'Calculates distance between two points',
    execute(msg, tokens) {
        var n1 = parseInt(tokens[0].slice(2)), n2 = parseInt(tokens[2].slice(2));
        var e1 = parseInt(tokens[1].slice(2)), e2 = parseInt(tokens[3].slice(2));

        if (n1 < 0 || n2 < 0 || e1 < 0 || e2 < 0) {
            msg.channel.send(`Ok buddy, good try, real clever. Dumbass.`);
            return;
        }

        var nDiff = n1 - n2;
        var eDiff = e1 - e2;

        if (isNaN(nDiff) || isNaN(eDiff)) {
            msg.channel.send(`I don't know whatever the fuck you just tried to do.`);
            return;
        }

        var cardinality = Math.sqrt(nDiff * nDiff + eDiff * eDiff);
        var eDist = Math.max(Math.ceil(cardinality / 200), 3);
        var aDist = Math.max(Math.ceil(eDist / 2), 2);
        var nDist = Math.max(eDist, 6);

        if (eDist > 24) {
            msg.channel.send(`Distance out of range, try again bitch.`);
            return;
        }

        msg.reply(`\nTotal distance: ${cardinality.toFixed(2)} km\nEnemy distance: ${eDist} ticks\nAlly distance: ${aDist} ticks\nNuke distance: ${nDist} ticks`);
    },
}