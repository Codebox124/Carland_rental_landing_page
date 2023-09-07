import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      padding:{
        DEFAULT : '15px'
      }
    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '1824px',
      xl: '1300px',
    },
    extend: {
      colors:{
        primary:"#101828",
        secondary:'#667085',
        accent:{
          DEFAULT :'#ed1d24' ,
          hover: '#dd242a'
        },
        body:'#dedede'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
