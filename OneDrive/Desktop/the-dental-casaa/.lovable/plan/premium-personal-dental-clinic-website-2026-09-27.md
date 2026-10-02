# Premium Personal Dental Clinic Website

## What I’ll build
- A polished one-dentist private clinic homepage in the exact requested section order, with no team or dentist-profile section.
- A sticky responsive navigation, asymmetric photographic introduction, editorial trust strip, clinic story, treatment discovery, reasons to choose the clinic, featured treatment, smile gallery, testimonials, clinic gallery, booking form, FAQ, contact area, and footer.
- Independent, crawlable treatment detail pages for all six featured treatments.
- Data-driven content models for clinic details, treatments, testimonials, FAQs, before/after examples, gallery images, and appointment payloads.

## Visual direction
- Deep pine, warm ivory, brass, and restrained terracotta using semantic design tokens.
- Fraunces headings with Inter body text, precise rectangular controls, generous whitespace, editorial image crops, minimal shadows, and no generic startup-style card grid.
- Cohesive, realistic imagery showing a sophisticated urban Indian private clinic, treatment rooms, equipment, and patient interactions.
- Subtle reveal, count-up, carousel, navigation, and image-hover motion with reduced-motion support.

## Interaction and quality
- The appointment form will validate inputs and prepare the exact payload shape for a future `POST /api/appointments/`, without pretending to submit to a live service.
- The mobile menu, in-page navigation, treatment links, gallery controls, testimonial controls, FAQ rows, phone link, and appointment calls-to-action will work.
- Contact details will remain clearly marked configurable placeholders rather than invented business information.
- I’ll verify the rendered result at desktop and mobile sizes, checking overflow, navigation, controls, imagery, hierarchy, animations, accessibility, and the absence of a Doctors section or AI chatbot.

## Technical details
- React 19, TypeScript, TanStack Start routes, reusable components, Lucide icons, and Tailwind v4.
- Content and types will be separate from presentation components so a future Django REST Framework/PostgreSQL integration can replace static content cleanly.
- Every public route will receive unique metadata; the homepage will include schema-ready FAQ content and a single H1.
- I’ll use a temporary premium clinic name because none was supplied, while keeping it centralized for easy replacement.
