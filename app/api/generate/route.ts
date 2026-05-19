import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST() {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content:
            "Generame un título y descripción para vender un iPhone 15 en Mercado Libre.",
        },
      ],
    });

    return Response.json({
      result: completion.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    return Response.json({
      result: "Error con OpenAI",
    });
  }
}