module.exports.config = {
  name: "info2",
  version: "1.0.1", 
  permssion: 0,
  premium: false,
  prefix: true,
  credits: "Joshua Sy", //don't change the credits please
  description: "Fahim and Bot info .",
  category: "info",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/eglhdZr.jpeg", 
            
            "https://i.imgur.com/eglhdZr.jpeg", 
            
            "https://i.imgur.com/eglhdZr.jpeg",

"https://i.imgur.com/eglhdZr.jpeg",
            
            ""];
  
var callback = () => api.sendMessage({body:`🌺🍒🐰❀𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍💝🐰🍒 

╔════•|      ✿      |•════╗
💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐
╚════•|      ✿      |•════╝

________________________________________

💠𝐁𝐎𝐓 𝐍𝐀𝐌𝐄💠 : ${global.config.BOTNAME}

🌼𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍🌼 : 『😽👉 𝗙𝗔𝗛𝗜𝗠 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬 👈😽』

🔥𝐁𝐈𝐎 𝐀𝐃𝐌𝐈𝐍🔥 : [ ⊱༅༎😽💚༅༎⊱


-আমি ভদ্র, বেয়াদব দুটোই🥱✌️

-তুমি যেটা ডি'জার্ভ করো, আমি সেটাই দেখাবো!🙂


⊱༅༎😽💚༅༎⊱ ]

🏠𝐀𝐃𝐃𝐑𝐄𝐒𝐒🏠 : ঢাকা, বাংলাদেশ

_____________🅲🅾🅽🆃🅰🅲🆃_____________

💥𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 (❶)💥 : https://www.facebook.com/FahimChowdury006?mibextid=ZbWKwL

💥𝐌𝐀𝐒𝐒𝐆𝐄𝐑 𝐈𝐃 (❷)💥 : m.me/100029901980367

✴️𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗✴️ : ${global.config.PREFIX}

❇️𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑✳️ : {🌻𝐌𝐑.𝐁𝐎𝐒𝐒 𝐅𝐀𝐇𝐈𝐌 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘
𝐕𝐈𝐑𝐓𝐔𝐀𝐋 𝐓𝐎𝐏 𝐅𝐌𝐙 𝐊𝐈𝐍𝐆
𝐘𝐎𝐔'𝐑 𝐍𝐄𝐗𝐓 𝐕𝐀𝐓𝐀𝐑 𝐗𝐀𝐍'𝐒
𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐌𝐀𝐒𝐓𝐄𝐑
𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇 𝐇𝐀𝐓𝐄𝐑𝐒
𝐅𝐄𝐄𝐋 𝐓𝐇𝐄 𝐏𝐎𝐖𝐄𝐑 𝐎𝐅
𝐘𝐎𝐔'𝐑 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐃𝐀𝐃🌻} 

🌺𝐎𝐓𝐇𝐄𝐑 𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍🌺____________________

𝐓𝐘𝐏𝐄 /𝐀𝐃𝐌𝐈𝐍  

♻️➟ 𝐔𝐏𝐓𝐈𝐌𝐄 ♻️

🔰𝐓𝐎𝐃𝐀𝐘 𝐈𝐒 𝐓𝐈𝐌𝐄🔰 : ${juswa} 

🐰🍒𝐁𝐎𝐓 𝐈𝐒 𝐑𝐔𝐍𝐍𝐈𝐍𝐆🍒🐰 ${hours}:${minutes}:${seconds}.

💚🌺𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆🌺💚 ${global.config.BOTNAME} 『😽🖤🌺』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
