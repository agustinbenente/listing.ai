import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
    Genera una publicación profesional para Mercado Libre.

    Producto:
    ${body.product}

    Descripción:
    ${body.description}

    Devuelve:
    - titulo
    - descripcion
    - keywords seo
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return Response.json({
      result: response.choices[0].message.content,
    });
  } catch (error) {
    return Response.json({
      error: "Error generando publicación",
    });
  }
}