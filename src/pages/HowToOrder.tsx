import { Container, Cta, Eyebrow } from "../components/ui";
import { SectionDivider } from "../components/SectionDivider";
import { Reveal } from "../components/Reveal";
import { business, howToOrder, orderSteps } from "../data/site";

export function HowToOrder() {
  return (
    <>
      <section className="bg-[color:var(--color-cream)] pb-14 pt-12 sm:pb-20 sm:pt-16">
        <Container>
          <Reveal>
            <Eyebrow>{howToOrder.eyebrow}</Eyebrow>
            <h1 className="max-w-2xl text-[color:var(--color-sage-deep)]">{howToOrder.heading}</h1>
            <p className="mt-4 max-w-xl text-[15px] sm:text-base">{howToOrder.intro}</p>
          </Reveal>

          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {orderSteps.map((step, i) => (
              <Reveal key={step.number} as="li" delay={i * 90}>
                <span className="text-3xl font-light text-[color:var(--color-rose)]">{step.number}</span>
                <h3 className="mt-2 text-[color:var(--color-sage-deep)]">{step.title}</h3>
                <p className="mt-1 text-sm text-[color:var(--color-cocoa)]">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <SectionDivider fill="var(--color-cream-soft)" />

      <section className="bg-[color:var(--color-cream-soft)] py-14 sm:py-20">
        <Container>
          <Reveal>
            <Eyebrow>{howToOrder.fulfillment.eyebrow}</Eyebrow>
            <h2>{howToOrder.fulfillment.heading}</h2>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Reveal className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-cream)] p-6 transition-shadow duration-300 hover:shadow-md">
              <h3 className="text-[color:var(--color-sage-deep)]">{howToOrder.fulfillment.pickup.title}</h3>
              <p className="mt-2 text-sm">{howToOrder.fulfillment.pickup.body}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-[color:var(--color-taupe)]">
                {howToOrder.fulfillment.pickup.note}
              </p>
            </Reveal>
            <Reveal
              delay={80}
              className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-cream)] p-6 transition-shadow duration-300 hover:shadow-md"
            >
              <h3 className="text-[color:var(--color-sage-deep)]">{howToOrder.fulfillment.delivery.title}</h3>
              <p className="mt-2 text-sm">{howToOrder.fulfillment.delivery.body}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-[color:var(--color-taupe)]">
                {howToOrder.fulfillment.delivery.note}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <SectionDivider fill="var(--color-cream)" />

      <section className="bg-[color:var(--color-cream)] py-14 sm:py-20">
        <Container className="max-w-2xl">
          <Reveal>
            <Eyebrow>{howToOrder.leadTime.eyebrow}</Eyebrow>
            <h2>{howToOrder.leadTime.heading}</h2>
            <p className="mt-4 text-[15px] sm:text-base">{howToOrder.leadTime.body}</p>
            <div className="mt-6">
              <Cta to={business.instagramUrl} external>
                Order on Instagram
              </Cta>
            </div>
          </Reveal>
        </Container>
      </section>

      <SectionDivider fill="var(--color-sage-deep)" />

      <section className="bg-[color:var(--color-sage-deep)] py-14 text-[color:var(--color-cream)] sm:py-20">
        <Container className="text-center">
          <Reveal>
            <h2 className="text-[color:var(--color-cream)]">Got your order in mind?</h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] text-[color:var(--color-cream)]/85 sm:text-base">
              Send us a DM and we'll take it from there.
            </p>
            <div className="mt-7">
              <Cta
                to={business.instagramUrl}
                external
                variant="secondary"
                className="!border-[color:var(--color-cream)] !text-[color:var(--color-cream)] hover:!bg-[color:var(--color-cream)] hover:!text-[color:var(--color-sage-deep)]"
              >
                Message us · {business.instagramHandle}
              </Cta>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
