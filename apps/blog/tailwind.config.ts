import type { Config } from "tailwindcss";
import baseConfig from "@repo/ui/tailwind.config";

const webConfig = {
  ...baseConfig,
  presets: [baseConfig],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...(baseConfig.theme?.extend || {}),
      fontFamily: {
        pretendard: ["Pretendard"],
      },
    },
  },
} satisfies Config;

export default webConfig;
