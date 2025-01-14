import config from "@repo/ui/tailwind.config";
import type { Config } from "tailwindcss";

const webConfig = {
  ...config,
  presets: [config],
} satisfies Config;

export default webConfig;
