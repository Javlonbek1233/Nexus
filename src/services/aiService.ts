import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function getAIChatResponse(message: string, history: { role: string; parts: { text: string }[] }[] = []) {
  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: "You are Nexus AI Assistant, an elite automation consultant. You are professional, technical, and high-end. Help the user understand how AI automation can scale their business.",
      },
      history: history,
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("AI Service Error:", error);
    return "I'm experiencing a high load of automation requests. Let's try again in a moment.";
  }
}
