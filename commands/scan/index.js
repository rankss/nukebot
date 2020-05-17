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

    if (type != "normal" && type != "advanced" && type != "incoming") {
      msg.channel.send(`Do you just pretend you're stupid or are you actually stupid?`);
    return;
    }

    var minUnits;
    var maxUnits;
    if (type == "normal" || type == "incoming") {
        minUnits = scanUnits * 0.66;
        maxUnits = scanunits * 2;
    }
    else if (type == "advanced") {
        minUnits = scanUnits * 0.8;
        maxUnits = scanunits * 1.33;
    }

    minUnits = Math.floor(minUnits);
    maxUnits = Math.ceil(maxUnits);
    msg.reply(`\nYour scan: ${scanUnits} units.\nMinimum: ${minUnits} units.\nMaximum: ${maxUnits} units.\nMay the odds be ever in your favour, commander.`);
  }
};
