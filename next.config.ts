import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  images: {
    // Because output is set to "export".
    unoptimized: true,
  },
};

export default config;
