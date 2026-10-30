# SEO metadata implementation

Source: `Cali_Wood_GH_SEO_Metadata_Master.xlsx`, supplied by the user.
The extracted reference is `src/data/seoMetadata.json`; page builders are in
`src/lib/seo.js`. Suggested H1s and editorial notes are reference data, not
instructions to rewrite approved visible page content.

- Titles, descriptions, Open Graph, Twitter cards and robots directives use the workbook.
- Locations metadata mentions both Ghana and the USA, preserving the user's explicit confirmation of both offices.
- Canonical host is `https://caliwoodgh.com`, as proposed in the workbook. Next.js permanently redirects www requests to this host. The deployment/CDN must not redirect non-www back to www.
- Duplicate service/design routes redirect to the validated current route. Unavailable services still return 404; the spreadsheet does not publish new services or portfolio detail pages.
- Portfolio, Gallery, Testimonials, Locations and legal pages keep the workbook's temporary `noindex,follow`. This does not hide the pages from visitors. Remove the hold only after the corresponding content review.
- Dynamic blog/design records use actual content, canonical URLs and unique metadata. They remain `noindex,follow` pending explicit editorial approval; the current CMS has no SEO approval field. Kitchen variant copy is matched only against exact published design names, without guessing URLs.
- Real 1200×630 JPG assets exist under `public/og/`. They are branded cards using the existing Cali Wood logo, without unverified installation photography. Regenerate with `scripts/generate-seo-images.py` using Python with Pillow; replace with approved photos when supplied.
- Keyword themes are retained as editorial reference, not emitted as obsolete meta keywords.
- Organization, WebSite, WebPage and BreadcrumbList JSON-LD are included. No invented ratings, authors, LocalBusiness claims or article approval are emitted.
- Sitemap includes only live indexable canonical pages and a nonempty kitchen design collection; noindex/404/duplicate routes are excluded. robots.txt allows crawlers to read noindex tags.
- Kitchen collection content is supplied by the server so its product links are present in page source.

Validation: `node scripts/verify-seo.mjs` against a running local server
(`SEO_TEST_BASE_URL` can select a different origin), targeted ESLint, and production build.
Deployment, Search Console submission/inspection and external social preview cache refresh
are separate release actions; local verification does not publish these changes.
