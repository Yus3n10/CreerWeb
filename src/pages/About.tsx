import { Container, Cta, Eyebrow } from "../components/ui";
import { PhotoSlot } from "../components/PhotoSlot";
import { SectionDivider } from "../components/SectionDivider";
import { about, business } from "../data/site";
import { photoSources } from "../data/photoSources";

export function About() {
  return (
    <>
      <section className="bg-[color:var(--color-cream)] pb-14 pt-12 sm:pb-20 sm:pt-16">
        <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h1 className="text-[color:var(--color-sage-deep)]">{about.heading}</h1>
            <p className="mt-5 text-[15px] sm:text-base">{about.intro}</p>
          </div>
          <PhotoSlot imageId="aboutHero" src={photoSources.aboutHero} torn priority className="w-full" />
        </Container>
      </section>

      <SectionDivider fill="var(--color-cream-soft)" />

      <section className="bg-[color:var(--color-cream-soft)] py-14 sm:py-20">
        <Container className="max-w-3xl">
          <Eyebrow>{about.story.eyebrow}</Eyebrow>
          <h2>{about.story.heading}</h2>
          <p className="mt-2 text-xs italic text-[color:var(--color-taupe)]">
            [Placeholder — replace with the owner's real story in her own words]
          </p>
          <div className="mt-5 space-y-4 text-[15px] sm:text-base">
            {about.story.body.map((paragraph) => (
              <p key={paragraph.slice(0, 20)}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider fill="var(--color-cream)" />

      <section className="bg-[color:var(--color-cream)] py-14 sm:py-20">
        <Container>
          <Eyebrow>{about.howWeBake.eyebrow}</Eyebrow>
          <h2>{about.howWeBake.heading}</h2>

          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {about.howWeBake.points.map((point) => (
              <div key={point.title}>
                <h3 className="text-[color:var(--color-sage-deep)]">{point.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-cocoa)]">{point.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:max-w-lg">
            <PhotoSlot imageId="behindScenes1" src={photoSources.behindScenes1} className="w-full" />
            <PhotoSlot imageId="behindScenes2" src={photoSources.behindScenes2} className="w-full" />
          </div>
        </Container>
      </section>

      <SectionDivider fill="var(--color-sage-deep)" />

      <section className="bg-[color:var(--color-sage-deep)] py-14 text-[color:var(--color-cream)] sm:py-20">
        <Container className="text-center">
          <h2 className="text-[color:var(--color-cream)]">Ready to order?</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-[color:var(--color-cream)]/85 sm:text-base">
            Every order goes through Instagram DM — say hello and tell us what you'd like.
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
        </Container>
      </section>
    </>
  );
}
