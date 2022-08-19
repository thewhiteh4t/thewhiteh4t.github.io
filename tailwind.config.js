module.exports = {
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.html',
      './about/*.html',
      './*.md',
      './*.html',
    ],
    theme: {
      extend: {
        colors: {
          'c-gray': '#212121',
          'c-cyan': '#263238'
        },
        dropShadow: {
          'md': '0 0 5px rgba(0, 230, 255, 1)'
        }
      },
      container: {
        center: true,
        screens: {
          'xl': '1280px',
          '2xl': '1280px'
        }
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/aspect-ratio')
    ]
  }
