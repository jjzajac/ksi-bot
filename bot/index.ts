// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();

const token = process.env.TOKEN;
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

client.on('guildMemberAdd',(m)=>{
    
})

client.once('ready', () => {
  console.log('Ready!');
});

client.on('messageCreate', async (m) => {
  m.guild?.emojis.fetch()
    .then((emojis) => emojis.forEach((v,k)=> m.react(v)))
    .catch(console.error);
    m.guild?.client.
});


(async () => {
    await client.login(token);
    client.emojis.cache.forEach((v,k)=>console.log(v,k));
})();
