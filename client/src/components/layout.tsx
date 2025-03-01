import { Sidebar } from "@/components/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-64 md:min-h-screen">
        <Sidebar />
      </div>
      <main className="flex-1 p-4 md:p-8 bg-background">
        {children}
      </main>
    </div>
  );
}