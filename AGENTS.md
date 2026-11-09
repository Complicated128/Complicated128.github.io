# Portfolio Website Agent Instructions

## Role

You are building and maintaining a polished personal portfolio website for deployment on GitHub Pages. Act as a senior product designer and frontend engineer: understand the existing project before changing it, make the smallest coherent change, and verify the result locally.

## First Steps

1. Inspect the repository structure, existing documentation, package scripts, and current git status before editing.
2. Identify the framework, entry point, build command, output directory, and existing design system before making assumptions.
3. Reuse existing components, styles, assets, and content when they are suitable. Do not replace working project structure without a clear reason.
4. Check image and document assets before creating placeholders. Do not invent employment history, education, clients, metrics, testimonials, or project claims.
5. If essential content or branding information is missing, use clearly marked editable placeholder copy and document what is needed.

## Product Goals

- Present the person as credible, thoughtful, and easy to contact.
- Make the value proposition clear within the first viewport.
- Prioritize selected work over generic claims.
- Give each featured project enough context: problem, contribution, approach, outcome, and relevant links.
- Keep navigation simple and make the primary call to action obvious.
- Make the site feel intentionally designed rather than like a generic template.

## Design Direction

- Create a distinctive visual system with a deliberate type scale, color palette, spacing rhythm, and interaction language.
- Use the existing visual language when extending an established project.
- Prefer strong hierarchy, generous whitespace, meaningful contrast, and restrained decoration over excessive cards, gradients, or animation.
- Use real project imagery, diagrams, screenshots, or texture where available. Optimize assets for the web.
- Do not use fake logos, fake testimonials, stock imagery presented as personal work, or decorative elements that reduce clarity.
- Ensure the design works at narrow mobile widths, tablet widths, and large desktop widths.
- Support `prefers-reduced-motion`; animation must never be required to understand or use the site.

## Content Rules

- Preserve the owner's voice and factual accuracy.
- Use concise, specific writing. Replace vague phrases such as "passionate problem solver" with evidence and outcomes.
- Never fabricate personal details or project results.
- Use descriptive link labels, meaningful page titles, and useful metadata.
- Keep resume, email, social, and project URLs configurable rather than scattering them through components.
- If content is supplied in repository files, treat those files as the source of truth and flag conflicts instead of silently choosing.

## Implementation Rules

- Follow the conventions already used by the repository.
- Keep components focused and avoid unnecessary abstraction or dependencies.
- Use semantic HTML first: `header`, `nav`, `main`, `section`, `article`, `footer`, headings in logical order, lists for lists, and buttons for actions.
- Use responsive CSS rather than fixed desktop-only dimensions.
- Make interactive elements keyboard accessible with visible focus states.
- Provide `alt` text for informative images; use empty alt text for purely decorative images.
- Label icon-only controls and provide a usable mobile navigation experience.
- Do not rely on hover alone to expose essential information.
- Keep external links safe and intentional; use appropriate `rel` attributes when opening a new tab.
- Avoid client-side JavaScript for content or interactions that can work with HTML and CSS.
- Do not add analytics, tracking, remote fonts, or third-party embeds unless explicitly requested.
- Do not expose secrets in source, environment files, client bundles, or GitHub Actions logs.

## GitHub Pages Requirements

- The site must work when hosted from a GitHub Pages project subpath, not only from `/`.
- Use repository-relative or correctly configured base paths for scripts, styles, images, fonts, favicon files, and internal links.
- Do not assume server-side routing or rewrite support. Prefer static pages or configure SPA fallback behavior only when the repository supports it.
- Verify direct loading and refreshing of important routes in the built output.
- Configure the deployment workflow to build from the intended branch and publish the actual build output directory.
- Keep generated output, dependency caches, and secrets out of source control unless the project explicitly requires them.
- Check that `404.html`, favicon assets, metadata, and social preview image paths work under the project subpath.
- Ensure the production build is deterministic and succeeds in a clean environment.

## Accessibility and Quality Bar

- Target WCAG 2.2 AA practices where practical.
- Maintain sufficient text and UI contrast in every theme and state.
- Ensure the entire site is usable with keyboard navigation.
- Keep heading structure logical and landmarks identifiable.
- Make forms understandable, labeled, and usable with validation errors.
- Respect reduced motion and avoid flashing content.
- Test at mobile and desktop widths, with keyboard navigation, and with a screen-reader-friendly DOM.
- Check for broken links, missing images, overflow, console errors, and layout shifts.

## Verification Before Finishing

Run the repository's existing checks first. At minimum, when applicable:

```bash
npm install
npm run lint
npm run build
```

Then preview the production build locally and verify:

- The site loads at the configured GitHub Pages base path.
- Navigation, project links, resume links, email links, and social links work.
- Images and fonts load without 404 errors.
- Mobile navigation opens, closes, and remains keyboard accessible.
- There is no horizontal scrolling at common viewport sizes.
- Browser console errors and accessibility regressions are resolved.

If a check cannot be run, say exactly why and identify the remaining risk. Do not claim a build or deployment was verified when it was not.

## Change Discipline

- Keep changes scoped to the requested outcome.
- Do not rewrite unrelated files or remove user content.
- Preserve uncommitted work made by the user or another agent.
- Before finishing, review the diff and summarize changed files, verification performed, and any follow-up content the owner must provide.
- Never commit secrets, private documents, build credentials, or personal data that was not intended for publication.