import { type Registry } from "@/registry/schema"

export const blocks: Registry["items"] = [
  {
    name: "hero-1",
    type: "registry:block",
    description: "Hero section with modern design",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/hero/hero1.tsx",
        type: "registry:page",
        target: "/sections/hero",
      },
      {
        path: "registry/default/sections/footer/footer1.tsx",
        type: "registry:page",
        target: "/sections/footer",
      },
    ],
    categories: ["hero", "sections"],
  },
  {
    name: "hero-2",
    type: "registry:block",
    description: "Alternative hero section design",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/hero/hero2.tsx",
        type: "registry:page",
        target: "/sections/hero",
      },
    ],
    categories: ["hero", "sections"],
  },
  {
    name: "hero-3",
    type: "registry:block",
    description: "Modern hero section with gradient",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/hero/hero3.tsx",
        type: "registry:page",
        target: "/sections/hero",
      },
    ],
    categories: ["hero", "sections"],
  },
  {
    name: "hero-4",
    type: "registry:block",
    description: "Hero section with animated elements",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/hero/hero4.tsx",
        type: "registry:page",
        target: "/sections/hero",
      },
    ],
    categories: ["hero", "sections"],
  },
  {
    name: "hero-5",
    type: "registry:block",
    description: "Minimalist hero section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/hero/hero5.tsx",
        type: "registry:page",
        target: "/sections/hero",
      },
    ],
    categories: ["hero", "sections"],
  },
  {
    name: "banner-1",
    type: "registry:block",
    description: "Promotional banner section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/banner/banner1.tsx",
        type: "registry:page",
        target: "/sections/banner",
      },
    ],
    categories: ["banner", "sections"],
  },
  {
    name: "blog-1",
    type: "registry:block",
    description: "Blog listing section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/blog/blog1.tsx",
        type: "registry:page",
        target: "/sections/blog",
      },
    ],
    categories: ["blog", "sections"],
  },
  {
    name: "blog-2",
    type: "registry:block",
    description: "Alternative blog layout",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/blog/blog2.tsx",
        type: "registry:page",
        target: "/sections/blog",
      },
    ],
    categories: ["blog", "sections"],
  },
  {
    name: "blog-3",
    type: "registry:block",
    description: "Grid-based blog section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/blog/blog3.tsx",
        type: "registry:page",
        target: "/sections/blog",
      },
    ],
    categories: ["blog", "sections"],
  },
  {
    name: "blog-4",
    type: "registry:block",
    description: "Card-based blog section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/blog/blog4.tsx",
        type: "registry:page",
        target: "/sections/blog",
      },
    ],
    categories: ["blog", "sections"],
  },
  {
    name: "blog-5",
    type: "registry:block",
    description: "Featured blog section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/blog/blog5.tsx",
        type: "registry:page",
        target: "/sections/blog",
      },
    ],
    categories: ["blog", "sections"],
  },
  {
    name: "blog-6",
    type: "registry:block",
    description: "Modern blog section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/blog/blog6.tsx",
        type: "registry:page",
        target: "/sections/blog",
      },
    ],
    categories: ["blog", "sections"],
  },
  {
    name: "career-1",
    type: "registry:block",
    description: "Career opportunities section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/career/career1.tsx",
        type: "registry:page",
        target: "/sections/career",
      },
    ],
    categories: ["career", "sections"],
  },
  {
    name: "contact-1",
    type: "registry:block",
    description: "Contact form section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/contact/contact1.tsx",
        type: "registry:page",
        target: "/sections/contact",
      },
    ],
    categories: ["contact", "sections"],
  },
  {
    name: "contact-2",
    type: "registry:block",
    description: "Alternative contact section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/contact/contact2.tsx",
        type: "registry:page",
        target: "/sections/contact",
      },
    ],
    categories: ["contact", "sections"],
  },
  {
    name: "cta-1",
    type: "registry:block",
    description: "Call to action section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/cta/cta1.tsx",
        type: "registry:page",
        target: "/sections/cta",
      },
    ],
    categories: ["cta", "sections"],
  },
  {
    name: "faq-1",
    type: "registry:block",
    description: "Frequently asked questions section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/faq/faq1.tsx",
        type: "registry:page",
        target: "/sections/faq",
      },
    ],
    categories: ["faq", "sections"],
  },
  {
    name: "feature-1",
    type: "registry:block",
    description: "Feature showcase section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/feature/feature1.tsx",
        type: "registry:page",
        target: "/sections/feature",
      },
    ],
    categories: ["feature", "sections"],
  },
  {
    name: "footer-1",
    type: "registry:block",
    description: "Main footer section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/footer/footer1.tsx",
        type: "registry:page",
        target: "/sections/footer",
      },
    ],
    categories: ["footer", "sections"],
  },
  {
    name: "footer-2",
    type: "registry:block",
    description: "Alternative footer design",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/footer/footer2.tsx",
        type: "registry:page",
        target: "/sections/footer",
      },
    ],
    categories: ["footer", "sections"],
  },
  {
    name: "footer-3",
    type: "registry:block",
    description: "Modern footer section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/footer/footer3.tsx",
        type: "registry:page",
        target: "/sections/footer",
      },
    ],
    categories: ["footer", "sections"],
  },
  {
    name: "login-1",
    type: "registry:block",
    description: "Login form section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/login/login1.tsx",
        type: "registry:page",
        target: "/sections/login",
      },
    ],
    categories: ["login", "sections"],
  },
  {
    name: "login-2",
    type: "registry:block",
    description: "Alternative login design",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/login/login2.tsx",
        type: "registry:page",
        target: "/sections/login",
      },
    ],
    categories: ["login", "sections"],
  },
  {
    name: "login-3",
    type: "registry:block",
    description: "Modern login section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/login/login3.tsx",
        type: "registry:page",
        target: "/sections/login",
      },
    ],
    categories: ["login", "sections"],
  },
  {
    name: "login-4",
    type: "registry:block",
    description: "Enhanced login form",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/login/login4.tsx",
        type: "registry:page",
        target: "/sections/login",
      },
    ],
    categories: ["login", "sections"],
  },
  {
    name: "metrics-1",
    type: "registry:block",
    description: "Metrics display section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/metrics/metrics1.tsx",
        type: "registry:page",
        target: "/sections/metrics",
      },
    ],
    categories: ["metrics", "sections"],
  },
  {
    name: "navbar-1",
    type: "registry:block",
    description: "Main navigation bar",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/navbar/navbar1.tsx",
        type: "registry:page",
        target: "/sections/navbar",
      },
    ],
    categories: ["navbar", "sections"],
  },
  {
    name: "newsletter-1",
    type: "registry:block",
    description: "Newsletter subscription section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/newsletter/newsletter1.tsx",
        type: "registry:page",
        target: "/sections/newsletter",
      },
    ],
    categories: ["newsletter", "sections"],
  },
  {
    name: "pricing-1",
    type: "registry:block",
    description: "Pricing table section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/pricing/pricing1.tsx",
        type: "registry:page",
        target: "/sections/pricing",
      },
    ],
    categories: ["pricing", "sections"],
  },
  {
    name: "pricing-2",
    type: "registry:block",
    description: "Alternative pricing design",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/pricing/pricing2.tsx",
        type: "registry:page",
        target: "/sections/pricing",
      },
    ],
    categories: ["pricing", "sections"],
  },
  {
    name: "pricing-3",
    type: "registry:block",
    description: "Modern pricing section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/pricing/pricing3.tsx",
        type: "registry:page",
        target: "/sections/pricing",
      },
    ],
    categories: ["pricing", "sections"],
  },
  {
    name: "pricing-4",
    type: "registry:block",
    description: "Enhanced pricing layout",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/pricing/pricing4.tsx",
        type: "registry:page",
        target: "/sections/pricing",
      },
    ],
    categories: ["pricing", "sections"],
  },
  {
    name: "pricing-5",
    type: "registry:block",
    description: "Beam pricing section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/pricing/pricing5.tsx",
        type: "registry:page",
        target: "/sections/pricing",
      },
    ],
    categories: ["pricing", "sections"],
  },
  {
    name: "pricing-6",
    type: "registry:block",
    description: "Alternative beam pricing",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/pricing/pricing6.tsx",
        type: "registry:page",
        target: "/sections/pricing",
      },
    ],
    categories: ["pricing", "sections"],
  },
  {
    name: "pricing-7",
    type: "registry:block",
    description: "Modern pricing cards",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/pricing/pricing7.tsx",
        type: "registry:page",
        target: "/sections/pricing",
      },
    ],
    categories: ["pricing", "sections"],
  },
  {
    name: "team-1",
    type: "registry:block",
    description: "Team members section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/team/team1.tsx",
        type: "registry:page",
        target: "/sections/team",
      },
    ],
    categories: ["team", "sections"],
  },
  {
    name: "testimonial-1",
    type: "registry:block",
    description: "Customer testimonials section",
    registryDependencies: [],
    files: [
      {
        path: "registry/default/sections/testimonial/testimonial1.tsx",
        type: "registry:page",
        target: "/sections/testimonial",
      },
    ],
    categories: ["testimonial", "sections"],
  },
]