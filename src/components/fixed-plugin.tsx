"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="mailto:iletisim@deykem.com">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-2 pl-2 items-center border border-[#0F172A]/10 bg-white text-[#0F172A]"
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Deykem Teknoloji"
          src="/deykem-logo.png"
        />
        Deykem ile iletişime geç
      </Button>
    </a>
  );
}
