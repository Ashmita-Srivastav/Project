"use client";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";

interface ImageCardProps {
  title: string;
  description: string;
  image: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ title, description, image }) => {
  return (
    <Card
      isPressable
      className="bg-gradient-to-b from-slate-800 to-neutral-900 text-white select-none group shrink-0 w-[250px] snap-center rounded-lg shadow-lg hover:shadow-xl transition"
    >
      <CardBody className="overflow-hidden p-4">
        <Image
          shadow="sm"
          alt={title}
          height={200}
          width={200}
          className="object-cover w-full h-40 rounded-md"
          src={image}
        />
      </CardBody>
      <CardFooter className="flex flex-col text-white p-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-sm text-gray-300">
          {description.length > 80 ? description.substring(0, 80) + "..." : description}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ImageCard;
