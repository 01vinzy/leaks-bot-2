const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../libs/auth.js');
const { isNull, isNullOrUndefined } = require("util");
const { NOTFOUND } = require("dns");
const auth = new Auth();
module.exports.run = async (bot, message, args) => {
    let getVersion = async () => {
        let response = await Axios.get("https://ft308v428dv3.statuspage.io/api/v2/summary.json")
        let version = response.data;
        return version
      }
let versionValue = await getVersion()
 const embed = new Discord.MessageEmbed()
 .setTitle('Fortnite status:')
 .addField('name', `${versionValue.components[1].name}`)
 .addField('status', `${versionValue.components[1].status}`)
 .addField('name', `${versionValue.components[50].name}`)
 .addField('status', `${versionValue.components[50].status}`)
 .addField('name', `${versionValue.components[37].name}`)
 .addField('status', `${versionValue.components[37].status}`)
 .addField('name', `${versionValue.components[29].name}`)
 .addField('status', `${versionValue.components[29].status}`)
 .addField('name', `${versionValue.components[27].name}`)
 .addField('status', `${versionValue.components[27].status}`)
 .addField('name', `${versionValue.components[7].name}`)
 .addField('status', `${versionValue.components[7].status}`)
 

 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "fnstatus",
    description: "the status of fortnite",
    usage: "l.fnstatus",
    aliases: ['fnstatus']
}