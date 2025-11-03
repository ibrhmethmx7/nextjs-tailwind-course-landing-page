"use client";

import React from "react";
import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import EventCard from "@/components/event-card";

const EVENTS = [
  {
    img: "/image/blogs/blog-1.svg",
    title: "WordPress Plugin Geli?tirme Atlyesi",
    desc: "WordPress eklenti geli?tirme s?re?lerini, en iyi pratikleri ve g?venlik standartlar?n? ??renin.",
    buttonLabel: "?cretsiz kat?l",
  },
  {
    img: "/image/blogs/blog2.svg",
    title: "Yapay Zek? ve ?? S?re?leri Otomasyonu",
    desc: "ChatGPT ve di?er AI ara?lar?n? i? s?re?lerinize nas?l entegre edebilece?inizi ke?fedin.",
    buttonLabel: "?cretsiz kat?l",
  },
  {
    img: "/image/blogs/blog3.svg",
    title: "Modern Web Teknolojileri ve SaaS",
    desc: "React, Next.js ve Node.js kullanarak ?l?eklenebilir SaaS platformlar? geli?tirme rehberi.",
    buttonLabel: "bilet al",
  },
  {
    img: "/image/blogs/blog4.svg",
    title: "E-Ticaret Optimizasyonu ve B?y?me",
    desc: "E-ticaret sitenizin performans?n? art?rmak ve sat??lar?n?z? b?y?tmek i?in stratejiler.",
    buttonLabel: "bilet al",
  },
];

export function Events() {
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        {/* @ts-ignore */}
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Etkinlikler & E?itimler
        </Typography>
        {/* @ts-ignore */}
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Teknoloji d?nyas?ndaki son trendleri ve en iyi pratikleri payla?t???m?z ?cretsiz etkinliklerimize kat?l?n.
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
