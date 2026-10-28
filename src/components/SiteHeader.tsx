import { Link } from "@tanstack/react-router";
import { ChefHat, Heart, ShoppingCart, Soup } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-border/70 bg-background/80 sticky top-0 z-30 border-b backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="bg-primary text-primary-foreground grid size-9 place-items-center rounded-full">
            <Soup className="size-4.5" />
          </span>
          <span className="font-display text-lg tracking-tight">Alacena</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            to="/"
            className="hover:bg-secondary rounded-full px-3 py-2 transition-colors sm:px-4"
            activeOptions={{ exact: true }}
            activeProps={{ className: "bg-secondary" }}
          >
            Generar
          </Link>
          <Link to="/plan-gratis" className="hover:bg-secondary rounded-full px-2 py-2 text-xs sm:px-4 sm:text-sm" activeProps={{ className: "bg-secondary" }}>Plan</Link>
          <Link
            to="/favoritos"
            className="hover:bg-secondary inline-flex items-center gap-1.5 rounded-full px-3 py-2 transition-colors sm:px-4"
            activeProps={{ className: "bg-secondary" }}
          >
            <Heart className="size-4" />
            <span className="hidden sm:inline">Favoritas</span>
          </Link>
          <Link
            to="/lista"
            className="hover:bg-secondary inline-flex items-center gap-1.5 rounded-full px-3 py-2 transition-colors sm:px-4"
            activeProps={{ className: "bg-secondary" }}
          >
            <ShoppingCart className="size-4" />
            <span className="hidden sm:inline">Lista</span>
          </Link>
          <Link
            to="/premium"
            className="border-primary/40 text-primary hover:bg-accent inline-flex items-center gap-1.5 rounded-full border px-3 py-2 transition-colors sm:px-4"
            activeProps={{ className: "bg-accent" }}
          >
            <ChefHat className="size-4" />
            <span className="hidden sm:inline">Chef IA</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
