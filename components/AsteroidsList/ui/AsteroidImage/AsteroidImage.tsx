import Image from "next/image";
import AsteroidSmall from "@/assets/icons/Asteroid_small.png";
import AsteroidBig from "@/assets/icons/Asteroid_big.png";
import { FC, memo } from "react";

type AsteroidImageProps = {
  size: number;
};

export const AsteroidImage: FC<AsteroidImageProps> = memo(({ size }) => {
  return (
    <>
      {size >= 100 ? (
        <Image
          src={AsteroidBig}
          alt={"big asteroid"}
          data-testid={"bigAsteroid"}
        />
      ) : (
        <Image
          src={AsteroidSmall}
          alt={"small asteroid"}
          data-testid={"smallAsteroid"}
        />
      )}
    </>
  );
});
AsteroidImage.displayName = "AsteroidImage";
