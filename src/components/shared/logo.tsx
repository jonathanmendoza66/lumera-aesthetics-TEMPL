import { Link } from "react-router-dom";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
        <span className="font-heading text-lg font-bold text-primary-foreground">L</span>
      </div>
      <div className="flex flex-col">
        <span className="font-heading text-lg font-semibold leading-tight tracking-tight">Lumera</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Aesthetics & Wellness</span>
      </div>
    </Link>
  );
}
