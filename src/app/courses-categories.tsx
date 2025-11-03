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
    title: "WordPress eklentileri ve bak\u0131m",
    desc: "Resim, dil ve i\u00e7erik eklentilerinde s\u00fcrekli g\u00fcncellemeler",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: PuzzlePieceIcon,
    title: "Otomasyon sistemleri",
    desc: "CRM, ERP ve i\u015f ak\u0131\u015f\u0131 entegrasyonlar\u0131n\u0131 tek panelde birle\u015ftirme",
  },
  {
    img: "/image/blogs/blog3.svg",
    icon: GlobeEuropeAfricaIcon,
    title: "Yapay zek\u00e2 \u00e7\u00f6z\u00fcmleri",
    desc: "Tahminleme, chatbot ve RPA s\u00fcre\u00e7lerinde \u00fcretken yapay zek\u00e2",
  },
  {
    img: "/image/blogs/blog5.svg",
    icon: MicrophoneIcon,
    title: "\u00d6zel yaz\u0131l\u0131m geli\u015ftirme",
    desc: "SaaS platformlar\u0131, web uygulamalar\u0131 ve g\u00fcvenli entegrasyonlar",
  },
];

export function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3 text-[#0F172A]">
          Deykem Teknoloji hizmet portf\u00f6y\u00fc
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          WordPress eklentileri, otomasyon sistemleri, yapay zek\u00e2 \u00e7\u00f6z\u00fcmleri ve yaz\u0131l\u0131m
          geli\u015ftirme projeleriyle i\u015fletmenizi gelece\u011fe haz\u0131rl\u0131yoruz.
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
              Stratejik dijital d\u00f6n\u00fc\u015f\u00fcm
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Dan\u0131\u015fmanl\u0131k, analiz ve proje y\u00f6netimi ile fikirden canl\u0131ya kadar
              yan\u0131n\u0131zday\u0131z.
            </Typography>
            <Button size="sm" color="white" className="text-[#0F172A]">
              Proje Ba\u015flat
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

