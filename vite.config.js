import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        burgundy: "#6B0F1A",
        rose: "#B76E79",
        beige: "#F5F5DC",
        cream: "#FFFDF7"
      }
    },
  },
  plugins: [],
}
