# ESlint y Prettier para aplicaciones React (Next.js)

![ESLint and Prettier image](https://miro.medium.com/max/1000/1*83PZeBAFQkP1XyOfDigxsg.png)

[Eslint](https://eslint.org/) y [Prettier](https://prettier.io/) son dos herramientas separadas, se pueden ejecutar independientemente unas de otras, pero aprovecharemos algunos plugins ESlint muy útiles para combinarlos para obtener el máximo efecto con una configuración mínima.

Este artículo se centrará en ReactJS y también profundizará en NextJS, pero estas herramientas funcionan para un código base JavaScript en general y se pueden configurar para trabajar en cualquier proyecto JavaScript, con Prettier incluso puede apuntar al formato automático para otros lenguajes como HTML, CSS, SCSS/SASS, Markdown, JSON, YAML, GraphQL, componentes con estilo y muchos más!!!

## ESlint

Primero hablaré de ESlint. Es un analizador de código estático, lo que significa que le indica errores y errores que puede cometer _mientras_ está desarrollando.

Estos errores pueden ser cosas como:

- Errores de sintaxis simples, por ejemplo. no cerrar una declaración de función con .`}`
- Detección de código muerto, por ejemplo. variables no utilizadas, código escrito después de una instrucción.`return`
- Violando las pautas de código, estas son reglas definidas por usted mismo o una combinación de estándares predefinidos como la guía de estilo Airbnb o la guía de estilo de Google, etc.
-

## Prettier

Prettier es un formateador de código, sólo se preocupa por cómo se ve el código,

> ¿quieres asegurar una sangría coherente en todo el proyecto?
> ¿Desea asegurarse de que no haya punto y coma en el proyecto?
> ¿Hacer que sus cadenas de promesas se vean perfectamente consistentes y legibles?

Prettier se puede habilitar para todo el proyecto y así todo su equipo mantendrá una misma ruta sobre el formato en su código.

## Comencemos

Asegúrese de tener intalado `npm` y `Node js`.

**Vamos a instalar las `"devDependencies"` para ESlint.**

```
	$ npm i -D eslint prettier eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier eslint-plugin-prettier eslint-plugin-jsx-a11y
```

> **Nota**
> Si estás usando create-react-app entonces ya tienes agregado Eslint al proyecto, sólo necesitas instalar los otros plugins.

**Creación de los archivos de configuración**

Creamos los archivos de configuración n la carpeta raíz del proyecto.

```
	$ touch .eslintrc.js .prettierrc
```

### .eslintignore y .prettierignore

Estos son los archivos que necesitamos para decirle a Eslint y Prettier que no se dirija a ciertos archivos y carpetas.

```
	$ touch .eslintignore .prettierignore
```

Sólo tiene que añadir lo siguiente a ambos archivos, para ignorar el fichero `node_modules`

```
	node_modules
```

Alternativamente, si no desea usar un archivo como configuración para ignorar acciones, puede pasarlo con una bandera al ejecutar ESlint
eg.`./node_modules`

```
	$ eslint --fix . --ignore-path ./node_modules
```

## Ahora vamos a rellenar nuestras configuraciones

**.prettierrc**

Esta es la configuración que utilizo para Prettier

```
{
    "semi": true,
    "tabWidth": 2,
    "printWidth": 100,
    "singleQuote": true,
    "trailingComma": "none",
    "jsxBracketSameLine": true
}
```

**.eslintrc.js**

Esta es una configuración base para ESLint, podemos extenderlo aún más con plugins geniales.

```
module.exports = {
    root: true, // Asegúrese de que eslint recoja la configuración en la raíz del directorio
    parserOptions: {
        ecmaVersion: 2020, // Utilice el último estándar de ecmascript
        sourceType: 'module', // Permite usar declaraciones de importación / exportación
        ecmaFeatures: {
            jsx: true  // Habilite JSX ya que estamos usando React
        }
    },
    settings: {
        react: {
            version: 'detect'  // Detecta automáticamente la versión de reacción
        }
    },
    env: {
        browser: true,  // Habilita globales del navegador como ventana y documento
        amd: true,  // Habilita require () y define () como variables globales según la especificación amd.
        node: true   // Habilita las variables globales de Node.js y el alcance de Node.js.
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended' // Haga de este el último elemento para que una configuración Prettier anule otras reglas de formato
    ],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],  //Utilice nuestro archivo .prettierrc como fuente
        'no-unused-vars': 0,
        'react/prop-types': 0
    }
};
```

## Ejecución de ESlint

Debe agregar los scripts al archivo `package.json`.

```
"scripts": {
    "lint": "eslint --fix .",
    "format": "prettier --write './**/*.{js,jsx,css,md,json}' --config ./.prettierrc"
  },
```

Ahora simplemente corre

```
	$ npm run lint
```

## Dirigirse a Next.js

![Next JS image](https://soshace-12d3e.kxcdn.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg)

Para usar Eslint con Next.js no se necesitan muchos cambios, solamente agregaremos dos reglas mas a nuestra configuración.

1. Para ignorar el context scope en la falta de inportacion de React en los componentes mientras se escribe código, ya que Next.js no requiere eso.
2. Para controlar los errores relacionados con la accesibilidad generados por el complemento.

En Next.js usamos el componente para ajustar la etiqueta. En lugar de pasar el nombre del atributo, pasamos como apoyo a en su lugar estos componentes internos de Next.
Esto plantea un problema de accesibilidad muy común de una etiqueta de anchor, y no queremos ningún error de ESLt por lo que necesitamos encontrar una manera de manejar esta situación.` JSX``jsx-a11y``Link``<a></a>``href``<a></a>``Link``href `

Simplemente vaya a su archivo `.eslint.js` y agrega las siguientes reglas personalizadas para ello.

```
{
    rules: {
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton']
            }
        ]
    }
}
```

## Y listo!!!

Con esto tendremos configurado nuestro proyecto con los veneficios de ESLint y Prettier.

## Contenido extra

**slint-plugin-simple-import-sort**

¿Se encuentra preocupado por el estado de importación de sus recursos?

Aquí hay una solución para dejar que Eslint se preocupe por todo eso.

```
  $ npm i -D eslint-plugin-simple-import-sort
```

Actualiza tu archivo `.eslintrc.js` para hacer uso de este plugin. Agregue una propiedad de nivel superior en la sección de `plugins`.

```
module.exports = {
    plugins: ['simple-import-sort']
};
```

**husky + linte-staged**

Para asegurarse de que el código está formateado y no tiene errores de linting que tendrá que ejecutar cada vez que requiera.
Esto deberíamos ser capaces de automatizar de alguna manera.
Comenzamos intalando un par de dependencias más.

```
	$ npm i -D husky lint-staged
```

> - husky => Una herramienta para agregar un gancho de confirmación previa a git, ejecutará un comando determinado cada vez que realices un commit.
> - lint-staged => Una herramienta para ejecutar una determinada lista de comandos sobre archivos que se prepararon para commit en git.

Ahora agregue en su archivo `package.json` las siguientes configuraciones.

```
{
  //...
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "./**/*.{js,jsx}": [
      "eslint --fix"
    ]
  }
}
```

## Conclusión

Espero que hayas aprendido algo nuevo. Eslint es infinitamente personalizable y deberías explorar más para encontrar algunos plugins y configuraciones que mejor beneficien a tu proyecto.
