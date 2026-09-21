export const siteConfig = {
  name: "Lumera Aesthetics & Wellness",
  tagline: "Where Science Meets Artistry",
  phone: "(212) 555-0187",
  textLine: "(212) 555-0188",
  email: "hello@lumeraaesthetics.com",
  bookingEmail: "appointments@lumeraaesthetics.com",
  address: {
    street: "118 Mercer Street, Suite 4A",
    city: "New York",
    state: "NY",
    zip: "10012",
    neighborhood: "SoHo",
  },
  hours: [
    { day: "Monday", time: "9:00 AM – 7:00 PM" },
    { day: "Tuesday", time: "9:00 AM – 7:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 8:00 PM" },
    { day: "Thursday", time: "9:00 AM – 8:00 PM" },
    { day: "Friday", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "10:00 AM – 5:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    instagram: "@lumeraaestheticsnyc",
    instagramUrl: "https://instagram.com/lumeraaestheticsnyc",
  },
  stats: {
    patients: "18,500+",
    rating: "4.9",
    years: "8+",
    satisfaction: "98%",
  },
};

export const teamMembers = [
  {
    name: "Dr. Mireille Laurent",
    title: "Founder & Medical Director",
    credentials: "MD, FAAD",
    specialty: "Board-Certified Dermatologist specializing in advanced injectables and laser medicine",
    bio: "With over 15 years of experience, Dr. Laurent combines artistic vision with medical precision to deliver natural, transformative results.",
    image: "team-1",
  },
  {
    name: "Dr. Rajan Patel",
    title: "Associate Medical Director",
    credentials: "DO, FAOCD",
    specialty: "Cosmetic dermatology & regenerative medicine",
    bio: "Dr. Patel brings a holistic approach to aesthetic medicine, focusing on skin health from within.",
    image: "team-2",
  },
  {
    name: "Celeste Moreau",
    title: "Lead Nurse Practitioner",
    credentials: "NP-C, CANS",
    specialty: "Advanced injectables & facial sculpting",
    bio: "Celeste is renowned for her precise technique and natural-looking injectable results.",
    image: "team-3",
  },
  {
    name: "Tomoko Ishikawa",
    title: "Senior Aesthetician",
    credentials: "LE, CLT",
    specialty: "Medical-grade facials & laser treatments",
    bio: "With certifications across multiple laser platforms, Tomoko delivers customized skin rejuvenation protocols.",
    image: "team-4",
  },
  {
    name: "Adriana Vasquez",
    title: "Aesthetic Nurse",
    credentials: "RN, BSN",
    specialty: "Body contouring & skin tightening",
    bio: "Adriana specializes in non-invasive body sculpting technologies and patient care.",
    image: "team-5",
  },
  {
    name: "Julian Okafor",
    title: "Patient Experience Director",
    credentials: "MBA",
    specialty: "Concierge services & treatment planning",
    bio: "Julian ensures every patient receives a seamless, personalized experience from first contact through aftercare.",
    image: "team-6",
  },
];

export const treatmentCategories = [
  {
    id: "injectables",
    name: "Injectables & Fillers",
    description: "Precision-placed neurotoxins and dermal fillers for natural rejuvenation",
    treatments: [
      { name: "Botox / Dysport", description: "Smooth wrinkles and fine lines with precision neurotoxin injections", duration: "15-30 min", price: "$14/unit", downtime: "None" },
      { name: "Dermal Fillers", description: "Restore volume and contour with hyaluronic acid fillers", duration: "30-60 min", price: "$750/syringe", downtime: "1-3 days mild swelling" },
      { name: "Lip Enhancement", description: "Natural, balanced lip augmentation tailored to your facial proportions", duration: "30 min", price: "$650", downtime: "2-3 days" },
      { name: "Cheek Sculpting", description: "Restore youthful volume and define cheekbone structure", duration: "30-45 min", price: "$850", downtime: "2-5 days" },
      { name: "Jawline Contouring", description: "Create a defined, sculpted jawline without surgery", duration: "30-45 min", price: "$900", downtime: "2-5 days" },
      { name: "Under-Eye Treatment", description: "Reduce hollow tear troughs and dark circles", duration: "30 min", price: "$800", downtime: "5-7 days" },
      { name: "Kybella", description: "Dissolve submental fat for a defined chin profile", duration: "20 min", price: "$1,200/session", downtime: "3-5 days" },
    ],
  },
  {
    id: "skin-rejuvenation",
    name: "Skin Rejuvenation",
    description: "Advanced treatments to refresh, renew, and revitalize your complexion",
    treatments: [
      { name: "HydraFacial MD", description: "Deep cleansing, extraction, and hydration in one luxurious treatment", duration: "45 min", price: "$250", downtime: "None" },
      { name: "Chemical Peels", description: "Medical-grade peels for texture, tone, and clarity", duration: "30-45 min", price: "$200", downtime: "3-7 days" },
      { name: "Microneedling", description: "Stimulate collagen with controlled micro-injuries for smoother skin", duration: "60 min", price: "$450", downtime: "2-3 days" },
      { name: "PRP Facial", description: "Harness your body's growth factors for natural rejuvenation", duration: "75 min", price: "$900", downtime: "2-3 days" },
      { name: "DiamondGlow", description: "Dermabrasion with serum infusion for immediate radiance", duration: "45 min", price: "$275", downtime: "None" },
      { name: "Oxygen Facial", description: "Pressurized oxygen delivers vitamins deep into the skin", duration: "45 min", price: "$225", downtime: "None" },
    ],
  },
  {
    id: "laser",
    name: "Laser & Light Therapy",
    description: "State-of-the-art laser platforms for precision skin correction",
    treatments: [
      { name: "IPL Photofacial", description: "Target sun damage, redness, and pigmentation with intense pulsed light", duration: "30-45 min", price: "$400", downtime: "3-5 days" },
      { name: "Fraxel Laser", description: "Fractional resurfacing for deep wrinkles, scars, and sun damage", duration: "45-60 min", price: "$1,200", downtime: "5-7 days" },
      { name: "Clear + Brilliant", description: "Gentle laser for pore refinement and early aging prevention", duration: "30 min", price: "$350", downtime: "1-2 days" },
      { name: "Laser Hair Removal", description: "Permanent hair reduction with advanced diode laser technology", duration: "15-60 min", price: "$150+", downtime: "None" },
      { name: "Vascular Laser", description: "Treat broken capillaries, spider veins, and rosacea", duration: "20-30 min", price: "$350", downtime: "1-3 days" },
      { name: "Tattoo Removal", description: "PicoSure laser for safe, effective tattoo fading", duration: "15-30 min", price: "$300/session", downtime: "5-7 days" },
    ],
  },
  {
    id: "body",
    name: "Body Contouring",
    description: "Non-invasive sculpting and tightening for your ideal silhouette",
    treatments: [
      { name: "CoolSculpting Elite", description: "FDA-cleared fat freezing for stubborn bulges", duration: "35-60 min", price: "$750/cycle", downtime: "None" },
      { name: "Emsculpt NEO", description: "Build muscle and reduce fat simultaneously with HIFEM + RF", duration: "30 min", price: "$1,000/session", downtime: "None" },
      { name: "Morpheus8 Body", description: "Radiofrequency microneedling for skin tightening and cellulite", duration: "60 min", price: "$1,500", downtime: "3-5 days" },
      { name: "Sclerotherapy", description: "Eliminate spider veins with precise injections", duration: "30 min", price: "$400", downtime: "None" },
    ],
  },
  {
    id: "wellness",
    name: "Wellness & IV Therapy",
    description: "Restore vitality from within with customized wellness protocols",
    treatments: [
      { name: "IV Vitamin Drip", description: "Custom nutrient infusions for energy, immunity, and glow", duration: "45-60 min", price: "$250", downtime: "None" },
      { name: "NAD+ Therapy", description: "Cellular rejuvenation for anti-aging and mental clarity", duration: "2-4 hrs", price: "$500", downtime: "None" },
      { name: "B12 Injections", description: "Quick energy and metabolism boost", duration: "5 min", price: "$35", downtime: "None" },
      { name: "Glutathione IV", description: "Master antioxidant for detox and skin brightening", duration: "30 min", price: "$200", downtime: "None" },
    ],
  },
];

export const testimonials = [
  {
    name: "Sienna R.",
    treatment: "Lip Enhancement",
    quote: "I was terrified of looking overdone, but Dr. Laurent gave me the most natural, beautiful lips. People just say I look refreshed — nobody can tell!",
    rating: 5,
  },
  {
    name: "Marcus T.",
    treatment: "Botox & Skin Rejuvenation",
    quote: "As a guy, I wanted subtle results. The team made me feel completely comfortable and the results are exactly what I wanted — I just look less tired.",
    rating: 5,
  },
  {
    name: "Priya K.",
    treatment: "HydraFacial & Chemical Peel",
    quote: "My skin has never looked better. The customized protocol they designed for my hyperpigmentation has been life-changing.",
    rating: 5,
  },
  {
    name: "Catherine D.",
    treatment: "CoolSculpting Elite",
    quote: "After two sessions, I can finally wear the clothes I want without feeling self-conscious. The staff is so supportive throughout the process.",
    rating: 5,
  },
  {
    name: "Tomás L.",
    treatment: "IV Therapy & NAD+",
    quote: "I do the monthly NAD+ drip and it's become my secret weapon. My energy, focus, and skin quality have all dramatically improved.",
    rating: 5,
  },
  {
    name: "Aisha M.",
    treatment: "Dermal Fillers",
    quote: "Celeste is an absolute artist. My cheek and jawline filler look so natural — even my dermatologist was impressed with the technique.",
    rating: 5,
  },
];

export const faqs = [
  { question: "What should I expect at my first consultation?", answer: "Your first visit includes a comprehensive skin analysis, discussion of your goals and concerns, a customized treatment plan, and a detailed walkthrough of recommended procedures, timelines, and costs. There's never any pressure to commit on the spot." },
  { question: "How do I know which treatment is right for me?", answer: "Our board-certified team evaluates your unique anatomy, skin type, lifestyle, and goals to recommend the most effective approach. We always start conservative and build from there." },
  { question: "Are the treatments painful?", answer: "Most treatments involve minimal discomfort. We use topical numbing, ice, and vibration devices to ensure your comfort. Many patients describe the sensation as a mild pinch or warming feeling." },
  { question: "How long do results last?", answer: "Results vary by treatment: Botox lasts 3-4 months, fillers 6-18 months depending on the area, laser treatments can last years with proper skincare, and body contouring results are permanent when maintaining a stable weight." },
  { question: "Is there any downtime?", answer: "This depends on the treatment. Many of our services (HydraFacial, IV therapy, Botox) have zero downtime. More intensive treatments like Fraxel or chemical peels may require 3-7 days of social downtime." },
  { question: "Do you offer financing options?", answer: "Yes! We partner with CareCredit, Cherry, and Alle to offer flexible financing with 0% APR options available for qualifying patients. We also offer our Lumera Circle membership for regular visitors." },
  { question: "How far in advance should I book?", answer: "We recommend booking 2-4 weeks in advance for regular treatments. For time-sensitive events (weddings, photoshoots), we suggest scheduling your initial consultation 3-6 months prior." },
  { question: "What is your cancellation policy?", answer: "We require 24-hour notice for cancellations or rescheduling. Late cancellations or no-shows may incur a fee of $50-$150 depending on the scheduled service." },
  { question: "Do you treat men?", answer: "Absolutely! Approximately 30% of our patients are men. We tailor all treatments to masculine facial anatomy and aesthetic goals, ensuring natural, subtle results." },
  { question: "Are your products and treatments safe?", answer: "All our treatments are FDA-cleared or approved, performed by licensed medical professionals. We use only authentic, medical-grade products sourced directly from manufacturers." },
];

export const consultationSteps = [
  { step: 1, title: "Book Online", description: "Schedule your complimentary consultation through our website or by calling" },
  { step: 2, title: "Welcome & Intake", description: "Complete a brief health questionnaire and share your aesthetic goals" },
  { step: 3, title: "Skin Analysis", description: "Advanced imaging and expert clinical evaluation of your skin" },
  { step: 4, title: "Custom Plan", description: "Receive a personalized treatment roadmap tailored to your needs and budget" },
  { step: 5, title: "Treatment", description: "Relax in our luxury treatment rooms while our experts work their artistry" },
  { step: 6, title: "Aftercare", description: "Detailed post-treatment instructions and 24/7 access to our nursing team" },
];

export const brands = [
  "Allergan Aesthetics",
  "Galderma",
  "SkinMedica",
  "ZO Skin Health",
  "Revision Skincare",
  "SkinCeuticals",
  "Merz Aesthetics",
  "CoolSculpting",
  "Emsculpt",
  "Fraxel",
];

export const conditions = [
  "Fine Lines & Wrinkles",
  "Volume Loss",
  "Acne & Acne Scars",
  "Hyperpigmentation",
  "Sun Damage",
  "Rosacea",
  "Uneven Skin Tone",
  "Large Pores",
  "Sagging Skin",
  "Double Chin",
  "Stubborn Fat",
  "Spider Veins",
  "Stretch Marks",
  "Dark Circles",
  "Thin Lips",
  "Dull Complexion",
  "Cellulite",
  "Excessive Sweating",
  "Unwanted Hair",
];
