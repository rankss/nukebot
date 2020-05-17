module.exports = {
	name: "scan",
	description: "Calculates upper and lower bound of scan",
	execute(msg, tokens) {

	var type = tokens[0];
	var scanUnits = parseInt(tokens[1]);

	if (isNaN(scanUnits)) {
		msg.channel.send(`Please input a positive integer retard.`);
		return;
	}

	if (type != "norm" && type != "adv" && type != "inc") {
		msg.channel.send(`Do you just pretend you're stupid or are you actually stupid?`);
		return;
	}

	if (type == "norm" || type == "inc") {
		console.log(`${scanUnits}`);
		var minUnits = scanUnits * 0.66;
		var maxUnits = scanUnits * 2.0;
	}
	if (type == "adv") {
		var minUnits = scanUnits * 0.8;
		var maxUnits = scanunits * 1.33;
	}
	
	minUnits = Math.floor(minUnits);
	maxUnits = Math.ceil(maxUnits);
	
	msg.reply(`\nYour scan: ${scanUnits} units.\nMinimum: ${minUnits} units.\nMaximum: ${maxUnits} units.\nMay the odds be ever in your favour, commander.`);
	},
};
