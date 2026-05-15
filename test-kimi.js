require('dotenv').config({ path: '/root/.hermes/.env' });
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.KIMI_API_KEY,
  baseURL: 'https://api.moonshot.cn/v1'
});

async function test() {
  try {
    const completion = await openai.chat.completions.create({
      model: 'kimi-k2-0711-preview',
      messages: [{ role: 'user', content: 'Hello' }],
    });
    console.log('Success:', completion.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

test();
