import { generateText } from "../services/openaiServices.js";

function removerQuebrasDeLinha(texto) {
  // Expressão regular para encontrar todas as ocorrências de \n
  const regex = /\n/g;
  // Substitui todas as ocorrências de \n por uma string vazia
  const textoSemQuebras = texto.replace(regex, "");
  return textoSemQuebras;
}

export async function iaResponseText(req, res) {
  const prompt = req.body.prompt;
  try {
    const iaResponse = await generateText(prompt);
    const textoSemQuebras = removerQuebrasDeLinha(iaResponse);

    res.status(201).json(textoSemQuebras);
  } catch (error) {
    console.error(erro.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}
