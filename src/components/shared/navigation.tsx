import { Link, useLocation } from "react-router-dom";
import { Home, Sparkles, Calendar, Crown, Menu, Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/data/site-data";
import { ModeToggle } from "@/components/mode-toggle";

const mobileNavItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/treatments", icon: Sparkles, label: "Treatments" },
  { to: "/book", icon: Calendar, label: "Book" },
  { to: "/membership", icon: Crown, label: "Membership" },
];

const allNavItems = [
  { to: "/", label: "Home" },
  { to: "/treatments", label: "Treatments" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Pricing" },
  { to: "/gallery", label: "Gallery" },
  { to: "/membership", label: "Membership" },
  { to: "/resources", label: "Resources" },
  { to: "/book", label: "Contact" },
];

export function MobileBottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-lg md:hidden safe-area-pb">
      <div className="flex items-center justify-around py-2">
        {mobileNavItems.map((item) => {
          const isActive = item.to === "/" ? location.pathname === "/" : location.pathname.startsWith(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className={`h-5 w-5 ${isActive ? "stroke-[2.5]" : ""}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
        <Sheet>
          <SheetTrigger asChild>
            <button className="flex flex-col items-center gap-0.5 px-3 py-1.5 text-muted-foreground transition-colors">
              <Menu className="h-5 w-5" />
              <span className="text-[10px] font-medium">More</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0">
            <MobileMenu />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

function MobileMenu() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b p-4">
        <Logo />
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <nav className="space-y-1">
          {allNavItems.map((item) => (
            <SheetClose key={item.to} asChild>
              <Link
                to={item.to}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                {item.label}
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            </SheetClose>
          ))}
        </nav>
        <Separator className="my-4" />
        <div className="space-y-3 px-3">
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {siteConfig.address.street}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            Mon–Sat: 9AM–8PM
          </div>
        </div>
      </div>
      <div className="border-t p-4 space-y-3">
        <div className="flex items-center justify-between px-3">
          <span className="text-sm text-muted-foreground">Appearance</span>
          <ModeToggle />
        </div>
        <SheetClose asChild>
          <Button asChild className="w-full">
            <Link to="/book">Book Consultation</Link>
          </Button>
        </SheetClose>
      </div>
    </div>
  );
}

export function DesktopHeader() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 hidden transition-all duration-300 md:block ${
        scrolled ? "bg-background/95 shadow-sm backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Logo />
        <nav className="flex items-center gap-1">
          {allNavItems.slice(0, 7).map((item) => {
            const isActive = item.to === "/" ? location.pathname === "/" : location.pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <Phone className="h-3.5 w-3.5" />
            {siteConfig.phone}
          </a>
          <ModeToggle />
          <Button asChild size="sm">
            <Link to="/book">Book Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export function MobileHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:hidden ${
        scrolled ? "bg-background/95 shadow-sm backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <Logo />
        <Button asChild size="sm" variant="default" className="rounded-full px-4 text-xs">
          <Link to="/book">Book Now</Link>
        </Button>
      </div>
    </header>
  );
}
