import { Card, CardContent } from "@/components/ui/card";
import { X, Check } from "lucide-react";

export const ProblemSolution = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="main-container">
       <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
  Managing a healthcare practice shouldn't be this complex
</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Old Way */}
          <Card className="border-2 border-red-100 bg-white shadow-sm">
            <CardContent className="p-6 md:p-8">
              <div className="mb-4 flex items-center gap-2 text-red-500">
                <X className="h-5 w-5" />
                <span className="font-semibold">The old way</span>
              </div>
              <ul className="space-y-4">
                {[
                  "Multiple disconnected systems",
                  "Manual admin work",
                  "No real-time visibility",
                  "Scale adds complexity"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <X className="h-4 w-4 text-red-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Pabau Way */}
          <Card className="border-2 border-green-100 bg-green-50/50 shadow-sm dark:bg-green-950/20">
            <CardContent className="p-6 md:p-8">
              <div className="mb-4 flex items-center gap-2 text-green-600">
                <Check className="h-5 w-5" />
                <span className="font-semibold">The Clinic way</span>
              </div>
              <ul className="space-y-4">
                {[
                  "One platform for the whole clinic",
                  "Automated admin, team focuses on patients",
                  "Real-time visibility across your entire team",
                  "Scale without adding complexity"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-green-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};