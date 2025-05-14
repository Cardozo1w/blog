import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";
import { Github, Code } from "lucide-react";

interface CardProps {
  title: string;
  to: string;
  description?: string;
  avatar?: {
    src: string;
    alt: string;
  };
  publishedDate?: string;
  image?: string;
  badges?: string[];
  isTechCard?: boolean;
}

const Card = ({
  title,
  to,
  avatar,
  publishedDate,
  image,
  description,
  badges,
  isTechCard = false,
}: CardProps) => {
  return (
    <div className="shadow-sm h-full border hover:shadow-lg transition-shadow duration-150 ease-linear rounded-md flex flex-col">
      <Link href={to} className="no-underline flex flex-col h-full">
        <div className="relative h-48 w-full">
          <Image
            fill
            src={
              image ||
              "https://images.unsplash.com/photo-1547658719-da2b51169166"
            }
            alt="Ejemplo"
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>

        <div className="p-4 flex flex-col flex-1">
          {/* Header (tag + icon) */}
          {!isTechCard && (
            <div className="flex w-full justify-between items-center mb-2">
              <span className="bg-indigo-100 px-3 py-0.5 text-[12px] rounded-xl text-indigo-800 font-bold">
                Experiences
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}

          {/* Title */}
          <div className="flex-grow">
            <h3 className="text-lg font-semibold mb-4 mt-2">{title}</h3>
            {description && <p>{description}</p>}
            {badges && (
              <div className="flex flex-wrap gap-2 my-4">
                {badges.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-primary/60 text-primary hover:bg-primary/40"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Footer (avatar + name + date) */}
          <div className="mt-auto pt-4 border-t">
            <div className="flex gap-4 items-center">
              {isTechCard && (
                <div>
                  <span className="flex gap-2 mb-2">
                    <Code /> Ver proyecto
                  </span>
                  <span className="flex gap-2">
                    <Github /> Ver codigo fuente
                  </span>
                </div>
              )}
              {!isTechCard && (
                <>
                  {avatar && (
                    <div className="relative h-10 w-10 rounded-full">
                      <Image
                        fill
                        alt=""
                        src={avatar.src}
                        className="rounded-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-bold">Oscar Cardoso</p>
                    {publishedDate && (
                      <p className="text-sm text-gray-700 dark:text-gray-100">
                        {format(publishedDate, "d MMM yyy")}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
