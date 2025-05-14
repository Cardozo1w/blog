import { type SanityDocument } from "next-sanity";
import avatar from "../img/avatar.webp";

import { client } from "@/sanity/client";
import Card from "@/components/Card";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import ContactSection from "@/components/contact-section";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="relative bg-slate-100 dark:bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Blog | Oscar Cardoso
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy desarrollador web y en este espacio comparto experiencias,
              aprendizajes y reflexiones sobre desarrollo y tecnología.
            </p>
          </div>
        </div>
      </section>
      <main className="container mx-auto px-4 my-16 flex-1">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">
            Posts
          </h2>
          <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post._id}>
                <Card
                  to={`/${post.slug.current}`}
                  title={post.title}
                  publishedDate={post.publishedAt}
                  avatar={{
                    src: avatar.src,
                    alt: "",
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>
      {/* About Me Section - Sin imagen */}
      <section className="py-16 bg-slate-100 dark:bg-muted/30" id="about-me">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Sobre mí
                </h2>
                <div className="prose prose-lg dark:prose-invert">
                  <p>
                    Soy desarrollador web y en este espacio comparto
                    experiencias, aprendizajes y reflexiones sobre desarrollo y
                    tecnología. Cada publicación está basada en casos reales,
                    ideas bien pensadas y herramientas que realmente uso en el
                    día a día.
                  </p>
                  <p>
                    Este blog está hecho para desarrolladores, entusiastas tech
                    y para quienes disfrutan entender cómo funciona el mundo
                    digital desde dentro.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Badge className="bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    Html
                  </Badge>
                  <Badge className="bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    CSS
                  </Badge>
                  <Badge className="bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    JavaScript
                  </Badge>
                  <Badge className="bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    Typescript
                  </Badge>
                  <Badge className="bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    React
                  </Badge>
                  <Badge className="bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    Next.js
                  </Badge>
                  <Badge className="bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    Gatsby
                  </Badge>
                  <Badge className="bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    Node.js
                  </Badge>
                  <Badge className="bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    Drupal
                  </Badge>
                  <Badge className="bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    Sanity
                  </Badge>
                  <Badge className="bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    Headless CMS
                  </Badge>
                  <Badge className="bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    UX/UI
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
}
