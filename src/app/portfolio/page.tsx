import {
  Code,
  Server,
  PenTool,
  Layers,
  Zap,
  Database,
  Globe,
  Smartphone,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Card from "@/components/Card";

// Assets
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

// Datos de proyectos
const projects = [
  {
    id: 1,
    title: "Blog | Oscar Cardoso",
    description: "Blog personal y portafoio hecho con Nextjs y Sanity.",
    image: "/projects/blog-cardoso.webp",
    link: "https://www.cardoso.dev/",
    technologies: ["Nextjs", "Tailwind CSS", "Sanity", "Vercel"],
    category: "web",
  },
  {
    id: 2,
    title: "Sistema de rifas",
    description:
      "Aplicacion para manejar numeros disponibles en una rifa, con dashboard administrable protegido por autenticación.",
    image: "/projects/raffle-system.webp",
    link: "https://v0-raffle-ticket-interface.vercel.app/",
    technologies: [
      "Nextjs",
      "Shadcn",
      "V0",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
    ],
    category: "app",
  },
  {
    id: 3,
    title: "Labfem",
    description:
      "Labfem nace de la necesidad de informar a las mujeres sobre sus derechos y vibilidad las desigualdades dentro de la sociedad.",
    image: "/projects/labfem.webp",
    link: "https://labfem.vercel.app/",
    technologies: ["Gatsby", "Tailwind CSS", "Drupal", "Graphql", "Vercel"],
    category: "web",
  },
  {
    id: 4,
    title: "My Dream Place",
    description:
      "My Dream Place se trata de un sitio web para una empresa ficticia de viajes, el objetivo de este proyecto fué demostrar el potencial de utiliar un sitio desacoplado del backend, permitiendo a los usuarios la modificación de contenido de una manera fácil y eficaz.",
    image: "/projects/my-dream-place.webp",
    link: "https://com-gatsby-drupal.vercel.app/",
    technologies: ["Gatsby", "Tailwind CSS", "Drupal", "Graphql", "Vercel"],
    category: "web",
  },
  {
    id: 5,
    title: "Hotel Gatsby Site",
    description: "Sitio construido con Gatsby, Graphql y DatoCMS",
    image: "/projects/hotel-gatsby-site.webp",
    link: "https://hotel-gatsby-site.netlify.app/",
    technologies: [
      "Gatsby",
      "Styled components",
      "DatoCMS",
      "Graphql",
      "Netlify",
    ],
    category: "web",
  },
  {
    id: 6,
    title: "Blog Cafe",
    description: "Sitio construido con HTML y CSS",
    image: "/projects/blog-cafe.webp",
    link: "https://cardoso2.netlify.app/",
    technologies: ["HTML", "CSS", "Netlify"],
    category: "web",
  },
   {
    id: 7,
    title: "Bienes Raices",
    description: "Sitio construido con HTML y CSS",
    image: "/projects/bienes-raices.webp",
    link: "https://cardoso1.netlify.app/",
    technologies: ["HTML", "CSS", "Netlify"],
    category: "web",
  },
];

// Datos de habilidades (rediseñados sin niveles de progreso)
const skills = [
  {
    category: "Frontend",
    icon: <Code className="h-5 w-5" />,
    items: [
      { name: "HTML/CSS", icon: <Code className="h-4 w-4" /> },
      { name: "JavaScript", icon: <Zap className="h-4 w-4" /> },
      { name: "TypeScript", icon: <Code className="h-4 w-4" /> },
      { name: "React", icon: <Layers className="h-4 w-4" /> },
      { name: "Next.js", icon: <Globe className="h-4 w-4" /> },
      { name: "Gatsby", icon: <Globe className="h-4 w-4" /> },
      { name: "Tailwind CSS", icon: <PenTool className="h-4 w-4" /> },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-5 w-5" />,
    items: [
      { name: "Node.js", icon: <Server className="h-4 w-4" /> },
      { name: "Express", icon: <Zap className="h-4 w-4" /> },
      { name: "MongoDB", icon: <Database className="h-4 w-4" /> },
      { name: "PostgreSQL", icon: <Database className="h-4 w-4" /> },
      { name: "GraphQL", icon: <Globe className="h-4 w-4" /> },
      { name: "Drupal", icon: <Server className="h-4 w-4" /> },
      { name: "Headless CMS", icon: <Server className="h-4 w-4" /> },
    ],
  },
  {
    category: "Diseño",
    icon: <PenTool className="h-5 w-5" />,
    items: [
      { name: "Figma", icon: <PenTool className="h-4 w-4" /> },
      { name: "UI/UX", icon: <Smartphone className="h-4 w-4" /> },
      { name: "Responsive Design", icon: <Smartphone className="h-4 w-4" /> },
      { name: "Design Systems", icon: <Layers className="h-4 w-4" /> },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative bg-slate-100 dark:bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Portafolio
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Una selección de mis proyectos más recientes y las tecnologías con
              las que trabajo.
            </p>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="proyectos" className="my-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Proyectos
            </h2>

            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="mb-6">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="app">Apps</TabsTrigger>
              </TabsList>

              <TabsContent
                value="all"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    title={project.title}
                    to={project.link}
                    description={project.description}
                    image={project.image}
                    badges={project.technologies}
                    isTechCard
                  />
                ))}
              </TabsContent>

              <TabsContent
                value="web"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects
                  .filter((project) => project.category === "web")
                  .map((project) => (
                    <Card
                      key={project.id}
                      title={project.title}
                      to={project.link}
                      description={project.description}
                      image={project.image}
                      badges={project.technologies}
                      isTechCard
                    />
                  ))}
              </TabsContent>

              <TabsContent
                value="app"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects
                  .filter((project) => project.category === "app")
                  .map((project) => (
                    <Card
                      key={project.id}
                      title={project.title}
                      to={project.link}
                      description={project.description}
                      image={project.image}
                      badges={project.technologies}
                      isTechCard
                    />
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      {/* Skills Section - Rediseñada sin barras de progreso */}
      <section className="py-16 bg-slate-100 dark:bg-muted/30" id="habilidades">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Habilidades Técnicas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 shadow-sm"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-semibold">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        // className=" bg-muted hover:bg-muted/80 text-slate-900 dark:text-slate-100"
                        className="bg-secondary dark:text-slate-100 flex items-center gap-1.5 py-1.5 px-3 text-slate-900"
                      >
                        <span className="text-indigo-700">{skill.icon}</span>
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
}
