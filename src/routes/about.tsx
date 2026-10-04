import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import doctorImage from "@/assets/doctor/dr-jahnavi.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/clinic/Reveal";
import { SiteHeader } from "@/components/clinic/SiteHeader";
import { clinic } from "@/data/clinic";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Dr. Jahnavi Chaudhary | The Dental Casaa",
      },
      {
        name: "description",
        content:
          "Get to know Dr. Jahnavi Chaudhary and the philosophy behind The Dental Casaa in Shahdara, Delhi.",
      },
    ],
  }),

  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <main>
        <section className="relative overflow-hidden bg-background pt-32 sm:pt-40">
          <div className="site-container">
            <Reveal>
              <div className="max-w-4xl">
                <p className="eyebrow text-primary">
                  ABOUT THE DENTIST
                </p>

                <h1 className="mt-5 font-display text-5xl leading-[0.98] text-heading sm:text-6xl lg:text-7xl">
                  Dentistry that feels
                  <br />
                  <em className="font-normal text-primary">
                    personal.
                  </em>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  Meet Dr. Jahnavi Chaudhary and discover the thoughtful
                  approach behind The Dental Casaa — where modern dentistry
                  meets personal attention.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="site-container mt-14 sm:mt-20">
            <Reveal delay={100}>
              <div className="relative overflow-hidden bg-sand">
                <img
                  src={doctorImage}
                  alt="Dr. Jahnavi Chaudhary"
                  width={1400}
                  height={900}
                  fetchPriority="high"
                  decoding="async"
                  className="h-[480px] w-full object-cover object-center sm:h-[620px] lg:h-[700px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10">
                  <div className="inline-block bg-background/95 px-6 py-5 backdrop-blur-sm sm:px-8 sm:py-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                      DR. JAHNAVI CHAUDHARY
                    </p>

                    <p className="mt-2 font-display text-2xl text-heading sm:text-3xl">
                      Dentist & Caregiver
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* STORY */}
        <section className="section-pad bg-sand">
          <div className="site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="eyebrow text-primary">
                  THE PHILOSOPHY
                </p>

                <h2 className="section-title mt-4 text-heading">
                  More than
                  <br />
                  <em className="font-normal text-primary">
                    treating teeth.
                  </em>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="max-w-3xl">
                <p className="font-display text-2xl leading-snug text-heading sm:text-3xl">
                  “Good dentistry begins with listening.”
                </p>

                <p className="mt-8 text-base leading-8 text-muted-foreground">
                  At The Dental Casaa, the focus is on creating a dental
                  experience that feels clear, comfortable, and personal.
                  Every patient comes with different concerns, expectations,
                  and goals — and treatment should reflect that.
                </p>

                <p className="mt-6 text-base leading-8 text-muted-foreground">
                  Dr. Jahnavi Chaudhary takes a thoughtful approach to
                  diagnosis, treatment planning, and patient communication,
                  with an emphasis on making every step easier to understand.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {[
                    "Personal attention",
                    "Clear communication",
                    "Thoughtful treatment planning",
                    "Comfort-focused care",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 border-t border-border pt-4"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-secondary" />

                      <span className="text-sm text-heading">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* APPROACH */}
        <section className="section-pad bg-background">
          <div className="site-container">
            <Reveal>
              <div className="max-w-3xl">
                <p className="eyebrow text-primary">
                  THE APPROACH
                </p>

                <h2 className="section-title mt-4 text-heading">
                  Thoughtful care,
                  <br />
                  <em className="font-normal text-primary">
                    from consultation to smile.
                  </em>
                </h2>
              </div>
            </Reveal>

            <div className="mt-14 grid border-y border-border md:grid-cols-3">
              <Reveal>
                <div className="border-b border-border py-8 md:border-b-0 md:border-r md:pr-8">
                  <Sparkles className="size-5 text-secondary" />

                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
                    01
                  </p>

                  <h3 className="mt-2 font-display text-2xl text-heading">
                    Understand
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Understanding your concerns, goals, and expectations
                    before recommending treatment.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="border-b border-border py-8 md:border-b-0 md:border-r md:px-8">
                  <ShieldCheck className="size-5 text-secondary" />

                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
                    02
                  </p>

                  <h3 className="mt-2 font-display text-2xl text-heading">
                    Plan
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Building a clear treatment plan around what is
                    appropriate for your individual needs.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="py-8 md:pl-8">
                  <HeartHandshake className="size-5 text-secondary" />

                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary">
                    03
                  </p>

                  <h3 className="mt-2 font-display text-2xl text-heading">
                    Care
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Delivering care with attention to comfort, detail,
                    communication, and long-term oral health.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section className="section-pad bg-dark text-primary-foreground">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
              <Reveal>
                <div>
                  <p className="eyebrow text-secondary">
                    A LITTLE MORE PERSONAL
                  </p>

                  <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                    Get to know
                    <br />
                    <em className="font-normal text-secondary">
                      your dentist.
                    </em>
                  </h2>

                  <p className="mt-6 max-w-sm text-sm leading-6 text-white/65">
                    A glimpse into the person and philosophy behind
                    The Dental Casaa.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="relative overflow-hidden bg-black">
                  <video
                    className="aspect-video w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source
                      src="/videos/dr-jahnavi.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* LOCATION / CTA */}
        <section className="section-pad bg-sand">
          <div className="site-container">
            <Reveal>
              <div className="grid gap-8 border-y border-border py-10 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="eyebrow text-primary">
                    THE DENTAL CASAA
                  </p>

                  <h2 className="mt-3 font-display text-3xl text-heading sm:text-4xl">
                    Ready to take the next step?
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                    Visit us at Loni Road, Shahdara Corner, Delhi and
                    begin your dental care with a personal consultation.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button asChild className="h-12 px-6">
                    <a href="#appointment">
                      Book Appointment
                      <ArrowRight className="ml-2 size-4" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-12 px-6"
                  >
                    <Link to="/">
                      Back Home
                      <ArrowLeft className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FOOTER-LIKE LOCATION LINE */}
        <div className="border-t border-border bg-background">
          <div className="site-container py-6">
            <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <span>
                The Dental Casaa · Shahdara, Delhi
              </span>

              <span>
                {clinic.addressLines?.join(", ")}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}