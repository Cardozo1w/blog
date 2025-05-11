import { type SanityDocument } from "next-sanity";
import avatar from "../img/avatar.JPG";

import { client } from "@/sanity/client";
import Card from "@/components/Card";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/footer";

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
      <header className="container mx-auto py-12 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-slate-100">
            Blog | Oscar Cardoso
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-100 leading-relaxed">
            Soy desarrollador web y en este espacio comparto experiencias,
            aprendizajes y reflexiones sobre desarrollo y tecnología. Cada
            publicación está basada en casos reales, ideas bien pensadas y
            herramientas que realmente uso en el día a día. Este blog está hecho
            para desarrolladores, entusiastas tech y para quienes disfrutan
            entender cómo funciona el mundo digital desde dentro.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 pb-20 flex-1">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-slate-100">Posts</h2>
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
      <Footer />
    </div>
  );
}
