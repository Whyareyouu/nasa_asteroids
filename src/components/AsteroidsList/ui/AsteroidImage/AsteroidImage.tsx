import Image from "next/image";
import AsteroidSmall from "../../../../assets/icons/Asteroid_small.png";
import AsteroidBig from "../../../../assets/icons/Asteroid_big.png";
import { FC } from "react";

type AsteroidImageProps = {
  size?: AsteroidImageSize;
};

export enum AsteroidImageSize {
  BIG = "big",
  SMALL = "small",
}

export const AsteroidImage: FC<AsteroidImageProps> = ({ size }) => {
  return (
    <Image
      src={size === AsteroidImageSize.BIG ? AsteroidBig : AsteroidSmall}
      alt={"123"}
      quality={100}
    />
  );
};
