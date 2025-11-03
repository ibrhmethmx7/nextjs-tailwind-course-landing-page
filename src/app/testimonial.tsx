"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";


function TESTIMONIAL() {
  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <Card color="transparent" shadow={false} className="">
          <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full bg-[#0F172A]">
              <Image
                width={768}
                height={768}
                src="/deykem-logo.png"
                alt="Deykem Teknoloji referans"
                className="w-60 h-60 object-contain"
              />
            </div>
            <div className="col-span-2 w-full">
              <Typography variant="h6" color="blue" className="mb-4 text-[#10B981]">
                {"Deykem Teknoloji vaka incelemesi"}
              </Typography>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold"
              >
                {"AI destekli otomasyon ile %99 uptime"}
              </Typography>
              <Typography className="mb-1 w-full font-normal !text-gray-500">
                {"Deykem'in AI Studio platformu, lojistik m\u00fc\u015fterimizin sipari\u015f do\u011frulama s\u00fcrecini otomatikle\u015ftirerek yan\u0131t s\u00fcresini dakikalardan saniyelere indirdi."}
              </Typography>
              <div className="grid mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography className="w-full font-normal !text-gray-500">
                    {"WordPress eklentileriyle ERP sistemine an\u0131nda veri aktar\u0131m\u0131"}
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  <Typography className="w-full font-normal !text-gray-500">
                    {"Yapay zek\u00e2 destekli otomasyonla %35 maliyet tasarrufu"}
                  </Typography>
                </div>
              </div>
              <div className="flex items-center mt-8 gap-4">
                <Avatar
                  variant="circular"
                  src="/deykem-logo.png"
                  alt="Deykem Teknoloji referans"
                  size="md"
                />
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-0.5">
                    {"Murat Erel"}
                  </Typography>
                  <Typography
                    variant="small"
                    className="font-normal !text-gray-500"
                  >
                    {"Operasyon Direkt\u00f6r\u00fc @ Lojitek"}
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
