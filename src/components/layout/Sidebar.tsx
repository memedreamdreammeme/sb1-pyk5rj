import { AlignRight, DollarSignIcon, WrenchIcon, Wallet, LayoutDashboard, BookOpen, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SpaceBackground } from "./SpaceBackground";
import { useNavigate, useLocation } from "react-router-dom";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active, onClick }: NavItemProps) => (
  <Button
    variant="ghost"
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-4 p-4 rounded-md border border-transparent backdrop-blur-sm",
      "hover:bg-white/5 hover:border-white/10 transition-all duration-300",
      "group relative overflow-hidden",
      active && "bg-white/[0.08] border-white/20 text-white glow"
    )}
  >
    <div className="relative z-10 flex items-center gap-4">
      <div className="w-5 flex items-center justify-center">
        {icon}
      </div>
      <span className="font-medium">{label}</span>
    </div>
    {active && (
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" />
    )}
  </Button>
);

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-background/50 backdrop-blur-xl border-r border-white/[0.06]">
      <SpaceBackground className="absolute inset-0 opacity-50" />
      <div className="flex flex-col h-full relative z-10">
        <div className="h-16 flex items-center px-6 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <AlignRight className="w-6 h-6 text-white animate-pulse" />
              <div className="absolute inset-0 animate-ping opacity-50">
                <AlignRight className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-lg font-semibold text-white">Light</span>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <NavItem 
            icon={<LayoutDashboard className="w-5 h-5" />} 
            label="Dashboard" 
            active={location.pathname === '/dashboard'}
            onClick={() => navigate('/dashboard')}
          />
          <NavItem 
            icon={<Rocket className="w-5 h-5" />} 
            label="Launch" 
            active={location.pathname === '/launch'}
            onClick={() => navigate('/launch')}
          />
          <NavItem 
            icon={<DollarSignIcon className="w-5 h-5" />} 
            label="Sell" 
            active={location.pathname === '/sell'}
            onClick={() => navigate('/sell')}
          />
          <NavItem 
            icon={<WrenchIcon className="w-5 h-5" />} 
            label="Tools" 
            active={location.pathname === '/tools'}
            onClick={() => navigate('/tools')}
          />
          <Button
            variant="ghost"
            onClick={() => window.open('https://docs.pump.fun', '_blank')}
            className="w-full flex items-center gap-4 p-4 rounded-md border border-transparent backdrop-blur-sm
                     hover:bg-white/5 hover:border-white/10 transition-all duration-300"
          >
            <div className="w-5 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="font-medium">GitBook</span>
          </Button>
        </nav>

        <div className="p-4 border-t border-white/[0.06]">
          <Button
            variant="secondary"
            className="w-full gap-2 backdrop-blur-sm bg-white/[0.03] border border-white/10 hover:bg-white/[0.05]"
          >
            <Wallet className="w-4 h-4" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </aside>
  );
}