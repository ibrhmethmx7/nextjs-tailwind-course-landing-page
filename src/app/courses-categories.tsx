"use client";

import React from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "@/components/category-card";


const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: PuzzlePieceIcon,
    title: "WordPress Eklentileri",
    desc: "Premium Eklentiler",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "?zel Yaz?l?m Geli?tirme",
    desc: "Web & Mobil Uygulama",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: HeartIcon,
    title: "Otomasyon Sistemleri",
    desc: "?? S?re?leri Otomasyonu",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: MicrophoneIcon,
    title: "Yapay Zek? ??z?mleri",
    desc: "AI Entegrasyonu",
  },
];

export function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        {/* @ts-ignore */}
        <Typography variant="h2" color="blue-gray" className="my-3">
          Hizmetlerimiz
        </Typography>
        {/* @ts-ignore */}
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          Modern teknolojiler kullanarak i?letmenize ?zel, yenilik?i ve etkili ??z?mler sunuyoruz.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* @ts-ignore */}
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          {/* @ts-ignore */}
          <CardBody className="relative w-full">
            {/* @ts-ignore */}
            <Typography color="white" className="text-xs font-bold opacity-50">
              DEM?R ?EZMEDEN DEM?R OLMAZ
            </Typography>
            {/* @ts-ignore */}
            <Typography variant="h4" className="mt-9" color="white">
              Dijital D?n???m Ba?las?n
            </Typography>
            {/* @ts-ignore */}
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              ??inizi dijital ?a?a ta??maya haz?r m?s?n?z?
            </Typography>
            {/* @ts-ignore */}
            <Button size="sm" color="white">
              Hemen Ba?la
            </Button>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesCategories;