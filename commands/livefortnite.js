const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../libs/auth.js');
const auth = new Auth();
module.exports.run = async (bot, message, args) => {
    let getVersion = async () => {
        let response = await Axios.get("https://api.nitestats.com/v1/epic/staging/fortnite")
        let version = response.data;
        return version
      }
let versionValue = await getVersion()
 const embed = new Discord.MessageEmbed()
 .setTitle('Fortnite Live server stats:')
 .addField('App name', `${versionValue.FortniteLive.app}`)
 .addField('Name', `${versionValue.FortniteLive.nameID}`)
 .addField('Branch', `${versionValue.FortniteLive.branch}`)
 .addField('Build', `${versionValue.FortniteLive.build}`)
 .addField('Cln', `${versionValue.FortniteLive.cln}`)
.addField('ModuleName', `${versionValue.FortniteLive.moduleName}`)
.addField('Version', `${versionValue.FortniteLive.version}`)
.addField('Override Properties Version', `${versionValue.FortniteLive.overridePropertiesVersion}`)
.addField('Build Date', `${versionValue.FortniteLive.buildDate}`);

 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "fortnitelive",
    description: "",
    usage: "l.fortnitelive",
    aliases: ['fortnitelive']
}