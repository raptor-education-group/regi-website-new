import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Raptor Education Group, Inc.",
    short_name: "REGI",
    description:
      "Wildlife rehabilitation and education in Antigo, Wisconsin.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4efe4",
    theme_color: "#173c2a",
    icons: [
      {
        src: "/icon.png",
        sizes: "750x473",
        type: "image/png",
      },
    ],
  };
}
