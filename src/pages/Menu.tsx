import { Container, Cta, Eyebrow } from "../components/ui";
import { PhotoSlot } from "../components/PhotoSlot";
import { SectionDivider } from "../components/SectionDivider";
import { Reveal } from "../components/Reveal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { business } from "../data/site";
import { menu } from "../data/menu";
import { photoSources, photoAngles } from "../data/photoSources";
import type { MenuItem } from "../lib/types";

export function Menu() {
  return (
    <>
      <section className="bg-[color:var(--color-cream)] pb-10 pt-12 sm:pb-14 sm:pt-16">
        <Container>
          <Reveal>
            <Eyebrow>Our menu</Eyebrow>
            <h1 className="text-[color:var(--color-sage-deep)]">What's baking.</h1>
            <p className="mt-4 max-w-xl text-[15px] sm:text-base">
              Prices below are placeholders — final pricing is confirmed when you place your order on
              Instagram. Customization is welcomed.
            </p>
          </Reveal>
        </Container>
      </section>

      <Tabs defaultValue={menu[0].id} className="gap-0">
        <div className="sticky top-[57px] z-30 border-y border-[color:var(--color-border)] bg-[color:var(--color-cream)]/95 backdrop-blur-sm sm:top-[65px]">
          <Container className="overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <TabsList className="!h-auto w-fit flex-nowrap justify-start gap-1.5 rounded-full bg-[color:var(--color-cream-soft)] p-1.5">
              {menu.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-[color:var(--color-cocoa)] transition-colors data-active:bg-[color:var(--color-sage-deep)] data-active:text-[color:var(--color-cream)] data-active:shadow-none"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Container>
        </div>

        {menu.map((category) => (
          <TabsContent key={category.id} value={category.id} className="outline-none">
            <section className="bg-[color:var(--color-cream)] py-10 sm:py-14">
              <Container>
                <div className="animate-pop-in mb-8">
                  <Eyebrow>{category.tagline}</Eyebrow>
                  <h2>{category.name}</h2>
                  {category.note && (
                    <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[color:var(--color-taupe)]">
                      {category.note}
                    </p>
                  )}
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={item.name}
                      className="animate-pop-in"
                      style={{ animationDelay: `${Math.min(itemIndex, 3) * 60}ms` }}
                    >
                      <MenuItemCard item={item} />
                    </div>
                  ))}
                </div>
              </Container>
            </section>
          </TabsContent>
        ))}
      </Tabs>

      <SectionDivider from="var(--color-cream)" fill="var(--color-sage-deep)" />

      <section className="bg-[color:var(--color-sage-deep)] py-14 text-[color:var(--color-cream)] sm:py-20">
        <Container className="text-center">
          <Reveal>
            <Eyebrow>Ready when you are</Eyebrow>
            <h2 className="text-[color:var(--color-cream)]">
              To customize &amp; pre-order, message us on Instagram.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] text-[color:var(--color-cream)]/85 sm:text-base">
              Tell us the flavor, quantity, and pickup or delivery day — we'll confirm and get baking.
            </p>
            <div className="mt-7">
              <Cta
                to={business.instagramUrl}
                external
                variant="secondary"
                className="!border-[color:var(--color-cream)] !text-[color:var(--color-cream)] hover:!bg-[color:var(--color-cream)] hover:!text-[color:var(--color-sage-deep)]"
              >
                Order on Instagram · {business.instagramHandle}
              </Cta>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-cream)] p-4 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:gap-5">
      <PhotoSlot
        imageId={item.imageId}
        src={photoAngles[item.imageId] ?? photoSources[item.imageId]}
        zoomOnHover
        className="w-full sm:w-36 sm:shrink-0"
      />
      <div className="flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-rose)]">{item.tag}</p>
        <h3 className="mt-1 text-[color:var(--color-sage-deep)]">{item.name}</h3>
        <p className="mt-1 text-sm text-[color:var(--color-cocoa)]">{item.description}</p>

        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[color:var(--color-border)] pt-3 sm:grid-cols-3">
          {item.pricing.map((tier) => (
            <div key={tier.label}>
              <dt className="text-[11px] uppercase tracking-wide text-[color:var(--color-taupe)]">{tier.label}</dt>
              <dd className="text-sm font-medium text-[color:var(--color-cocoa)]">{tier.price}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
