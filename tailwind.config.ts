import catppuccin from "@catppuccin/daisyui"
import typography from "@tailwindcss/typography"
import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    logs: false,
    themes: [
      catppuccin('latte', 'mauve'),
      catppuccin('mocha', 'mauve'),
    ],
    darkTheme: 'mocha'
  }
} satisfies Config

