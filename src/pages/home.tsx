import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Star, ArrowRight, Sparkles, Shield, Gem, Clock, Award, Crown,
  CheckCircle, Phone, MapPin, Zap, Leaf, Target, Palette
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig, treatmentCategories, testimonials, faqs, consultationSteps, brands, conditions, teamMembers } from "@/data/site-data";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <WelcomeSection />
      <FeaturedTreatments />
      <WhyChooseSection />
      <ConditionsSection />
      <TeamSection />
      <TestimonialsSection />
      <MembershipTeaser />
      <ConsultationJourney />
      <BrandsSection />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-svh flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/hero-home.webp" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-32 md:px-6 md:py-40">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-6 border-primary/20 bg-primary/10 text-primary-foreground/90">
            <Sparkles className="mr-1 h-3 w-3" />
            Premier Med Spa in SoHo, NYC
          </Badge>
          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            Where Science Meets
            <span className="block bg-gradient-to-r from-[oklch(0.8_0.12_60)] to-[oklch(0.75_0.1_80)] bg-clip-text text-transparent">
              Artistry
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
            Experience the perfect harmony of medical expertise and aesthetic vision.
            Personalized treatments for naturally beautiful results.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full text-sm font-medium">
              <Link to="/book">Book a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white text-sm font-medium">
              <Link to="/treatments">Explore Treatments</Link>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-accent/60 to-primary/60" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[oklch(0.8_0.15_85)] text-[oklch(0.8_0.15_85)]" />
                ))}
              </div>
              <p className="text-xs text-white/60">4.9/5 from 2,400+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { value: siteConfig.stats.patients, label: "Patients Treated" },
    { value: siteConfig.stats.rating, label: "Average Rating" },
    { value: siteConfig.stats.years, label: "Years Experience" },
    { value: siteConfig.stats.satisfaction, label: "Satisfaction Rate" },
  ];

  return (
    <section className="border-b bg-card py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 md:grid-cols-4 md:px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-heading text-2xl font-bold text-primary md:text-3xl">{stat.value}</div>
            <div className="mt-1 text-xs text-muted-foreground md:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeading
              title="Welcome to Lumera"
              subtitle="A sanctuary where advanced medical science meets refined aesthetic artistry, nestled in the heart of SoHo."
            />
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Founded in 2018 by Dr. Mireille Laurent, Lumera Aesthetics & Wellness has become
              one of New York City's most sought-after destinations for those seeking natural,
              transformative results. Our board-certified team combines decades of medical expertise
              with an artist's eye for balance and proportion.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Every treatment plan is meticulously customized to honor your unique features while
              helping you look and feel your absolute best.
            </p>
            <Button asChild variant="link" className="mt-4 px-0 text-primary">
              <Link to="/about">
                Learn Our Story <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img src="/welcome-clinic.webp" alt="Lumera Aesthetics luxury treatment room" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-sm font-semibold">Board Certified</div>
                  <div className="text-xs text-muted-foreground">All procedures</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedTreatments() {
  const featured = treatmentCategories.flatMap((cat) => cat.treatments.slice(0, 2)).slice(0, 8);

  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Popular Treatments"
          subtitle="Our most sought-after aesthetic treatments, each tailored to your unique goals."
          centered
          linkTo="/treatments"
          linkText="View All Treatments"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((treatment) => (
            <Card key={treatment.name} className="group transition-all duration-200 hover:shadow-md">
              <CardContent className="p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-sm font-semibold">{treatment.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">{treatment.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-primary">From {treatment.price}</span>
                  <span className="text-xs text-muted-foreground">{treatment.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const reasons = [
    { icon: Shield, title: "Board-Certified Team", description: "Every procedure performed by licensed, credentialed medical professionals" },
    { icon: Target, title: "Personalized Plans", description: "Customized protocols designed around your unique anatomy and goals" },
    { icon: Leaf, title: "Natural Results", description: "Subtle enhancements that honor your features — never overdone" },
    { icon: Gem, title: "Luxury Environment", description: "A serene, spa-like setting in the heart of SoHo" },
    { icon: Zap, title: "Advanced Technology", description: "Latest FDA-cleared devices and medical-grade products" },
    { icon: Palette, title: "Artistic Vision", description: "Expert understanding of facial balance, proportion, and beauty" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Why Choose Lumera"
          subtitle="We combine medical excellence with artistic precision for results you'll love."
          centered
          linkTo="/about"
          linkText="More About Our Approach"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="group flex gap-4 rounded-xl border p-5 transition-all hover:bg-accent/30 hover:shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold">{reason.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConditionsSection() {
  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Conditions We Treat"
          subtitle="From fine lines to body contouring, we offer solutions for a wide range of aesthetic concerns."
          centered
          linkTo="/treatments"
          linkText="Explore Treatment Options"
        />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {conditions.map((condition) => (
            <Link
              key={condition}
              to="/treatments"
              className="flex items-center gap-2 rounded-lg border bg-card p-3 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <CheckCircle className="h-3.5 w-3.5 shrink-0 text-primary" />
              {condition}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const featured = teamMembers.slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Meet Our Experts"
          subtitle="A team of board-certified physicians and licensed specialists dedicated to your care."
          centered
          linkTo="/about#team"
          linkText="Meet the Full Team"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={`/${member.image}.webp`} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <CardContent className="p-5">
                <h3 className="font-heading text-base font-semibold">{member.name}</h3>
                <p className="text-xs font-medium text-primary">{member.title}</p>
                <p className="text-xs text-muted-foreground">{member.credentials}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-br from-[oklch(0.2_0.02_40)] to-[oklch(0.15_0.02_30)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="What Our Patients Say"
          subtitle="Real experiences from real patients — your results are our reputation."
          centered
          light
          linkTo="/gallery"
          linkText="See More Results"
        />
        <div className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="min-w-[280px] snap-start rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:min-w-0"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[oklch(0.8_0.15_85)] text-[oklch(0.8_0.15_85)]" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/80 italic">"{testimonial.quote}"</p>
              <div className="mt-4">
                <div className="text-sm font-medium text-white">{testimonial.name}</div>
                <div className="text-xs text-white/50">{testimonial.treatment}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MembershipTeaser() {
  const benefits = [
    "15% off all treatments",
    "Monthly signature facial included",
    "Priority booking & extended hours",
    "Exclusive member-only pricing",
    "Complimentary skincare consultations",
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary border">
          <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Crown className="mr-1 h-3 w-3" /> Lumera Circle
              </Badge>
              <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
                Exclusive Membership
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Join our inner circle for premium benefits, priority access, and significant savings on your aesthetic journey.
              </p>
              <div className="mt-4">
                <span className="font-heading text-3xl font-bold text-primary">$249</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <Button asChild className="mt-6 rounded-full">
                <Link to="/membership">Learn More <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
              </Button>
            </div>
            <div className="space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsultationJourney() {
  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Your Journey With Us"
          subtitle="From first consultation to lasting results, we guide you every step of the way."
          centered
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {consultationSteps.map((step) => (
            <div key={step.step} className="relative rounded-xl border bg-card p-5">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                {step.step}
              </div>
              <h3 className="font-heading text-sm font-semibold">{step.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/book">Book Your Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function BrandsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Brands We Trust"
          subtitle="We use only authentic, medical-grade products from industry-leading brands."
          centered
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex h-16 items-center justify-center rounded-lg border bg-card px-4 text-center text-xs font-medium text-muted-foreground"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQPreview() {
  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about our treatments and practice."
          centered
          linkTo="/resources#faq"
          linkText="View All FAQs"
        />
        <Accordion type="single" collapsible className="w-full">
          {faqs.slice(0, 4).map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-sm font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[oklch(0.25_0.02_40)] to-[oklch(0.18_0.03_50)] p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.1),transparent_60%)]" />
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Ready to Begin Your Transformation?
              </h2>
              <p className="mt-3 text-sm text-white/70">
                Schedule your complimentary consultation today and discover how we can help you achieve your aesthetic goals.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/book">Schedule Appointment</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white">
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    {siteConfig.phone}
                  </a>
                </Button>
              </div>
            </div>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-white/50" />
                {siteConfig.address.street}, {siteConfig.address.neighborhood}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-white/50" />
                Mon–Fri: 9AM–8PM | Sat: 10AM–5PM
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-white/50" />
                Text us: {siteConfig.textLine}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
