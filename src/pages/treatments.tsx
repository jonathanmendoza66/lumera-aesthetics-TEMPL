import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/shared/section-heading";
import { SectionHeading } from "@/components/shared/section-heading";
import { treatmentCategories, conditions } from "@/data/site-data";

export function TreatmentsPage() {
  return (
    <>
      <PageHero
        title="Our Treatments"
        subtitle="Advanced aesthetic treatments delivered with precision and artistry. Every protocol is customized to your unique goals."
        image="/hero-treatments.webp"
      />
      <TreatmentTabs />
      <ConditionsGrid />
      <TreatmentCTA />
    </>
  );
}

function TreatmentTabs() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Tabs defaultValue="injectables" className="w-full">
          <TabsList className="no-scrollbar mb-8 flex w-full justify-start gap-1 overflow-x-auto bg-transparent p-0">
            {treatmentCategories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="shrink-0 rounded-full border bg-card px-4 py-2 text-xs font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {treatmentCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} id={category.id}>
              <div className="mb-6">
                <h2 className="font-heading text-xl font-semibold md:text-2xl">{category.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.treatments.map((treatment) => (
                  <Card key={treatment.name} className="group transition-all hover:shadow-md">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Sparkles className="h-5 w-5 text-primary" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {treatment.price}
                        </Badge>
                      </div>
                      <CardTitle className="mt-3 font-heading text-base">{treatment.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-xs leading-relaxed text-muted-foreground">{treatment.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {treatment.duration}
                        </span>
                        <span>Downtime: {treatment.downtime}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function ConditionsGrid() {
  return (
    <section className="bg-secondary/50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Conditions We Address"
          subtitle="Our comprehensive range of treatments can help with these common aesthetic concerns."
          centered
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {conditions.map((condition) => (
            <div
              key={condition}
              className="flex items-center gap-2 rounded-lg border bg-card p-3 text-xs font-medium"
            >
              <CheckCircle className="h-3.5 w-3.5 shrink-0 text-primary" />
              {condition}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TreatmentCTA() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
          Not Sure Which Treatment Is Right for You?
        </h2>
        <p className="mt-3 text-sm text-muted-foreground md:text-base">
          Our expert team will create a personalized plan tailored to your unique needs and goals.
          Book a complimentary consultation to get started.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/book">Book Free Consultation</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/pricing">View Full Pricing <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
