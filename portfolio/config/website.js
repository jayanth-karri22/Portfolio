const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Jayanth", // Navigation and Site Title
  siteTitleAlt: "Jayanth", // Alternative Site title for SEO
  siteTitleShort: "Cara", // short_name for manifest
  siteHeadline: "Creating marvelous art & blazginly fast websites", // Headline for schema.org JSONLD
  siteUrl: "anybodycancode.dev", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "", // Used for SEO and manifest
  siteDescription: "Playful & Colorful One-Page website with Parallax effect",
  author: "LekoArts", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@cara", // Twitter Username
  ogSiteName: "cara", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
