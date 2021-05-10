const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../libs/auth.js');
const auth = new Auth();
module.exports.run = async (bot, message, args) => {
    let getVersion = async () => {
        let response = await Axios.get("https://fortnite-public-service-events-prod.ol.epicgames.com/fortnite/api/version")
        let version = response.data;
        return version
      }
let versionValue = await getVersion()
 const embed = new Discord.MessageEmbed()
 .setTitle('events server stats:')
 .addField('Name', `${versionValue.moduleName}`)
 .addField('Build', `${versionValue.build}`)
 .addField('Version', `${versionValue.version}`)
 .addField('Branch', `${versionValue.branch}`)
 .addField('Changelist', `${versionValue.cln}`);
 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "events",
    description: "events",
    usage: "l.events",
    aliases: []
}