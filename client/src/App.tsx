import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/hooks/use-auth";
import { ThemeProvider } from "@/hooks/use-theme";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Center from "@/pages/center";
import Activity from "@/pages/activity";
import Profile from "@/pages/profile";
import Auth from "@/pages/auth";
import CenterAdmin from "@/pages/center-admin";
import ActivityStats from "@/pages/activity-stats";
import Help from "@/pages/help";
import Startpagina from "@/pages/startpagina";
import Navigation from "@/components/navigation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/startpagina" component={Startpagina} />
      <Route path="/centers/:id" component={Center} />
      <Route path="/activities/:id" component={Activity} />
      <Route path="/profile" component={Profile} />
      <Route path="/auth" component={Auth} />
      <Route path="/center-admin" component={CenterAdmin} />
      <Route path="/activity-stats" component={ActivityStats} />
      <Route path="/help" component={Help} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <div className="min-h-screen bg-background">
            <Navigation />
            <main className="container mx-auto px-4 py-8">
              <Router />
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;