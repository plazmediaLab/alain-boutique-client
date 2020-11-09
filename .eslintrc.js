module.exports = {
  root: true, // Asegúrese de que eslint recoja la configuración en la raíz del directorio
  parserOptions: {
    ecmaVersion: 2020, // Utilice el último estándar de ecmascript
    sourceType: 'module', // Permite usar declaraciones de importación / exportación
    ecmaFeatures: {
      jsx: true // Habilite JSX ya que estamos usando React
    }
  },
  settings: {
    react: {
      version: 'detect' // Detecta automáticamente la versión de reacción
    }
  },
  env: {
    browser: true, // Habilita globales del navegador como ventana y documento
    amd: true, // Habilita require () y define () como variables globales según la especificación amd.
    node: true, // Habilita las variables globales de Node.js y el alcance de Node.js.
    es6: true // Tell ESLint that we use ecmascript 6, to avoid modern code syntax errors
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended' // Haga de este el último elemento para que una configuración Prettier anule otras reglas de formato
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }], //Utilice nuestro archivo .prettierrc como fuente
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'react/prop-types': 0,
    'jsx-a11y/no-onchange': 0
  },
  plugins: ['simple-import-sort']
};
