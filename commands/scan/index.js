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
    var minUnits;
    var maxUnits;
    if (type == "norm" || type == "inc") {
        minUnits = scanUnits * 0.66;
        maxUnits = scanUnits * 2;

    }
    else if (type == "adv") {
        minUnits = scanUnits * 0.8;
        maxUnits = scanUnits * 1.33;
    }
    console.log(minUnits);
    minUnits = Math.floor(minUnits);
    maxUnits = Math.ceil(maxUnits);
    console.log(Math.floor(0.66));
    console.log(maxUnits);
    msg.reply(`\nYour scan: ${scanUnits} units.\nMinimum: ${minUnits} units.\nMaximum: ${maxUnits} units.\nMay the odds be ever in your favour, commander.`);
  }
};