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
 .setTitle('Fortnite Daily Main testing server stats:')
 .addField('App name', `${versionValue.DailyMain.app}`)
 .addField('Name', `${versionValue.DailyMain.nameID}`)
 .addField('Branch', `${versionValue.DailyMain.branch}`)
 .addField('Build', `${versionValue.DailyMain.build}`)
 .addField('Cln', `${versionValue.DailyMain.cln}`)
.addField('ModuleName', `${versionValue.DailyMain.moduleName}`)
.addField('Version', `${versionValue.DailyMain.version}`)
.addField('Override Properties Version', `${versionValue.DailyMain.overridePropertiesVersion}`)
.addField('Build Date', `${versionValue.DailyMain.buildDate}`);

 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "dailymain",
    description: "",
    usage: "l.dailymain",
    aliases: ['dailymain']
}