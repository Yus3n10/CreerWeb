import { Container, Cta, Eyebrow } from "../components/ui";
import { PhotoSlot } from "../components/PhotoSlot";
import { SectionDivider } from "../components/SectionDivider";
import { Reveal } from "../components/Reveal";
import { Gallery } from "../components/Gallery";
import { business, home } from "../data/site";
import { menu, featuredItems } from "../data/menu";
import { photoSources, photoAngles } from "../data/photoSources";

export function Home() {
  const featured = featuredItems.map(({ categoryId, itemName }) => {
    const category = menu.find((c) => c.id === categoryId)!;
    const item = category.items.find((i) => i.name === itemName)!;
    return item;
  });

  return (
    <>
      <section className="bg-[color:var(--color-cream)] pb-16 pt-12 sm:pb-20 sm:pt-16">
        <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <Eyebrow>{home.eyebrow}</Eyebrow>
            <h1 className="text-[color:var(--color-sage-deep)]">{home.heading}</h1>
            <p className="mt-5 text-[15px] text-[color:var(--color-cocoa)] sm:text-base">{home.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Cta to="/menu">View the menu</Cta>
              <Cta to={business.instagramUrl} variant="secondary" external>
                Order on Instagram
              </Cta>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <PhotoSlot imageId="heroPhoto" src={photoSources.heroPhoto} torn priority idle className="w-full" />
          </Reveal>
        </Container>
      </section>

      <SectionDivider from="var(--color-cream)" fill="var(--color-cream-soft)" />

      <section className="bg-[color:var(--color-cream-soft)] py-14 sm:py-20">
        <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal className="md:order-2">
            <PhotoSlot imageId="kitchenPhoto" className="w-full" />
          </Reveal>
          <Reveal className="md:order-1">
            <Eyebrow>{home.kitchen.eyebrow}</Eyebrow>
            <h2>Our little kitchen</h2>
            <p className="mt-4 text-[15px] sm:text-base">{home.kitchen.body}</p>
          </Reveal>
        </Container>
      </section>

      <SectionDivider from="var(--color-cream-soft)" fill="var(--color-cream)" />

      <section className="bg-[color:var(--color-cream)] py-14 sm:py-20">
        <Container>
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>{home.featured.eyebrow}</Eyebrow>
              <h2>{home.featured.heading}</h2>
            </div>
            <Cta to="/menu" variant="secondary">
              See the full menu
            </Cta>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {featured.map((item, i) => (
              <Reveal key={item.name} delay={i * 70} className="group flex flex-col gap-3">
                <PhotoSlot
                  imageId={item.imageId}
                  src={photoAngles[item.imageId] ?? photoSources[item.imageId]}
                  zoomOnHover
                  className="w-full shadow-sm transition-shadow duration-300 group-hover:shadow-md"
                />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-rose)]">
                    {item.tag}
                  </p>
                  <h3 className="mt-1 text-base font-medium text-[color:var(--color-sage-deep)] sm:text-lg">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-[color:var(--color-taupe)]">from {item.pricing[0].price}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider from="var(--color-cream)" fill="var(--color-cream-soft)" />

      <section className="bg-[color:var(--color-cream-soft)] py-14 sm:py-20">
        <Container>
          <Reveal className="mb-8 text-center">
            <Eyebrow>A peek inside</Eyebrow>
            <h2>From the oven.</h2>
          </Reveal>
          <Gallery />
        </Container>
      </section>

      <SectionDivider from="var(--color-cream-soft)" fill="var(--color-sage-deep)" />

      <section className="bg-[color:var(--color-sage-deep)] py-14 text-[color:var(--color-cream)] sm:py-20">
        <Container className="text-center">
          <Reveal>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--color-rose)]">
              {home.closing.eyebrow}
            </p>
            <h2 className="text-[color:var(--color-cream)]">{home.closing.heading}</h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] text-[color:var(--color-cream)]/85 sm:text-base">
              {home.closing.body}
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
