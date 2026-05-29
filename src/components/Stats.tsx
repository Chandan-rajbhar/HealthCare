import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "43%", label: "reduction in administrative workload", suffix: "" },
  { value: "2.4x", label: "faster clinical team onboarding", suffix: "faster" },
  { value: "32%", label: "increase in patient lifetime value", suffix: "" },
  { value: "2x", label: "ROI from operational savings alone", suffix: "" },
];

export const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="main-container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">It pays for itself fast</h2>
          <p className="mt-2 text-sm text-muted-foreground">
  Source: Healthcare Practice Impact Report, 2025
</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary md:text-5xl">{stat.value}</div>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};