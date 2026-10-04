import clinicInterior from "@/assets/clinic-interior.jpg";

// Treatment images
import aligners from "@/assets/treatments/aligners.jpg";
import braces from "@/assets/treatments/braces.jpg";
import completeDentures from "@/assets/treatments/complete-dentures.jpg";
import dentalCrowns from "@/assets/treatments/dental-crowns.jpg";
import dentalImplants from "@/assets/treatments/dental-implants.jpg";
import kidsDentistry from "@/assets/treatments/kids-dentistry.jpg";
import painlessRootCanal from "@/assets/treatments/painless-root-canal.jpg";
import scalingAndPolishing from "@/assets/treatments/scaling-and-polishing.jpg";
import teethWhitening from "@/assets/treatments/teeth-whitening.jpg";
import toothColouredFillings from "@/assets/treatments/tooth-coloured-fillings.jpg";
import toothExtraction from "@/assets/treatments/tooth-extraction.jpg";

// Gallery images
import reception from "@/assets/gallery/reception.jpg";
import treatmentRoom from "@/assets/gallery/treatment-room.jpg";
import equipment from "@/assets/gallery/equipment.jpg";
import waitingArea from "@/assets/gallery/waiting-area.jpg";
import interiorDetail from "@/assets/gallery/interior-detail.jpg";
import consultationRoom from "@/assets/gallery/consultation-room.jpg";

export interface Clinic {
  name: string;
  shortName: string;
  tagline: string;
  addressLines: readonly string[];
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  areaServed: readonly string[];
  mapUrl: string;
  /** Full international number, e.g. "919876543210". Null until the clinic confirms it. */
  whatsappNumber: string | null;
}

export const whatsappMessage =
  "Hello, I would like to book a dental appointment. Please share the available appointment timings.";

export interface Treatment {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
  featured: boolean;
}

export interface Testimonial {
  id: number;
  quote: string;
  patient: string;
  treatment: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface BeforeAfter {
  id: number;
  title: string;
  treatment: string;
  before: string;
  after: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  label: string;
}

export interface Appointment {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  treatment: string;
  message: string;
  status: "pending";
}

export interface AppointmentTime {
  value: string;
  label: string;
  period: "Morning" | "Afternoon" | "Evening";
}

export const clinic: Clinic = {
  name: "The Dental Casaa",
  shortName: "Dental Casaa",
  tagline: "Your home for a healthy smile.",

  addressLines: [
    "Loni Road, Shahdara Corner",
    "Above Railway Ticket Ghar",
    "Delhi – 110032, India",
  ],

  streetAddress:
    "Loni Road, Shahdara Corner, Above Railway Ticket Ghar",

  addressLocality: "Delhi",
  addressRegion: "Delhi",
  postalCode: "110032",
  addressCountry: "IN",

  areaServed: [
    "Shahdara",
    "Loni Road",
    "East Delhi",
    "Delhi 110032",
  ],

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Loni%20Road%2C%20Shahdara%20Corner%2C%20Above%20Railway%20Ticket%20Ghar%2C%20Delhi%20110032%2C%20India",

  whatsappNumber: null,
};

export const treatments: Treatment[] = [
  {
    id: 1,
    title: "Tooth-Coloured Fillings",
    slug: "tooth-coloured-fillings",
    shortDescription:
      "Natural-looking fillings designed to restore damaged teeth.",
    description:
      "Tooth-coloured fillings restore teeth affected by decay or minor damage while blending naturally with your existing tooth shade.",
    image: toothColouredFillings,
    category: "Restorative Care",
    featured: false,
  },

  {
    id: 2,
    title: "Braces",
    slug: "braces",
    shortDescription:
      "Orthodontic treatment for straighter, healthier smiles.",
    description:
      "Braces use carefully controlled pressure to gradually improve tooth alignment and create a more balanced, functional smile.",
    image: braces,
    category: "Orthodontics",
    featured: false,
  },

  {
    id: 3,
    title: "Dental Implants",
    slug: "dental-implants",
    shortDescription:
      "A stable and natural-looking solution for missing teeth.",
    description:
      "Dental implants are carefully planned replacements for missing teeth, designed to restore function, appearance and confidence.",
    image: dentalImplants,
    category: "Restorative Care",
    featured: true,
  },

  {
    id: 4,
    title: "Dental Crowns",
    slug: "dental-crowns",
    shortDescription:
      "Protect and restore damaged or weakened teeth.",
    description:
      "Dental crowns help strengthen and protect teeth that are weakened or damaged while restoring their shape, function and appearance.",
    image: dentalCrowns,
    category: "Restorative Care",
    featured: false,
  },

  {
    id: 5,
    title: "Tooth Extraction",
    slug: "tooth-extraction",
    shortDescription:
      "Careful removal of teeth when extraction is necessary.",
    description:
      "When a tooth cannot be safely preserved, extraction is planned with careful assessment and attention to patient comfort.",
    image: toothExtraction,
    category: "General Dentistry",
    featured: false,
  },

  {
    id: 6,
    title: "Teeth Whitening",
    slug: "teeth-whitening",
    shortDescription:
      "Professional whitening for a brighter, refreshed smile.",
    description:
      "Teeth whitening is planned around your existing tooth shade and sensitivity to create a brighter and natural-looking smile.",
    image: teethWhitening,
    category: "Cosmetic Dentistry",
    featured: false,
  },

  {
    id: 7,
    title: "Kids Dentistry",
    slug: "kids-dentistry",
    shortDescription:
      "Gentle and comfortable dental care for children.",
    description:
      "Kids dentistry focuses on creating positive dental experiences while supporting healthy teeth, gums and long-term oral care habits.",
    image: kidsDentistry,
    category: "Pediatric Dentistry",
    featured: false,
  },

  {
    id: 8,
    title: "Scaling & Polishing",
    slug: "scaling-and-polishing",
    shortDescription:
      "Professional cleaning to maintain healthy teeth and gums.",
    description:
      "Scaling and polishing helps remove accumulated plaque and tartar while leaving the teeth feeling cleaner and refreshed.",
    image: scalingAndPolishing,
    category: "Preventive Care",
    featured: false,
  },

  {
    id: 9,
    title: "Painless Root Canal Treatment",
    slug: "painless-root-canal-treatment",
    shortDescription:
      "Modern root canal care focused on comfort and tooth preservation.",
    description:
      "Root canal treatment removes infection from inside the tooth and helps preserve the natural tooth with careful, precise treatment.",
    image: painlessRootCanal,
    category: "Advanced Care",
    featured: false,
  },

  {
    id: 10,
    title: "Aligners",
    slug: "aligners",
    shortDescription:
      "Discreet teeth alignment designed around your lifestyle.",
    description:
      "Clear aligners offer a discreet approach to improving tooth alignment through a personalised treatment plan and regular reviews.",
    image: aligners,
    category: "Orthodontics",
    featured: false,
  },

  {
    id: 11,
    title: "Complete Dentures",
    slug: "complete-dentures",
    shortDescription:
      "Comfortable dentures designed for complete tooth replacement.",
    description:
      "Complete dentures are designed to replace missing teeth while supporting everyday comfort, function and a natural-looking smile.",
    image: completeDentures,
    category: "Restorative Care",
    featured: false,
  },
];

export const appointmentTimes: AppointmentTime[] = [
  {
    value: "09:00",
    label: "9:00 AM",
    period: "Morning",
  },
  {
    value: "10:30",
    label: "10:30 AM",
    period: "Morning",
  },
  {
    value: "12:00",
    label: "12:00 PM",
    period: "Morning",
  },
  {
    value: "14:00",
    label: "2:00 PM",
    period: "Afternoon",
  },
  {
    value: "15:30",
    label: "3:30 PM",
    period: "Afternoon",
  },
  {
    value: "17:00",
    label: "5:00 PM",
    period: "Evening",
  },
  {
    value: "18:30",
    label: "6:30 PM",
    period: "Evening",
  },
];

export const testimonials: Testimonial[] = [];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What should I expect during my first visit?",
    answer:
      "Your first visit begins with a conversation about your concerns and goals, followed by a thorough examination. If needed, we may recommend diagnostic imaging before discussing clear, personalised options with you.",
  },

  {
    id: 2,
    question: "How often should I visit the dentist?",
    answer:
      "Most patients benefit from a review every six months, though your ideal schedule depends on your oral health, medical history and current treatment needs.",
  },

  {
    id: 3,
    question: "Do you offer cosmetic dentistry?",
    answer:
      "Yes. Cosmetic care may include professional whitening, aesthetic restorations and personalised smile planning. Recommendations are always guided by oral health and natural-looking outcomes.",
  },

  {
    id: 4,
    question: "Do you provide dental implants?",
    answer:
      "Yes. Implant care begins with a detailed assessment to understand bone health, suitability and your goals before a tailored treatment plan is prepared.",
  },

  {
    id: 5,
    question: "Do you offer braces and aligners?",
    answer:
      "Yes. Orthodontic options can include traditional braces and clear aligners. The appropriate option depends on your alignment needs and treatment goals.",
  },

  {
    id: 6,
    question: "Do you provide dental crowns?",
    answer:
      "Yes. Dental crowns may be recommended to protect and restore teeth that are weakened, damaged or significantly restored.",
  },

  {
    id: 7,
    question: "Do you provide complete dentures?",
    answer:
      "Yes. Complete dentures can be planned to replace missing teeth and restore everyday function, comfort and appearance.",
  },

  {
    id: 8,
    question: "Do you provide dental care for children?",
    answer:
      "Yes. Kids dentistry focuses on gentle, age-appropriate care and helping children develop positive long-term dental habits.",
  },

  {
    id: 9,
    question: "How can I request an appointment?",
    answer:
      "Use the appointment form on this page to share your preferred date, time and treatment. The clinic can confirm a suitable time once live booking is connected.",
  },
];

export const beforeAfter: BeforeAfter[] = [
  {
    id: 1,
    title: "Smile refinement",
    treatment: "Teeth Whitening",
    before: teethWhitening,
    after: teethWhitening,
  },

  {
    id: 2,
    title: "Alignment journey",
    treatment: "Aligners",
    before: aligners,
    after: aligners,
  },

  {
    id: 3,
    title: "Restorative care",
    treatment: "Dental Crowns",
    before: dentalCrowns,
    after: dentalCrowns,
  },
];

export const gallery: GalleryImage[] = [
  {
    id: 1,
    src: reception,
    alt: "Warm ivory and deep green dental clinic reception interior",
    label: "Reception",
  },

  {
    id: 2,
    src: treatmentRoom,
    alt: "Modern private dental treatment room with patient chair",
    label: "Treatment room",
  },

  {
    id: 3,
    src: equipment,
    alt: "Clean precision equipment prepared for dental treatment",
    label: "Precision equipment",
  },

  {
    id: 4,
    src: waitingArea,
    alt: "Quiet and comfortable dental clinic waiting area",
    label: "Waiting area",
  },

  {
    id: 5,
    src: interiorDetail,
    alt: "Walnut and brass detail in a contemporary dental clinic interior",
    label: "Considered details",
  },

  {
    id: 6,
    src: consultationRoom,
    alt: "Sunlit private room for dental consultations",
    label: "Consultation room",
  },
];

export { clinicInterior };