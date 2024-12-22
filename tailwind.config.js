/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "login.html", "faq.html", "helpcenter.html"], // Added login.html here
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'), // Added @tailwindcss/forms plugin here
  ],
}

