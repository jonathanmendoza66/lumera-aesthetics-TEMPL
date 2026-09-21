import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "./logo";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/data/site-data";

const footerLinks = [
  {
    title: "Treatments",
    links: [
      { label: "Injectables & Fillers", to: "/treatments#injectables" },
      { label: "Skin Rejuvenation", to: "/treatments#skin-rejuvenation" },
      { label: "Laser Therapy", to: "/treatments#laser" },
      { label: "Body Contouring", to: "/treatments#body" },
      { label: "Wellness & IV", to: "/treatments#wellness" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Our Team", to: "/about#team" },
      { label: "Gallery", to: "/gallery" },
      { label: "Pricing", to: "/pricing" },
      { label: "Resources", to: "/resources" },
    ],
  },
  {
    title: "Patients",
    links: [
      { label: "Book Consultation", to: "/book" },
      { label: "Membership", to: "/membership" },
      { label: "Financing", to: "/pricing#financing" },
      { label: "FAQs", to: "/resources#faq" },
      { label: "Contact Us", to: "/book" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-card pb-24 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Premier medical aesthetics and wellness in the heart of SoHo.
              Where science meets artistry for naturally beautiful results.
            </p>
            <div className="mt-6 space-y-3">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                Mon–Fri: 9AM–8PM | Sat: 10AM–5PM
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={siteConfig.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading text-sm font-semibold">{group.title}</h4>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Lumera Aesthetics & Wellness. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link to="/resources" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/resources" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link to="/resources" className="hover:text-foreground transition-colors">HIPAA Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
