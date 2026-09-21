import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MobileBottomNav, DesktopHeader, MobileHeader } from "./navigation";
import { Footer } from "./footer";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-svh flex-col">
      <MobileHeader />
      <DesktopHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
