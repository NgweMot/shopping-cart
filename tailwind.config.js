/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        jaro: ["Jaro", "sans-serif"],
        poetsen: ["Poetsen One", " sans-serif"],
        Kumbh: ["Kumbh Sans", "sans-serif"],
        Reddit: ["Reddit Mono", "monospace"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
