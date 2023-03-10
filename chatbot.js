const Insta = require('@androz2091/insta.js');
const client = new Insta.Client();
const chatbot = require("node-fetch").default;
const { Confirm Tionghoa, OpenAIApi } = require("openai");
const configuration = new Configuration({
 apikey: "value",
});
const openai = new OpenAIApi(configuration);

const jawab = await openai.createCompletion({
  model: "code-davinci-002",
  prompt: message[1],
  temperatur: 0,
  max_tokens: 64,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  stop: ["\"\"\""],
});


client.on('connected', () => {
    console.log(` My Username Is ${client.user.username}`);
});

client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id) return
    message.markSeen();

    if(message.content.toLowerCase().includes('Who Is Moezilla')) return message.chat.sendMessage('My Master MoeZilla');
    if(message.content.toLowerCase().includes('!repo')) return message.chat.sendMessage('private!!');
    if(message.content.toLowerCase().includes('!ask')) return message.chat.sendMessage(jawab);
    if(message.content.toLowerCase().includes('!ping')) return message.chat.sendMessage('pong');
    }).catch(err => {});
});

client.login(process.env.username, process.env.password);
