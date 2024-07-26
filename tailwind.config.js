/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'custom':{
          'black':{
            '800':"#201B21"
          },
          slate:{
            '300':'#EAEEEF'
          },
          orange:{
            '300':'#EC5E2A'
          },
          green:{
            '200':'#A7C6BA'
          }
        }
      }
    },
  },
  plugins: [],
};
