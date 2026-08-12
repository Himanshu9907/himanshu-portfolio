// const baseUrl = "https://your-portfolio.vercel.app";

// export default function sitemap() {
//   return [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1,
//     },

//     {
//       url: `${baseUrl}/projects`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.9,
//     },

//     {
//       url: `${baseUrl}/#about`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.7,
//     },

//     {
//       url: `${baseUrl}/#services`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.7,
//     },

//     {
//       url: `${baseUrl}/#contact`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//   ];
// }


// const baseUrl = "https://himanshu-portfolio-tawny.vercel.app";

// export default function sitemap() {
//   return [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1,
//     },
//   ];
// }


export default function sitemap() {
  const baseUrl = "https://himanshu-portfolio-tawny.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}