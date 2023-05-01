/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    maxWidth:{
      container: '1440px',
      contentContainer: '1140px',
      containerSmall: '1024px',
      containerxs: '768px',
    },
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      fontFamily: {
      bodyFont: ['Braah One' , 'sans-serif' ],
      titleFont: ['Castoro Titling'],
      },
      boxShadow: {
        navbarShadow: ' 0 10px 30px -10px rgba(2,12,27,0.7)',
      },
  plugins: [],
}
  }
}
  
