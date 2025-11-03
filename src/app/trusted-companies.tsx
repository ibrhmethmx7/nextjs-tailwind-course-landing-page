"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

const FAQ = [
  {
    question: "WordPress eklentileriniz hangi altyap\u0131larla uyumlu?",
    answer:
      "Deykem eklentileri WooCommerce, Elementor ve kurumsal tema altyap\u0131lar\u0131yla test edilmi\u015ftir.",
  },
  {
    question: "Otomasyon sistemleri ne kadar s\u00fcrede devreye al\u0131n\u0131r?",
    answer:
      "Analizden canl\u0131ya ge\u00e7i\u015fe kadar ortalama 4-6 hafta i\u00e7inde tamaml\u0131yoruz.",
  },
  {
    question: "Yapay zek\u00e2 \u00e7\u00f6z\u00fcmleriniz veri g\u00fcvenli\u011fini nas\u0131l sa\u011flar?",
    answer:
      "T\u00fcm AI entegrasyonlar\u0131nda \u015fifrelenmi\u015f veri transferi ve rol tabanl\u0131 eri\u015fim politikalar\u0131 uygular\u0131z.",
  },
  {
    question: "\u00d6zel yaz\u0131l\u0131m geli\u015ftirme sonras\u0131 destek sunuyor musunuz?",
    answer:
      "7/24 izleme, bak\u0131m ve s\u00fcrekli iyile\u015ftirme hizmetlerimizi SLA kapsam\u0131nda sa\u011fl\u0131yoruz.",
  },
  {
    question: "Projelere nas\u0131l ba\u015fl\u0131yoruz?",
    answer:
      "\u0130htiya\u00e7 analiz workshop'u ile ba\u015flar, ard\u0131ndan yol haritas\u0131 ve sprint planlar\u0131n\u0131 sizinle payla\u015f\u0131r\u0131z.",
  },
];

function TrustedCompany() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
            {"SSS"}
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-12 text-[#0F172A]">
            {"S\u0131k\u00e7a sorulan sorular"}
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
