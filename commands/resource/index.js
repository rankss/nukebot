module.exports = {
    name: 'resource',
    description: 'Resource calculations',
    execute(msg, tokens) {

        var workers = parseInt(tokens[0]);

        const metalCost = [150, 500, 500, 2000, 5000];
        const oilCost = [0, 100, 500, 1000, 2500];
        const metalPercentage = [0.06, 0.08, 0.17, 0.18, 0.2];
        const oilPercentage = [0.03, 0.05, 0.07, 0.1, 0.12];

        var message = "\nWith your current workers, you will produce (without conquers and resource outposts):\n";
        for (var i = 0; i < 5; i++) {
            metalIncome = Math.floor(workers * metalPercentage[i]) + metalPercentage[i] * 100;
            oilIncome = Math.floor(workers * oilPercentage[i]) + oilPercentage[i] * 100;
            message += `Level ${i + 1}: ${Math.round(metalIncome)} metal, ${Math.round(oilIncome)} oil. Metal Payoff: ${Math.ceil(metalCost[i] / metalIncome)} ticks, Oil Payoff: ${Math.ceil(oilCost[i] / oilIncome)} ticks.\n`;
        }
        msg.reply(message);
    },
}