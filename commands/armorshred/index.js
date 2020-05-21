module.exports = {
    name: "armorshred",
    description: "calculate armor shred",
    execute(msg, tokens) {
        const chassis = ["inf", "veh", "tnk"];
        const ratios = {"inf": 1, "veh": 2, "tnk": 3}
        const attack = tokens[0];
        const target = tokens[1];

    
        if (!(chassis.includes(attack)) || !(chassis.includes(target))) {
            msg.reply("I'm not sure what you're trying to bring into battle, but I don't even think you can handle a slingshot.")
            return;
        }

        if (isNaN(tokens[2]) || isNaN(tokens[3] || tokens[2] < 0 || tokens[3] < 0)) {
            msg.reply("honestly, I thought you'd know how to count by now. I see I set my expectations too high.")
            return;
        }

  
        const rngUnits = parseInt(tokens[2]);
        const dmgUnits = parseInt(tokens[3]);
        
        var armHP = 8 * ratios[target];
        const dmgATK = 7 * ratios[attack];
        const rngATK = 4 * ratios[attack];
        
        const infVSveh = attack == "inf" && target == "veh";
        const vehVStnk = attack == "veh" && target == "tnk"
        const tnkVSinf = attack == "tnk" && target == "inf"

        if (infVSveh || vehVStnk) 
            armHP *= 0.75; 
        
        var round1 = Math.floor((rngUnits * rngATK) / armHP);
        var round2 = round1 + Math.floor((dmgUnits * dmgATK) / armHP);
        var total = round1 + round2
        var output = `\nRound 1: ${round1} units.\nRound 2: ${round2} units.\nTotal: ${total} units.`

        if (infVSveh)
            output += "\npew pew!";
        if (tnkVSinf)
            output += "\nFlame tanks go FFFFFFFFF.";
        
        msg.reply(output);
    },
};
