import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function Writeup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        Writeups
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/writeup/tecno">
          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardHeader>
              <CardTitle>Technical Writeups</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Deep dives into technical topics, programming concepts, and development practices.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/writeup/bugbounty">
          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardHeader>
              <CardTitle>Bug Bounty Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Detailed write-ups of security vulnerabilities and bug bounty findings.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </motion.div>
  );
}
