import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			black: {
  				'900': '#00214F'
  			},
  			gray: {
  				'300': '#475467',
  				'500': '#344054',
  				'900': '#101828'
  			},
  			blue: {
  				'100': 'F5FAFF',
  				'300': '4893FF',
  				'700': '#0179FE',
  				'900': '1570EF'
  			},
  			red: {
  				'100': '#FFFBFA',
  				'400': '#FEF3F2',
  				'700': '#F04438',
  				'900': 'ED0006'
  			},
  			green: {
  				'100': '#F6FEF9',
  				'300': '#ECFDF3',
  				'500': '#039855'
  			},
  			pink: {
  				'100': '#FEF6FB',
  				'300': '#FCE7F6',
  				'500': '#851651',
  				'900': '#C11574'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
