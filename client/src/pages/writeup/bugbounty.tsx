import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BugBountyWriteup() {
  const reports = [
    {
      id: 1,
      title: "XSS Vulnerability in Popular CMS",
      date: "2024-02-25",
      severity: "High",
      excerpt: "Discovery and responsible disclosure of a cross-site scripting vulnerability.",
    },
    {
      id: 2,
      title: "Authentication Bypass in E-commerce Platform",
      date: "2024-02-20",
      severity: "Critical",
      excerpt: "Analysis of an authentication bypass vulnerability found during testing.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
        Bug Bounty Reports
      </h1>

      <div className="space-y-4">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{report.title}</CardTitle>
                <span className="px-2 py-1 text-xs rounded-full bg-destructive/10 text-destructive">
                  {report.severity}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{report.date}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{report.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
