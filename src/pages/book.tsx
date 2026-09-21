import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageSquare, CheckCircle, Globe } from "lucide-react";
import { toast } from "sonner";
import { PageHero, SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/data/site-data";

export function BookPage() {
  return (
    <>
      <PageHero
        title="Book a Consultation"
        subtitle="Take the first step toward your aesthetic goals. We'd love to hear from you."
      />
      <ContactFormSection />
      <ContactInfoSection />
      <MapSection />
      <PoliciesSection />
    </>
  );
}

function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you for your message! We'll be in touch within 24 hours.");
  }

  if (submitted) {
    return (
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="rounded-2xl border bg-card p-8 text-center md:p-12">
            <CheckCircle className="mx-auto h-16 w-16 text-primary" />
            <h2 className="mt-4 font-heading text-2xl font-semibold">Thank You!</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We've received your request and will contact you within 24 hours to confirm your consultation.
              If you need immediate assistance, please call us at {siteConfig.phone}.
            </p>
            <Button asChild className="mt-6 rounded-full" onClick={() => setSubmitted(false)}>
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-heading text-xl font-semibold md:text-2xl">Request a Consultation</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form below and our team will reach out to schedule your visit.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="firstName" className="text-xs">First Name *</Label>
                  <Input id="firstName" required placeholder="Your first name" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lastName" className="text-xs">Last Name *</Label>
                  <Input id="lastName" required placeholder="Your last name" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs">Email *</Label>
                  <Input id="email" type="email" required placeholder="you@email.com" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-xs">Phone *</Label>
                  <Input id="phone" type="tel" required placeholder="(555) 123-4567" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="treatment" className="text-xs">Treatment Interest</Label>
                <Input id="treatment" placeholder="e.g., Botox, Fillers, HydraFacial..." />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="date" className="text-xs">Preferred Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="time" className="text-xs">Preferred Time</Label>
                  <Input id="time" placeholder="Morning, Afternoon, Evening" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs">Message</Label>
                <Textarea id="message" rows={4} placeholder="Tell us about your goals or any questions you have..." />
              </div>
              <p className="text-xs text-muted-foreground">
                * Required fields. We typically respond within 24 hours.
              </p>
              <Button type="submit" size="lg" className="w-full rounded-full sm:w-auto">
                Submit Request
              </Button>
            </form>
          </div>
          <div className="lg:col-span-2">
            <div className="sticky top-28 space-y-4">
              <Card>
                <CardContent className="p-5">
                  <h3 className="font-heading text-sm font-semibold">Quick Contact</h3>
                  <div className="mt-3 space-y-3">
                    <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Phone className="h-4 w-4 shrink-0" />
                      {siteConfig.phone}
                    </a>
                    <a href={`sms:${siteConfig.textLine}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <MessageSquare className="h-4 w-4 shrink-0" />
                      Text: {siteConfig.textLine}
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Mail className="h-4 w-4 shrink-0" />
                      {siteConfig.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <h3 className="font-heading text-sm font-semibold">Hours</h3>
                  <div className="mt-3 space-y-1.5">
                    {siteConfig.hours.map((h) => (
                      <div key={h.day} className="flex justify-between text-xs">
                        <span className="font-medium">{h.day}</span>
                        <span className="text-muted-foreground">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <h3 className="font-heading text-sm font-semibold">Languages</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["English", "Spanish", "French"].map((lang) => (
                      <span key={lang} className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                        <Globe className="h-3 w-3" />
                        {lang}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoSection() {
  return (
    <section className="bg-secondary/50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Phone, title: "Call Us", detail: siteConfig.phone, sub: "Mon–Sat during business hours" },
            { icon: MessageSquare, title: "Text Us", detail: siteConfig.textLine, sub: "Quick questions & scheduling" },
            { icon: Mail, title: "Email", detail: siteConfig.email, sub: "We respond within 24 hours" },
            { icon: MapPin, title: "Visit Us", detail: siteConfig.address.street, sub: `${siteConfig.address.neighborhood}, NYC ${siteConfig.address.zip}` },
          ].map((item) => (
            <Card key={item.title}>
              <CardContent className="p-5 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                <p className="mt-1 text-xs font-medium">{item.detail}</p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading title="Find Us" subtitle="Located in the heart of SoHo, easily accessible by subway and street parking." />
        <div className="overflow-hidden rounded-xl border bg-gradient-to-br from-secondary to-accent/10">
          <div className="flex h-64 items-center justify-center md:h-80">
            <div className="text-center">
              <MapPin className="mx-auto h-10 w-10 text-primary/40" />
              <p className="mt-3 font-heading text-base font-semibold">{siteConfig.address.street}</p>
              <p className="text-sm text-muted-foreground">{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p>
              <p className="mt-1 text-xs text-muted-foreground">SoHo &middot; Near Prince St. Station (N/R/W)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PoliciesSection() {
  const policies = [
    { title: "Cancellation", text: "24-hour notice required. Late cancellations incur a $50–$150 fee depending on the scheduled service." },
    { title: "Late Arrival", text: "Arrivals more than 15 minutes late may need to be rescheduled to ensure quality care for all patients." },
    { title: "Minors", text: "Patients under 18 must be accompanied by a parent or legal guardian who can provide written consent." },
    { title: "Insurance", text: "We are an elective aesthetics practice and do not bill insurance. Financing options are available." },
  ];

  return (
    <section className="bg-secondary/50 py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionHeading title="Office Policies" centered />
        <div className="grid gap-4 sm:grid-cols-2">
          {policies.map((policy) => (
            <div key={policy.title} className="rounded-lg border bg-card p-4">
              <h3 className="text-sm font-semibold">{policy.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{policy.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
