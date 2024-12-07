import { Button } from "@/components/ui/button";
import { RocketIcon, TrendingUpIcon } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/95">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      
      <div className="relative container mx-auto px-4 py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            The Future of Crypto Trading
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Experience seamless trading with advanced tools and real-time analytics.
            Join thousands of traders in the next generation of cryptocurrency exchange.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <RocketIcon className="w-5 h-5" />
              Launch App
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <TrendingUpIcon className="w-5 h-5" />
              View Markets
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}