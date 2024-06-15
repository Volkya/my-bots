require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client();

// Token bot
client.login(process.env.DISCORD_BOT_TOKEN); // 8 == admin

client.on('ready', () => {
    console.log('Bot is ready'); 
})

client.on('message', msg => {
    if (msg.content === '!ping') {
      msg.reply('Pong!');
    }

    if (msg.content === '!Reglas'){
      msg.reply('#Reglamento')
    }
  });

 