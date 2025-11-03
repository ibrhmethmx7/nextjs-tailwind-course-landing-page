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
    count: "150+",
    title: "Tamamlanan Proje",
  },
  {
    icon: PlayCircleIcon,
    count: "50+",
    title: "Mutlu M??teri",
  },
  {
    icon: PencilSquareIcon,
    count: "15+",
    title: "WordPress Eklentisi",
  },
  {
    icon: PhoneArrowDownLeftIcon,
    count: "7/24",
    title: "Destek",
  },
];

export function OutImpressiveStats() {
  return (
    <section className="px-8 pt-60">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          {/* @ts-ignore */}
          <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl">
            Rakamlarla Deykem
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12"
          >
            Y?llard?r teknoloji sekt?r?nde biriken deneyimimiz ve ba?ar? hikayelerimiz ile i?letmenizin yan?nday?z.
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