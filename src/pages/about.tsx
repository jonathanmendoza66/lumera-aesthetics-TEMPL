import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Heart, Shield, Target, Users, Leaf, Zap, Award, Star, CheckCircle, ArrowRight
} from "lucide-react";
import { PageHero, SectionHeading } from "@/components/shared/section-heading";
import { teamMembers, siteConfig } from "@/data/site-data";

export function AboutPage() {
  return (
    <>
      <PageHero
        title="About Lumera"
        subtitle="Where advanced medical science meets refined aesthetic artistry, in the heart of SoHo."
        image="/about-hero.webp"
      />
      <StorySection />
      <MissionSection />
      <ValuesSection />
      <TeamFullSection />
      <ApproachSection />
      <CertificationsSection />
      <AboutCTA />
    </>
  );
}

function StorySection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeading title="Our Story" />
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Lumera Aesthetics & Wellness was founded in 2018 by Dr. Mireille Laurent with a singular
                vision: to create a space where patients receive the highest caliber of medical aesthetics
                in an environment that feels more like a retreat than a clinic.
              </p>
              <p>
                Drawing on over 15 years of experience in dermatology and cosmetic medicine, Dr. Laurent
                assembled a team of exceptional practitioners who share her commitment to natural-looking
                results and personalized patient care.
              </p>
              <p>
                Today, Lumera has grown into one of Manhattan's most respected aesthetic practices,
                treating over 18,500 patients and earning a reputation for artistry, integrity, and
                transformative results.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src="/about-hero.webp" alt="Lumera Aesthetics SoHo clinic interior" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="bg-secondary/50 py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <SectionHeading title="Our Mission" centered />
        <blockquote className="font-heading text-lg italic text-foreground md:text-xl lg:text-2xl">
          "To empower every patient to feel confident in their own skin through
          personalized, evidence-based aesthetic treatments delivered with artistry, compassion, and integrity."
        </blockquote>
        <Separator className="mx-auto mt-8 w-24" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-6 text-left">
            <h3 className="font-heading text-base font-semibold">Vision</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              To be recognized as New York City's premier destination for
              natural, transformative aesthetic medicine — where every patient
              leaves feeling more like themselves, not less.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6 text-left">
            <h3 className="font-heading text-base font-semibold">Philosophy</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We believe true beauty lies in balance. Our approach enhances
              your natural features rather than masking them, creating results
              that look effortless and authentically you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    { icon: Heart, title: "Compassion", description: "Every patient is treated with warmth, dignity, and genuine care" },
    { icon: Shield, title: "Safety First", description: "Rigorous protocols and medical-grade standards in every procedure" },
    { icon: Target, title: "Precision", description: "Meticulous attention to detail in every injection and treatment" },
    { icon: Leaf, title: "Natural Results", description: "Subtle enhancements that honor your unique beauty" },
    { icon: Award, title: "Excellence", description: "Continuous education and mastery of the latest techniques" },
    { icon: Users, title: "Inclusivity", description: "Welcoming patients of all backgrounds, ages, and genders" },
    { icon: Zap, title: "Innovation", description: "Early adoption of proven, cutting-edge technologies" },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Our Core Values"
          subtitle="These principles guide every decision we make and every treatment we deliver."
          centered
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="rounded-xl border p-5 text-center transition-all hover:shadow-sm hover:bg-accent/30">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                <value.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-3 font-heading text-sm font-semibold">{value.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamFullSection() {
  return (
    <section id="team" className="bg-secondary/50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Meet Our Team"
          subtitle="Board-certified physicians and licensed specialists dedicated to your aesthetic goals."
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={`/${member.image}.webp`} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <CardContent className="p-5">
                <h3 className="font-heading text-base font-semibold">{member.name}</h3>
                <p className="text-xs font-medium text-primary">{member.title}</p>
                <Badge variant="secondary" className="mt-1 text-[10px]">{member.credentials}</Badge>
                <p className="mt-2 text-xs text-muted-foreground italic">{member.specialty}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  const steps = [
    "Comprehensive skin analysis and health history review",
    "Discussion of your goals, concerns, and lifestyle factors",
    "Custom treatment plan with timeline and budget considerations",
    "Detailed explanation of procedures, expectations, and aftercare",
    "Gradual, phased approach for optimal, natural-looking results",
    "Ongoing follow-up care and plan adjustments as needed",
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeading
              title="Our Approach"
              subtitle="We take a consultative, relationship-first approach to aesthetic medicine."
            />
            <div className="space-y-3">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border bg-gradient-to-br from-primary/5 to-accent/5 p-8">
            <div className="space-y-4 text-center">
              <Star className="mx-auto h-10 w-10 text-primary/50" />
              <div className="font-heading text-4xl font-bold text-primary">{siteConfig.stats.satisfaction}</div>
              <p className="text-sm text-muted-foreground">Patient Satisfaction Rate</p>
              <Separator className="mx-auto w-16" />
              <div className="font-heading text-4xl font-bold text-primary">{siteConfig.stats.patients}</div>
              <p className="text-sm text-muted-foreground">Patients Treated Since 2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  const certs = [
    "ASLMS (American Society for Laser Medicine & Surgery)",
    "AAAM (American Academy of Aesthetic Medicine)",
    "NYDOH Licensed Medical Practice",
    "OSHA Compliant Facility",
    "All Providers BLS/ACLS Certified",
    "FDA-Cleared Devices & Products Only",
    "HIPAA Compliant Systems",
    "Medical Director Oversight on All Procedures",
  ];

  return (
    <section className="bg-secondary/50 py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionHeading
          title="Certifications & Compliance"
          subtitle="Your safety is our highest priority. We maintain the strictest standards in the industry."
          centered
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {certs.map((cert) => (
            <div key={cert} className="flex items-center gap-3 rounded-lg border bg-card p-3">
              <Shield className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-xs font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
          Experience the Lumera Difference
        </h2>
        <p className="mt-3 text-sm text-muted-foreground md:text-base">
          Schedule a complimentary consultation and discover why thousands of New Yorkers trust us with their aesthetic care.
        </p>
        <Button asChild size="lg" className="mt-6 rounded-full">
          <Link to="/book">Book Your Consultation <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
        </Button>
      </div>
    </section>
  );
}
