import { business, footer } from "../data/site";
import { photoSources } from "../data/photoSources";

/**
 * No nav links here on purpose — the header nav is present on every page,
 * so repeating it in the footer would just be redundant. This stays a
 * simple sign-off: who this is, and how to reach them.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-cream-soft)]">
      <div className="flex max-w-xs flex-col px-5 py-12 sm:px-8 lg:px-12 xl:px-20">
        <img src={photoSources.logo} alt={business.name} className="h-12 w-12 rounded-full object-cover" />
        <p className="mt-3 text-lg font-medium text-[color:var(--color-sage-deep)]">{business.name}</p>
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
