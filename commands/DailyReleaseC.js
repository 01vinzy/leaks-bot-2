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
 .setTitle('Fortnite daily releasec testing server stats:')
 .addField('App name', `${versionValue.DailyReleaseC.app}`)
 .addField('Name', `${versionValue.DailyReleaseC.nameID}`)
 .addField('Branch', `${versionValue.DailyReleaseC.branch}`)
 .addField('Build', `${versionValue.DailyReleaseC.build}`)
 .addField('Cln', `${versionValue.DailyReleaseC.cln}`)
.addField('ModuleName', `${versionValue.DailyReleaseC.moduleName}`)
.addField('Version', `${versionValue.DailyReleaseC.version}`)
.addField('Override Properties Version', `${versionValue.DailyReleaseC.overridePropertiesVersion}`)
.addField('Build Date', `${versionValue.DailyReleaseC.buildDate}`);

 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "dailyreleasec",
    description: "",
    usage: "l.dailyreleasec",
    aliases: ['dailyreleasec']
}