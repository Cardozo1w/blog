import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Footer from "@/components/footer";

interface Props {
    locale: string;
    slug: string;
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({ params }: { params: Promise<Props> }) {
  const { locale, slug } = await params;

  console.log("pathname", `/${locale}/${slug}`);
  

  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug: `/${locale}/${slug}` },
    options
  );
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <div className="min-h-screen">
      <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4 blog">
        <Link href="/" className="hover:underline">
          ← Back to posts
        </Link>
        {postImageUrl && (
          <img
            src={postImageUrl}
            alt={post.title}
            className="aspect-video rounded-xl"
            width="550"
            height="310"
          />
        )}
        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
        <div className="prose">
          <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
          {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
