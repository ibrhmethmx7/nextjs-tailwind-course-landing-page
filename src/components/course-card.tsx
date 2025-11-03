import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";


interface CourseCardProps {
  img: string;
  tag: string;
  title: string;
  desc: string;
  label: string;
}

export function CourseCard({ img, tag, title, desc, label }: CourseCardProps) {
  return (
    <Card className="border">
      <CardHeader className="h-64 bg-[#0F172A]">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-contain p-10"
        />
      </CardHeader>
      <CardBody>
        <div className="flex items-center gap-2">
          <Typography
            variant="small"
            color="blue"
            className="mb-2 font-normal text-[#10B981]"
          >
            {tag}
          </Typography>
        </div>
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-900"
        >
          <Typography variant="h5" className="mb-2 normal-case">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Button className="bg-[#0F172A] text-white font-semibold hover:shadow-lg hover:shadow-[#0F172A]/30">
          {label}
        </Button>
      </CardBody>
    </Card>
  );
}

export default CourseCard;