// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';


async function main(prompt) {
  const ai = new GoogleGenAI({
    apiKey: process.env.VITE_GEMINI_API_KEY,
  });
  const tools = [
    {
      googleSearch: {
      }
    },
  ];
  const config = {
    thinkingConfig: {
      thinkingBudget: 0,
    },
    tools,
  };
  const model = 'gemini-2.5-flash-lite';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `prompt`,
        },
      ],
    },
  ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });

const  response = result.response.text()
console.log(result.response.text());

  let fileIndex = 0;
  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

export default main;
