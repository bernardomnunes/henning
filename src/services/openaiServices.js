import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.OPENAI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateText(prompt) {
  try {
    // const image = {
    //   inlineData: {
    //     data: imageBuffer.toString("base64"),
    //     mimeType: "image/png",
    //   },
    // };
    const res = await model.generateContent(prompt);
    return res.response.text() || "Texto não disponível.";
  } catch (erro) {
    console.error("Erro ao obter texto:", erro.message, erro);
    throw new Error("Erro ao obter o texto da openAI.");
  }
}
