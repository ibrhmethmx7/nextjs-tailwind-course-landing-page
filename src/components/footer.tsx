import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Deykem Teknoloji",
    items: ["Hakkımızda", "Ekibimiz", "Kariyer", "Blog"],
  },
  {
    title: "Hizmetler",
    items: [
      "WordPress eklentileri",
      "Otomasyon sistemleri",
      "Yapay zekâ çözümleri",
      "Yazılım geliştirme",
    ],
  },
  {
    title: "Kaynaklar",
    items: [
      "Vaka çalışmaları",
      "Belgeler",
      "SSS",
      "Gizlilik politikası",
    ],
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
                <Typography variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
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
            <Typography variant="h6" className="mb-3 text-left text-[#0F172A]">
              Bizimle iletişime geçin
            </Typography>
            <Typography className="!text-gray-500 font-normal mb-4 text-base">
              Proje fikirlerinizi ve otomasyon hedeflerinizi bizimle paylaşın. 24 saat içinde WordPress
              eklentileri, yapay zekâ çözümleri ve yazılım geliştirme ekiplerimiz dönüş yapar.
            </Typography>
            <Typography variant="small" className="font-medium mb-2 text-left">
              E-posta
            </Typography>
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                {/* @ts-ignore */}
                <Input label="ornek@deykem.com" color="gray" />
                <Typography className="font-medium mt-3 !text-sm !text-gray-500 text-left">
                  KVKK metnimizi onaylayarak Deykem Teknoloji'den ileti almak istediğimi kabul ediyorum.
                </Typography>
              </div>
              <Button className="w-full lg:w-fit bg-[#F5E6D3] text-[#0F172A] font-semibold" size="md">
                Proje Başlat
              </Button>
            </div>
            <div className="text-left text-sm text-gray-600 space-y-1">
              <p>Telefon: +90 (212) 000 00 00</p>
              <p>E-posta: iletisim@deykem.com</p>
              <p>Adres: Teknopark İstanbul, A1 Blok No:405</p>
            </div>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
        >
          © {CURRENT_YEAR} Deykem Teknoloji. WordPress eklentileri, otomasyon sistemleri ve yapay zekâ çözümlerinde tüm hakları saklıdır.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
