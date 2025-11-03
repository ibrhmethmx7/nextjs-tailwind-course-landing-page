"use client";
import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";


const FEEDBACKS = [
  {
    feedback:
      "Deykem'in geli?tirdi?i ?zel CRM sistemi sayesinde m??teri ili?kilerimizi ?ok daha etkili y?netiyoruz. Profesyonel ve h?zl? hizmet!",
    client: "Ay?e Kara",
    title: "Pazarlama M?d?r? @ TechVision A.?.",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "WordPress eklentileri harika! Sitemizin h?z? %300 artt?. Destek ekibi her zaman yard?mc? oluyor.",
    client: "Ahmet Y?ld?z",
    title: "Kurucu Ortak @ DigitalShop",
    img: "/image/avatar3.jpg",
  },
  {
    feedback:
      "AI chatbot entegrasyonu i?letmemize m?kemmel uyum sa?lad?. M??teri memnuniyeti geli?miyle birlikte artt?.",
    client: "Zeynep Demir",
    title: "??letme Sahibi @ ModaPlus",
    img: "/image/avatar2.jpg",
  },
];

export function StudentsFeedback() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          {/* @ts-ignore */}
          <Typography variant="h2" color="blue-gray" className="mb-2">
            M??terilerimiz Ne Diyor?
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500"
          >
            M??teri memnuniyeti bizim i?in her ?eyin ?n?nde gelir. ??birli?i yapt???m?z markalara kulak verin.
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
