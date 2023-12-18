import React, { useState } from "react";
import {
  Image,
  Skeleton,
  ImageProps as ChakraImageProps,
} from "@chakra-ui/react";

interface Props extends ChakraImageProps {
  src: string;
  alt: string;
}

const CustomImage: React.FC<Props> = ({ src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  const handleImageError = (
    error: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    console.error(`Failed to load image: ${src}`, error);
  };

  return (
    <>
      {!isLoaded && (
        <Skeleton height={props.h} width={props.w} fadeDuration={2} />
      )}
      <Image
        src={src}
        alt={alt}
        {...props}
        onLoad={handleImageLoaded}
        onError={handleImageError}
        style={{ display: isLoaded ? "block" : "none" }}
      />
    </>
  );
};

export default CustomImage;
