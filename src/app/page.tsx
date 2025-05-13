import { type SanityDocument } from "next-sanity";
import avatar from "../img/avatar.webp";

import { client } from "@/sanity/client";
import Card from "@/components/Card";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

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
                    JavaScript
                  </Badge>
                  <Badge className="bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    React
                  </Badge>
                  <Badge className="bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    Next.js
                  </Badge>
                  <Badge className="bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    Node.js
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
      {/* Contact Section */}
      <section className="py-16" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Contacto
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Puedes contactarme en cualquiera de mis redes sociales o enviando
              un email directamente :)
            </p>

            <div className="flex justify-center space-x-4 mb-8">
              <a
                href="https://github.com/Cardozo1w"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-muted text-foreground p-4 rounded-full transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/oscar2so/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-muted text-foreground p-4 rounded-full transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:oscar@cardoso.dev"
                className="bg-card hover:bg-muted text-foreground p-4 rounded-full transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <a href="mailto:oscar@cardoso.dev">
              <Button
                asChild
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                <Mail className="mr-2 h-4 w-4" /> Enviar email
              </Button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
