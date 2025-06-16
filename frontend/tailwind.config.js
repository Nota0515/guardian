/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
    },
    extend: {
      colors:{
        color:{
          1: "#ED7D2B",
          2: "#1C120D",
          3: "#FFFBF3",
          4: "#F0DDCA",
          5: "#81817E"
        },
        n:{
          1: "#ffffff",
          2: "#0D0F0D",
          3: "#FFF7E6",
          4: "#FF8800",
          5:'#2A2A24',
          6: '#302828',
          7: "#FFFFDC",
          8: "#2F75DE",
          9: "#F14469"
        },
      },
      backgroundImage:{
        'text-gradient': 'linear-gradient(90deg, hsla(22, 100%, 78%, 1) 0%, hsla(2, 78%, 62%, 1) 100%)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        "conic-gradient": "conic-gradient(from 225deg at 52% 50%, #62E862, #46FFFF, rgba(136, 255, 206, 1), #62E862)",
      },
      transitionTimingFunction : {
        DEFAULT: "linear",
      },
      transitionDuration : {
        DEFAULT : "200ms"
      },
      fontFamily :{
        
        pixelify: ['Pixelify Sans', 'sans-serif'],
        mainFont : ['Bricolage Grotesque' , 'sans-serif']
      },
      boxShadow: {
        'inner-strong': 'inset 0 4px 6px rgba(0, 0, 0, 0.6)',
        'inner-darkest': 'inset 0 4px 10px rgba(0, 0, 0, 0.9)',
        "2xl" : '0 0 100px 0px rgba(107, 114, 128, 0.5)',
        '3xl': '7px 7px 5px 0 rgba(0, 0, 0, 0.5)',
      },
      dropShadow: {
        'xl': '0 35px 35px rgba(221, 190, 99, 0.3)',
      }
    },
    screens: {
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '360px',
    }    
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar')
  ]
}
