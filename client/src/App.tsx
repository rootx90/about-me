import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/layout";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Writeup from "@/pages/writeup";
import TecnoWriteup from "@/pages/writeup/tecno";
import BugBountyWriteup from "@/pages/writeup/bugbounty";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/writeup" component={Writeup} />
        <Route path="/writeup/tecno" component={TecnoWriteup} />
        <Route path="/writeup/bugbounty" component={BugBountyWriteup} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;