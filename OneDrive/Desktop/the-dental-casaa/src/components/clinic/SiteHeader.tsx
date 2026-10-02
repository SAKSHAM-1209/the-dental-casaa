import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinic } from "@/data/clinic";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/the-dental-casaa-logo.jpg";

const links = [
  ["Home", "#home"], ["About", "#about"], ["Treatments", "#treatments"],
  ["Smile Gallery", "#smile-gallery"], ["Testimonials", "#testimonials"], ["Contact", "#contact"],
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        scrolled && !open
          ? "border-b border-border/70 bg-background/95 shadow-sm backdrop-blur-xl"
          : open
            ? "bg-background"
            : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "site-container flex items-center justify-between gap-5 transition-all duration-500",
          scrolled ? "h-16 lg:h-20" : "h-20 lg:h-24"
        )}
      >
        {/* LOGO */}
        <a
          href="/#home"
          className="group relative z-50 flex shrink-0 items-center"
          aria-label={`${clinic.name} home`}
        >
          <img
            src={logoAsset}
            alt={`${clinic.name} logo`}
            width={1024}
            height={1024}
            className={cn(
              "h-14 w-14 object-contain transition-all duration-500 ease-out",
              "group-hover:scale-105 group-hover:-rotate-1",
              scrolled
                ? "sm:h-14 sm:w-14"
                : "sm:h-16 sm:w-16"
            )}
          />
        </a>

        {/* DESKTOP NAV */}
        <nav
          className="hidden items-center gap-5 xl:flex"
          aria-label="Primary navigation"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={`/${href}`}
              className="
                nav-link
                group relative
                text-xs font-semibold uppercase
                tracking-wide text-foreground
                transition-colors duration-300
              "
            >
              {label}

              {/* Gold animated underline */}
              <span
                className="
                  absolute -bottom-2 left-1/2 h-px w-0
                  -translate-x-1/2
                  bg-[#C9A66B]
                  transition-all duration-300 ease-out
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            size="lg"
            className="
              relative overflow-hidden
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            <a href="/#appointment">
              <span className="relative z-10">
                Book Appointment
              </span>

              {/* Shine effect */}
              <span
                className="
                  absolute inset-y-0 -left-full w-1/2
                  skew-x-[-20deg]
                  bg-white/15
                  transition-all duration-700
                  hover:left-[130%]
                "
              />
            </a>
          </Button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <Button
          variant="ghost"
          size="icon"
          className="
            relative z-50 size-11
            transition-all duration-300
            hover:scale-105
            hover:bg-black/5
            md:hidden
          "
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={cn(
              "transition-transform duration-300",
              open && "rotate-90"
            )}
          >
            {open ? <X /> : <Menu />}
          </span>
        </Button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col",
          "bg-background px-6 pb-8 pt-28",
          "transition-all duration-500 ease-out md:hidden",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        )}
      >
        <nav
          className="flex flex-1 flex-col justify-center"
          aria-label="Mobile navigation"
        >
          {links.map(([label, href], index) => (
            <a
              key={href}
              href={`/${href}`}
              onClick={() => setOpen(false)}
              className={cn(
                "group border-b border-border py-4",
                "font-display text-3xl text-heading",
                "transition-all duration-500",
                open
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              )}
              style={{
                transitionDelay: open
                  ? `${index * 70 + 100}ms`
                  : "0ms",
              }}
            >
              <span className="transition-colors duration-300 group-hover:text-[#C9A66B]">
                {label}
              </span>
            </a>
          ))}
        </nav>

       <Button
  asChild
  size="lg"
  className="
    bg-[#004C45] text-white
    transition-all duration-300
    hover:bg-white hover:text-[#004C45]
    hover:border-[#004C45]
    hover:shadow-lg
  "
>
  <a href="/#appointment">
    Book Appointment
  </a>
</Button>
      </div>
    </header>
  );
}