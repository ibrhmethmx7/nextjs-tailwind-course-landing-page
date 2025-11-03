"use client";

import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";

const FEEDBACKS = [
  {
    feedback:
      "Deykem Resim Eklentisi sayesinde g\u00f6rsellerimizi yeniden y\u00fcklemeden h\u0131zland\u0131k ve e-ticaret d\u00f6n\u00fc\u015f\u00fcmleri iki kat\u0131na \u00e7\u0131kt\u0131.",
    client: "Elif Sar\u0131",
    title: "E-ticaret Direkt\u00f6r\u00fc @ NovaPerakende",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "Dil Eklentisi ile 12 farkl\u0131 pazar i\u00e7in i\u00e7eriklerimizi tek panelde y\u00f6nett\u0131k; destek ekibimizin i\u015f y\u00fck\u00fc %40 azald\u0131.",
    client: "Kerem U\u011fur",
    title: "Operasyon Y\u00f6neticisi @ DeltaEnd\u00fcstri",
    img: "/image/avatar2.jpg",
  },
  {
    feedback:
      "Otomatik Blog Payla\u015fma eklentisi ve Flow Otomasyon entegrasyonu, SaaS lansman\u0131m\u0131z\u0131 haftalar yerine g\u00fcnlerde hayata ge\u00e7irdi.",
    client: "Selin Akay",
    title: "Kurucu Ortak @ Cloudoffice",
    img: "/image/avatar3.jpg",
  },
];

export function StudentsFeedback() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography variant="h2" color="blue-gray" className="mb-2 text-[#0F172A]">
            M\u00fc\u015fterilerimiz neler s\u00f6yl\u00fcyor
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500"
          >
            WordPress eklentileri, otomasyon sistemleri ve yapay zek\u00e2 \u00e7\u00f6z\u00fcmlerimizle
            m\u00fc\u015fterilerimizin dijital operasyonlar\u0131n\u0131 yeniden \u015fekillendiriyoruz.
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
