module.exports = {
    name: "armorshred",
    description: "calculate armor shred",
    execute(msg, tokens) {
  
        const ratios = {"inf": 1, "veh": 2, "tnk": 3}
        const attack = tokens[0];
        const target = tokens[1]
        const rngUnits = parseInt(tokens[2]);
        const dmgUnits = parseInt(tokens[3]);
        
        var armHP = 8 * ratios[target];
        const dmgATK = 7 * ratios[attack];
        const rngATK = 4 * ratios[attack];
        
        var infVSveh = attack == "inf" && target == "veh";
        var vehVStnk = attack == "veh" && target == "tnk"
        var tnkVSinf = attack == "tnk" && target == "inf"

        if (infVSveh || vehVStnk) 
            armHP *= 0.75; 
        
        var round1 = Math.floor((rngUnits * rngATK) / armHP);
        var round2 = round1 + Math.floor((dmgUnits * dmgATK) / armHP);

        msg.reply(`\nRound 1: ${round1} units.\nRound 2: ${round2} units.`)

        if (tnkVSinf)
            msg.channel.send("Flame tanks go FFFFFFFFF.");
    },
};
