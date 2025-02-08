import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        png: {
          // https://sharp.pixelplumbing.com/api-output#png
          quality: 100,
        },
        jpeg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 100,
        },
        jpg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 100,
        },
      }),
    ],
  };
});
