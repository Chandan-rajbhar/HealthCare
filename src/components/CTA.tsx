import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="main-container text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
  Designed for better care and smarter growth
</h2>
       <p className="mt-4 text-lg opacity-90">
  Join 3,500+ healthcare practices already using our platform
</p>
        <Button size="lg" variant="secondary" className="mt-8">
          Book a Demo
        </Button>
      </div>
    </section>
  );
};