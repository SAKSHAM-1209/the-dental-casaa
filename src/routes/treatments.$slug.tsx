import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/clinic/SiteHeader";
import { clinic, treatments } from "@/data/clinic";

export const Route = createFileRoute("/treatments/$slug")({
  loader: ({ params }) => {
    const treatment = treatments.find((item) => item.slug === params.slug);
    if (!treatment) throw notFound();
    return { treatment };
  },
  head: ({ loaderData, params }) => ({
    meta: [
      { title: loaderData ? `${loaderData.treatment.title} in Shahdara | The Dental Casaa` : "Treatment Not Found | The Dental Casaa" },
      { name: "description", content: loaderData ? `${loaderData.treatment.shortDescription} Learn about ${loaderData.treatment.title.toLowerCase()} at The Dental Casaa near Loni Road, Shahdara, Delhi.` : "Explore personal dental care at The Dental Casaa in Shahdara, Delhi." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: loaderData ? `${loaderData.treatment.title} in Shahdara | The Dental Casaa` : "Treatment | The Dental Casaa" },
      { property: "og:description", content: loaderData ? `${loaderData.treatment.shortDescription} Visit The Dental Casaa in Shahdara, Delhi.` : "Explore personal dental care at The Dental Casaa in Shahdara, Delhi." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/treatments/${params.slug}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: loaderData ? `${loaderData.treatment.title} in Shahdara | The Dental Casaa` : "Treatment | The Dental Casaa" },
      { name: "twitter:description", content: loaderData ? `${loaderData.treatment.shortDescription} Visit The Dental Casaa in Shahdara, Delhi.` : "Personal dental care in Shahdara, Delhi." },
    ],
    links: [{ rel: "canonical", href: `/treatments/${params.slug}` }],
    scripts: loaderData ? [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalProcedure", name: loaderData.treatment.title, description: loaderData.treatment.description, url: `/treatments/${params.slug}`, provider: { "@type": "Dentist", name: clinic.name, address: { "@type": "PostalAddress", streetAddress: clinic.streetAddress, addressLocality: clinic.addressLocality, addressRegion: clinic.addressRegion, postalCode: clinic.postalCode, addressCountry: clinic.addressCountry } } }) }] : [],
  }),
  component: TreatmentPage,
  notFoundComponent: () => <div className="site-container flex min-h-screen flex-col items-center justify-center text-center"><h1 className="font-display text-5xl text-heading">Treatment not found</h1><Button asChild className="mt-6"><Link to="/">Return home</Link></Button></div>,
});

function TreatmentPage() {
  const { treatment } = Route.useLoaderData();
  return <div className="min-h-screen bg-background"><SiteHeader /><main><section className="site-container grid min-h-[720px] items-center gap-12 pb-20 pt-32 lg:grid-cols-2"><div><Link to="/" hash="treatments" className="mb-10 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary"><ArrowLeft className="size-4" /> Explore all dental treatments</Link><p className="eyebrow text-secondary">{treatment.category}</p><h1 className="mt-5 font-display text-5xl leading-tight text-heading sm:text-7xl">{treatment.title}</h1><p className="mt-7 max-w-xl text-lg leading-8 text-body">{treatment.description}</p><p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">Request a consultation for {treatment.title.toLowerCase()} at The Dental Casaa, located near Loni Road at Shahdara Corner, Delhi.</p><div className="mt-9 space-y-4 border-y border-border py-6">{["Personal consultation and detailed assessment", "Clear options explained before treatment", "Comfort-focused care and considered follow-up"].map((item) => <div key={item} className="flex items-center gap-3 text-sm"><CheckCircle2 className="size-5 text-secondary" />{item}</div>)}</div><Button asChild size="lg" className="mt-8"><Link to="/" hash="appointment">Request a {treatment.title} Appointment <ArrowRight /></Link></Button></div><div className="relative"><div className="absolute -left-4 -top-4 h-32 w-24 border-l border-t border-secondary"/><div className="aspect-[4/5] overflow-hidden"><img src={treatment.image} alt={`${treatment.title} consultation at The Dental Casaa in Shahdara, Delhi`} width={590} height={588} decoding="async" className="h-full w-full object-cover" /></div></div></section></main></div>;
}
