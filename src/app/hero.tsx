"use client";

import Image from "next/image";
import { Button, Typography, Card, Chip } from "@material-tailwind/react";

const HERO_PILLS = [
  "Deykem Resim Eklentisi",
  "Deykem Dil Eklentisi",
  "Otomatik Blog Paylaşma",
  "Özel Yazılım ve Otomasyon",
];

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10">
      <Image
        width={1200}
        height={1200}
        src="/image/Background.png"
        alt="Deykem arka plan"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white/80 bg-white/95 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl text-[#0F172A]"
            >
              Deykem Teknoloji ile yazılım gücünüzü hızlandırın
            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
              WordPress eklentileri, yapay zekâ çözümleri ve otomasyon sistemleri ile iş süreçlerinizi
              uçtan uca dönüştürüyoruz. Deykem mühendisleri, ihtiyaçlarınıza özel yazılım projelerini
              güvenle teslim eder.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button className="bg-[#F5E6D3] text-[#0F172A] font-semibold tracking-wide">
                Ürünleri Gör
              </Button>
              <Button
                variant="outlined"
                className="border-[#0F172A] text-[#0F172A] font-semibold tracking-wide"
              >
                Proje Başlat
              </Button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-3 lg:justify-start">
              {HERO_PILLS.map((label) => (
                <Chip key={label} value={label} className="bg-[#0F172A]/5 text-[#0F172A] font-medium" />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Hero;
