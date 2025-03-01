import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { type SocialLink as SocialLinkType } from "@shared/schema";
import { SiGithub, SiX, SiLinkedin, SiInstagram } from "react-icons/si";
import { apiRequest } from "@/lib/queryClient";

interface Props {
  link: SocialLinkType;
}

const iconMap = {
  SiGithub,
  SiX,
  SiLinkedin,
  SiInstagram,
} as const;

export function SocialLink({ link }: Props) {
  const Icon = iconMap[link.icon as keyof typeof iconMap];

  const handleClick = async () => {
    try {
      await apiRequest("POST", "/api/click-event", {
        linkId: link.id,
        timestamp: new Date(),
      });
      window.open(link.url, "_blank");
    } catch (error) {
      console.error("Failed to track click:", error);
      window.open(link.url, "_blank");
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className="p-4 cursor-pointer hover:bg-accent flex items-center gap-3"
        onClick={handleClick}
      >
        {Icon && <Icon className="w-6 h-6" />}
        <span className="font-medium">{link.displayName}</span>
      </Card>
    </motion.div>
  );
}