const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Jayanth Portfolio", // Navigation and Site Title
  siteTitleAlt: "Jayanth", // Alternative Site title for SEO
  siteTitleShort: "Jayanth", // short_name for manifest
  siteHeadline: "Creating marvelous art & blazginly fast websites", // Headline for schema.org JSONLD
  siteUrl: "", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "", // Used for SEO and manifest
  siteDescription: "Portfolio website",
  author: "", // Author for schema.org JSONLD

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
