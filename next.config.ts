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
      { protocol: "https", hostname: "divebarrestaurant.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "cdn.res-discover.com" },
      { protocol: "https", hostname: "tfc-uwc.s3.amazonaws.com" },
      { protocol: "https", hostname: "casatequila.us" },
      { protocol: "https", hostname: "calaverascantina.com" },
      { protocol: "https", hostname: "delpestojupiter.com" },
      { protocol: "https", hostname: "thetwistedtuna.com" },
    ],
  },
};

export default nextConfig;
