import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "?irket",
    items: ["Hakk?m?zda", "Kariyer", "Blog", "Referanslar"],
  },
  {
    title: "Hizmetler",
    items: ["WordPress Eklentileri", "Yaz?l?m Geli?tirme", "Otomasyon", "Yapay Zek?"],
  },
  {
    title: "Destek",
    items: ["Dok?mantasyon", "SSS", "?leti?im", "Gizlilik"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                {/* @ts-ignore */}
                <Typography variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    {/* @ts-ignore */}
                    <Typography
                      as="a"
                      href="#"
                      className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="">
            {/* @ts-ignore */}
            <Typography variant="h6" className="mb-3 text-left">
              Abone Ol
            </Typography>
            {/* @ts-ignore */}
            <Typography className="!text-gray-500 font-normal mb-4 text-base">
              Yeni ?r?nler ve kampanyalardan ilk siz haberdar olun.
            </Typography>
            {/* @ts-ignore */}
            <Typography variant="small" className="font-medium mb-2 text-left">
              E-posta Adresiniz
            </Typography>
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                {/* @ts-ignore */}
                <Input label="E-posta" color="gray" />
                {/* @ts-ignore */}
                <Typography className="font-medium mt-3 !text-sm !text-gray-500 text-left">
                  {" "}
                  <a
                    href="#"
                    className="font-bold underline hover:text-gray-900 transition-colors"
                  >
                    Kullan?m Ko?ullar?n?
                  </a>{" "}
                  kabul ediyorum.
                </Typography>
              </div>
              {/* @ts-ignore */}
              <Button color="gray" className="w-full lg:w-fit" size="md">
                Abone Ol
              </Button>
            </div>
          </div>
        </div>
        {/* @ts-ignore */}
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Deykem Teknoloji. T?m haklar? sakl?d?r.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
