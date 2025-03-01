import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        About Me
      </h1>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Hello, I'm [Your Name]</h2>
          <p className="text-muted-foreground">
            A passionate developer and security researcher with expertise in web development
            and bug bounty hunting. I love exploring new technologies and finding creative
            solutions to complex problems.
          </p>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Skills</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Web Development (React, Node.js, TypeScript)</li>
              <li>Security Research & Bug Bounty Hunting</li>
              <li>API Development & Integration</li>
              <li>Cloud Infrastructure</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
