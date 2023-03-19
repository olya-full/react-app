// vite.config.ts
import { defineConfig } from "file:///C:/Users/Olya/Desktop/RS%20School/react-app/react-ts-app/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Olya/Desktop/RS%20School/react-app/react-ts-app/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      provider: "c8",
      all: true,
      enabled: true,
      reporter: ["text"],
      include: ["**/*.{jsx,tsx}"],
      exclude: [
        "src/main.tsx"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxPbHlhXFxcXERlc2t0b3BcXFxcUlMgU2Nob29sXFxcXHJlYWN0LWFwcFxcXFxyZWFjdC10cy1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE9seWFcXFxcRGVza3RvcFxcXFxSUyBTY2hvb2xcXFxccmVhY3QtYXBwXFxcXHJlYWN0LXRzLWFwcFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvT2x5YS9EZXNrdG9wL1JTJTIwU2Nob29sL3JlYWN0LWFwcC9yZWFjdC10cy1hcHAvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGUvY2xpZW50XCIgLz5cblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIHNldHVwRmlsZXM6IFsnLi9zcmMvc2V0dXBUZXN0cy50cyddLFxuICAgIGNvdmVyYWdlOiB7XG4gICAgICBwcm92aWRlcjogJ2M4JyxcbiAgICAgIGFsbDogdHJ1ZSxcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICByZXBvcnRlcjogWyd0ZXh0J10sXG4gICAgICBpbmNsdWRlOiBbJyoqLyoue2pzeCx0c3h9J10sXG4gICAgICBleGNsdWRlOiBbXG4gICAgICAgICdzcmMvbWFpbi50c3gnLFxuICAgICAgXVxuICAgIH0sXG4gIH0sXG59KTsgIl0sCiAgIm1hcHBpbmdzIjogIjtBQUdBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUVsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWSxDQUFDLHFCQUFxQjtBQUFBLElBQ2xDLFVBQVU7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULFVBQVUsQ0FBQyxNQUFNO0FBQUEsTUFDakIsU0FBUyxDQUFDLGdCQUFnQjtBQUFBLE1BQzFCLFNBQVM7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
