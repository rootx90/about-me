import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const socialLinks = pgTable("social_links", {
  id: serial("id").primaryKey(),
  platform: text("platform").notNull(),
  url: text("url").notNull(),
  icon: text("icon").notNull(),
  displayName: text("display_name").notNull(),
});

export const clickEvents = pgTable("click_events", {
  id: serial("id").primaryKey(),
  linkId: integer("link_id").notNull(),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});

export const insertSocialLinkSchema = createInsertSchema(socialLinks).omit({ id: true });
export const insertClickEventSchema = createInsertSchema(clickEvents).omit({ id: true });

export type SocialLink = typeof socialLinks.$inferSelect;
export type InsertSocialLink = z.infer<typeof insertSocialLinkSchema>;
export type ClickEvent = typeof clickEvents.$inferSelect;
export type InsertClickEvent = z.infer<typeof insertClickEventSchema>;
