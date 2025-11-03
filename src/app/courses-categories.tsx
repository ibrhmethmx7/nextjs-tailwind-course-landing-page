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
    icon: HeartIcon,
    title: "WordPress eklentileri ve bakım",
    desc: "Resim, dil ve içerik eklentilerinde sürekli güncellemeler",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: PuzzlePieceIcon,
    title: "Otomasyon sistemleri",
    desc: "CRM, ERP ve iş akışı entegrasyonlarını tek panelde birleştirme",
  },
  {
    img: "/image/blogs/blog3.svg",
    icon: GlobeEuropeAfricaIcon,
    title: "Yapay zekâ çözümleri",
    desc: "Tahminleme, chatbot ve RPA süreçlerinde üretken yapay zekâ",
  },
  {
    img: "/image/blogs/blog5.svg",
    icon: MicrophoneIcon,
    title: "Özel yazılım geliştirme",
    desc: "SaaS platformları, web uygulamaları ve güvenli entegrasyonlar",
  },
];

export function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3 text-[#0F172A]">
          Deykem Teknoloji hizmet portföyü
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          WordPress eklentileri, otomasyon sistemleri, yapay zekâ çözümleri ve yazılım geliştirme
          projeleriyle işletmenizi geleceğe hazırlıyoruz.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography color="white" className="text-xs font-bold opacity-50">
              Deykem Teknoloji
            </Typography>
            <Typography variant="h4" className="mt-9" color="white">
              Stratejik dijital dönüşüm
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Danışmanlık, analiz ve proje yönetimi ile fikirden canlıya kadar yanınızdayız.
            </Typography>
            <Button size="sm" color="white" className="text-[#0F172A]">
              Proje Başlat
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
