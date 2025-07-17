import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // .env dosyasına ekle
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { prompt } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Sen bir görev planlayıcısısın. Kullanıcının verdiği görevi adım adım açıklayıcı bir şekilde planla.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "gpt-4o",
    });

    const plan = completion.choices[0].message.content;
    const tasks = plan
      ?.split("\n")
      .filter((line: string) => line.trim() !== "");

    res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Bir hata oluştu." });
  }
}
