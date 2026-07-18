import { NavLink } from "react-router-dom";
import { business, footer, nav } from "../data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-cream-soft)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <p className="text-lg font-medium text-[color:var(--color-sage-deep)]">{business.name}</p>
          <p className="mt-2 text-sm text-[color:var(--color-taupe)]">{footer.tagline}</p>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm underline decoration-[color:var(--color-rose)] underline-offset-4"
          >
            {business.instagramHandle}
          </a>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {nav.map((item) => (
            <NavLink key={item.href} to={item.href} className="text-[color:var(--color-cocoa)] hover:text-[color:var(--color-sage-deep)]">
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="border-t border-[color:var(--color-border)] px-5 py-5 text-center text-xs text-[color:var(--color-taupe)] sm:px-8">
        <p>
          © {year} {business.name}. All rights reserved.
        </p>
        <p className="mt-1">
          Website by{" "}
          <a
            href="https://ptheusengeagoni.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[color:var(--color-rose)] underline-offset-4 hover:text-[color:var(--color-sage-deep)]"
          >
            Ptheusen Geagoni
          </a>
        </p>
      </div>
    </footer>
  );
}
