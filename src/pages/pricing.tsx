import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, ArrowRight, CreditCard, CheckCircle } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/shared/section-heading";
import { treatmentCategories } from "@/data/site-data";

export function PricingPage() {
  return (
    <>
      <PageHero
        title="Treatment Pricing"
        subtitle="Transparent pricing for all our services. Complimentary consultations available for personalized quotes."
      />
      <PricingTabs />
      <PricingNotes />
      <FinancingOptions />
      <PricingCTA />
    </>
  );
}

function PricingTabs() {
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
            <TabsContent key={category.id} value={category.id}>
              <div className="overflow-hidden rounded-xl border">
                <div className="bg-muted/50 p-4">
                  <h2 className="font-heading text-lg font-semibold">{category.name}</h2>
                  <p className="text-xs text-muted-foreground">{category.description}</p>
                </div>
                <div className="divide-y">
                  {category.treatments.map((treatment) => (
                    <div key={treatment.name} className="flex items-center justify-between p-4">
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">{treatment.name}</h3>
                        <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{treatment.description}</p>
                        <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {treatment.duration}
                          </span>
                          <span>Downtime: {treatment.downtime}</span>
                        </div>
                      </div>
                      <div className="ml-4 shrink-0 text-right">
                        <Badge variant="secondary" className="text-xs font-semibold">
                          {treatment.price}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function PricingNotes() {
  const notes = [
    "All prices listed are starting prices. Final pricing depends on individual treatment plans.",
    "Complimentary consultations are available to discuss your goals and receive a personalized quote.",
    "Package pricing is available for treatment series (typically 10-20% savings).",
    "Lumera Circle members receive 15% off all listed prices.",
    "Prices are subject to change without notice.",
  ];

  return (
    <section className="bg-secondary/50 py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading title="Important Notes" centered />
        <div className="space-y-3">
          {notes.map((note, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinancingOptions() {
  const payments = [
    "Cash & Check",
    "All Major Credit Cards",
    "HSA/FSA Cards",
    "CareCredit",
    "Cherry Financing",
    "Alle Rewards",
  ];

  return (
    <section id="financing" className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Payment & Financing"
          subtitle="Flexible payment options to make your aesthetic goals accessible."
          centered
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-3 font-heading text-base font-semibold">Accepted Payment Methods</h3>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {payments.map((method) => (
                  <div key={method} className="flex items-center gap-2 text-xs">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    {method}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-3 font-heading text-base font-semibold">Financing Plans</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                We partner with CareCredit and Cherry to offer:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                  0% APR for 6, 12, 18, or 24 months
                </li>
                <li className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                  Instant approval with soft credit check
                </li>
                <li className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                  Apply online or in-office during your visit
                </li>
                <li className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                  No prepayment penalties
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 rounded-lg border bg-muted/50 p-4 text-center">
          <p className="text-xs text-muted-foreground">
            <strong>Insurance Note:</strong> As an elective aesthetics practice, we do not bill insurance.
            Some HSA/FSA plans may cover certain treatments — please check with your provider.
          </p>
        </div>
      </div>
    </section>
  );
}

function PricingCTA() {
  return (
    <section className="bg-secondary/50 py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
          Get Your Personalized Quote
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Every patient is unique. Schedule a complimentary consultation to discuss your goals
          and receive a customized treatment plan with detailed pricing.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/book">Book Free Consultation</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/membership">Explore Membership <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
