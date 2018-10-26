const Discord = require('discord.js');
const devs = ['466425075487342615','466425075487342615'];
var prefix = "$";
const adminprefix = "$"
const db = require('quick.db');
const client = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 

,ti={}  
,spee={};



const sWlc = {}
const premium = ['466425075487342615']
client.on('message', message => {
var prefix = "$";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "zombie"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
});
 


client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "zombie"
  }
   const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
       
     welcomer.send({embed:heroo});  
        
         
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
      const w = ['hbot3.png'];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = '30px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 245, 150);
                              
                              //NAMEً
                              ctx.font = '30px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(` `, 245, 80);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();
                   
                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
      
      })
      })
      
      }
      });

client.on('message', ALPHACODES => { 
  var sender = ALPHACODES.author
  if(!ALPHACODES.guild) return
  if(!sw[ALPHACODES.guild.id]) sw[ALPHACODES.guild.id] = {
  onoff: 'Off',
  ch:    'zombie',
  msk:   'zombie'
}
        if(ALPHACODES.content.startsWith(prefix + `set-wlc`)) {        
        let perms = ALPHACODES.member.hasPermission(`MANAGE_CHANNELS`)
        if(!perms) return ALPHACODES.channel.send('**You need `Manage Channels` permission**')
        let args = ALPHACODES.content.split(" ").slice(1)
        if(!args.join(" ")) return ALPHACODES.reply(`
  ** ${prefix}set-wlc toggle **
  ** ${prefix}set-wlc set [Channel Name] **
  ** ${prefix}set-wlc msg [Welcome ALPHACODES] **`) // ->set-wlc toggle - ->set-wlc set - ->set-wlc msg
        let state = args[0]
        if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'set' || !state.trim().toLowerCase() == 'msg' ) return ALPHACODES.reply(`
 ** ${prefix}set-wlc toggle **
 ** ${prefix}set-wlc set [Channel Name] **
 ** ${prefix}set-wlc msg [Welcome ALPHACODES] **`) // ->set-wlc toggle - ->set-wlc set - ->set-wlc msg
        if(state.trim().toLowerCase() == 'toggle') { 
        if(sw[ALPHACODES.guild.id].onoff === 'Off') return [ALPHACODES.channel.send(`**Welcome ALPHACODES Is **on** !**`), sw[ALPHACODES.guild.id].onoff = 'On']
        if(sw[ALPHACODES.guild.id].onoff === 'On')  return [ALPHACODES.channel.send(`**Welcome ALPHACODES Is **off** !**`), sw[ALPHACODES.guild.id].onoff = 'Off']
}
        if(state.trim().toLowerCase() == 'set') {
        let newch = ALPHACODES.content.split(" ").slice(2).join(" ")
        if(!newch) return ALPHACODES.reply(`${prefix}set-wlc set [Channel name]`)
        if(!ALPHACODES.guild.channels.find(`name`,newch)) return ALPHACODES.reply(`**I Cant Find This Channel.**`)
            sw[ALPHACODES.guild.id].ch = newch
            ALPHACODES.channel.send(`**Welcome channel Has Been Changed to ${newch}.**`)
} 
        if(state.trim().toLowerCase() == 'msg') {
        let newmsg = ALPHACODES.content.split(" ").slice(2).join(" ")
        if(!newmsg) return ALPHACODES.reply(`${prefix}set-wlc msg [New ALPHACODES]`)
            sw[ALPHACODES.guild.id].msk = newmsg
            ALPHACODES.channel.send(`**Welcome ALPHACODES Has Been Changed to ${newmsg}.**`)
} 
}
        if(ALPHACODES.content === prefix + 'set-wlc info') {
        let perms = ALPHACODES.member.hasPermission(`MANAGE_GUILD`) 
        if(!perms) return ALPHACODES.reply(`You don't have permissions.`)
        var embed = new Discord.RichEmbed()
        .addField(`Welcome ALPHACODES  `, `
On/Off  : __${sw[ALPHACODES.guild.id].onoff}__
Channel : __${sw[ALPHACODES.guild.id].ch}__
ALPHACODES : __${sw[ALPHACODES.guild.id].msk}__`)
        .setColor(`BLUE`)
        ALPHACODES.channel.send({embed})
}
        fs.writeFile("./setwlc.json", JSON.stringify(sw), (err) => {
        if (err) console.error(err)
});
})


//MHSTR END NOW THIS IS END
client.login(process.env.BOT_TOKEN);
