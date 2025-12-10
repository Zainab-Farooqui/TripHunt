import axios from "axios";

export async function getPlacesFromAI(destination) {
  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  const prompt = `
    List the top 8 famous places to visit in ${destination}.
    For each place, return:
    - place name
    - short 2–3 line description

    Respond ONLY in clean JSON array format like:

    [
      {
        "place": "Place Name",
        "description": "Short description here"
      }
    ]
  `;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.5,
    },
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  try {
    return JSON.parse(response.data.choices[0].message.content);
  } catch (err) {
    console.error("JSON Parse Error:", err);
    return [];
  }
}
