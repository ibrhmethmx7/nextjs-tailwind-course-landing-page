"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/blogs/blog-10.jpeg",
    tag: "WordPress eklentileri \u2022 G\u00f6rsel optimizasyon",
    title: "Deykem Resim Eklentisi",
    label: "Hemen Sat\u0131n Al",
    desc: "G\u00f6rselleri otomatik s\u0131k\u0131\u015ft\u0131r\u0131p WebP format\u0131na \u00e7evirir, CDN entegrasyonu ile sitenizi h\u0131zland\u0131r\u0131r.",
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "WordPress eklentileri \u2022 \u00c7ok dilli deneyim",
    title: "Deykem Dil Eklentisi",
    label: "Hemen Sat\u0131n Al",
    desc: "Metinleri ger\u00e7ek zamanl\u0131 \u00e7evirir, dil varyasyonlar\u0131n\u0131 SEO uyumlu yap\u0131da y\u00f6netir, panelden kolayca g\u00fcncellersiniz.",
  },
  {
    img: "/image/blogs/blog2.svg",
    tag: "WordPress eklentileri \u2022 \u0130\u00e7erik otomasyonu",
    title: "Otomatik Blog Payla\u015fma Eklentisi",
    label: "Hemen Sat\u0131n Al",
    desc: "Haz\u0131r \u015fablonlarla blog yaz\u0131lar\u0131n\u0131z\u0131 planlar, sosyal medya kanallar\u0131na tek t\u0131kla da\u011f\u0131t\u0131r, raporlar\u0131 sunar.",
  },
  {
    img: "/image/blogs/blog-13.png",
    tag: "Otomasyon sistemleri \u2022 CRM \u2022 ERP",
    title: "Deykem Flow Otomasyon",
    label: "Proje Ba\u015flat",
    desc: "Sat\u0131\u015f, destek ve \u00fcretim s\u00fcre\u00e7lerinizi API entegrasyonlar\u0131yla tek panelde bulu\u015fturur, \u00f6l\u00e7\u00fclebilir KPI'lar \u00fcretir.",
  },
  {
    img: "/image/blogs/blog6.svg",
    tag: "Yapay zek\u00e2 \u00e7\u00f6z\u00fcmleri \u2022 RPA \u2022 NLP",
    title: "Deykem AI Studio",
    label: "Proje Ba\u015flat",
    desc: "Chatbot, dok\u00fcman s\u0131n\u0131fland\u0131rma ve tahminleme modellerini i\u015f ak\u0131\u015flar\u0131n\u0131za entegre ederek karar s\u00fcre\u00e7lerini h\u0131zland\u0131r\u0131r.",
  },
  {
    img: "/image/blogs/blog5.svg",
    tag: "\u00d6zel yaz\u0131l\u0131m geli\u015ftirme \u2022 SaaS",
    title: "Deykem Custom Apps",
    label: "Proje Ba\u015flat",
    desc: "Web ve mobil uygulamalar\u0131n\u0131z\u0131 mikroservis mimarisi, g\u00fcvenlik ve DevOps deste\u011fiyle u\u00e7tan uca geli\u015ftiriyoruz.",
  },
];

export function ExploreCourses() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray" className="text-[#0F172A]">
          Deykem \u00fcr\u00fcn katalo\u011fu
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          WordPress eklentileri, otomasyon sistemleri ve yapay zek\u00e2 \u00e7\u00f6z\u00fcmlerimiz aras\u0131ndan i\u015f
          hedeflerinize uygun olan\u0131 se\u00e7in.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCourses;
