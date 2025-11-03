"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

const FAQ = [
  {
    question: "WordPress eklentileriniz hangi altyapılarla uyumlu?",
    answer:
      "Deykem eklentileri WooCommerce, Elementor ve kurumsal tema altyapılarıyla test edilmiştir.",
  },
  {
    question: "Otomasyon sistemleri ne kadar sürede devreye alınır?",
    answer:
      "Analizden canlıya geçişe kadar ortalama 4-6 hafta içinde tamamlıyoruz.",
  },
  {
    question: "Yapay zekâ çözümleriniz veri güvenliğini nasıl sağlar?",
    answer:
      "Tüm AI entegrasyonlarında şifrelenmiş veri transferi ve rol tabanlı erişim politikaları uygularız.",
  },
  {
    question: "Özel yazılım geliştirme sonrası destek sunuyor musunuz?",
    answer:
      "7/24 izleme, bakım ve sürekli iyileştirme hizmetlerimizi SLA kapsamında sağlıyoruz.",
  },
  {
    question: "Projelere nasıl başlıyoruz?",
    answer:
      "İhtiyaç analiz workshop'u ile başlar, ardından yol haritası ve sprint planlarını sizinle paylaşırız.",
  },
];

function TrustedCompany() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
            SSS
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-12 text-[#0F172A]">
            Sıkça sorulan sorular
          </Typography>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-10 text-left">
          {FAQ.map(({ question, answer }) => (
            <div key={question} className="max-w-sm">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                {question}
              </Typography>
              <Typography className="!text-gray-500 text-sm">
                {answer}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedCompany;
