"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/blogs/blog-10.jpeg",
    tag: "WordPress eklentileri • Görsel optimizasyon",
    title: "Deykem Resim Eklentisi",
    label: "Hemen Satın Al",
    desc: "Görselleri otomatik sıkıştırıp WebP formatına çevirir, CDN entegrasyonu ile sitenizi hızlandırır.",
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "WordPress eklentileri • Çok dilli deneyim",
    title: "Deykem Dil Eklentisi",
    label: "Hemen Satın Al",
    desc: "Metinleri gerçek zamanlı çevirir, dil varyasyonlarını SEO uyumlu yapıda yönetir, panelden kolayca güncellersiniz.",
  },
  {
    img: "/image/blogs/blog2.svg",
    tag: "WordPress eklentileri • İçerik otomasyonu",
    title: "Otomatik Blog Paylaşma Eklentisi",
    label: "Hemen Satın Al",
    desc: "Hazır şablonlarla blog yazılarınızı planlar, sosyal medya kanallarına tek tıkla dağıtır, raporları sunar.",
  },
  {
    img: "/image/blogs/blog-13.png",
    tag: "Otomasyon sistemleri • CRM • ERP",
    title: "Deykem Flow Otomasyon",
    label: "Proje Başlat",
    desc: "Satış, destek ve üretim süreçlerinizi API entegrasyonlarıyla tek panelde buluşturur, ölçülebilir KPI'lar üretir.",
  },
  {
    img: "/image/blogs/blog6.svg",
    tag: "Yapay zekâ çözümleri • RPA • NLP",
    title: "Deykem AI Studio",
    label: "Proje Başlat",
    desc: "Chatbot, doküman sınıflandırma ve tahminleme modellerini iş akışlarınıza entegre ederek karar süreçlerini hızlandırır.",
  },
  {
    img: "/image/blogs/blog5.svg",
    tag: "Özel yazılım geliştirme • SaaS",
    title: "Deykem Custom Apps",
    label: "Proje Başlat",
    desc: "Web ve mobil uygulamalarınızı mikroservis mimarisi, güvenlik ve DevOps desteğiyle uçtan uca geliştiriyoruz.",
  },
];

export function ExploreCourses() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray" className="text-[#0F172A]">
          Deykem ürün kataloğu
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          WordPress eklentileri, otomasyon sistemleri ve yapay zekâ çözümlerimiz arasından iş hedeflerinize
          uygun olanı seçin.
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
