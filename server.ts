import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Lazy initialize Gemini API to avoid crash if key is missing
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API: Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // API: AI Baking Consultant
  app.post("/api/consult", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      let client;
      try {
        client = getGeminiClient();
      } catch (err: any) {
        // Safe fallback if API key is not configured yet
        return res.json({
          reply: "Hello! I am **BakeBot**, your MomBakes9 virtual assistant. It looks like my Google Gemini API key is currently being configured by the host.\n\nHowever, I can still tell you that MomBakes9 specializes in beautiful, custom-handcrafted cakes, cupcakes, pastries, and desserts baked with love! \n\nHow can I help you today? You can ask about our flavors, size estimations, or type of custom designs!"
        });
      }

      // Convert simple message history to Gemini API format if present
      // Expecting history as array of { role: "user" | "model", parts: [{ text: string }] }
      const contents = history && history.length > 0 
        ? [...history, { role: "user", parts: [{ text: message }] }]
        : [{ role: "user", parts: [{ text: message }] }];

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: "You are the warm, helpful, and extremely knowledgeable AI Baking Consultant for 'MomBakes9' (a luxury homemade bakery owned by a passionate mother). Your name is 'BakeBot'. " +
            "Help customers design their dream cake, recommend flavors (such as Chocolate Fudge, Red Velvet, Vanilla Celebration, Lotus Biscoff, Strawberry Rose, Lemon Elderflower, Elegant Carrot), " +
            "suggest cake sizes based on guests (e.g., 6\" cake serves 8-12, 8\" serves 15-20, 10\" serves 25-30, 2-tier cakes serve 30-50+), " +
            "explain custom cakes, wedding cakes, birthdays, anniversaries, cupcakes, cookies, brownies, pastries, cheesecakes, and dessert boxes. " +
            "Provide pricing ideas (e.g. cupcakes start at $4, cakes starting at $65 depending on design complexity). " +
            "Answer dietary questions (gluten-free options, vegan substitutes, eggless cakes). " +
            "Always be extremely welcoming, sweet, helpful, and descriptive, matching the high-end, elegant tone of MomBakes9. Use standard spacing, bullet points, and bold text for readability. " +
            "Keep answers relatively brief (under 200 words), encouraging them to use our Custom Order Inquiry wizard or the Inquiry Form!"
        }
      });

      res.json({ reply: response.text });
    } catch (error: any) {
      console.error("Consultant API Error:", error);
      res.status(500).json({ error: "Failed to connect to the baking consultant. Please try again." });
    }
  });

  // API: Custom Cake Order Inquiry Submission
  app.post("/api/order", (req, res) => {
    try {
      const { orderDetails } = req.body;
      const orderId = "MB-" + Math.floor(100000 + Math.random() * 900000);
      res.json({
        success: true,
        orderId,
        message: "Thank you so much! Your inquiry has been received. Mom will personally review your request, look over any details or references, and reach out to you via email or phone within 24 hours.",
        orderDetails
      });
    } catch (error: any) {
      res.status(500).json({ error: "Something went wrong while processing your inquiry." });
    }
  });

  // API: Newsletter Sign Up
  app.post("/api/newsletter", (req, res) => {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    res.json({
      success: true,
      message: "Welcome to the sweet club! You have successfully subscribed to the MomBakes9 newsletter for baking secrets and exclusive seasonal offers."
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
