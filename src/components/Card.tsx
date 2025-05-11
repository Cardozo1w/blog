import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  to: string;
  avatar: {
    src: string;
    alt: string;
  };
  publishedDate: string;
}

const Card = ({ title, to, avatar, publishedDate }: CardProps) => {
  return (
    <div className="shadow-sm h-full p-4 border hover:shadow-lg transition-shadow duration-150 ease-linear rounded-md bg-white">
      <Link href={to} className="no-underline">
        <div className="h-[200px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1547658719-da2b51169166"
            alt="Ejemplo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="pt-4 pb-0 flex flex-col justify-between">
          <div>
            <div className="flex w-full justify-between">
              <span className="mb-2 bg-indigo-100 px-3 py-0.5 text-[12px] rounded-xl text-indigo-800 font-bold">
                Experiences
              </span>
              <svg
                width="24"
                height="24"
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
            <h3 className="text-lg font-semibold mb-4 mt-2">{title}</h3>
          </div>
          <div>
            <hr className="mb-4" />
            <div className="flex gap-4 items-center">
              <div className="relative h-10 w-10 rounded-full">
                <Image fill alt="" src={avatar.src} className="rounded-full" />
              </div>
              <div>
                <p className="font-bold">Oscar Cardoso</p>
                <p className="text-sm text-gray-700">
                  {format(publishedDate, "d MMM yyy	")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
