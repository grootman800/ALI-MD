const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61U246jRhD9lVW/2loajDFYGmkBg68YMMa3KA9taDA2NzcNNl75L/K+T/sN+a39hAjPTHaUbDYTKTw1TVF1TtU59RmkWVTgKa5B/zPISVQhipsjrXMM+kApgwAT0AY+ogj0Qanueirl99euNGGzJJuGsCrXS1RIIyjIbGvILM3Indt5ajyBexvk5T6OvJ8k3KMLHwxGvGAzt0HYwYkqtq5jjg9qzkTWQsjQHHoDd96C2RO4NxlRRKI01PIDTjBB8RTXForIO+FP7NN6PLxGi1ZroGoOj53MECwRDfECTmrzQksYUmSvTvb74AeWmy5qVuRCc4H8ac9YZoZqFoTdw8Xwxos9ZV9JxJ17Ov8Mv4jCFPtjH6c0ovW7+86ZpIzSs7gq5vNp5MwRHw2l7lg8ZJAezH1Ay2m4IZmwTrX3Ad92goAjTh0oRxsezYG42nIMZ2/i0NoW0OBrraNrh+PYvRRvgVvkVSun/9J3Xr5Nuawqb7ZbJy2plk3M0czq1DLhDvFZKc3t/iy1iKbL74NfHnx4jCc0n2hLPnIvG29jIG9mFZlvn5XZZpx7jH7GJt1o3+EjWpKfodSqsXld99jTVeAZ17c1Sz4qjDY5J44+Wk78PMN+Hh42ub61rktnGTstNLkGXqwYVY5bJ82hx8s2np023E6ldmca7XLZfnowOuF67IM+e28DgsOooATRKEsfd5BtA+RXDvYIpo/2gpszWbWmvHbYtLIhTERUWys6lHyRExSBP3FG1ZsvVLuuwssTaIOcZB4uCuyPooJmpDZwUaAQF6D/y2NSDWmCk4ziSeQ3cur1eh2hK0od8VPx8XJAtEB5/jHFFLRBQLLEwKBPSYnb4BEPB4Is9kRZ0qGuQMhxavOvPpBZqQMlnW8YJs81l1GCC4qSHPTZXpeX+B7P9u7t/wWGrgx6nKxJoqwKUJdESWdFlpV1DXJsR+jKP4fBw/uvbZDiK31WcdP7DtsGQUQK6qZlHmfIf5X460fkeVmZUqdOPbU5YAL6b64xpVEaFg2xMkXEO0QVVhseoB+guMB/jhsT7L9yeVlhauY3KpwNZ+x6s5NBg71J9NfW9KW/Nyd+BLFQlFiOh2yXhTzb7Uufmvs2SFGTCagxRumHEKf0w7cvX3//9uW3r02HXrA3pXxMURQXTawxdW7FVtNmXEvw7OFQ1kJZDRtUr1xfHfSsUIsJYSc12TlVrr2xwNhqK7NmU8iRI6uFjOp5vUl8kRfHZfj0gySgDyZeERPWPSFva6vz9WF01hmTTUY3Mz3vXFHZTg4Di3ZMjdt3r9VqZHRDf12bpe27Z3ii3owXB8Z+a5wYB6MyN5YloymXp6aaj6vIw2+LiVeFEZRq5eBzBZG3q3Mr3XfZITsgkw63Tq7D6ZZbTPWRZ5Pt5JKV+zjdhklRnsShkZRll42nrsKvQr/YZRd3xizySpafvf3YLfHLTo9eXBc9XoMIP1bky0T+ZarPsBvpwXv7TYaXlfsPa0tZMvx83r3R5d72cG1WUK7Og7qm8zMvLcbWJR2Z9c6TtS3kwb3xQB4jGmQkAX2AUp9kD9GQrGy0PE6D7CfFVNm15av8sFqMCip/98cPLAc7z1EWyfIRKg6NbtanrtJovZbz3KGIvroNyM0zL7fg/gfg5SBPlggAAA==",  
//chatbot integration 
CHATBOT: getConfig("CHATBOT") || "on",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS JUST NOW ALI-MD 👻*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "true",
// true if want goodbye msg in groups 
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
//anticall integration 
ANTI_CALL: getConfig("ANTI_CALL") || "true",
REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
ALIVE_IMG: getConfig("ALIVE_IMG") || "https://qu.ax/zrqFX.jpg",
// add custom menu image url
PREFIX: getConfig("PREFIX") || ".", 
// add your prifix for bot   
BOT_NAME: getConfig("BOT_NAME") || "ALI-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ALI-MD",    
VPS: process.env.VPS || "",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ALI INXIDE",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "© ᴘσωєʀє∂ ву αℓι м∂⎯꯭̽💀",
// add bot desp name    
LIVE_MSG: process.env.LIVE_MSG || "HEY IM ALIVE",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",
// false or true for anti bad words 
ANTI_BOT: process.env.ANTI_BOT || "true",
MODE: getConfig("MODE") || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
ANTIVIEW_ONCE: process.env.ANTIVIEW_ONCE || "off",
ANTI_LINK_WARN: process.env.ANTILINK_WARN || "false",
ANTI_LINK_KICK: process.env.ANTILINK_KICK || "false",
ANTI_LINK_DELETE: process.env.ANTI_LINK_DELETE || "false",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923003588997",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DELETE: process.env.ANTI_DELETE || "false",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
