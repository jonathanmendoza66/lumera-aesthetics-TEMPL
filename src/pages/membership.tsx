import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Crown, Star, Sparkles, Gift, Calendar, Percent } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/shared/section-heading";

export function MembershipPage() {
  return (
    <>
      <PageHero
        title="Lumera Circle Membership"
        subtitle="Exclusive benefits, priority access, and significant savings on your aesthetic journey."
        gradient="from-primary/15 via-accent/10 to-background"
      />
      <MembershipOverview />
      <BenefitsDetail />
      <PricingComparison />
      <FinancingSection />
      <MembershipFAQ />
      <MembershipCTA />
    </>
  );
}

function MembershipOverview() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4" variant="secondary">
            <Crown className="mr-1 h-3 w-3" /> Exclusive Members Program
          </Badge>
          <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
            Invest in Your Beauty, Effortlessly
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            The Lumera Circle is our premium membership designed for patients who want ongoing,
            consistent care at exceptional value. Enjoy member-only pricing, priority scheduling,
            and exclusive perks year-round.
          </p>
          <div className="mt-8 inline-flex flex-col items-center rounded-2xl border bg-gradient-to-br from-primary/5 to-accent/5 p-8">
            <span className="text-sm font-medium text-muted-foreground">Monthly Investment</span>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-heading text-5xl font-bold text-primary">$249</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <span className="mt-2 text-xs text-muted-foreground">12-month commitment &middot; Cancel anytime after</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsDetail() {
  const benefits = [
    { icon: Percent, title: "15% Off All Treatments", description: "Save on every service from injectables to laser treatments, every single visit" },
    { icon: Sparkles, title: "Monthly Signature Facial", description: "A complimentary customized facial every month (valued at $250+)" },
    { icon: Calendar, title: "Priority Booking", description: "Book appointments before non-members, including extended evening hours" },
    { icon: Gift, title: "Birthday Treatment", description: "A special complimentary treatment during your birthday month (up to $500 value)" },
    { icon: Star, title: "Exclusive Member Events", description: "Invitations to private events, product launches, and educational seminars" },
    { icon: Crown, title: "Complimentary Add-Ons", description: "Free LED therapy, lip mask, or hydrating boost with any treatment" },
  ];

  return (
    <section className="bg-secondary/50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Member Benefits"
          subtitle="Everything included in your Lumera Circle membership."
          centered
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="transition-all hover:shadow-sm">
              <CardContent className="p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-3 font-heading text-sm font-semibold">{benefit.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingComparison() {
  const comparisons = [
    { treatment: "Botox (50 units)", regular: "$700", member: "$595" },
    { treatment: "Dermal Filler (1 syringe)", regular: "$750", member: "$638" },
    { treatment: "HydraFacial MD", regular: "$250", member: "$213" },
    { treatment: "Chemical Peel", regular: "$200", member: "$170" },
    { treatment: "CoolSculpting (1 cycle)", regular: "$750", member: "$638" },
    { treatment: "Microneedling", regular: "$450", member: "$383" },
    { treatment: "Monthly Facial", regular: "$250", member: "Included" },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          title="Member vs. Regular Pricing"
          subtitle="See how quickly your membership pays for itself."
          centered
        />
        <div className="overflow-hidden rounded-xl border">
          <div className="grid grid-cols-3 bg-muted/50 p-3 text-xs font-semibold">
            <span>Treatment</span>
            <span className="text-center">Regular</span>
            <span className="text-center text-primary">Member</span>
          </div>
          {comparisons.map((item, i) => (
            <div key={item.treatment} className={`grid grid-cols-3 p-3 text-xs ${i % 2 === 0 ? "" : "bg-muted/30"}`}>
              <span className="font-medium">{item.treatment}</span>
              <span className="text-center text-muted-foreground line-through">{item.regular}</span>
              <span className="text-center font-semibold text-primary">{item.member}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          *Member pricing reflects 15% discount. Monthly facial value ($250) plus treatment savings typically exceed membership cost within the first month.
        </p>
      </div>
    </section>
  );
}

function FinancingSection() {
  return (
    <section className="bg-secondary/50 py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionHeading
          title="Flexible Financing"
          subtitle="Multiple payment options to make your aesthetic goals accessible."
          centered
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { name: "CareCredit", description: "0% APR for 6-24 months on qualifying purchases" },
            { name: "Cherry", description: "Simple, transparent payment plans with instant approval" },
            { name: "Alle Rewards", description: "Earn points on Allergan products toward future treatments" },
          ].map((option) => (
            <Card key={option.name}>
              <CardContent className="p-5 text-center">
                <h3 className="font-heading text-base font-semibold">{option.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{option.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function MembershipFAQ() {
  const faqItems = [
    { q: "Is there a contract or commitment?", a: "We ask for a 12-month initial commitment to keep membership pricing low. After that, you can continue month-to-month or cancel at any time with 30 days notice." },
    { q: "Can I share my membership with family?", a: "Memberships are individual, but we offer a 10% family discount when multiple household members join." },
    { q: "Do unused monthly facials roll over?", a: "Monthly facials do not roll over between months, but you can gift your facial to a friend or family member in the same month." },
    { q: "Can I combine the 15% discount with other promotions?", a: "Member discounts cannot be combined with other promotional offers, but you always receive the better of the two discounts." },
    { q: "What if I want to pause my membership?", a: "We offer a one-time 30-day pause per year for travel, medical reasons, or personal circumstances." },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading title="Membership FAQ" centered />
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-sm font-medium">{item.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function MembershipCTA() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="absolute inset-0">
        <img src="/membership-lifestyle.webp" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <Crown className="mx-auto h-10 w-10 text-white/80" />
        <h2 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Join the Lumera Circle Today
        </h2>
        <p className="mt-3 text-sm text-white/80 md:text-base">
          Start saving on your very first visit. Membership benefits begin immediately upon enrollment.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/book">Inquire About Membership</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white">
            <Link to="/pricing">View All Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
