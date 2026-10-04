import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinic } from "@/data/clinic";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/the-dental-casaa-logo.jpg";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Treatments", "#treatments"],
  ["Smile Gallery", "#smile-gallery"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
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
        "fixed inset-x-0 top-0 z-50",
        "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",

        scrolled && !open
          ? [
              "border-b border-[#D9D2C5]/70",
              "bg-[#F8F5EE]/90",
              "backdrop-blur-xl",
              "shadow-[0_8px_30px_rgba(0,0,0,0.05)]",
            ]
          : open
            ? "bg-[#F8F5EE]"
            : "bg-transparent"
      )}
    >
      {/* =====================================================
          HEADER INNER
      ====================================================== */}

      <div
        className={cn(
          "site-container flex items-center justify-between gap-6",
          "transition-all duration-700",
          "ease-[cubic-bezier(0.22,1,0.36,1)]",

          scrolled
            ? "h-[72px] lg:h-[82px]"
            : "h-[88px] lg:h-[100px]"
        )}
      >
        {/* =====================================================
            LOGO
        ====================================================== */}

        <a
          href="/#home"
          className="
            group
            relative z-50
            flex shrink-0
            items-center
            outline-none
          "
          aria-label={`${clinic.name} home`}
        >
          {/* Logo glow */}
          <span
            className="
              pointer-events-none
              absolute
              inset-0
              -z-10

              scale-75
              rounded-full

              bg-[#C9A66B]/10
              blur-xl

              opacity-0

              transition-all
              duration-700

              group-hover:scale-100
              group-hover:opacity-100
            "
          />

          <img
            src={logoAsset}
            alt={`${clinic.name} logo`}
            width={1024}
            height={1024}
            className={cn(
              "object-contain",

              "transition-all duration-700",
              "ease-[cubic-bezier(0.22,1,0.36,1)]",

              scrolled
                ? "h-12 w-12 sm:h-13 sm:w-13"
                : "h-14 w-14 sm:h-16 sm:w-16",

              "group-hover:scale-[1.04]"
            )}
          />
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <nav
          className="
            hidden
            items-center
            gap-7
            xl:flex
          "
          aria-label="Primary navigation"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={`/${href}`}
              className="
                group
                relative

                py-3

                text-[11px]
                font-semibold
                uppercase
                tracking-[0.14em]

                text-[#174E49]

                transition-all
                duration-300
                ease-out

                hover:-translate-y-[1px]
                hover:text-[#004C45]

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#C9A66B]
                focus-visible:ring-offset-4
              "
            >
              <span>{label}</span>

              {/* Gold underline */}
              <span
                className="
                  absolute
                  bottom-0
                  left-0

                  h-[1px]
                  w-0

                  bg-[#C9A66B]

                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  group-hover:w-full
                "
              />

              {/* Gold dot */}
              <span
                className="
                  absolute
                  -bottom-[3px]
                  left-0

                  size-[5px]
                  rounded-full

                  bg-[#C9A66B]

                  scale-0
                  opacity-0

                  transition-all
                  duration-300

                  group-hover:scale-100
                  group-hover:opacity-100
                "
              />
            </a>
          ))}
        </nav>

        {/* =====================================================
            DESKTOP APPOINTMENT BUTTON
        ====================================================== */}

        <div className="hidden items-center md:flex">
          <Button
            asChild
            size="lg"
            className="
              group
              relative
              overflow-hidden

              h-12
              rounded-md

              border
              border-[#004C45]

              bg-[#004C45]
              px-6

              text-[11px]
              font-semibold
              uppercase
              tracking-[0.12em]

              text-white

              shadow-none

              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]

              hover:-translate-y-[2px]
              hover:bg-white
              hover:text-[#004C45]

              hover:shadow-[0_10px_30px_rgba(0,76,69,0.14)]

              active:translate-y-0

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#C9A66B]
              focus-visible:ring-offset-4
            "
          >
            <a href="/#appointment">
              {/* Shine / sweep */}
              <span
                className="
                  pointer-events-none
                  absolute
                  inset-y-0

                  -left-[80%]
                  w-[45%]

                  skew-x-[-20deg]

                  bg-white/20

                  transition-all
                  duration-700
                  ease-out

                  group-hover:left-[130%]
                "
              />

              <span
                className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-2
                "
              >
                Book Appointment

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className="
                    transition-all
                    duration-300

                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </span>
            </a>
          </Button>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <Button
          variant="ghost"
          size="icon"
          className="
            group
            relative
            z-50

            size-11
            rounded-full

            text-[#004C45]

            transition-all
            duration-300

            hover:bg-[#004C45]/5
            hover:text-[#004C45]

            md:hidden

            focus-visible:ring-2
            focus-visible:ring-[#C9A66B]
          "
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={cn(
              "relative flex items-center justify-center",
              "transition-transform duration-500",
              "ease-[cubic-bezier(0.22,1,0.36,1)]",
              open && "rotate-90"
            )}
          >
            {open ? (
              <X
                size={23}
                strokeWidth={1.5}
              />
            ) : (
              <Menu
                size={23}
                strokeWidth={1.5}
              />
            )}
          </span>
        </Button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden",

          "bg-[#F8F5EE]",

          "transition-all duration-700",
          "ease-[cubic-bezier(0.22,1,0.36,1)]",

          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-6 opacity-0"
        )}
      >
        <div
          className="
            flex
            h-full
            flex-col

            px-6
            pb-8
            pt-28
          "
        >
          {/* Mobile navigation */}
          <nav
            className="
              flex
              flex-1
              flex-col
              justify-center
            "
            aria-label="Mobile navigation"
          >
            {links.map(([label, href], index) => (
              <a
                key={href}
                href={`/${href}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "group relative",

                  "border-b border-[#D9D2C5]",

                  "py-4",

                  "font-display",
                  "text-[30px]",
                  "leading-tight",

                  "text-[#174E49]",

                  "transition-all duration-700",
                  "ease-[cubic-bezier(0.22,1,0.36,1)]",

                  open
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                )}
                style={{
                  transitionDelay: open
                    ? `${index * 70 + 100}ms`
                    : "0ms",
                }}
              >
                <span
                  className="
                    transition-colors
                    duration-300

                    group-hover:text-[#C9A66B]
                  "
                >
                  {label}
                </span>

                {/* Mobile arrow */}
                <ArrowUpRight
                  size={19}
                  strokeWidth={1.5}
                  className="
                    absolute
                    right-0
                    top-1/2

                    -translate-y-1/2
                    translate-x-2

                    opacity-0

                    text-[#C9A66B]

                    transition-all
                    duration-300

                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />
              </a>
            ))}
          </nav>

          {/* =================================================
              MOBILE APPOINTMENT BUTTON
          ================================================== */}

          <Button
            asChild
            size="lg"
            className="
              group
              relative
              overflow-hidden

              h-14
              w-full

              rounded-md

              border
              border-[#004C45]

              bg-[#004C45]

              text-[11px]
              font-semibold
              uppercase
              tracking-[0.13em]

              text-white

              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]

              hover:-translate-y-0.5
              hover:bg-white
              hover:text-[#004C45]

              hover:shadow-[0_10px_30px_rgba(0,76,69,0.14)]
            "
          >
            <a
              href="/#appointment"
              onClick={() => setOpen(false)}
            >
              {/* Hover sweep */}
              <span
                className="
                  pointer-events-none
                  absolute
                  inset-y-0

                  -left-[80%]
                  w-[40%]

                  skew-x-[-20deg]

                  bg-white/20

                  transition-all
                  duration-700

                  group-hover:left-[130%]
                "
              />

              <span
                className="
                  relative
                  z-10
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                Book Appointment

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}