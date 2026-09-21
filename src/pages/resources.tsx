import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Lightbulb, Heart, Shield, ArrowRight } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/shared/section-heading";
import { faqs } from "@/data/site-data";

export function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources & FAQs"
        subtitle="Educational guides, treatment information, and answers to your most common questions."
      />
      <FAQSection />
      <EducationalContent />
      <PrePostCare />
      <SkincareTips />
      <ResourcesCTA />
    </>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our practice and treatments."
          centered
        />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-sm font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function EducationalContent() {
  const articles = [
    {
      icon: Lightbulb,
      title: "Understanding Botox: What to Expect",
      excerpt: "A comprehensive guide to neurotoxin treatments, from how they work to what results you can expect and how long they last.",
      category: "Treatment Guide",
    },
    {
      icon: BookOpen,
      title: "The Science of Dermal Fillers",
      excerpt: "Learn about hyaluronic acid fillers, different types, placement techniques, and how to choose the right filler for your goals.",
      category: "Treatment Guide",
    },
    {
      icon: Heart,
      title: "Building a Medical-Grade Skincare Routine",
      excerpt: "Expert guidance on choosing the right products, active ingredients, and building a routine that delivers real results.",
      category: "Skincare",
    },
    {
      icon: Shield,
      title: "Sun Protection: The Foundation of Anti-Aging",
      excerpt: "Why SPF is the single most important step in any anti-aging protocol, and how to choose the right sunscreen.",
      category: "Prevention",
    },
    {
      icon: Lightbulb,
      title: "When to Start Preventive Treatments",
      excerpt: "A guide to age-appropriate aesthetic treatments, from your 20s through your 60s and beyond.",
      category: "Education",
    },
    {
      icon: BookOpen,
      title: "Combining Treatments for Optimal Results",
      excerpt: "How strategic treatment stacking and timing can maximize your aesthetic outcomes while minimizing downtime.",
      category: "Strategy",
    },
  ];

  return (
    <section className="bg-secondary/50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Educational Resources"
          subtitle="Empower yourself with knowledge about the treatments and practices that can help you achieve your goals."
          centered
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.title} className="group transition-all hover:shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-xs font-medium text-primary">
                  <article.icon className="h-3.5 w-3.5" />
                  {article.category}
                </div>
                <h3 className="mt-2 font-heading text-sm font-semibold">{article.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{article.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrePostCare() {
  const preCare = [
    "Avoid blood thinners (aspirin, ibuprofen, fish oil) 7 days prior",
    "Discontinue retinol/retinoid products 3 days before",
    "Arrive with clean, makeup-free skin when possible",
    "Stay hydrated in the days leading up to treatment",
    "Avoid alcohol 24 hours before injectable treatments",
    "Eat a light meal before your appointment",
  ];

  const postCare = [
    "Avoid strenuous exercise for 24-48 hours post-treatment",
    "Apply ice gently to reduce swelling if instructed",
    "Sleep elevated the first night after facial injectables",
    "Avoid direct sun exposure and wear SPF 50+ daily",
    "Do not touch or massage the treated area unless directed",
    "Follow any specific aftercare instructions provided by your provider",
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Pre & Post Treatment Care"
          subtitle="General guidelines to help you prepare for and recover from your treatments."
          centered
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="font-heading text-base font-semibold">Before Your Treatment</h3>
            <ul className="mt-4 space-y-2.5">
              {preCare.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h3 className="font-heading text-base font-semibold">After Your Treatment</h3>
            <ul className="mt-4 space-y-2.5">
              {postCare.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground italic">
          These are general guidelines. Your provider will give you specific instructions tailored to your treatment.
        </p>
      </div>
    </section>
  );
}

function SkincareTips() {
  const tips = [
    { title: "Consistency Over Intensity", tip: "A simple routine done daily beats an elaborate one done sporadically. Start with cleanser, SPF, and one active." },
    { title: "Layer Thin to Thick", tip: "Apply products from thinnest to thickest consistency for maximum absorption — serum first, then moisturizer, then SPF." },
    { title: "SPF Every Single Day", tip: "UV damage occurs even on cloudy days and through windows. Apply SPF 30+ daily, reapply every 2 hours outdoors." },
    { title: "Retinol Is Non-Negotiable", tip: "After SPF, retinol is the most evidence-backed anti-aging ingredient. Start slow (2x/week) and build tolerance." },
    { title: "Hydration From Within", tip: "Drink adequate water, eat omega-3 rich foods, and limit alcohol and sugar for optimal skin health." },
    { title: "Don't Neglect Your Neck", tip: "The neck and décolleté age faster than the face. Extend every product — especially SPF and retinol — below the jawline." },
  ];

  return (
    <section className="bg-secondary/50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Expert Skincare Tips"
          subtitle="Simple, effective advice from our dermatology team to elevate your daily routine."
          centered
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip) => (
            <div key={tip.title} className="rounded-xl border bg-card p-5">
              <h3 className="font-heading text-sm font-semibold">{tip.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{tip.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesCTA() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
          Have More Questions?
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Our team is always happy to answer questions and help you understand your options.
          Don't hesitate to reach out.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/book">Contact Us <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/treatments">Browse Treatments</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
