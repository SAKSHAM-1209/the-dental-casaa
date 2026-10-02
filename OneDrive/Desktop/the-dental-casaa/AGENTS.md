<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep clinic business content and API-ready entity types in `src/data/clinic.ts`; this allows a future Django API to replace static data without rewriting presentation components.
- Use a single dynamic `/treatments/$slug` route for treatment detail pages; this keeps treatment metadata and rendering consistent as the catalogue grows.
- Keep appointment availability data in `src/data/clinic.ts` and treat selections as unconfirmed requests until a live booking service is connected.
- Keep local business facts centralized in `src/data/clinic.ts`, and omit any phone, email, hours, ratings, credentials, or awards until the clinic confirms them; this prevents unverified claims from reaching visitors or structured data.
