import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { business, nav } from "../data/site";
import { photoSources } from "../data/photoSources";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm tracking-wide transition-colors hover:text-[color:var(--color-sage-deep)] ${
      isActive ? "text-[color:var(--color-sage-deep)] font-medium" : "text-[color:var(--color-cocoa)]"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-[color:var(--color-cream)]/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? "border-[color:var(--color-border)] shadow-sm" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-5 py-3 sm:px-8 lg:px-12 xl:px-20">
        <NavLink to="/" className="flex items-center gap-2 transition-transform duration-200 active:scale-95">
          <img src={photoSources.logo} alt={business.name} className="h-10 w-10 rounded-full object-cover" />
          <span className="sr-only">{business.name}</span>
        </NavLink>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.href} to={item.href} className={linkClass} end={item.href === "/"}>
              {item.label}
            </NavLink>
          ))}
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${business.name} on Instagram`}
            className="rounded-full border border-[color:var(--color-sage-deep)] p-2 text-[color:var(--color-sage-deep)] transition-[background-color,color,transform] duration-200 hover:bg-[color:var(--color-sage-deep)] hover:text-[color:var(--color-cream)] active:scale-90"
          >
            <InstagramIcon />
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] transition-transform duration-200 active:scale-90 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="flex flex-col gap-1 border-t border-[color:var(--color-border)] bg-[color:var(--color-cream)] px-5 py-3 md:hidden"
        >
          {nav.map((item, i) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${i * 40}ms` }}
              className={({ isActive }) =>
                `animate-pop-in min-h-11 rounded-lg px-2 py-3 text-base ${
                  isActive
                    ? "bg-[color:var(--color-cream-soft)] font-medium text-[color:var(--color-sage-deep)]"
                    : "text-[color:var(--color-cocoa)]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{ animationDelay: `${nav.length * 40}ms` }}
            className="animate-pop-in mt-1 flex min-h-11 items-center gap-2 rounded-lg px-2 py-3 text-base text-[color:var(--color-cocoa)]"
          >
            <InstagramIcon /> Instagram
          </a>
        </nav>
      )}
    </header>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-90" : "rotate-0"}`}
    >
      <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
    </svg>
  );
}
