import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, ShieldCheck, Sparkles, ScanLine, MessageCircle, HeartHandshake } from "lucide-react";
import heroImage from "@/assets/dental-hero.jpg";
import logoAsset from "@/assets/the-dental-casaa-logo.jpg.asset.json";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AppointmentForm } from "@/components/clinic/AppointmentForm";
import { Reveal } from "@/components/clinic/Reveal";
import { SiteHeader } from "@/components/clinic/SiteHeader";
import { beforeAfter, clinic, clinicInterior, faqs, gallery, testimonials, treatments } from "@/data/clinic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dentist in Shahdara, Delhi | The Dental Casaa" },
      { name: "description", content: "Visit The Dental Casaa, a dental clinic near Loni Road at Shahdara Corner, Delhi. Explore personal dental care and request an appointment." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Dentist in Shahdara, Delhi | The Dental Casaa" },
      { property: "og:description", content: "Personal dental care at The Dental Casaa near Loni Road, Shahdara Corner, Delhi. Explore treatments and request an appointment." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dentist in Shahdara, Delhi | The Dental Casaa" },
      { name: "twitter:description", content: "Personal dental care near Loni Road at Shahdara Corner, Delhi." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Dentist", "@id": "/#dental-clinic", name: clinic.name, url: "/", image: logoAsset.url, address: { "@type": "PostalAddress", streetAddress: clinic.streetAddress, addressLocality: clinic.addressLocality, addressRegion: clinic.addressRegion, postalCode: clinic.postalCode, addressCountry: clinic.addressCountry }, areaServed: clinic.areaServed.map((name) => ({ "@type": "Place", name })) }) },
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }) },
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
              <Button asChild variant="link" className="mt-7 h-auto p-0 text-primary"><a href="#contact">Discover Our Clinic <ArrowRight /></a></Button>
            </div>
          </div>
        </section>

        <section id="treatments" className="section-pad scroll-mt-24 bg-sand">
          <div className="site-container"><div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"><SectionHeading eyebrow="TREATMENTS" title="Care for Every Chapter of Your Smile." copy="From everyday prevention to considered smile transformations, each treatment begins with listening." /><p className="max-w-xs text-sm leading-6 text-muted-foreground">Explore the treatment that feels right for you. Every plan is tailored after a full clinical consultation.</p></div>
            <div className="mt-14 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{treatments.map((t, i) => <Reveal key={t.id} delay={(i % 3) * 70}><Link to="/treatments/$slug" params={{ slug: t.slug }} className="treatment-item group block" aria-label={`Learn about ${t.title} at The Dental Casaa in Shahdara`}><div className="aspect-[4/3] overflow-hidden bg-muted"><img src={t.image} alt={`${t.title} consultation at The Dental Casaa in Shahdara`} width={590} height={588} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.035]" /></div><div className="flex items-start justify-between gap-4 border-b border-border py-5"><div><p className="mb-2 text-[10px] font-semibold uppercase text-secondary">{t.category}</p><h3 className="font-display text-2xl text-heading">{t.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{t.shortDescription}</p></div><span className="mt-7 flex size-10 shrink-0 items-center justify-center border border-border text-primary transition group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"><ArrowUpRight className="size-4" /></span></div></Link></Reveal>)}</div>
          </div>
        </section>

        <section className="section-pad bg-primary text-primary-foreground">
          <div className="site-container"><SectionHeading eyebrow="WHY CHOOSE US" title="Precision in the Details. Warmth in Every Visit." light />
            <div className="mt-14 border-t border-primary-foreground/20">{reasons.map(({ icon: Icon, title, text }, i) => <Reveal key={title} delay={i * 45} className="grid gap-4 border-b border-primary-foreground/20 py-6 sm:grid-cols-[52px_1fr_1.3fr] sm:items-center"><span className="flex size-10 items-center justify-center border border-secondary/50 text-secondary"><Icon className="size-5" /></span><h3 className="font-display text-2xl">{title}</h3><p className="max-w-lg text-sm leading-6 text-primary-foreground/65">{text}</p></Reveal>)}</div>
          </div>
        </section>

        <section className="section-pad overflow-hidden">
          <div className="site-container grid gap-0 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch"><Reveal className="min-h-[440px] overflow-hidden"><img src={featuredTreatment.image} alt="Digital dental implant consultation" width={590} height={588} loading="lazy" className="h-full w-full object-cover" /></Reveal><Reveal delay={100} className="flex flex-col justify-center border-t-4 border-accent bg-dark p-8 text-primary-foreground sm:p-12 lg:p-16"><p className="eyebrow text-secondary">FEATURED TREATMENT</p><h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Dental Implants,<br />Planned Around You.</h2><p className="mt-6 max-w-md leading-7 text-primary-foreground/70">A considered path back to comfortable eating, confident conversation and a smile that feels naturally yours.</p><Button asChild variant="outline" className="mt-8 w-fit border-primary-foreground/35 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-dark"><Link to="/treatments/$slug" params={{ slug: "dental-implants" }}>Explore Dental Implants <ArrowRight /></Link></Button></Reveal></div>
        </section>

        <section id="smile-gallery" className="section-pad scroll-mt-24 bg-sand">
          <div className="site-container"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionHeading eyebrow="SMILE GALLERY" title="Subtle Changes. Meaningful Confidence." /><p className="max-w-sm text-xs leading-5 text-muted-foreground">Demonstration imagery only. Real treatment photographs can be added with patient consent.</p></div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">{beforeAfter.map((item, i) => <Reveal key={item.id} delay={i * 100}><figure><div className="grid grid-cols-2 gap-1 overflow-hidden bg-border"><div className="relative aspect-[4/3] overflow-hidden"><img src={item.before} alt={`Demonstration before view for ${item.treatment}`} width={590} height={588} loading="lazy" className="h-full w-full object-cover grayscale-[25%]" /><span className="image-label">Before</span></div><div className="relative aspect-[4/3] overflow-hidden"><img src={item.after} alt={`Demonstration after view for ${item.treatment}`} width={590} height={588} loading="lazy" className="h-full w-full object-cover" /><span className="image-label">After</span></div></div><figcaption className="mt-4 flex justify-between border-b border-border pb-4"><span className="font-display text-xl text-heading">{item.title}</span><span className="text-xs uppercase text-muted-foreground">{item.treatment}</span></figcaption></figure></Reveal>)}</div>
          </div>
        </section>

        <section id="testimonials" className="section-pad scroll-mt-24">
          <div className="site-container grid gap-12 lg:grid-cols-[0.35fr_1fr]"><div><p className="eyebrow text-primary">PATIENT WORDS</p>{testimonials.length > 1 && <div className="mt-8 flex gap-2"><Button variant="outline" size="icon" aria-label="Previous testimonial" onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)}><ArrowLeft /></Button><Button variant="outline" size="icon" aria-label="Next testimonial" onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}><ArrowRight /></Button></div>}</div>{activeTestimonial ? <div className="animate-fade-in" key={activeTestimonial.id}><span className="font-display text-8xl leading-none text-secondary">“</span><blockquote className="-mt-8 max-w-4xl font-display text-3xl leading-snug text-heading sm:text-5xl">{activeTestimonial.quote}</blockquote><div className="mt-9 flex items-center gap-4 border-t border-border pt-5"><span className="font-semibold text-heading">{activeTestimonial.patient}</span><span className="h-1 w-1 rounded-full bg-secondary" /><span className="text-sm text-muted-foreground">{activeTestimonial.treatment}</span></div></div> : <div><h2 className="font-display text-4xl text-heading sm:text-5xl">Patient experiences will be shared here.</h2><p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Feedback will only be published after it has been received and approved for use.</p></div>}</div>
        </section>

        <section className="section-pad bg-dark text-primary-foreground">
          <div className="site-container"><SectionHeading eyebrow="INSIDE THE DENTAL CASAA" title="A Setting Designed for Calm." copy="Considered spaces, contemporary equipment and quiet details that put you at ease." light />
            <div className="gallery-grid mt-12">{gallery.map((image, i) => <Reveal key={image.id} delay={(i % 3) * 55} className={`gallery-item gallery-item-${i + 1}`}><figure className="group relative h-full overflow-hidden"><img src={image.src} alt={image.alt} width={590} height={588} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /><figcaption className="absolute inset-x-0 bottom-0 bg-dark/80 px-4 py-3 text-xs uppercase text-primary-foreground">{image.label}</figcaption></figure></Reveal>)}</div>
          </div>
        </section>

        <section id="appointment" className="section-pad scroll-mt-24 bg-sand">
          <div className="site-container grid gap-14 lg:grid-cols-[0.75fr_1.25fr]"><div className="lg:sticky lg:top-32 lg:self-start"><SectionHeading eyebrow="REQUEST A VISIT" title="Ready for a Healthier, More Confident Smile?" copy="Choose a preferred time, share your details, and review everything before the clinic confirms your visit personally." /><div className="mt-8 border-l-2 border-secondary pl-5 text-sm leading-6 text-muted-foreground">Appointments requested online remain unconfirmed until the clinic responds.</div></div><AppointmentForm /></div>
        </section>

        <section className="section-pad">
          <div className="site-container grid gap-12 lg:grid-cols-[0.65fr_1.35fr]"><SectionHeading eyebrow="COMMON QUESTIONS" title="A Clear Start to Your Care." copy="Helpful answers before your first visit." /><Accordion type="single" collapsible className="border-t border-border">{faqs.map((faq) => <AccordionItem key={faq.id} value={`faq-${faq.id}`}><AccordionTrigger className="py-6 text-left text-base font-semibold text-heading hover:no-underline">{faq.question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 pr-10 leading-7 text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-border bg-sand">
          <div className="site-container grid lg:grid-cols-2"><div className="section-pad lg:pr-16"><SectionHeading eyebrow="CONTACT" title="We’d Be Glad to Welcome You." copy="Find The Dental Casaa at Shahdara Corner, conveniently located on Loni Road in East Delhi." /><div className="mt-10 flex gap-4"><MapPin className="mt-1 size-5 shrink-0 text-secondary" /><div><p className="text-xs font-semibold uppercase text-primary">Visit</p><address className="mt-2 not-italic text-sm leading-7 text-body">{clinic.addressLines.map((line) => <span key={line} className="block">{line}</span>)}</address><Button asChild variant="outline" className="mt-6"><a href={clinic.mapUrl} target="_blank" rel="noreferrer">Get Directions <ArrowUpRight /></a></Button></div></div></div><div className="relative min-h-[440px] overflow-hidden bg-primary"><img src={clinicInterior} alt="The Dental Casaa clinic location near Loni Road and Shahdara Corner" width={1408} height={1104} loading="lazy" decoding="async" className="h-full w-full object-cover opacity-35 grayscale" /><div className="absolute inset-0 flex items-center justify-center"><div className="max-w-xs border border-primary-foreground/30 bg-primary/90 p-8 text-center text-primary-foreground"><MapPin className="mx-auto text-secondary" /><h3 className="mt-4 font-display text-2xl">The Dental Casaa</h3><p className="mt-2 text-sm leading-6 text-primary-foreground/80">Loni Road, Shahdara Corner<br />Above Railway Ticket Ghar<br />Delhi – 110032</p><Button asChild variant="outline" className="mt-6 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href={clinic.mapUrl} target="_blank" rel="noreferrer">Get Directions <ArrowUpRight /></a></Button></div></div></div></div>
        </section>
      </main>
      <footer className="bg-dark py-14 text-primary-foreground"><div className="site-container"><div className="grid gap-10 border-b border-primary-foreground/15 pb-12 sm:grid-cols-2 lg:grid-cols-4"><div><img src={logoAsset.url} alt={`${clinic.name} logo`} width={1024} height={1024} loading="lazy" decoding="async" className="h-24 w-24 object-contain" /><p className="mt-4 max-w-xs text-sm leading-6 text-primary-foreground/60">{clinic.tagline}</p></div><div><p className="footer-title">Navigate</p><div className="footer-links"><a href="#about">About</a><a href="#treatments">Treatments</a><a href="#smile-gallery">Smile Gallery</a><a href="#contact">Contact</a></div></div><div><p className="footer-title">Treatments</p><div className="footer-links">{treatments.slice(0, 4).map((t) => <Link key={t.id} to="/treatments/$slug" params={{ slug: t.slug }}>{t.title}</Link>)}</div></div><div><p className="footer-title">Visit</p><address className="footer-links not-italic">{clinic.addressLines.map((line) => <span key={line}>{line}</span>)}<a href={clinic.mapUrl} target="_blank" rel="noreferrer">Get Directions</a></address></div></div><div className="flex flex-col justify-between gap-4 pt-7 text-xs text-primary-foreground/45 sm:flex-row"><p>© 2026 {clinic.name}. All rights reserved.</p><div className="flex gap-5"><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms</Link></div></div></div></footer>
      <Button asChild className="fixed inset-x-4 bottom-4 z-40 h-12 shadow-lg md:hidden"><a href="#appointment">Book Appointment</a></Button>
    </div>
  );
}