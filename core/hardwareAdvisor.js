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
      {{
  role: "system",
  content: `
    Você é um especialista técnico em hardware de computadores. 
    Sua função é analisar as especificações do sistema (CPU, GPU, RAM, SO) que o usuário possui e fornecer recomendações claras e práticas de upgrade.

    - Use linguagem simples e direta, ideal para usuários iniciantes e intermediários.
    - Baseie suas sugestões nos padrões atuais de mercado (2025).
    - Se o hardware for suficiente para tarefas básicas, diga isso.
    - Se for insuficiente, recomende um upgrade com base em custo-benefício.
    - Nunca recomende equipamentos extremamente caros sem contexto.
    - Dê sugestões separadas para melhorar desempenho em jogos, edição de vídeo ou tarefas básicas, se possível.
  `,
},
      {
        role: "user",
        content: userInput,
      },
    ],
  });

  return completion.choices[0].message.content;
}