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
              <Typography variant="h6" color="blue" className="mb-4 text-[#10B981]">
                Deykem Teknoloji vaka incelemesi
              </Typography>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold"
              >
                \u00dc\u00e7 eklenti ile %99 i\u00e7erik otomasyonu
              </Typography>
              <Typography className="mb-1 w-full font-normal !text-gray-500">
                Resim, dil ve otomatik blog payla\u015fma eklentilerinin birlikte \u00e7al\u0131\u015ft\u0131\u011f\u0131
                Deykem Suite, i\u00e7erik yay\u0131n s\u00fcresini saatlerden dakikalara indirdi ve SEO performans\u0131n\u0131
                %30 art\u0131rd\u0131.
              </Typography>
              <div className="grid mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography className="w-full font-normal !text-gray-500">
                    WordPress eklentileriyle \u00e7ok dillilik ve g\u00f6rsel optimizasyon senkron ilerliyor
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography className="w-full font-normal !text-gray-500">
                    Otomatik blog payla\u015f\u0131m\u0131 sosyal kanallara 3 kat daha h\u0131zl\u0131 da\u011f\u0131t\u0131m sa\u011fl\u0131yor
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
                  <Typography
                    variant="small"
                    className="font-normal !text-gray-500"
                  >
                    Operasyon Direkt\u00f6r\u00fc @ Lojitek
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
