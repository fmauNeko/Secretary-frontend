import catppuccin from "@catppuccin/daisyui"
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
  plugins: [daisyui],
  daisyui: {
    themes: [
      catppuccin('latte', 'mauve'),
      catppuccin('mocha', 'mauve'),
    ]
  }
} satisfies Config

