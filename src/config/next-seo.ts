/* eslint-disable sonarjs/no-duplicate-string */
import type { DefaultSeoProps } from "next-seo";

// https://github.com/garmeeh/next-seo#nextseo-options
export const defaultSEOConfig: DefaultSeoProps = {
  title: "Pritish Samal",
  titleTemplate: "%s | CIPHERTron",
  defaultTitle: "CIPHERTron | Pritish Samal",
  description: "Pritish Samal's Portfolio Website | CIPHERTron",
  canonical: "https://sznm.dev",
  openGraph: {
    url: "https://pritishsamal.com",
    title: "Pritish Samal",
    description: "Pritish Samal's Portfolio Website",
    images: [
      {
        url: "https://res.cloudinary.com/pritish007/image/upload/v1644348821/Personal%20Portfolio/Favicon_nckr8a.png",
        alt: "pritishsamal.com og-image",
      },
    ],
    site_name: "Pritish Samal",
  },
  twitter: {
    handle: "@PritishSamal11",
    cardType: "summary_large_image",
  },
};
