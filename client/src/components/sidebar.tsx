import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, User, BookOpen, Code, Bug, Menu } from "lucide-react";
import { useState } from "react";

export function Sidebar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const sidebarContent = (
    <nav className="space-y-2">
      <Link href="/">
        <Button
          variant={location === "/" ? "secondary" : "ghost"}
          className="w-full justify-start"
        >
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
      </Link>

      <div className="space-y-1">
        <Link href="/writeup">
          <Button
            variant={location.startsWith("/writeup") ? "secondary" : "ghost"}
            className="w-full justify-start"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Writeup
          </Button>
        </Link>

        <div className="pl-6 space-y-1">
          <Link href="/writeup/tecno">
            <Button
              variant={location === "/writeup/tecno" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
            >
              <Code className="mr-2 h-4 w-4" />
              Tecno
            </Button>
          </Link>

          <Link href="/writeup/bugbounty">
            <Button
              variant={location === "/writeup/bugbounty" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
            >
              <Bug className="mr-2 h-4 w-4" />
              Bug Bounty
            </Button>
          </Link>
        </div>
      </div>

      <Link href="/about">
        <Button
          variant={location === "/about" ? "secondary" : "ghost"}
          className="w-full justify-start"
        >
          <User className="mr-2 h-4 w-4" />
          About Me
        </Button>
      </Link>
    </nav>
  );

  return (
    <div className="bg-card border-b md:border-r p-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-primary">My Portfolio</h2>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      <div className={cn(
        "md:block",
        isOpen ? "block" : "hidden"
      )}>
        {sidebarContent}
      </div>
    </div>
  );
}