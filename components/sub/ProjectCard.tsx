"use client";
import Image from "next/image";
import React from "react";


interface Props {
  src: string;
  title: string;
  description: string;
  link:string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-[30]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain opacity-15"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <a  href={link} className="text-[#2A0E63] cursor-pointer ">see project</a>
      </div>
    </div>
  );
};

export default ProjectCard;
