import { useQuery } from "@tanstack/react-query";
import { type SocialLink } from "@shared/schema";
import { ProfileSection } from "@/components/profile-section";
import { SocialLink as SocialLinkComponent } from "@/components/social-link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  const { data: links, isLoading } = useQuery<SocialLink[]>({
    queryKey: ["/api/social-links"],
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-pulse w-64 h-64 rounded-full bg-muted" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
          Welcome to My Space
        </h1>

        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground">
              Explore my technical writings, bug bounty reports, and connect with me on various platforms.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Featured Writeups</h2>
          <Card>
            <CardHeader>
              <CardTitle>Latest Technical Article</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Understanding React Server Components - A deep dive into the future of React
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Connect With Me</h2>
          {links?.map((link) => (
            <SocialLinkComponent key={link.id} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}