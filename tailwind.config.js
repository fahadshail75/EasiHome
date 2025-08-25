/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1F7A4C',
          primaryDark: '#16623D',
          primaryLight: '#3AA271',
          primaryTint: '#E6F3EC',
          secondary: '#B9693C',
          secondaryDark: '#8E4F2B',
          secondaryLight: '#D98A5C',
          secondaryTint: '#FFF2EA',
          clay: '#B9693C',
          yellow: '#F5C542',
          steel: '#3E5A73',
        },
        surface: {
          DEFAULT: '#FAFAFA',
          100: '#F3F4F6',
          300: '#D1D5DB',
          500: '#6B7280',
          700: '#3D3D3D',
          900: '#1E1E1E'
        },
        success: '#1E9E62',
        warning: '#E7A93D',
        error: '#DC4F43',
        // Dark mode colors
        dark: {
          bg: '#0B0F12',
          card: '#11161A',
          text: '#E5E7EB',
          border: '#222C34'
        }
      },
      fontFamily: {
        'heading': ['Manrope', 'Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['40px', '48px'],
        'h2': ['32px', '40px'],
        'h3': ['24px', '32px'],
        'h4': ['20px', '28px'],
        'body': ['16px', '24px'],
        'body-lg': ['18px', '28px'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'card': '0 8px 20px rgba(0,0,0,.06)',
        'card-hover': '0 12px 32px rgba(0,0,0,.12)',
        'soft': '0 4px 12px rgba(0,0,0,.05)',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1F7A4C 0%, #3E5A73 100%)',
        'cta-shine': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.35) 50%, rgba(255,255,255,0) 100%)',
        'grain': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'counter': 'counter 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        counter: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
