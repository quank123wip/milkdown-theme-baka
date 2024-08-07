/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['**/*.tsx', '**/*.ts'],
    darkMode: 'class',
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }