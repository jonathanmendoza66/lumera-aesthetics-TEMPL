import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  linkTo?: string;
  linkText?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, linkTo, linkText, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-8 md:mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className={`font-heading text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl ${light ? "text-white" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2 max-w-2xl text-sm md:text-base ${centered ? "mx-auto" : ""} ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
      {linkTo && linkText && (
        <Link
          to={linkTo}
          className={`mt-3 inline-flex items-center gap-1 text-sm font-medium transition-colors ${light ? "text-white/90 hover:text-white" : "text-primary hover:text-primary/80"}`}
        >
          {linkText}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  gradient?: string;
  image?: string;
}

export function PageHero({ title, subtitle, gradient = "from-primary/20 via-accent/10 to-background", image }: PageHeroProps) {
  if (image) {
    return (
      <section className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mt-3 max-w-xl text-base text-white/80 md:text-lg">{subtitle}</p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${gradient} pt-24 pb-12 md:pt-32 md:pb-16`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(180,130,50,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-3 max-w-xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
