export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(124, 77, 255, 0.25)',
        glass: '0 24px 80px rgba(0, 0, 0, 0.45)'
      },
      colors: {
        midnight: '#020617',
        nebula: '#0f123b',
        violet: '#7c4dff',
        cyan: '#41d9ff'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(124,77,255,0.24), transparent 30%), radial-gradient(circle at bottom right, rgba(14,160,255,0.16), transparent 20%)'
      }
    }
  },
  plugins: []
}
