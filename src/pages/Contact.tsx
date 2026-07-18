import { useState, type FormEvent } from "react";
import { Container, Eyebrow } from "../components/ui";
import { business, contact } from "../data/site";

const LIMITS = {
  name: 100,
  reachBack: 150,
  message: 1000,
};

type Status = "idle" | "submitting" | "success" | "error";

function encodeForm(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never fill this hidden field. A filled value
    // means it's a bot, so we quietly pretend to succeed.
    if ((data.get("company") as string)?.trim()) {
      setStatus("success");
      form.reset();
      return;
    }

    const name = (data.get("name") as string)?.trim() ?? "";
    const reachBack = (data.get("reachBack") as string)?.trim() ?? "";
    const message = (data.get("message") as string)?.trim() ?? "";

    if (!name || !message) {
      setErrorMessage("Please fill in your name and message.");
      return;
    }
    if (name.length > LIMITS.name || reachBack.length > LIMITS.reachBack || message.length > LIMITS.message) {
      setErrorMessage("One of the fields is too long — please shorten it and try again.");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({ "form-name": "contact", name, reachBack, message }),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong sending that. Please try again, or message us on Instagram instead.");
    }
  }

  return (
    <>
      <section className="bg-[color:var(--color-cream)] pb-14 pt-12 sm:pb-20 sm:pt-16">
        <Container>
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h1 className="max-w-xl text-[color:var(--color-sage-deep)]">{contact.heading}</h1>
          <p className="mt-4 max-w-xl text-[15px] sm:text-base">{contact.intro}</p>
        </Container>
      </section>

      <section className="bg-[color:var(--color-cream)] pb-16 sm:pb-20">
        <Container className="grid gap-8 md:grid-cols-2 md:gap-10">
          <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-cream-soft)] p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-rose)]">
              The best way
            </p>
            <h2 className="mt-1 text-xl">Order &amp; chat on Instagram</h2>
            <p className="mt-3 text-sm">{contact.instagramBlurb}</p>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-medium text-[color:var(--color-sage-deep)] underline decoration-[color:var(--color-rose)] underline-offset-4"
            >
              {business.instagramHandle}
            </a>

            <div className="mt-8 border-t border-[color:var(--color-border)] pt-6">
              <h3 className="text-[color:var(--color-sage-deep)]">Where we are</h3>
              <p className="mt-2 text-sm">{contact.location}</p>
              <p className="mt-2 text-sm text-[color:var(--color-taupe)]">{contact.locationBody}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-[color:var(--color-border)] p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-taupe)]">
              Questions? Send us a message
            </p>
            <p className="mt-2 text-sm text-[color:var(--color-cocoa)]">{contact.formNote}</p>

            {status === "success" ? (
              <div role="status" className="mt-6 rounded-xl bg-[color:var(--color-sage)]/15 p-4 text-sm text-[color:var(--color-sage-deep)]">
                Thanks — your message is in. We'll get back to you soon.
              </div>
            ) : (
              <form
                name="contact"
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col gap-4"
                noValidate
              >
                {/* Netlify form detection field, kept out of the tab order and off-screen. */}
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="company" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

                <div>
                  <label htmlFor="name" className="text-sm font-medium text-[color:var(--color-cocoa)]">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={LIMITS.name}
                    autoComplete="name"
                    className="mt-1 w-full min-h-11 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-cream)] px-3 py-2 text-sm outline-none focus:border-[color:var(--color-sage-deep)]"
                  />
                </div>

                <div>
                  <label htmlFor="reachBack" className="text-sm font-medium text-[color:var(--color-cocoa)]">
                    Email or Instagram handle <span className="font-normal text-[color:var(--color-taupe)]">(optional, so we can reply)</span>
                  </label>
                  <input
                    id="reachBack"
                    name="reachBack"
                    type="text"
                    maxLength={LIMITS.reachBack}
                    autoComplete="email"
                    className="mt-1 w-full min-h-11 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-cream)] px-3 py-2 text-sm outline-none focus:border-[color:var(--color-sage-deep)]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-[color:var(--color-cocoa)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    maxLength={LIMITS.message}
                    className="mt-1 w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-cream)] px-3 py-2 text-sm outline-none focus:border-[color:var(--color-sage-deep)]"
                  />
                </div>

                {errorMessage && (
                  <p role="alert" className="text-sm text-[#a13d3d]">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-1 inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--color-sage-deep)] px-6 py-2.5 text-sm font-medium text-[color:var(--color-cream)] transition-colors hover:bg-[color:var(--color-sage)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
