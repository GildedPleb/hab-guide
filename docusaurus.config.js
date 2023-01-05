// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/okaidia");

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultContextMaxLength: 82,
        explicitSearchResultPath: true,
        searchBarShortcutHint: false,
      },
    ],
  ],
  title: "HAB Node",
  tagline: "Your Bitcoin Node Highly Available",
  url: "https://gildedpleb.github.io",
  baseUrl: "/hab-guide/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "GildedPleb", // Usually your GitHub org/user name.
  projectName: "hab-guide", // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/GildedPleb/hab-guide/edit/master/website",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          "https://github.com/GildedPleb/hab-guide/edit/master/website",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "guide_warning_1",
        content:
          "The Guide is presently under active development, and requires additional undocumented steps to complete as is. See <a href='/hab-guide/docs/Introduction/intro'> Warning. </a>",
        backgroundColor: "pink",
        textColor: "#091E42",
        isCloseable: false,
      },
      navbar: {
        hideOnScroll: true,
        title: "",
        logo: {
          alt: "HAB Node logo",
          src: "img/ionico.png",
        },
        items: [
          { to: "/poc", label: "PoC", position: "left" },
          { to: "/why", label: "Why?", position: "left" },
          { to: "/how", label: "How?", position: "left" },
          {
            type: "doc",
            docId: "Introduction/intro",
            position: "left",
            label: "BYO",
          },
          // { to: "/blog", label: "Blog", position: "left" },

          { to: "/support", label: "Support", position: "right" },

          {
            href: "https://github.com/gildedpleb/hab-guide",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "HAB Node",
          src: "/img/ionico.png",
        },
        links: [
          {
            title: "Techical Designs",
            items: [
              {
                label: "Tutorial on GitHub",
                href: "https://github.com/GildedPleb/hab-guide",
              },
              {
                label: "Ansible Plays",
                href: "https://github.com/GildedPleb/hab-plays",
              },
              {
                label: "Helm Chart",
                href: "https://github.com/GildedPleb/helm-charts/blob/master/charts/hab",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/gildedpleb",
              },
              {
                label: "GitHub",
                href: "https://github.com/GildedPleb",
              },
            ],
          },
          {
            title: "Essential Qs",
            items: [
              {
                label: "Who?",
                to: "/docs/Introduction/who",
              },
              {
                label: "What?",
                to: "/docs/Introduction/what",
              },
              {
                label: "Why?",
                to: "/why",
              },
              {
                label: "How?",
                to: "/how",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Proof of Concept",
                to: "/poc",
              },
              {
                label: "Support",
                to: "/support",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HAB Node Project.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: true,
      },
      image: "img/og_image.png",
    }),
};

module.exports = config;
