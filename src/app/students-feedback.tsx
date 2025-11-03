"use client";

import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";

const FEEDBACKS = [
  {
    feedback:
      "Deykem Resim Eklentisi sayesinde görsellerimizi yeniden yüklemeden hızlandık ve e-ticaret dönüşümleri iki katına çıktı.",
    client: "Elif Sarı",
    title: "E-ticaret Direktörü @ NovaPerakende",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "Dil Eklentisi ile 12 farklı pazar için içeriklerimizi tek panelde yönettik; destek ekibimizin iş yükü %40 azaldı.",
    client: "Kerem Uğur",
    title: "Operasyon Yöneticisi @ DeltaEndüstri",
    img: "/image/avatar2.jpg",
  },
  {
    feedback:
      "Otomatik Blog Paylaşma eklentisi ve Flow Otomasyon entegrasyonu, SaaS lansmanımızı haftalar yerine günlerde hayata geçirdi.",
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
            Müşterilerimiz neler söylüyor
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500"
          >
            WordPress eklentileri, otomasyon sistemleri ve yapay zekâ çözümlerimizle müşterilerimizin
            dijital operasyonlarını yeniden şekillendiriyoruz.
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
