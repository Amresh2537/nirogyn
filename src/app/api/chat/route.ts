import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Niro, Nirogyn's AI wellness assistant. Nirogyn is a premium Indian wellness brand focused on science-backed nutrition and supplements.

Your role:
- Answer questions about nutrition, gut health, vitamins, minerals, adaptogens, sleep, immunity, stress, skin health, and overall wellness
- Give advice grounded in scientific evidence, explained in simple language
- Reference Indian dietary context (dal, roti, curd, turmeric, ashwagandha, etc.) when relevant
- Recommend Nirogyn's brands when appropriate: Isochia (gut health / prebiotics), Captain Gummy (kids health), Powershila (women's health), Pretty Energy (beauty supplements)
- Be warm, empathetic, concise, and encouraging
- Always remind users to consult a doctor for medical conditions
- Do NOT diagnose diseases or replace professional medical advice

Keep responses under 150 words. Use short paragraphs or bullet points for clarity.`;

// Simple wellness knowledge base for fallback (no API key needed)
const WELLNESS_KB: { keywords: string[]; response: string }[] = [
  {
    keywords: ["serotonin", "mood", "anxiety", "depression", "mental"],
    response:
      "Over 90% of your serotonin is made in your gut, not your brain. Daily fibre (dal, whole grains, psyllium husk) feeds the gut bacteria that produce serotonin precursors. Fermented foods like curd add Lactobacillus that directly synthesises GABA — your nervous system's calm switch. Nirogyn's **Isochia** prebiotic is formulated specifically for this gut-mood connection.",
  },
  {
    keywords: ["gut", "digestion", "bloat", "ibs", "prebiotics", "probiotics", "fibre"],
    response:
      "A healthy gut needs **prebiotics** (food for bacteria) and **probiotics** (the bacteria themselves). In Indian meals, dal and sabzi provide prebiotic fibre; homemade curd provides live cultures. For targeted gut support, **Isochia** by Nirogyn is clinically formulated with prebiotic fibres that feed serotonin and butyrate-producing bacteria.",
  },
  {
    keywords: ["sleep", "insomnia", "melatonin", "magnesium"],
    response:
      "Magnesium is one of the most evidence-backed sleep supplements — it activates GABA receptors that slow brain activity at night. Deficiency is common in India due to refined flour consumption. Foods: banana, pumpkin seeds, dark chocolate. Look for magnesium glycinate or citrate (higher absorption). Avoid screens 1 hour before bed and keep your room cool.",
  },
  {
    keywords: ["vitamin d", "sunshine", "immunity", "bones"],
    response:
      "Despite abundant sunshine, ~80% of urban Indians are Vitamin D deficient. Sun exposure triggers D3 synthesis only between 10am–2pm when the UV index is adequate — and most office workers miss this window entirely. Supplement with D3 + K2 (K2 ensures calcium goes to bones, not arteries). 2000–4000 IU daily is generally safe; get your 25-OH-D tested.",
  },
  {
    keywords: ["ashwagandha", "stress", "cortisol", "adaptogen", "anxiety"],
    response:
      "Ashwagandha (KSM-66 extract) is one of the most studied adaptogens. Clinically shown to reduce cortisol by ~27%, improve stress resilience, and support testosterone in men. Take 300–600mg daily with food. Results typically appear in 4–8 weeks. Nirogyn uses standardised KSM-66 across its supplement line. Avoid if pregnant or on thyroid medication.",
  },
  {
    keywords: ["skin", "collagen", "acne", "glow", "hair", "nails"],
    response:
      "Skin health starts from the inside. Key nutrients: **Vitamin C** (collagen synthesis), **Zinc** (acne and wound healing), **Biotin** (hair and nails), **Omega-3** (anti-inflammatory, reduces breakouts). High-sugar diets spike IGF-1 which directly triggers acne. Nirogyn's **Pretty Energy** is formulated with these exact compounds for skin, hair, and nail health.",
  },
  {
    keywords: ["kids", "children", "growth", "calcium", "iron"],
    response:
      "Indian children are commonly deficient in Vitamin D, calcium, iron, and zinc. Iron deficiency is the leading cause of poor concentration in school-going children. Focus on: ragi (calcium), beans (iron + zinc), eggs (protein + D3), and curd (calcium + probiotics). **Captain Gummy** by Nirogyn is formulated specifically for Indian children's nutritional gaps — no artificial colours.",
  },
  {
    keywords: ["weight", "fat loss", "metabolism", "obesity"],
    response:
      "Sustainable fat loss depends on: protein intake (2g/kg body weight), sleep quality (poor sleep elevates ghrelin — the hunger hormone), and gut health (dysbiosis is associated with obesity). Avoid ultra-processed foods and liquid calories. Build meals around protein + fibre first. Walk 7,000–10,000 steps daily. No supplement replaces these fundamentals.",
  },
  {
    keywords: ["protein", "muscle", "gym", "workout", "recovery"],
    response:
      "Most Indians get ~0.6g protein/kg — about half the recommended 1.2–2g/kg for active individuals. Focus on: paneer, dal, eggs, curd, soy, and chicken. Leucine threshold (2.5–3g per meal) triggers muscle protein synthesis — a large bowl of dal or 3 eggs easily hits this. Timing matters less than total daily intake.",
  },
  {
    keywords: ["isochia", "captain gummy", "powershila", "pretty energy", "nirogyn", "brand", "supplement"],
    response:
      "Nirogyn's current brands:\n\n• **Isochia** — gut health prebiotic, supports serotonin, GABA & butyrate production\n• **Captain Gummy** — kids' multivitamin gummies, iron, zinc, D3, no artificial colours\n• **Powershila** — women's health: iron, folate, calcium, hormone balance\n• **Pretty Energy** — skin, hair & nails: collagen, biotin, Vitamin C, zinc\n\nAll formulated for Indian nutritional needs. Visit shop.nirogyn.com.",
  },
];

function fallbackResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase();
  for (const item of WELLNESS_KB) {
    if (item.keywords.some((kw) => lower.includes(kw))) {
      return item.response;
    }
  }
  return "Great question! For personalised wellness advice, I'd recommend starting with the basics: adequate sleep (7–9 hours), daily movement, a fibre-rich Indian diet with dal and fermented foods, and sunlight exposure. If you have a specific health concern, please consult a qualified healthcare professional. I'm happy to dive deeper into any specific topic — just ask!";
}

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const apiKey = process.env.OPENAI_API_KEY;

  // If no API key — use rule-based fallback
  if (!apiKey) {
    const lastUserMsg = messages?.findLast(
      (m: { role: string }) => m.role === "user"
    )?.content ?? "";
    const reply = fallbackResponse(lastUserMsg);
    return NextResponse.json({ reply });
  }

  // OpenAI integration
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.slice(-10), // keep last 10 messages for context
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const lastUserMsg = messages?.findLast(
        (m: { role: string }) => m.role === "user"
      )?.content ?? "";
      return NextResponse.json({ reply: fallbackResponse(lastUserMsg) });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "I'm here to help with your wellness questions!";
    return NextResponse.json({ reply });
  } catch {
    const lastUserMsg = messages?.findLast(
      (m: { role: string }) => m.role === "user"
    )?.content ?? "";
    return NextResponse.json({ reply: fallbackResponse(lastUserMsg) });
  }
}
