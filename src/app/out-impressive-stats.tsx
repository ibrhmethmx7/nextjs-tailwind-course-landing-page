"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  DocumentTextIcon,
  PlayCircleIcon,
  PencilSquareIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";

import StatsCard from "@/components/stats-card";


const STATS = [
  {
    icon: DocumentTextIcon,
    count: "120+",
    title: "Aktif WordPress eklentisi kurulumu",
  },
  {
    icon: PlayCircleIcon,
    count: "85%",
    title: "Otomasyon sistemleri ile zaman tasarrufu",
  },
  {
    icon: PencilSquareIcon,
    count: "60+",
    title: "Yapay zek? destekli proje teslimi",
  },
  {
    icon: PhoneArrowDownLeftIcon,
    count: "7/24",
    title: "Proaktif destek ve bak?m",
  },
];

export function OutImpressiveStats() {
  return (
    <section className="px-8 pt-60">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl text-[#0F172A]">
            {"Deykem Teknoloji'den g\u00fcven veren rakamlar"}
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12"
          >
            {"WordPress eklentileri, otomasyon sistemleri ve yapay zek\u00e2 \u00e7\u00f6z\u00fcmlerinde elde etti\u011fimiz ba\u015far\u0131lar m\u00fc\u015fterilerimizin dijital d\u00f6n\u00fc\u015f\u00fcm\u00fcn\u00fc h\u0131zland\u0131r\u0131yor."}
          </Typography>
        </div>
        <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default OutImpressiveStats;