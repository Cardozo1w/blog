import Image from "next/image"
import Link from "next/link"
import { Badge } from "./ui/badge"
import { Github, Code, ArrowUpRight } from "lucide-react"
import { Button } from "./ui/button"
import { format } from "date-fns"

type CardVariant = "blog" | "project"

interface CardProps {
  title: string
  to: string
  description?: string
  avatar?: {
    src: string
    alt: string
  }
  image: string
  badges?: string[]
  variant?: CardVariant
  projectUrl?: string
  sourceCodeUrl?: string
  author?: {
    name: string
    date?: string
  }
  category?: string
}

const Card = ({
  title,
  to,
  avatar,
  image,
  description,
  badges,
  variant = "blog",
  projectUrl,
  sourceCodeUrl,
  author,
  category = "Experiences",
}: CardProps) => {
  // Contenido común para ambas variantes
  const imageContent = (
    <div className="relative h-48 w-full overflow-hidden rounded-t-md">
      <Image
        fill
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );

  // Variante "project"
  if (variant === "project") {
    return (
      <div className="h-full border hover:shadow-lg transition-all duration-150 ease-linear rounded-md flex flex-col bg-white dark:bg-gray-950">
        {/* Imagen clickeable */}
        <Link href={to} className="block">
          {imageContent}
        </Link>

        <div className="p-6 flex flex-col flex-1">
          {/* Título clickeable */}
          <div className="flex-grow">
            <Link href={to} className="no-underline">
              <h3 className="text-lg font-semibold mb-4 hover:text-primary transition-colors">{title}</h3>
            </Link>
            {description && <p className="text-muted-foreground">{description}</p>}
            {badges && (
              <div className="flex flex-wrap gap-2 my-4">
                {badges.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="bg-secondary text-slate-900 dark:text-slate-100">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Enlaces de proyecto */}
          <div className="mt-auto pt-4 border-t">
            <div className="flex flex-col gap-2">
              {projectUrl && (
                <Button variant="ghost" size="sm" className="justify-start px-2 hover:bg-secondary" asChild>
                  <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    <span>Ver proyecto</span>
                  </a>
                </Button>
              )}
              {sourceCodeUrl && (
                <Button variant="ghost" size="sm" className="justify-start px-2 hover:bg-secondary" asChild>
                  <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    <span>Ver código fuente</span>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Variante "blog" (por defecto)
  return (
    <div className="h-full border hover:shadow-lg transition-all duration-150 ease-linear rounded-md flex flex-col bg-white dark:bg-gray-950">
      <Link href={to} className="no-underline flex flex-col h-full">
        {imageContent}

        <div className="p-6 flex flex-col flex-1">
          {/* Categoría + icono */}
          <div className="flex w-full justify-between items-center mb-2">
            <span className="bg-indigo-100 px-3 py-0.5 text-[12px] rounded-xl text-indigo-800 font-bold dark:bg-indigo-900 dark:text-indigo-100">
              {category}
            </span>
            <ArrowUpRight className="h-5 w-5" />
          </div>

          {/* Título */}
          <div className="flex-grow">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </div>

          {/* Autor */}
          <div className="mt-auto pt-4 border-t">
            <div className="flex gap-4 items-center">
              {avatar && (
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    fill
                    alt={avatar.alt || ""}
                    src={avatar.src || "/placeholder.svg"}
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              )}
              <div>
                <p className="font-bold">{author?.name}</p>
                {author?.date && (
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {format(author.date, "d MMM yyy")}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card
