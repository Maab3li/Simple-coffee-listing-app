 // tailwind.config.js
 /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Example for React/Vue projects
        // Add other paths as needed
      ],
      theme: {
        extend: {
            fontFamily: {
            'dm-sans-bold': ['dm-sans-bold-700', 'sans-serif'], // 'custom' is your utility class name
            // You can add more specific weights if needed, e.g., 'custom-bold': ['MyCustomFont-Bold', 'sans-serif']
          },
        },
      },
      plugins: [],
    };