import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[color:var(--color-sage-deep)] focus:px-4 focus:py-2 focus:text-[color:var(--color-cream)]"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Nav />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
