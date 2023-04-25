import Image from "next/image";
import React from "react";
import ImagePrincipal from "./unsplash_VfUN94cUy4o.png";

export default function ImageAvaluador({ style, ...props }) {
  return (
    <Image
      src={ImagePrincipal}
      alt=""
      className="ratio ratio-1x1 d-none d-xl-block rounded-5 my-3 mx-3 w-auto"
      style={{ maxHeight: "600px", maxWidth: "600px", ...style }}
    />
  );
}
