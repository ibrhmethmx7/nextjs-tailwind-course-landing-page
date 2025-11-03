"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import EventCard from "@/components/event-card";

const EVENTS = [
  {
    img: "/image/blogs/blog-1.svg",
    title: "Resim Eklentisi Standart Lisans",
    desc: "WebP dönüşümü, CDN entegrasyonu ve otomatik görsel optimizasyonu ile hızlanın.",
    buttonLabel: "Hemen Satın Al",
  },
  {
    img: "/image/blogs/blog3.svg",
    title: "Dil Eklentisi Çok Dilli Paket",
    desc: "Gerçek zamanlı çeviri, manuel düzeltme paneli ve hreflang desteği tek pakette.",
    buttonLabel: "Hemen Satın Al",
  },
  {
    img: "/image/blogs/blog2.svg",
    title: "Otomatik Blog Paylaşma Suite",
    desc: "İçerik takvimi, sosyal medya entegrasyonu ve performans raporlarıyla yayınları uçtan yönetin.",
    buttonLabel: "Hemen Satın Al",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    title: "Deykem Suite Kurumsal",
    desc: "Üç eklentinin tamamı, otomasyon danışmanlığı ve 7/24 destek hizmeti bir arada.",
    buttonLabel: "Hemen Satın Al",
  },
];

export function Events() {
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4 text-[#0F172A]">
          Fiyatlandırma ve paketler
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          WordPress eklentilerimizi ihtiyacınıza göre lisanslayın veya tam paketle otomasyon ve yapay zekâ
          projelerinizi hızlandırın.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {EVENTS.map((props, idx) => (
          <EventCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Events;
