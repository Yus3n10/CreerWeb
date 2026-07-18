import { Container, Cta } from "../components/ui";

export function NotFound() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <h1 className="text-[color:var(--color-sage-deep)]">Page not found.</h1>
        <p className="mt-4 text-[15px]">That page doesn't exist — but the menu still does.</p>
        <div className="mt-6">
          <Cta to="/">Back to home</Cta>
        </div>
      </Container>
    </section>
  );
}
