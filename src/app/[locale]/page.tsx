import { type SanityDocument } from "next-sanity";
import { client, urlFor } from "@/sanity/client";
import Card from "@/components/Card";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import ContactSection from "@/components/contact-section";
import { getTranslations } from "next-intl/server";
interface Props {
  params: {
    locale: string;
  };
}

const POSTS_QUERY = `*[_type == "post" && language == $language]{
  title,
  slug,
  language,
  image,
  publishedAt
}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage({ params }: Props) {
  const { locale } = params;
  
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {language: locale}, options);
  const t = await getTranslations("HomePage");

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative bg-slate-100 dark:bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {t("heroTitle")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("heroAbout")}
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
            {posts.reverse().map((post) => (
              <li key={post.slug}>
                <Card
                  image={urlFor(post.image).url()}
                  to={`/${post.slug.current}`}
                  title={post.title}
                  avatar={{
                    src: "/avatar.webp",
                    alt: "",
                  }}
                  author={{
                    date: post.publishedAt,
                    name: "Oscar Cardoso",
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
                  {t("aboutTitle")}
                </h2>
                <div className="prose prose-lg dark:prose-invert">
                  <p>{t("aboutDescription")}</p>
                  <p>{t("aboutDescription2")}</p>
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
