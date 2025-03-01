import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TecnoWriteup() {
  const articles = [
    {
      id: 1,
      title: "Understanding React Server Components",
      date: "2024-03-01",
      excerpt: "A deep dive into React Server Components and how they change the way we build React applications.",
    },
    {
      id: 2,
      title: "TypeScript Best Practices",
      date: "2024-02-28",
      excerpt: "Essential TypeScript patterns and practices for building scalable applications.",
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
        Technical Writeups
      </h1>

      <div className="space-y-4">
        {articles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{article.date}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{article.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
