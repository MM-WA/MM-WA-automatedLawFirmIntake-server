import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
// const openai = new OpenAI({
//   apiKey: process.env.GROQ_API_KEY,
//   baseURL: "https://api.groq.com/openai/v1",
// });

async function sendRequestToGPT(incomingMessages) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o", // or "gpt-3.5-turbo"
      messages: incomingMessages,
      temperature: 0.7,
    });
    // console.log(response.choices[0].message.content);


    // const chatCompletion = await openai.chat.completions.create({
    //   model: "llama3-70b-8192",
    //   messages: incomingMessages
    // });

    return response.choices[0].message.content;
  } catch (error) {
    throw error;
  }
}

export default sendRequestToGPT;
