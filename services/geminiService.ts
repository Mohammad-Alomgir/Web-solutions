
import { GoogleGenAI } from "@google/genai";

export const getGeminiAssistant = async (prompt: string) => {
  try {
    // Initialize GoogleGenAI with the API key from environment variables.
    // Use the named parameter and obtain the key exclusively from process.env.API_KEY.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Call generateContent with both model name and prompt.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are the WebSolutions AI Assistant. 
        Your role is to help users learn about our web development, SEO, and marketing services. 
        Be professional, friendly, and concise. 
        If someone asks for a price, mention that projects are custom-quoted based on needs. 
        Keep answers under 3 sentences where possible.`,
      },
    });

    // Access the .text property directly to get the generated response string.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
};
