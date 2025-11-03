"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import EventCard from "@/components/event-card";

const EVENTS = [
  {
    img: "/image/blogs/blog-1.svg",
    title: "Resim Eklentisi Standart Lisans",
    desc: "WebP d\u00f6n\u00fc\u015f\u00fcm\u00fc, CDN entegrasyonu ve otomatik g\u00f6rsel optimizasyonu ile h\u0131zlan\u0131n.",
    buttonLabel: "Hemen Sat\u0131n Al",
  },
  {
    img: "/image/blogs/blog3.svg",
    title: "Dil Eklentisi \u00c7ok Dilli Paket",
    desc: "Ger\u00e7ek zamanl\u0131 \u00e7eviri, manuel d\u00fczeltme paneli ve hreflang deste\u011fi tek pakette.",
    buttonLabel: "Hemen Sat\u0131n Al",
  },
  {
    img: "/image/blogs/blog2.svg",
    title: "Otomatik Blog Payla\u015fma Suite",
    desc: "\u0130\u00e7erik takvimi, sosyal medya entegrasyonu ve performans raporlar\u0131yla yay\u0131nlar\u0131 u\u00e7tan y\u00f6netin.",
    buttonLabel: "Hemen Sat\u0131n Al",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    title: "Deykem Suite Kurumsal",
    desc: "\u00dc\u00e7 eklentinin tamam\u0131, otomasyon dan\u0131\u015fmanl\u0131\u011f\u0131 ve 7/24 destek hizmeti bir arada.",
    buttonLabel: "Hemen Sat\u0131n Al",
  },
];

export function Events() {
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4 text-[#0F172A]">
          Fiyatland\u0131rma ve paketler
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          WordPress eklentilerimizi ihtiyac\u0131n\u0131za g\u00f6re lisanslay\u0131n veya tam paketle otomasyon ve
          yapay zek\u00e2 projelerinizi h\u0131zland\u0131r\u0131n.
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
