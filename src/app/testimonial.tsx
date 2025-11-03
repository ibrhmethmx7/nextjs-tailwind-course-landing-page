"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

function TESTIMONIAL() {
  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <Card color="transparent" shadow={false}>
          <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
              <Image
                width={768}
                height={768}
                src="/image/blogs/blog6.svg"
                alt="Deykem Teknoloji referans"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 w-full">
              <Typography variant="h6" color="blue" className="mb-4 text-[#B79B6C]">
                Deykem Teknoloji vaka incelemesi
              </Typography>
              <Typography variant="h3" color="blue-gray" className="mb-4 font-bold">
                Üç eklenti ile %99 içerik otomasyonu
              </Typography>
              <Typography className="mb-1 w-full font-normal !text-gray-500">
                Resim, dil ve otomatik blog paylaşma eklentilerinin birlikte çalıştığı Deykem Suite, içerik
                yayın süresini saatlerden dakikalara indirdi ve SEO performansını %30 artırdı.
              </Typography>
              <div className="grid mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography className="w-full font-normal !text-gray-500">
                    WordPress eklentileriyle çok dillilik ve görsel optimizasyon senkron ilerliyor
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography className="w-full font-normal !text-gray-500">
                    Otomatik blog paylaşımı sosyal kanallara 3 kat daha hızlı dağıtım sağlıyor
                  </Typography>
                </div>
              </div>
              <div className="flex items-center mt-8 gap-4">
                <Avatar
                  variant="circular"
                  src="/image/avatar2.jpg"
                  alt="Deykem Teknoloji referans"
                  size="md"
                />
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-0.5">
                    Murat Erel
                  </Typography>
                  <Typography variant="small" className="font-normal !text-gray-500">
                    Operasyon Direktörü @ Lojitek
                  </Typography>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TESTIMONIAL;
