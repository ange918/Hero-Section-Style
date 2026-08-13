import { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MotionConfig } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';

// Site-wide WebGL wormhole background (three.js), lazy-loaded into its own chunk.
const TunnelBackground = lazy(() =>
  import('@/components/tunnel-background').then((m) => ({ default: m.TunnelBackground }))
);
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Home } from '@/pages/home';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-display font-bold">404 Not Found</h1>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <MotionConfig reducedMotion="user" transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            {/* Fixed wormhole background behind everything */}
            <Suspense fallback={null}>
              <TunnelBackground />
            </Suspense>
            {/* Readability scrim between the tunnel and the content */}
            <div className="fixed inset-0 z-[1] pointer-events-none bg-[#05030f]/60" />
            <div className="relative z-10">
              <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
                <Navbar />
                <main className="flex-1">
                  <Router />
                </main>
              </WouterRouter>
            </div>
            <Toaster />
          </MotionConfig>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
