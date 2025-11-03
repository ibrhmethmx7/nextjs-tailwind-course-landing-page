"use client";
import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";


const FEEDBACKS = [
  {
    feedback:
      "Deykem'in WordPress eklentileri sayesinde ma\u011fazam\u0131z\u0131n d\u00f6n\u00fc\u015f\u00fcmleri iki kat artt\u0131 ve bak\u0131m s\u00fcreci tamamen otomatikle\u015fti.",
    client: "Elif Sar\u0131",
    title: "E-ticaret Direkt\u00f6r\u00fc @ NovaPerakende",
    img: "/deykem-logo.png",
  },
  {
    feedback:
      "Otomasyon sistemleri ve yapay zek\u00e2 entegrasyonlar\u0131 ile m\u00fc\u015fteri destek ekibimizin i\u015f y\u00fck\u00fc %40 azald\u0131.",
    client: "Kerem U\u011fur",
    title: "Operasyon Y\u00f6neticisi @ DeltaEnd\u00fcstri",
    img: "/deykem-logo.png",
  },
  {
    feedback:
      "Deykem Teknoloji, \u00f6zel yaz\u0131l\u0131m geli\u015ftirme ekibiyle SaaS platformumuzu haftalar i\u00e7inde canl\u0131ya ald\u0131.",
    client: "Selin Akay",
    title: "Kurucu Ortak @ Cloudoffice",
    img: "/deykem-logo.png",
  },
];

export function StudentsFeedback() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography variant="h2" color="blue-gray" className="mb-2 text-[#0F172A]">
            {"M\u00fc\u015fterilerimiz neler s\u00f6yl\u00fcyor"}
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500"
          >
            {"WordPress eklentileri, otomasyon sistemleri ve yapay zek\u00e2 \u00e7\u00f6z\u00fcmlerimizle fark yaratt\u0131\u011f\u0131m\u0131z\u0131 Deykem Teknoloji m\u00fc\u015fterilerinin deneyimleri anlat\u0131yor."}
          </Typography>
        </div>
        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {FEEDBACKS.map((props, key) => (
            <FeedbackCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default StudentsFeedback;
