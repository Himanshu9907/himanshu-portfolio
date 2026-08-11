const baseUrl = "https://your-portfolio.vercel.app";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
      ],
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}