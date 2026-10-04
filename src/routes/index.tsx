import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  Sparkles,
  ScanLine,
  MessageCircle,
  HeartHandshake,
} from "lucide-react";

import heroImage from "@/assets/dental-hero.jpg";

import smile01 from "@/assets/smile-gallery/smile-01.jpg";
import smile02 from "@/assets/smile-gallery/smile-02.jpg";
import smile03 from "@/assets/smile-gallery/smile-03.jpg";
import smile04 from "@/assets/smile-gallery/smile-04.jpg";
import smile05 from "@/assets/smile-gallery/smile-05.jpg";
import smile06 from "@/assets/smile-gallery/smile-06.jpg";

import logoAsset from "@/assets/the-dental-casaa-logo.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { AppointmentForm } from "@/components/clinic/AppointmentForm";
import { Reveal } from "@/components/clinic/Reveal";
import { SiteHeader } from "@/components/clinic/SiteHeader";

import {
  beforeAfter,
  clinic,
  clinicInterior,
  faqs,
  testimonials,
  treatments,
} from "@/data/clinic";

/* --------------------------------
   SMILE GALLERY
--------------------------------- */

const smileGallery = [
  {
    image: smile01,
    label: "Smile Story",
    title: "A More Confident Smile",
  },
  {
    image: smile02,
    label: "Smile Story",
    title: "Restoring Natural Balance",
  },
  {
    image: smile03,
    label: "Smile Story",
    title: "A Refined Smile",
  },
  {
    image: smile04,
    label: "Smile Story",
    title: "A Brighter Expression",
  },
  {
    image: smile05,
    label: "Smile Story",
    title: "A More Complete Smile",
  },
  {
    image: smile06,
    label: "Smile Story",
    title: "Thoughtful Smile Care",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Dentist in Shahdara, Delhi | The Dental Casaa",
      },
      {
        name: "description",
        content:
          "Visit The Dental Casaa, a personal dental clinic near Loni Road at Shahdara Corner, Delhi. Explore modern dental treatments, meet your dentist, and request an appointment.",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large",
      },

      {
        property: "og:title",
        content: "Dentist in Shahdara, Delhi | The Dental Casaa",
      },
      {
        property: "og:description",
        content:
          "Personal dental care at The Dental Casaa near Loni Road, Shahdara Corner, Delhi. Explore treatments and request an appointment.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "/",
      },
      {
        property: "og:image",
        content: logoAsset,
      },

      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Dentist in Shahdara, Delhi | The Dental Casaa",
      },
      {
        name: "twitter:description",
        content:
          "Personal dental care near Loni Road at Shahdara Corner, Delhi.",
      },
      {
        name: "twitter:image",
        content: logoAsset,
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "/",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "@id": "/#dental-clinic",
          name: clinic.name,
          url: "/",
          image: logoAsset,

          address: {
            "@type": "PostalAddress",
            streetAddress: clinic.streetAddress,
            addressLocality: clinic.addressLocality,
            addressRegion: clinic.addressRegion,
            postalCode: clinic.postalCode,
            addressCountry: clinic.addressCountry,
          },

          areaServed: clinic.areaServed.map((name) => ({
            "@type": "Place",
            name,
          })),
        }),
      },

      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }),
      },
    ],
  }),

  component: Index,
});

const reasons = [
  { icon: ShieldCheck, title: "Considered care", text: "Thoughtful clinical judgement focused on your individual dental needs." },
  { icon: ScanLine, title: "Modern technology", text: "Detailed diagnostics support precise, conservative treatment planning." },
  { icon: Sparkles, title: "Comfortable environment", text: "A calm private setting designed to make every visit feel easier." },
  { icon: HeartHandshake, title: "Personalised treatment", text: "Recommendations guided by your health, priorities and pace." },
  { icon: MessageCircle, title: "Transparent communication", text: "Clear options, considered guidance and no unnecessary surprises." },
];

function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return <Reveal className="max-w-3xl"><p className={`eyebrow ${light ? "text-secondary" : "text-primary"}`}>{eyebrow}</p><h2 className={`section-title mt-4 ${light ? "text-primary-foreground" : "text-heading"}`}>{title}</h2>{copy && <p className={`mt-5 max-w-2xl text-base leading-7 ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{copy}</p>}</Reveal>;
}

function Index() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const activeTestimonial = testimonials[testimonialIndex];
  const featuredTreatment = treatments.find((treatment) => treatment.featured);
  if (!featuredTreatment) return null;
  return (
    <div className="overflow-x-clip bg-background text-foreground">
      <SiteHeader />
      <main>
        <section id="home" className="relative min-h-[760px] overflow-hidden bg-background pt-28 lg:min-h-[820px] lg:pt-36">
          <div className="site-container grid items-center gap-10 pb-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 lg:pb-24">
            <div className="relative z-10 py-8 lg:py-14">
              <p className="animate-reveal-1 eyebrow text-primary">PRIVATE DENTISTRY · PERSONAL CARE</p>
              <h1 className="animate-reveal-2 mt-6 max-w-2xl font-display text-[clamp(3.35rem,7vw,6.75rem)] leading-[0.92] text-heading">Your Smile.<br /><em className="font-normal text-primary">Our Expertise.</em></h1>
               <p className="animate-reveal-3 mt-8 max-w-xl text-lg leading-8 text-body">Personal dental care and a comfortable patient-first experience near Loni Road in Shahdara — designed around your smile.</p>
              <div className="animate-reveal-4 mt-9 flex flex-wrap gap-3"><Button asChild size="lg" className="h-12 px-6"><a href="#appointment">Book Appointment <ArrowRight /></a></Button><Button asChild variant="outline" size="lg" className="h-12 border-primary/30 bg-transparent px-6"><a href="#treatments">Explore Treatments</a></Button></div>
            </div>
            <div className="animate-image-in relative mx-auto w-full max-w-[760px] lg:mx-0">
              <div className="absolute -left-4 -top-4 h-40 w-24 border-l border-t border-secondary sm:-left-7 sm:-top-7" />
              <div className="hero-image-mask relative aspect-[4/4.25] overflow-hidden bg-sand lg:aspect-[4/4.35]"><img src={heroImage} alt="Personal dental consultation at The Dental Casaa in Shahdara, Delhi" width={1600} height={1200} fetchPriority="high" decoding="async" className="h-full w-full object-cover object-center" /></div>
              <div className="absolute -bottom-5 right-0 bg-primary px-5 py-4 text-primary-foreground sm:-right-5 sm:px-7"><span className="block font-display text-2xl">Calm. Clear.</span><span className="text-xs uppercase text-primary-foreground/70">Care built around you</span></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 hidden w-[28%] border-t border-secondary lg:block" />
        </section>

        <section aria-label="Clinic location and care" className="border-y border-border bg-surface py-9">
          <div className="site-container grid grid-cols-2 divide-x divide-border lg:grid-cols-4">
            {["Shahdara Corner", "Loni Road", "East Delhi", "Delhi 110032"].map((label, i) => <div key={label} className={`px-4 py-4 text-center lg:px-8 ${i === 2 ? "border-l-0 lg:border-l" : ""}`}><strong className="block font-display text-xl font-normal text-primary sm:text-2xl">{label}</strong><span className="mt-1 block text-[11px] font-semibold uppercase text-muted-foreground">{i === 3 ? "Clinic location" : "Serving the local community"}</span></div>)}
          </div>
        </section>

        <section id="about" className="section-pad scroll-mt-24">
          <div className="site-container grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <Reveal className="relative pr-5 pb-10 sm:pr-16">
               <div className="aspect-[5/4] overflow-hidden"><img src={clinicInterior} alt="Warm reception and consultation space at The Dental Casaa near Loni Road" width={1408} height={1104} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]" /></div>
              <div className="absolute bottom-0 right-0 w-40 border-l-[10px] border-background bg-primary p-5 text-primary-foreground sm:w-56"><span className="font-display text-4xl text-secondary">01</span><p className="mt-8 text-sm leading-6">An intimate practice where time, detail and comfort matter.</p></div>
            </Reveal>
            <div><SectionHeading eyebrow="ABOUT OUR CLINIC" title="Modern Dentistry. A More Personal Experience." copy="We bring considered treatment planning, contemporary technology and an unhurried approach together in one calm private setting." />
              <div className="mt-9 divide-y divide-border border-y border-border">{[["01", "Experienced Care"], ["02", "Advanced Technology"], ["03", "Patient-Centered Approach"]].map(([n, label], i) => <Reveal key={n} delay={i * 70} className="flex items-center gap-5 py-5"><span className="font-display text-lg text-secondary">{n}</span><h3 className="text-sm font-semibold uppercase text-heading">{label}</h3></Reveal>)}</div>
              <Button asChild variant="link" className="mt-7 h-auto p-0 text-primary"><Link to="/about">Discover Our Clinic <ArrowRight /></Link></Button>
            </div>
          </div>
        </section>

        <section id="treatments" className="section-pad scroll-mt-24 bg-sand">
          <div className="site-container"><div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"><SectionHeading eyebrow="TREATMENTS" title="Care for Every Chapter of Your Smile." copy="From everyday prevention to considered smile transformations, each treatment begins with listening." /><p className="max-w-xs text-sm leading-6 text-muted-foreground">Explore the treatment that feels right for you. Every plan is tailored after a full clinical consultation.</p></div>
            <div className="mt-14 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{treatments.map((t, i) => <Reveal key={t.id} delay={(i % 3) * 70}><Link to="/treatments/$slug" params={{ slug: t.slug }} className="treatment-item group block" aria-label={`Learn about ${t.title} at The Dental Casaa in Shahdara`}><div className="aspect-[4/3] overflow-hidden bg-muted"><img src={t.image} alt={`${t.title} consultation at The Dental Casaa in Shahdara`} width={590} height={588} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.035]" /></div><div className="flex items-start justify-between gap-4 border-b border-border py-5"><div><p className="mb-2 text-[10px] font-semibold uppercase text-secondary">{t.category}</p><h3 className="font-display text-2xl text-heading">{t.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{t.shortDescription}</p></div><span className="mt-7 flex size-10 shrink-0 items-center justify-center border border-border text-primary transition group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"><ArrowUpRight className="size-4" /></span></div></Link></Reveal>)}</div>
          </div>
        </section>

        <section className="section-pad bg-primary text-primary-foreground">
  <div className="site-container">

    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

      {/* Left editorial introduction */}
      <Reveal className="lg:sticky lg:top-32 lg:self-start">
        <p className="eyebrow text-secondary">
          WHY CHOOSE THE DENTAL CASAA
        </p>

        <h2 className="mt-5 max-w-xl font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
          A more thoughtful
          <br />
          <em className="font-normal text-secondary">
            way to experience dentistry.
          </em>
        </h2>

        <p className="mt-7 max-w-md text-base leading-7 text-primary-foreground/65">
          Modern dentistry does not have to feel clinical or impersonal.
          Our approach brings precision, communication and genuine care
          together in a calm private setting.
        </p>
      </Reveal>

      {/* Right editorial list */}
      <div className="border-t border-primary-foreground/20">

        {[
          {
            number: "01",
            title: "Personal Attention",
            text: "Your concerns, comfort and priorities remain at the centre of every treatment conversation.",
          },
          {
            number: "02",
            title: "Thoughtful Treatment Planning",
            text: "Every recommendation is considered carefully rather than following a one-size-fits-all approach.",
          },
          {
            number: "03",
            title: "Modern Clinical Approach",
            text: "Contemporary technology and detailed diagnostics support precise and informed treatment decisions.",
          },
          {
            number: "04",
            title: "Clear, Honest Communication",
            text: "We explain your options clearly so you can make treatment decisions with confidence.",
          },
        ].map(({ number, title, text }, i) => (
          <Reveal
            key={number}
            delay={i * 70}
            className="group grid gap-5 border-b border-primary-foreground/20 py-8 sm:grid-cols-[70px_1fr] sm:py-10"
          >
            <span className="font-display text-lg text-secondary">
              {number}
            </span>

            <div>
              <div className="flex items-center justify-between gap-6">
                <h3 className="font-display text-2xl text-primary-foreground sm:text-3xl">
                  {title}
                </h3>

                <ArrowUpRight className="hidden size-5 text-secondary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 sm:block" />
              </div>

              <p className="mt-3 max-w-xl text-sm leading-7 text-primary-foreground/60">
                {text}
              </p>
            </div>
          </Reveal>
        ))}

      </div>
    </div>

  </div>
</section>
<section
  id="smile-gallery"
  className="section-pad scroll-mt-24 overflow-hidden bg-sand"
>
  <div className="site-container">

    {/* INTRO */}
    <Reveal>
      <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
        <div>
          <p className="eyebrow text-primary">
            SMILE TRANSFORMATIONS
          </p>

          <h2 className="section-title mt-4 max-w-3xl text-heading">
            See the Difference
            <br />
            <em className="font-normal text-primary">
              Thoughtful Care Can Make.
            </em>
          </h2>
        </div>

        <p className="max-w-md text-sm leading-6 text-muted-foreground lg:justify-self-end">
          A curated collection of smile imagery presented as visual
          examples. Every smile and treatment journey is individual.
        </p>
      </div>
    </Reveal>

    {/* CINEMATIC GALLERY */}
    <div className="relative mt-16 sm:mt-20">

      {/* Soft edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-sand to-transparent sm:w-28" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-sand to-transparent sm:w-28" />

      <div className="smile-gallery-track">
        {[...smileGallery, ...smileGallery].map((item, index) => {
          const originalIndex = index % smileGallery.length;

          return (
            <div
              key={`${item.title}-${index}`}
              className={`smile-gallery-item group ${
                originalIndex % 3 === 1
                  ? "smile-gallery-item-tall"
                  : ""
              }`}
            >
              <div className="relative overflow-hidden bg-muted">

                <img
                  src={item.image}
                  alt={item.title}
                  width={1280}
                  height={1600}
                  loading={index < 6 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/10" />

                {/* Label */}
                <div className="absolute left-4 top-4">
                  <span className="bg-background/90 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-primary backdrop-blur-sm">
                    {item.label}
                  </span>
                </div>

                {/* Hover title */}
                <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/65 via-black/20 to-transparent px-5 pb-5 pt-14 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-display text-xl text-white">
                    {item.title}
                  </p>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>

    {/* DISCLAIMER / FOOT NOTE */}
    <Reveal delay={100}>
      <div className="mt-10 flex flex-col gap-5 border-t border-border pt-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-secondary" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Individual results vary
          </p>
        </div>

        <p className="max-w-md text-xs leading-5 text-muted-foreground sm:text-right">
          Images are presented for visual reference. Appropriate consent
          and clinical context should accompany any patient photography.
        </p>

      </div>
    </Reveal>

  </div>

  {/* ANIMATION */}
  <style>
    {`
      .smile-gallery-track {
        display: flex;
        align-items: flex-start;
        gap: 18px;
        width: max-content;
        animation: smileGalleryMove 42s linear infinite;
      }

      .smile-gallery-track:hover {
        animation-play-state: paused;
      }

      .smile-gallery-item {
        width: 270px;
        height: 390px;
        flex-shrink: 0;
        overflow: hidden;
      }

      .smile-gallery-item-tall {
        width: 310px;
        height: 470px;
        margin-top: 42px;
      }

      .smile-gallery-item > div {
        height: 100%;
      }

      .smile-gallery-item img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }

      @keyframes smileGalleryMove {
        from {
          transform: translateX(0);
        }

        to {
          transform: translateX(calc(-50% - 9px));
        }
      }

      @media (max-width: 768px) {
        .smile-gallery-track {
          gap: 12px;
          animation-duration: 34s;
        }

        .smile-gallery-item {
          width: 210px;
          height: 310px;
        }

        .smile-gallery-item-tall {
          width: 235px;
          height: 355px;
          margin-top: 28px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .smile-gallery-track {
          animation: none;
          overflow-x: auto;
          width: 100%;
          padding-bottom: 8px;
        }
      }
    `}
  </style>
</section>
        <section id="testimonials" className="section-pad scroll-mt-24">
          <div className="site-container grid gap-12 lg:grid-cols-[0.35fr_1fr]"><div><p className="eyebrow text-primary">PATIENT WORDS</p>{testimonials.length > 1 && <div className="mt-8 flex gap-2"><Button variant="outline" size="icon" aria-label="Previous testimonial" onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)}><ArrowLeft /></Button><Button variant="outline" size="icon" aria-label="Next testimonial" onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}><ArrowRight /></Button></div>}</div>{activeTestimonial ? <div className="animate-fade-in" key={activeTestimonial.id}><span className="font-display text-8xl leading-none text-secondary">“</span><blockquote className="-mt-8 max-w-4xl font-display text-3xl leading-snug text-heading sm:text-5xl">{activeTestimonial.quote}</blockquote><div className="mt-9 flex items-center gap-4 border-t border-border pt-5"><span className="font-semibold text-heading">{activeTestimonial.patient}</span><span className="h-1 w-1 rounded-full bg-secondary" /><span className="text-sm text-muted-foreground">{activeTestimonial.treatment}</span></div></div> : <div><h2 className="font-display text-4xl text-heading sm:text-5xl">Patient experiences will be shared here.</h2><p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Feedback will only be published after it has been received and approved for use.</p></div>}</div>
        </section>

        <section id="appointment" className="section-pad scroll-mt-24 bg-sand">
          <div className="site-container grid gap-14 lg:grid-cols-[0.75fr_1.25fr]"><div className="lg:sticky lg:top-32 lg:self-start"><SectionHeading eyebrow="REQUEST A VISIT" title="Ready for a Healthier, More Confident Smile?" copy="Choose a preferred time, share your details, and review everything before the clinic confirms your visit personally." /><div className="mt-8 border-l-2 border-secondary pl-5 text-sm leading-6 text-muted-foreground">Appointments requested online remain unconfirmed until the clinic responds.</div></div><AppointmentForm /></div>
        </section>

       <section className="section-pad bg-background">
  <div className="site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

    {/* LEFT — FAQ INTRO */}
    <Reveal className="lg:sticky lg:top-32 lg:self-start">
      <p className="eyebrow text-primary">
        COMMON QUESTIONS
      </p>

      <h2 className="section-title mt-4 text-heading">
        A Clear Start
        <br />
        <em className="font-normal text-primary">
          to Your Care.
        </em>
      </h2>

      <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
        A few helpful answers to make your first visit to
        The Dental Casaa feel simple, comfortable and informed.
      </p>

      <div className="mt-8 border-l-2 border-secondary pl-5">
        <p className="text-sm leading-6 text-muted-foreground">
          Still have a question?
        </p>

        <a
          href="#appointment"
          className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
        >
          Request an Appointment
          <ArrowRight className="size-4" />
        </a>
      </div>
    </Reveal>


    {/* RIGHT — FAQ ACCORDION */}
    <Reveal delay={100}>
      <Accordion
        type="single"
        collapsible
        className="border-t border-border"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.id}
            value={`faq-${faq.id}`}
            className="border-border"
          >
            <AccordionTrigger className="group py-6 text-left text-base font-semibold text-heading hover:no-underline sm:py-7">
              
              <span className="flex items-start gap-5 pr-6">
                <span className="mt-0.5 min-w-[28px] font-display text-sm font-normal text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="leading-6">
                  {faq.question}
                </span>
              </span>

            </AccordionTrigger>

            <AccordionContent className="pb-7 pl-[53px] pr-8 text-sm leading-7 text-muted-foreground sm:text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>

  </div>
</section>

   <section
  id="contact"
  className="scroll-mt-24 border-t border-border bg-background"
>
  <div className="site-container grid lg:grid-cols-[0.85fr_1.15fr]">

    {/* LEFT */}
    <div className="section-pad lg:pr-20">

      <Reveal>

        <p className="eyebrow text-primary">
          FIND US
        </p>

        <h2 className="section-title mt-4 text-heading">
          Your Care
          <br />
          <em className="font-normal text-primary">
            Starts Here.
          </em>
        </h2>

        <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
          Visit The Dental Casaa for thoughtful, personal dental care
          in the heart of Shahdara.
        </p>

      </Reveal>


      {/* ADDRESS */}
      <Reveal delay={80}>

        <div className="mt-12 border-y border-border">

          <div className="flex gap-5 py-7">

            <MapPin className="mt-1 size-5 shrink-0 text-secondary" />

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Clinic Address
              </p>

              <address className="mt-3 not-italic text-sm leading-7 text-body">
                {clinic.addressLines.map((line) => (
                  <span
                    key={line}
                    className="block"
                  >
                    {line}
                  </span>
                ))}
              </address>

            </div>

          </div>

        </div>

      </Reveal>


      {/* CTA */}
      <Reveal delay={140}>

        <div className="mt-8 flex flex-wrap items-center gap-6">

          <Button
            asChild
            className="h-12 px-6"
          >
            <a
              href={clinic.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
              <ArrowUpRight className="size-4" />
            </a>
          </Button>

          <a
            href="#appointment"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
          >
            Book an Appointment
            <ArrowRight className="size-4" />
          </a>

        </div>

      </Reveal>


      {/* LOCAL AREA */}
      <Reveal delay={200}>

        <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 text-xs uppercase tracking-[0.12em] text-muted-foreground">
          <span>Shahdara</span>
          <span>•</span>
          <span>Loni Road</span>
          <span>•</span>
          <span>East Delhi</span>
        </div>

      </Reveal>

    </div>


    {/* RIGHT VISUAL */}
    <Reveal
      delay={100}
      className="relative min-h-[520px] overflow-hidden bg-sand"
    >

      <img
        src={clinicInterior}
        alt="The Dental Casaa clinic interior near Loni Road, Shahdara"
        width={1408}
        height={1104}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* IMAGE OVERLAY */}
      <div className="absolute inset-0 bg-primary/20" />


      {/* FLOATING LOCATION CARD */}
      <div className="absolute bottom-7 left-7 right-7 sm:bottom-10 sm:left-10 sm:right-auto">

        <div className="max-w-sm bg-background/95 p-7 backdrop-blur-sm sm:p-8">

          <div className="flex items-center gap-3">

            <span className="flex size-10 items-center justify-center bg-primary text-primary-foreground">
              <MapPin className="size-4" />
            </span>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary">
                Our Location
              </p>

              <p className="mt-1 font-display text-xl text-heading">
                Shahdara Corner
              </p>
            </div>

          </div>


          <div className="mt-6 border-t border-border pt-5">

            <p className="text-sm leading-6 text-muted-foreground">
              Loni Road, Shahdara Corner
              <br />
              Above Railway Ticket Ghar
              <br />
              Delhi – 110032, India
            </p>

          </div>


          <a
            href={clinic.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary"
          >
            Open in Maps
            <ArrowUpRight className="size-4" />
          </a>

        </div>

      </div>

    </Reveal>

  </div>
</section>
      </main>
      <footer className="bg-dark text-primary-foreground">
  <div className="site-container">

    {/* FOOTER MAIN */}
    <div className="grid gap-10 py-12 text-left sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr] lg:gap-14 lg:py-16">

      {/* BRAND */}
      <div className="text-left max-sm:text-center">
        <a
          href="#home"
          aria-label="The Dental Casaa home"
          className="inline-flex"
        >
          <img
            src="/the-dental-casaa-logo.jpg"
            alt="The Dental Casaa"
            className="h-20 w-20 object-contain max-sm:mx-auto"
          />
        </a>

        <p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/65 max-sm:mx-auto">
          Personal dentistry with a thoughtful approach to comfort,
          clarity and modern care.
        </p>

        <p className="mt-3 text-sm text-secondary">
          {clinic.tagline}
        </p>

        <a
          href="#appointment"
          className="mt-6 inline-flex items-center gap-2 border-b border-secondary pb-1 text-sm font-semibold transition-colors hover:text-secondary"
        >
          Book an Appointment
          <ArrowRight className="size-4" />
        </a>
      </div>

      {/* EXPLORE */}
      <div className="text-left max-sm:text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
          Explore
        </p>

        <nav className="mt-4 flex flex-col gap-2.5 max-sm:items-center">
          <a
            href="#about"
            className="text-sm text-primary-foreground/65 transition-colors hover:text-primary-foreground"
          >
            About
          </a>

          <a
            href="#treatments"
            className="text-sm text-primary-foreground/65 transition-colors hover:text-primary-foreground"
          >
            Treatments
          </a>

          <a
            href="#smile-transformations"
            className="text-sm text-primary-foreground/65 transition-colors hover:text-primary-foreground"
          >
            Smile Gallery
          </a>

          <a
            href="#testimonials"
            className="text-sm text-primary-foreground/65 transition-colors hover:text-primary-foreground"
          >
            Patient Stories
          </a>

          <a
            href="#contact"
            className="text-sm text-primary-foreground/65 transition-colors hover:text-primary-foreground"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* TREATMENTS */}
      <div className="text-left max-sm:text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
          Treatments
        </p>

        <nav className="mt-4 flex flex-col gap-2.5 max-sm:items-center">
          {treatments.slice(0, 4).map((treatment) => (
            <Link
              key={treatment.id}
              to="/treatments/$slug"
              params={{ slug: treatment.slug }}
              className="text-sm text-primary-foreground/65 transition-colors hover:text-primary-foreground"
            >
              {treatment.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* VISIT */}
      <div className="text-left max-sm:text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
          Visit The Dental Casaa
        </p>

        <address className="mt-4 not-italic text-sm leading-6 text-primary-foreground/65">
          {clinic.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>

        <a
          href={clinic.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground transition-colors hover:text-secondary"
        >
          Get Directions
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </div>

    {/* BOTTOM BAR */}
    <div className="border-t border-primary-foreground/10 py-5">
      <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-primary-foreground/45 sm:flex-row sm:text-left">

        <p>
          © {new Date().getFullYear()} The Dental Casaa. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <Link
            to="/privacy"
            className="transition-colors hover:text-primary-foreground"
          >
            Privacy
          </Link>

          <Link
            to="/terms"
            className="transition-colors hover:text-primary-foreground"
          >
            Terms
          </Link>
        </div>

      </div>
    </div>

  </div>
</footer>

{/* MOBILE STICKY APPOINTMENT */}
<Button
  asChild
  className="fixed inset-x-4 bottom-4 z-40 h-12 shadow-lg md:hidden"
>
  <a href="#appointment">
    Book Appointment
  </a>
</Button>
    </div>
  );
}
