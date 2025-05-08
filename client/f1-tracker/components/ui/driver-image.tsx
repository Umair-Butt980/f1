"use client";

import { useState } from "react";

interface DriverImageProps {
  driverId: string;
  alt: string;
  className?: string;
}

export function DriverImage({ driverId, alt, className }: DriverImageProps) {
  const [imgSrc, setImgSrc] = useState(`/drivers/${driverId}.jpg`);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc("/placeholder.svg")}
    />
  );
}
