import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertClickEventSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  app.get("/api/social-links", async (_req, res) => {
    const links = await storage.getSocialLinks();
    res.json(links);
  });

  app.post("/api/click-event", async (req, res) => {
    const parsed = insertClickEventSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: "Invalid click event data" });
      return;
    }

    const event = await storage.createClickEvent(parsed.data);
    res.json(event);
  });

  return createServer(app);
}
