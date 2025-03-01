import { useQuery } from "@tanstack/react-query";
import { type SocialLink } from "@shared/schema";
import { ProfileSection } from "@/components/profile-section";
import { SocialLink as SocialLinkComponent } from "@/components/social-link";

export default function Home() {
  const { data: links, isLoading } = useQuery<SocialLink[]>({
    queryKey: ["/api/social-links"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center">
        <div className="animate-pulse w-64 h-64 rounded-full bg-muted" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 px-4 py-8">
      <div className="max-w-md mx-auto space-y-8">
        <ProfileSection />
        
        <div className="space-y-4">
          {links?.map((link) => (
            <SocialLinkComponent key={link.id} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
