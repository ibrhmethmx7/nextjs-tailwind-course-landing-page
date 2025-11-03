"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

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
              {"Deykem Teknoloji ile yaz\u0131l\u0131m g\u00fcc\u00fcn\u00fcz\u00fc h\u0131zland\u0131r\u0131n"}
            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
              {"WordPress eklentileri, yapay zek\u00e2 \u00e7\u00f6z\u00fcmleri ve otomasyon sistemleri ile i\u015f s\u00fcre\u00e7lerinizi u\u00e7tan uca d\u00f6n\u00fc\u015ft\u00fcr\u00fcyoruz. Deykem m\u00fchendisleri, ihtiya\u00e7lar\u0131n\u0131za \u00f6zel yaz\u0131l\u0131m geli\u015ftirme projelerini g\u00fcvenle teslim eder."}
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button className="bg-[#10B981] text-[#0F172A] font-semibold tracking-wide">
                {"\u00dcr\u00fcnleri G\u00f6r"}
              </Button>
              <Button
                variant="outlined"
                className="border-[#0F172A] text-[#0F172A] font-semibold tracking-wide"
              >
                {"Proje Ba\u015flat"}
              </Button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
              {Array.from({ length: 4 }).map((_, index) => (
                <Image
                  key={`deykem-logo-${index}`}
                  width={144}
                  height={144}
                  className="w-32 opacity-90"
                  src="/deykem-logo.png"
                  alt="Deykem Teknoloji"
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
