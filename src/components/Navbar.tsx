import { HomeIcon, RocketIcon, DollarSignIcon, WrenchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active, onClick }: NavItemProps) => (
  <Button
    variant="ghost"
    size="lg"
    onClick={onClick}
    className={cn(
      "flex items-center gap-2 px-4 py-2 transition-all",
      "hover:bg-primary/10 hover:text-primary",
      active && "bg-primary/5 text-primary"
    )}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </Button>
);

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <RocketIcon className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">CryptoVault</span>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            <NavItem icon={<HomeIcon className="w-5 h-5" />} label="Home" active />
            <NavItem icon={<RocketIcon className="w-5 h-5" />} label="Launch" />
            <NavItem icon={<DollarSignIcon className="w-5 h-5" />} label="Sell" />
            <NavItem icon={<WrenchIcon className="w-5 h-5" />} label="Tools" />
          </div>

          <Button variant="default" size="sm" className="md:hidden">
            <WrenchIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}