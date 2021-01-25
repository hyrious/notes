import preactRefresh from "@prefresh/vite";
import { defineConfig } from "vite";

export default defineConfig({
    define: {
        __VUE_OPTIONS_API__: false,
        __VUE_PROD_DEVTOOLS__: false,
    },
    esbuild: {
        jsxFactory: "h",
        jsxFragment: "Fragment",
    },
    optimizeDeps: {
        include: ["preact/hooks"],
    },
    plugins: [preactRefresh()],
});
