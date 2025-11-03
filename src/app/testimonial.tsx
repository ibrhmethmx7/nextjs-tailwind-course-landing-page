"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";


function TESTIMONIAL() {
  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        {/* @ts-ignore */}
        <Card color="transparent" shadow={false} className="">
          {/* @ts-ignore */}
          <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
            <div className="w-full xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
              <Image
                width={768}
                height={768}
                src="/image/blogs/blog6.svg"
                alt="testimonial image"
                className="w-full h-full scale-110 object-cover"
              />
            </div>
            <div className="col-span-2 w-full">
              {/* @ts-ignore */}
              <Typography variant="h6" color="blue" className="mb-4">
                BA?ARI H?KAYES?
              </Typography>
              {/* @ts-ignore */}
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold"
              >
                E-Ticaret Platformu ve Otomasyon
              </Typography>
              {/* @ts-ignore */}
              <Typography className="mb-1 w-full font-normal !text-gray-500">
                B?y?k bir e-ticaret markas? i?in geli?tirdi?imiz ?zel otomasyon sistemi sayesinde sipari? i?leme s?relerini %70 azaltt?k.
              </Typography>
              <div className="grid mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  {/* @ts-ignore */}
                  <Typography className="w-full font-normal !text-gray-500">
                    Tam entegre stok y?netimi ve CRM sistemi
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-500 rounded-full" />
                  {/* @ts-ignore */}
                  <Typography className="w-full font-normal !text-gray-500">
                    Yapay zek? destekli m??teri destek chatbot
                  </Typography>
                </div>
              </div>
              <div className="flex items-center mt-8 gap-4">
                {/* @ts-ignore */}
                <Avatar
                  variant="circular"
                  src="/image/avatar3.jpg"
                  alt="client"
                  size="md"
                />
                <div>
                  {/* @ts-ignore */}
                  <Typography variant="h6" color="blue-gray" className="mb-0.5">
                    Mehmet Y?lmaz
                  </Typography>
                  {/* @ts-ignore */}
                  <Typography
                    variant="small"
                    className="font-normal !text-gray-500"
                  >
                    Genel M?d?r, TechStore E-Ticaret
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
