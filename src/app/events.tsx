"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import EventCard from "@/components/event-card";

const EVENTS = [
  {
    img: "/deykem-logo.png",
    title: "Starter WordPress Paketi",
    desc: "Kurumsal tema kurulumu, temel WordPress eklentileri ve SSL yap\u0131land\u0131rmas\u0131 dahildir.",
    buttonLabel: "Hemen Sat\u0131n Al",
  },
  {
    img: "/deykem-logo.png",
    title: "Otomasyon Boost Plan",
    desc: "CRM senaryolar\u0131, e-posta otomasyonlar\u0131 ve raporlama panolar\u0131 i\u00e7in haz\u0131r entegrasyonlar.",
    buttonLabel: "Hemen Sat\u0131n Al",
  },
  {
    img: "/deykem-logo.png",
    title: "AI Entegrasyon Paketi",
    desc: "Yapay zek\u00e2 sohbet botu, belge s\u0131n\u0131fland\u0131rma ve RPA s\u00fcre\u00e7 otomasyonu \u00e7\u00f6z\u00fcmleri.",
    buttonLabel: "Hemen Sat\u0131n Al",
  },
  {
    img: "/deykem-logo.png",
    title: "Kurumsal D\u00f6n\u00fc\u015f\u00fcm Suite",
    desc: "\u00d6zel yaz\u0131l\u0131m geli\u015ftirme, mikroservis mimarisi ve 7/24 DevOps deste\u011fi.",
    buttonLabel: "Hemen Sat\u0131n Al",
  },
];

export function Events() {
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4 text-[#0F172A]">
          {"Fiyatland\u0131rma ve paketler"}
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          {"WordPress eklentileri, otomasyon sistemleri ve yapay zek\u00e2 hizmetlerimiz i\u00e7in \u015feffaf, \u00f6l\u00e7eklenebilir paketleri inceleyin."}
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
