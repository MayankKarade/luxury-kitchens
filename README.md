This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Hostinger

Keep the existing Node.js version and npm package manager in the hosting settings.
Deploy both `package.json` and `package-lock.json`, without uploading local
`node_modules` or `.next` directories.

- Install command: `npm ci --include=dev --include=optional`
- Build command: `npm run build`
- Start command: `npm run start`
- Set `NEXT_PUBLIC_API_BASE_URL` to `https://admin.caliwoodgh.com/api` before building.

The production build uses Next.js's supported `--webpack` option to avoid the
Turbopack PostCSS worker panic encountered on the hosting build image. Development
also uses Webpack to avoid the local route discovery failures seen with Turbopack.
Linux GNU and musl native packages in the lockfile are
optional platform dependencies; keep them so npm can install the appropriate
binary on the host. Clear the hosting build cache before retrying the deployment.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
