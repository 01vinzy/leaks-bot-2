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
 .setTitle('Fortnite Release Play testB server stats:')
 .addField('App name', `${versionValue.ReleasePlaytestB.app}`)
 .addField('Name', `${versionValue.ReleasePlaytestB.nameID}`)
 .addField('Branch', `${versionValue.ReleasePlaytestB.branch}`)
 .addField('Build', `${versionValue.ReleasePlaytestB.build}`)
 .addField('Cln', `${versionValue.ReleasePlaytestB.cln}`)
.addField('ModuleName', `${versionValue.ReleasePlaytestB.moduleName}`)
.addField('Version', `${versionValue.ReleasePlaytestB.version}`)
.addField('Override Properties Version', `${versionValue.ReleasePlaytestB.overridePropertiesVersion}`)
.addField('Build Date', `${versionValue.ReleasePlaytestB.buildDate}`);

 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "releaseplaytestb",
    description: "",
    usage: "l.releaseplaytestb",
    aliases: ['releaseplaytestb']
}