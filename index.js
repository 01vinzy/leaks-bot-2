const Discord = require('discord.js');
const config = require('./config.json');
const Auth = require("./libs/auth.js");
const auth = new Auth();

let shop = "";
var http = require('http');



checkUpdate();
  
 async function checkUpdate(){
    await fetch("https://discord.com/api/webhooks/838936023450910731/ElxpOC-YclCRV8pmyks0Jj11PgZDLqVHH1jsq7YpCM_7c0amaU8lf8uGvxpUwApHzu65",{
      method : 'POST',
      headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
      body : JSON.stringify( {"content" : "works!2"} )
    })

 }

http.createServer(function (req, res) {
  res.write("leaks bot is online");
  res.end();
}).listen(8080);

const bot = new Discord.Client({disableEveryone: true});

require("./utils/eventHandler")(bot)

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})


function startUp() {
    try {
      auth.login(null, '');
    } catch (err) {
      auth.login('newAuth', '');
    }
    bot.on("ready", (channel) => {
      console.log(`Logged in as ${bot.user.tag}!`);
      console.log(`If this is the first time using the bot, please run ${config.prefix}setupauth {authorization_code} to setup the auth`);
    });
    bot.login(process.env.token);
  }
  
  startUp();