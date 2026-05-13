/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://lasvegasnevadainjurylawyer.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.8,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  },
};
