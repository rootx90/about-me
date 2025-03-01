import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function ProfileSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-6 text-center space-y-4">
          <Avatar className="w-24 h-24 mx-auto">
            <AvatarImage 
              src="https://images.unsplash.com/photo-1499557354967-2b2d8910bcca" 
              alt="Profile picture"
            />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
          
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Your Name
            </h1>
            <p className="text-muted-foreground">
              Digital Creator & Developer
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
