
// Make sure to install the SDK: npm install @google/generative-ai
import { GoogleGenerativeAI } from "@google/generative-ai";

// --- IMPORTANT SECURITY NOTE ---
// For production, DO NOT hardcode your API key here.
// Use environment variables or a secure secrets management system.
// Example for Node.js: const API_KEY = process.env.GEMINI_API_KEY;
// If using a .env file, you might need a package like 'dotenv'.
// npm install dotenv
// require('dotenv').config(); // At the top of your file
// --------------------------------

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // Replace with your actual API key

async function main(prompt) {
  // Initialize the Gemini API client
  const genAI = new GoogleGenerativeAI(API_KEY);

  // Select the model you want to use (e.g., "gemini-pro", "gemini-1.5-flash")
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  //  prompt = "Who is Steve Smith";
  // prompt = prompt

  try {
    // Generate content based on the prompt
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text(); // Get the text content from the response

    console.log("Gemini API Response:");
    console.log(text);

    return response

  } catch (error) {
    console.error("Error calling Gemini API:", error);
  }
}

// Call the function to run the Gemini API integration
export default main;