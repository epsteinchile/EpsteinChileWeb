import logo from "@assets/favicons/logo_epstein_chile.svg";

/**
 * Central site configuration — the single place for identity, homepage copy,
 * navigation labels, page headings, and feature toggles.
 *
 * Structural data stays in sibling config files:
 * - src/config/menu.json    header and footer navigation links
 * - src/config/social.json  public social profiles
 * - src/config/config.json  contact details and the contact form endpoint
 */
export const siteConfig = {
  // ---------------------------------------------------------------------------
  // Identity
  // ---------------------------------------------------------------------------
  lang: "es",
  locale: "es_CL",
  title: "Archivos Epstein en Español",
  brandName: "Epstein Chile",
  logo,
  logoWidth: 160,
  logoHeight: 40,
  logoText: "Epstein Chile logo",
  author: "EpsteinChile",
  description: "",
  /** Paragraph under the hero headline and in the empty-blog hero. */
  heroDescription: "Únete a nuestra comunidad para conocer más sobre el caso de tráfico de menores, corrupción y extorsión internacional más relevante de la historia.",
  footerDescription: "El caso Epstein en español y en simple.",
  ogImage: "/images/og-image.png",
  postsPerPage: 11,

  // ---------------------------------------------------------------------------
  // Hero section
  // ---------------------------------------------------------------------------
  hero: {
    /** Headline is split so the accent phrase can be highlighted in the brand color. */
    title: "Traduciendo archivos del caso",
    titleAccent: "Epstein al español.",
    /** Primary call to action; href is root-relative and base-aware at render time. */
    primaryCta: { label: "Revisa nuestros artículos", href: "/blog/" },
    /** Secondary in-page jump; only rendered when a Learning Paths section exists. */
    secondaryCta: { label: "Revisa la línea de tiempo", href: "#learning-paths" },
    /** Labels for the proof counts; `author` is used when the count is 1. */
    statsLabels: {
      guides: "practical guides",
      topics: "temas para explorar",
      author: "autor escribiendo",
      authors: "autores escribiendo",
    },
  },

  // ---------------------------------------------------------------------------
  // Homepage sections
  // ---------------------------------------------------------------------------
  homepage: {
    showFeaturedPosts: true,
    showTaxonomyCards: true,
    showPopularTopics: true,

    /** Editor's picks from posts flagged `featured: true`. */
    featured: {
      limit: 3,
      title: "Artículos recomendados",
      description: "Los post más relevantes del caso.",
    },

    /** Newest posts that are not in the hero, featured grid, or a series. */
    latest: {
      limit: 6,
      title: "Últimos Articulos",
      actionLabel: "Ver todos los artículos",
    },

    /** Series in position order plus the largest categories. */
    learningPaths: {
      title: "Línea de tiempo",
      description: "Visualiza las acciones cometidas por la clase Epstein en orden cronológico.",
      actionLabel: "Explorar línea de tiempo",
    },

    /** Tag-driven topic columns; labels are matched case-insensitively. */
    popularTopics: {
      title: "Los artículos más populares",
      description: "Los artículos más vistos por la comunidad",
      tags: ["Donald Trump", "VPS", "Blogging"],
      postsPerTag: 4,
    },

    /** Compact taxonomy row. `icon` accepts any Astro Icon / Iconify name. */
    explore: {
      title: "Explora el contenido",
      description: "Explora nuestro contenido por categoría o etiqueta",
      cards: [
        {
          href: "/categories/",
          title: "Categorías",
          description: "Explora artículos según categoría",
          icon: "mdi:folder-multiple-outline",
        },
        {
          href: "/tags/",
          title: "Etiquetas",
          description: "Encuentra contenido según su etiqueta",
          icon: "mdi:tag-outline",
        },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // Footer
  // ---------------------------------------------------------------------------
  footer: {
    exploreTitle: "Navega",
    latestTitle: "Últimos artículos",
  },

  // ---------------------------------------------------------------------------
  // Listing and utility pages
  // `title` is the visible heading (and the SEO title prefix), `description` is
  // the meta description, and `subline` is the visible line under the heading.
  // ---------------------------------------------------------------------------
  pages: {
    blog: {
      title: "Blog",
      description: "Explora todas nuestras publicaciones",
      subline: "Explora todas nuestras publicaciones",
    },
    categories: {
      title: "Categorías",
      description: "Explora las categorías de nuestros artículos",
      subline: "Explora artículos por categoría",
    },
    tags: {
      title: "Etiquetas",
      description: "Explora todas las etiquetas de nuestro blog",
      subline: "Explora los artículos según etiquetas",
    },
    authors: {
      title: "Autores",
      description: "Conoce a nuestros autores y navega por sus publicaciones.",
      subline: "Conoce a nuestros autores y navega por sus publicaciones.",
    },
    series: {
      title: "Serie de artículos",
      description: "Explora nuestra colección de series de artículos sobre diversos temas",
      subline: "Explora nuestra colección de series de artículos sobre diversos temas",
    },
    contact: {
      title: "Contáctenos",
      description: "Ponte en contacto con nosotros",
      subline: "Ponte en contacto con nosotros",
    },
    search: {
      title: "Búsqueda",
      description: "Buscar artículos",
      placeholder: "Buscar artículos...",
      label: "Buscar artículos",
      noResults: "No se encontraron resultados. Prueba con otro término de búsqueda.",
    },
    notFound: {
      title: "404 - Página no Encontrada",
      description: "La página que buscas no existe.",
      heading: "404",
      subheading: "Página no Encontrada",
      message: "La página que buscas no existe o ha sido trasladada.",
      homeLabel: "Ir al inicio",
      blogLabel: "Explorar artículos",
    },
  },

  // ---------------------------------------------------------------------------
  // Assets and indexing policy
  // ---------------------------------------------------------------------------
  favicons: {
    svg: "/favicon.svg",
    ico: "/favicon.ico",
  },
  noindex: {
    tags: true,
    categories: false,
    authors: false,
  },
} as const;

export type SiteConfig = typeof siteConfig;
