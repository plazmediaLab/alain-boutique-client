const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    // Especifique las rutas a todos los archivos que utilizan las directivas
    content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx,css}'],
    // Esta es la función utilizada para extraer nombres de clases utilizadas.
    defaultExtractor: (content) => {
      // Capture lo más generosamente posible cosas incluidas como `h- (screen-1.5)`
      const broadMatches = content.match(/[^<>"'`\\s]*[^<>"'`\\s:]/g) || [];
      // Captura clases dentro de otros delimitadores como .block (class = "w-1/2") en Pug
      const innerMatches = content.match(/[^<>"'`\\s.()]*[^<>"'`\\s.():]/g) || [];
      return broadMatches.concat(innerMatches);
    }
  }
];

module.exports = {
  plugins: [
    'tailwindcss',
    process.env.NODE_ENV === 'production' ? purgecss : undefined,
    'postcss-preset-env'
  ]
};
