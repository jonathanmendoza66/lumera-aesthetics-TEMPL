import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ArrowRight } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/data/site-data";

const galleryCategories = [
  { id: "face", name: "Face" },
  { id: "lips", name: "Lips" },
  { id: "body", name: "Body" },
  { id: "skin", name: "Skin" },
];

const galleryItems = [
  { id: 1, category: "face", title: "Cheek Volume Restoration", description: "Natural volume enhancement with hyaluronic acid filler", image: "/result-face-1.webp" },
  { id: 2, category: "face", title: "Jawline Definition", description: "Sculpted jawline using strategic filler placement", image: "/result-face-1.webp" },
  { id: 3, category: "face", title: "Full Face Rejuvenation", description: "Combination Botox and filler for balanced refreshment", image: "/result-face-1.webp" },
  { id: 4, category: "lips", title: "Natural Lip Enhancement", description: "Subtle volume addition maintaining natural lip shape", image: "/result-lips-1.webp" },
  { id: 5, category: "lips", title: "Lip Border Definition", description: "Crisp cupid's bow and border refinement", image: "/result-lips-1.webp" },
  { id: 6, category: "lips", title: "Volume & Symmetry", description: "Balanced augmentation correcting natural asymmetry", image: "/result-lips-1.webp" },
  { id: 7, category: "body", title: "Abdomen Contouring", description: "CoolSculpting Elite for stubborn lower belly fat", image: "/result-body-1.webp" },
  { id: 8, category: "body", title: "Arm Tightening", description: "Morpheus8 RF microneedling for skin laxity", image: "/result-body-1.webp" },
  { id: 9, category: "skin", title: "Hyperpigmentation Clearing", description: "IPL + chemical peel combination protocol", image: "/result-skin-1.webp" },
  { id: 10, category: "skin", title: "Acne Scar Improvement", description: "Microneedling series with PRP", image: "/result-skin-1.webp" },
  { id: 11, category: "skin", title: "Overall Texture & Glow", description: "HydraFacial + Clear+Brilliant laser series", image: "/result-skin-1.webp" },
  { id: 12, category: "skin", title: "Sun Damage Reversal", description: "Fraxel laser resurfacing for photodamage", image: "/result-skin-1.webp" },
];

export function GalleryPage() {
  return (
    <>
      <PageHero
        title="Results Gallery"
        subtitle="Real results from real patients. See the transformative outcomes our expert team delivers."
      />
      <GalleryGrid />
      <TestimonialsGallery />
      <GalleryCTA />
    </>
  );
}

function GalleryGrid() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="mb-8 text-center text-xs text-muted-foreground italic">
          *Results shown are representative of typical outcomes. Individual results may vary.
          All images are for illustrative purposes.
        </p>
        <Tabs defaultValue="face" className="w-full">
          <TabsList className="mb-8 flex w-full justify-center gap-1 bg-transparent p-0">
            {galleryCategories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="rounded-full border bg-card px-5 py-2 text-xs font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {galleryCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {galleryItems
                  .filter((item) => item.category === category.id)
                  .map((item) => (
                    <Card key={item.id} className="overflow-hidden group">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-heading text-sm font-semibold">{item.title}</h3>
                        <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
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

function TestimonialsGallery() {
  return (
    <section className="bg-secondary/50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Patient Testimonials"
          subtitle="Hear directly from those who've experienced the Lumera difference."
          centered
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <CardContent className="p-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground italic">"{t.quote}"</p>
                <div className="mt-3 border-t pt-3">
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.treatment}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCTA() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
          Ready to See Your Own Transformation?
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Schedule a consultation to discuss your goals and see what's possible for you.
        </p>
        <Button asChild size="lg" className="mt-6 rounded-full">
          <Link to="/book">Book Your Consultation <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
        </Button>
      </div>
    </section>
  );
}
