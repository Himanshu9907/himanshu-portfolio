const baseUrl = "https://himanshu-portfolio-tawny.vercel.app";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}