import dotenv from 'dotenv';
dotenv.config();

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analisarComIA(userInput) {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo", // pode trocar para "gpt-3.5-turbo" se quiser economizar tokens
    messages: [
      {
        role: "system",
        content: "Você é um assistente especializado em hardware de computadores.",
      },
      {
        role: "user",
        content: userInput,
      },
    ],
  });

  return completion.choices[0].message.content;
}