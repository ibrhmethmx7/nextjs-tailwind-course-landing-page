"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/deykem-logo.png",
    tag: "WordPress eklentileri • SEO • WooCommerce",
    title: "Deykem E-ticaret Paketi",
    label: "Ürünleri Gör",
    desc: "Katalog yönetimi, ödeme entegrasyonları ve performans optimizasyonu için uçtan uca WordPress eklentileri sunuyoruz.",
  },
  {
    img: "/deykem-logo.png",
    tag: "Otomasyon sistemleri • CRM • ERP",
    title: "Deykem Flow Otomasyon",
    label: "Ürünleri Gör",
    desc: "Satış, destek ve üretim süreçlerini tek panelde toplayan, API entegrasyonlarıyla esnek otomasyon altyapısı.",
  },
  {
    img: "/deykem-logo.png",
    tag: "Yapay zekâ çözümleri • RPA • NLP",
    title: "Deykem AI Studio",
    label: "Ürünleri Gör",
    desc: "Müşteri hizmetleri, tahminleme ve içerik üretiminde yapay zekâ modelleriyle iş kararlarınızı hızlandırın.",
  },
  {
    img: "/deykem-logo.png",
    tag: "SaaS • Mikroservisler • Bulut mimarileri",
    title: "Deykem SaaS Launchpad",
    label: "Proje Başlat",
    desc: "Mikroservis tabanlı SaaS platformlarını güvenli, ölçeklenebilir ve çok tenant'lı mimariyle canlıya taşıyoruz.",
  },
  {
    img: "/deykem-logo.png",
    tag: "Veri görselleştirme • IoT • Analitik",
    title: "Deykem Insight Dashboard",
    label: "Ürünleri Gör",
    desc: "Gerçek zamanlı veri panoları ve otomatik raporlama ile karar süreçlerinizi veriye dayalı hale getirin.",
  },
  {
    img: "/deykem-logo.png",
    tag: "Mobil uygulama • Web • Entegrasyon",
    title: "Deykem Custom Apps",
    label: "Proje Başlat",
    desc: "İş hedeflerinize özel web ve mobil uygulamalar geliştirerek tüm sistemlerinizi entegre ediyoruz.",
  },
];

export function ExploreCourses() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray" className="text-[#0F172A]">
          {"Deykem \u00fcr\u00fcn katalo\u011fu"}
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          {"WordPress eklentileri, otomasyon sistemleri ve yapay zek\u00e2 \u00e7\u00f6z\u00fcmleri aras\u0131ndan i\u015f hedeflerinize uygun olan\u0131 se\u00e7in."}
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
