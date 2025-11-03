"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/blogs/blog4.svg",
    tag: "WordPress • Premium • Güncel",
    title: "SEO & Performans Eklentileri",
    label: "$49'dan başlayan fiyatlarla",
    desc: "WordPress sitenizin hızını ve SEO performansını artıran, güncel ve kullanıcı dostu premium eklentilerimiz.",
  },
  {
    img: "/image/blogs/blog3.svg",
    tag: "WordPress • Çok Satan • Yönetim",
    title: "E-Ticaret & CRM Eklentileri",
    label: "$99'dan başlayan fiyatlarla",
    desc: "Online mağazanızı yönetin, müşteri ilişkilerinizi güçlendirin. WooCommerce uyumlu gelişmiş çözümler.",
  },
  {
    img: "/image/blogs/blog2.svg",
    tag: "Web Uygulama • SaaS • Modern",
    title: "SaaS Platform Geliştirme",
    label: "Teklif alın",
    desc: "Bulut tabanlı, ölçeklenebilir SaaS platformları. React, Node.js ve modern teknolojilerle geliştirilmiş çözümler.",
  },
  {
    img: "/image/blogs/blog5.svg",
    tag: "Mobil • iOS & Android • Hibrit",
    title: "Mobil Uygulama Geliştirme",
    label: "Teklif alın",
    desc: "React Native ve Flutter ile iOS ve Android için tek kod tabanından hizmet veren modern mobil uygulamalar.",
  },
  {
    img: "/image/blogs/blog6.svg",
    tag: "Otomasyon • AI • Entegrasyon",
    title: "İş Süreçleri Otomasyonu",
    label: "Teklif alın",
    desc: "Tekrarlayan işlerinizi otomatikleştirin. API entegrasyonları, veri akışları ve akilliç workflow çözümleri.",
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "AI • Machine Learning • ChatGPT",
    title: "Yapay Zekâ Entegrasyonu",
    label: "Teklif alın",
    desc: "ChatGPT, GPT-4 ve diğer AI modellerini işinize entegre edin. Chatbot'lar, otomatik içerik üretimi ve daha fazlası.",
  },
];

export function ExploreCourses() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center">
        {/* @ts-ignore */}
        <Typography variant="h2" color="blue-gray">
          Ürünler & Çözümler
        </Typography>
        {/* @ts-ignore */}
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          WordPress eklentilerinden, özel yazılım projelerine, yapay zekâ entegrasyonlarından otomasyon çözümlerine kadar geniş ürün yelpazemiz.
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
