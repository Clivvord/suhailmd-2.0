const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "https://app.koyeb.com/?service_type=web&step=serviceType"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="Clivvord@gmail.com"
global.location="Abuja,Nigeria."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://Clivvord:010307Suhail@cluster0.my8yj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348038663996";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348038663996";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_56_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNixcbiAgICAgICAgMjE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDczLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NixcbiAgICAgICAgOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMCxcbiAgICAgICAgODcsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NixcbiAgICAgICAgOTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzLFxuICAgICAgICA5NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTczLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTExLFxuICAgICAgICAzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWHQyQTdlMEpjdkRHTGRtN2dWbUZ3YkU3ellpV2wzbDU4bkJsRVN3UzVKYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSXV4cEZMbHhUcTJkRk1vRmpqX3k5QVwiLFxuICBcInBob25lSWRcIjogXCIzOTk4MGFmYy01ZDZiLTQwNGUtODkwMi1kYjljODJiNjFmZTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYxLFxuICAgICAgMzAsXG4gICAgICAxOSxcbiAgICAgIDI1MCxcbiAgICAgIDMyLFxuICAgICAgODUsXG4gICAgICAxODIsXG4gICAgICAyMzAsXG4gICAgICAxMDUsXG4gICAgICA3NCxcbiAgICAgIDQ5LFxuICAgICAgMTc0LFxuICAgICAgMTc0LFxuICAgICAgNzEsXG4gICAgICAyMDUsXG4gICAgICAxMzEsXG4gICAgICAxMTEsXG4gICAgICAyMTIsXG4gICAgICAyNTIsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMixcbiAgICAgIDg0LFxuICAgICAgMjMxLFxuICAgICAgNTAsXG4gICAgICAxMyxcbiAgICAgIDE2MSxcbiAgICAgIDExNixcbiAgICAgIDMyLFxuICAgICAgMTg2LFxuICAgICAgMjAxLFxuICAgICAgMTY2LFxuICAgICAgMTczLFxuICAgICAgMTg0LFxuICAgICAgMTgsXG4gICAgICA3MCxcbiAgICAgIDExMSxcbiAgICAgIDExNyxcbiAgICAgIDIxLFxuICAgICAgMTc3LFxuICAgICAgNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLYlFuWWtHRU9ITGtib0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlI2aTd4OElEa1NSald4L1U3elB5V1V1WCswR05zQUsrYXBSam5hMU42Mms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidldrT0FUNHJiaUZYeGUwSzVDU0FNREFhZE5jSkJRUTFNTkFFa3Exa2xRY1pJdmZoclZTUDlON3hLbmw4QUNacnU4RGxvbnc0UmxwdDg4cVNjOEFSQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieFQ2QVJtU0ZpazdDNkdIWWRoL242WEl1VkhkNGxLQUlKN1dEZHZkakpsNFhoZGFYV0pUK0R1VTgrYmV2NjdKN1N3RXp3NVZteW1PT1hxSCt2YWZhZ1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDM4NjYzOTk2OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQyBsIGkgdiB2IG8gciBkXCIsXG4gICAgXCJsaWRcIjogXCIyNzQ5MTk4NDk5OTk4OjI2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAzODY2Mzk5NjoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjUzNTc4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZpZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmlkLmpzb24iOiAie1wia2V5RGF0YVwiOlwicVVHbmNDOEU1ZEZycGZVQnBIZkFMeHZVRFBzN2pMekR1WStRVUlVSXp6VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjI5OTcyNTE4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGaWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqZTl0bFp0bkZUcTUrTm1EL005bnJlVEVIdFZiaHR0N0xtMUdYbmZJRUw4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2Mjk5NzI1MTgsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmlmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWDQrS3pVd3pjRXI4R0tpS3RMTWd5L0Y2aXd0bTRqV0Vtdm9oTVNUaU0rWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjI5OTcyNTE4LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZpZy5qc29uIjogIntcImtleURhdGFcIjpcIlhEWEdPRkRXVEZuRXVFSWthZ1F1a0MwQ01oS0pSQ1RacllCZnMxS0FRV1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYyOTk3MjUxOCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI1MzU3NjI0MzVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Clivvord",
  packname: process.env.PACK_NAME || "Clivvord",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Clivvord",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
