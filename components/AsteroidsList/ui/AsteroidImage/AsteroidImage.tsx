import Image from "next/image";
import AsteroidSmall from "@/assets/icons/Asteroid_small.png";
import AsteroidBig from "@/assets/icons/Asteroid_big.png";
import { FC, memo } from "react";

type AsteroidImageProps = {
  size: number;
};

export const AsteroidImage: FC<AsteroidImageProps> = memo(({ size }) => {
  return (
    <Image
      src={size > 100 ? AsteroidBig : AsteroidSmall}
      alt={"123"}
      quality={100}
    />
  );
});
AsteroidImage.displayName = "AsteroidImage";
