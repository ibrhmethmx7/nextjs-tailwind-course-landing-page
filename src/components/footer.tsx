import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Deykem Teknoloji",
    items: ["Hakk\u0131m\u0131zda", "Ekibimiz", "Kariyer", "Blog"],
  },
  {
    title: "Hizmetler",
    items: [
      "WordPress eklentileri",
      "Otomasyon sistemleri",
      "Yapay zek\u00e2 \u00e7\u00f6z\u00fcmleri",
      "Yaz\u0131l\u0131m geli\u015ftirme",
    ],
  },
  {
    title: "Kaynaklar",
    items: [
      "Vaka \u00e7al\u0131\u015fmalar\u0131",
      "Belgeler",
      "SSS",
      "Gizlilik politikas\u0131",
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
              {"Bizimle ileti\u015fime ge\u00e7in"}
            </Typography>
            <Typography className="!text-gray-500 font-normal mb-4 text-base">
              {"Proje fikirlerinizi ve otomasyon hedeflerinizi bizimle payla\u015f\u0131n. 24 saat i\u00e7inde WordPress eklentileri, yapay zek\u00e2 \u00e7\u00f6z\u00fcmleri ve yaz\u0131l\u0131m geli\u015ftirme ekiplerimiz d\u00f6n\u00fc\u015f yapar."}
            </Typography>
            <Typography variant="small" className="font-medium mb-2 text-left">
              {"E-posta"}
            </Typography>
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                {/* @ts-ignore */}
                <Input label="ornek@deykem.com" color="gray" />
                <Typography className="font-medium mt-3 !text-sm !text-gray-500 text-left">
                  {"KVKK metnimizi onaylayarak Deykem Teknoloji'den ileti almak istedi\u011fimi kabul ediyorum."}
                </Typography>
              </div>
              <Button className="w-full lg:w-fit bg-[#10B981] text-[#0F172A] font-semibold" size="md">
                {"Proje Ba\u015flat"}
              </Button>
            </div>
            <div className="text-left text-sm text-gray-600 space-y-1">
              <p>{"Telefon: +90 (212) 000 00 00"}</p>
              <p>{"E-posta: iletisim@deykem.com"}</p>
              <p>{"Adres: Teknopark \u0130stanbul, A1 Blok No:405"}</p>
            </div>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
        >
          {`\u00a9 ${CURRENT_YEAR} Deykem Teknoloji. WordPress eklentileri, otomasyon sistemleri ve yapay zek\u00e2 \u00e7\u00f6z\u00fcmlerinde t\u00fcm haklar\u0131 sakl\u0131d\u0131r.`}
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
