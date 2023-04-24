const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#2C354A',
        'light-purple': '#D101F3'
      },
      backgroundImage: {
        'course-background': "url(course.svg)"
      }
    }
  },
  plugins: [],
}
)
