import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.guanabanas.com" },
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "littlemoirsfoodshack.com" },
      { protocol: "https", hostname: "tavolena.com" },
      { protocol: "https", hostname: "dynamic-media-cdn.tripadvisor.com" },
      { protocol: "https", hostname: "photos.tryotter.com" },
      { protocol: "https", hostname: "searachajupiter.com" },
      { protocol: "https", hostname: "harboursideplace.com" },
      { protocol: "https", hostname: "images.getbento.com" },
    ],
  },
};

export default nextConfig;
