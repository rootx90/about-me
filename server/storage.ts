import { type SocialLink, type InsertSocialLink, type ClickEvent, type InsertClickEvent } from "@shared/schema";

export interface IStorage {
  getSocialLinks(): Promise<SocialLink[]>;
  createClickEvent(event: InsertClickEvent): Promise<ClickEvent>;
}

export class MemStorage implements IStorage {
  private socialLinks: SocialLink[];
  private clickEvents: ClickEvent[];
  private currentLinkId: number;
  private currentClickId: number;

  constructor() {
    this.socialLinks = [
      {
        id: 1,
        platform: "github",
        url: "https://github.com/username",
        icon: "SiGithub",
        displayName: "GitHub"
      },
      {
        id: 2,
        platform: "twitter",
        url: "https://twitter.com/username",
        icon: "SiX",
        displayName: "X (Twitter)"
      },
      {
        id: 3,
        platform: "linkedin",
        url: "https://linkedin.com/in/username",
        icon: "SiLinkedin",
        displayName: "LinkedIn"
      },
      {
        id: 4,
        platform: "instagram",
        url: "https://instagram.com/username",
        icon: "SiInstagram",
        displayName: "Instagram"
      }
    ];
    this.clickEvents = [];
    this.currentLinkId = this.socialLinks.length + 1;
    this.currentClickId = 1;
  }

  async getSocialLinks(): Promise<SocialLink[]> {
    return this.socialLinks;
  }

  async createClickEvent(event: InsertClickEvent): Promise<ClickEvent> {
    const newEvent = {
      ...event,
      id: this.currentClickId++,
      timestamp: event.timestamp || new Date(),
    };
    this.clickEvents.push(newEvent);
    return newEvent;
  }
}

export const storage = new MemStorage();