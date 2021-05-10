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
 .setTitle('Fortnite daily releaseb testing server stats:')
 .addField('App name', `${versionValue.DailyReleaseB.app}`)
 .addField('Name', `${versionValue.DailyReleaseB.nameID}`)
 .addField('Branch', `${versionValue.DailyReleaseB.branch}`)
 .addField('Build', `${versionValue.DailyReleaseB.build}`)
 .addField('Cln', `${versionValue.DailyReleaseB.cln}`)
.addField('ModuleName', `${versionValue.DailyReleaseB.moduleName}`)
.addField('Version', `${versionValue.DailyReleaseB.version}`)
.addField('Override Properties Version', `${versionValue.DailyReleaseB.overridePropertiesVersion}`)
.addField('Build Date', `${versionValue.DailyReleaseB.buildDate}`);

 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "dailyreleaseb",
    description: "",
    usage: "l.dailyreleaseb",
    aliases: ['dailyreleaseb']
}