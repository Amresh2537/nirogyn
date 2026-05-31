"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * Renders a Next.js Image and silently hides it on load error.
 * Parent components should show a fallback (emoji / placeholder) underneath.
 */
type OptionalImageProps = Omit<ImageProps, "onError"> & {
  fallbackClassName?: string;
};

export default function OptionalImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  ...rest
}: OptionalImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  const sizeProps = fill ? { fill: true } : { width: width ?? 120, height: height ?? 120 };

  return (
    <Image
      src={src}
      alt={alt}
      {...sizeProps}
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
