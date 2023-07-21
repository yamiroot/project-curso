<h1 align="center">Boilerplate desde cero</h1>
Aprender a configurar tu entorno de trabajo desde cero.

## Paso N°1:
Definir estructura del proyecto. Puedes tomar opcionalmente la siguiente estructura:

* src: 
 Carpeta de trabajo. Como estructura básica se sugiere que contenga tres carpetas de 
 nombres: `css`, `js`, `img` y un archivo `index.html`.
 
  - `index.html:` Es el archivo que el servidor ejecuta por defecto cuando carga tu 
  dominio.
  
 En informática `SRC` como acrónimo significa Set Redundancy Compression. Son
 métodos de compresión de datos para representar una determinada información empleando 
 una menor cantidad de espacio.

## Paso N°2:
Crear archivo `package.json`. Este archivo no debe estar incluido en la carpeta `src`.

En resumen, este archivo contiene información acerca de:
 - Todos los módulos necesarios para su proyecto y sus versiones instaladas.
 - Todos los metadatos de un proyecto, como el autor y la licencia, entre otros.
 - Secuencias de comandos que se pueden ejecutar para automatizar tareas del proyecto.

Existen dos formas de crear nuestro `package.json`, la primera es de forma 
manual y la segunda es por medio del comando `npm init`. 

Si aún no sabe como crear un archivo `package.json`, puedes dar click 
[aquí](https://medium.com/noders/t%C3%BA-yo-y-package-json-9553929fb2e3). Te 
adjuntamos, además, la documentación oficial de `npm` acerca de 
[cómo crear este archivo](https://docs.npmjs.com/creating-a-package-json-file).

#### Observaciones
  1. Al crear nuestro `package.json` utilizando el comando `npm init` nos pedirá un 
    `entry point` o punto de entrada. Si nuestro proyecto fuera una librería, nuestro 
    `entry point` debería ser un archivo de extensión `.js`. En cambio, en un proyecto 
    web debería ser un archivo de extensión `.html`. Cabe recalcar que en éste último
    deberán cargarse los módulos de la lógica de nuestro proyecto. 
 
       - **entry point**: Archivo que incluirá la lógica principal de su módulo. Puede 
       ver más información acerca de este apartado 
       [aquí](https://stackoverflow.com/questions/32800066/what-is-entry-point-in-npm-init).

  2. En nuestro `package.json` encontraremos las siguientes estructuras:
   - `dependencies`: Aquí encontramos las dependencias de producción. Su uso es directo, 
   generalmente implementan parte del código. Ejemplo: Vue, React, Angular, Express, etc.
   - `devDependencies`:  Aquí encontramos las dependencias de desarrollo. Su uso se da en
   el proceso de compilación, herramientas que lo ayudan a administrar cómo terminará el 
   código final, módulos de prueba de terceros. Ejemplo: Jest, Mocha, Eslint, etc.

## Paso N°3:
Instalar la dependencia `serve` de `npm`. Este paquete nos va a permitir correr el servidor 
con el comando `npm start`. Además, `serve` nos proporciona una interfaz ordenada que enumera 
los contenidos de nuestro directorio.

Puede ver la documentación oficial de este paquete [aquí](https://www.npmjs.com/package/serve).

#### Observaciones:
 1. Diferencias al instalar paquetes:
     - `--save-dev`: Se utiliza para guardar el paquete con fines de desarrollo. Ejemplo: 
      pruebas unitarias, minificación.
     - `--save`: Se utiliza para guardar el paquete con fines de producción. Ejemplo:
      librerías o frameworks.

 2. Al instalar nuestra dependencia notaremos que se generan dos archivos de forma automática:
    - `node_modules`: Carpeta que almacena las módulos de nuestro proyecto. A medida que 
    instale más dependencias, el tamaño de esta carpeta aumentará rápidamente.
    - `package-lock.json`: Archivo que realiza un seguimiento de todos los cambios que se realizan 
    en package.json o node_modules y nos indica la versión exacta del paquete instalado. 
    
 3. Los archivos `node_modules` y `package-lock.json` se reconstruyen al ejecutar el comando 
    `npm install`. npm buscará un archivo `package-lock.json` para instalar los módulos. Si no
    hubiera ningún archivo de bloqueo disponible, leería el archivo `package.json` para determinar
    las instalaciones. En general, la instalación se puede realizar de manera más rápida desde 
    `package-lock.json`, ya que el archivo de bloqueo contiene la versión exacta de los módulos y 
    sus dependencias, lo cual significa que npm no tiene que invertir tiempo en determinar una 
    versión adecuada para la instalación.
    
 4. Si hubiera un error al ejecutar los comandos de `npm`, puede acudir [aquí](https://bertofern.wordpress.com/2019/01/08/solucion-node-js-npm-no-reconocido-como-comando-interno-o-externo/).

## Paso N°4:
Configurar el script `start` en nuestro `package.json`. No olvide especificar correctamente
la ruta de la carpeta contenedora de nuestros archivos.

```js
"scripts": {
    "start": "serve ./src"
}
```

## Paso N°5:
Si todo ha ido bien, deberías poder arrancar el servidor web usando el comando `npm start` 
y con ello, dirígete a `http://localhost:5000` en tu navegador para poder ver la interfaz 
de tu programa.

¡A codear se ha dicho! :rocket:

---

## Estructura de un proyecto con Sass

Una de las ventajas de usar `SASS` es que nos permite dividir el código en varios archivos sin que ello afecte a su rendimiento. De esta tarea se encarga la directiva `@import`, y nos permite tener modulado y organizado nuestro código.

- `sass`: 
Carpeta contenedora de toda la estructura de nuestro código `SCSS`. Aquí incluiremos la siguiente estructura:

  - `base`: Carpeta que contiene las tipografías del proyecto, reset y normalizaciones de elementos `HTML` para eliminar inconsistencias.
  - `layout`: Carpeta que contiene la distribución de tu aplicación en partes. Ejemplo: `header`, `footer`, etc.
  - `components`: Carpeta que contiene porciones del proyecto que se utilizan en varias vistas.
  - `pages`: Carpeta que incluye los estilos para cada página (`home.scss`, `contact.scss`, etc …).
  - `themes`: Carpeta que incluye un theme para una parte de nuestro proyecto (extranet, admin, etc …).
  - `abstracts`: Carpeta que incluye helpers, mixins, funciones, variables y otras herramientas.
  - `vendor`: Carpeta que incluye archivos de librerías externas y que necesitará nuestro proyecto para poder funcionar (las grillas o reboot de `bootstrap` podrían ser un ejemplo).
  - `style.scss `: Fichero que controla todo nuestro proyecto y que contendrá todos los `@import` del mismo.

Puede ver un vídeo acerca de está estructura [aquí](https://www.youtube.com/watch?v=DACO5vYMEqU).

---

## Herramientas de Linting

- **Linting** es el proceso de ejecutar un programa que analizará el código en busca de posibles errores.
- **Linter**  es una herramienta que nos ayuda a seguir las buenas prácticas o guías de estilo en nuestro código fuente.

### [`htmlhint`](https://htmlhint.com/): 
Analiza código `HTML`.

#### Paso N°1:
Realice la instalación local.

```
$ npm install htmlhint --save-dev
```

#### Paso N°2:
Crear un archivo de configuración `.htmlhintrc` en la raíz de su proyecto. Puede añadir distintas [reglas](https://htmlhint.com/docs/user-guide/list-rules) de configuración.

```js
{
  "attr-value-not-empty": false
}
```

#### Paso N°3:
Configure el script correspondiente. Puede añadir parámetros del [CLI](https://htmlhint.com/docs/user-guide/usage/cli).

```js
// `-v` permite saber la versión instalada de htmlhint
 "scripts": {
    "htmlhint": "htmlhint -v src/*.html"
 }
```

#### Paso N°4:
Si todo ha ido bien, podrá ejecutar el comando `npm run htmlhint` para analizar el código `HTML`.


### [`stylelint`](https://stylelint.io/): 
Analiza sintaxis `CSS`. También `SCSS`, `Sass`, `Less` y `SugarSS`. 

#### Paso N°1:
Realice la instalación local junto a su configuración [standard](https://github.com/stylelint/stylelint-config-standard) o [recomendada](https://github.com/stylelint/stylelint-config-recommended).

##### Standard

```
$ npm install --save-dev stylelint stylelint-config-standard 
```

##### Recomendada

```
$ npm install stylelint stylelint-config-recommended --save-dev
```

#### Paso N°2:
Crear un archivo de configuración `.stylelintrc.json` o `.stylelint.config.js` en la raíz de su proyecto. Puede añadir distintas [reglas](https://stylelint.io/user-guide/rules/list) de configuración.

##### Standard

```js
// .stylelintrc.json
{
  "extends": "stylelint-config-standard"
}

```

##### Recomendada

```js
// .stylelint.config.js
module.exports = {
  extends: 'stylelint-config-recommended',
};
```

#### Paso N°3:
Configure el script correspondiente. Puede añadir parámetros del [CLI](https://stylelint.io/user-guide/usage/cli).

```js
// `--aei` permite que el proceso finalice sin generar un error cuando el patrón global no coincide con ningún archivo. 
 "scripts": {
     "stylelint": "stylelint --aei src/**/*.css"
 }
```

#### Paso N°4:
Si todo ha ido bien, podrá ejecutar el comando `npm run stylelint` para analizar el código `CSS`.


### [`stylelint-scss`](https://github.com/kristerkari/stylelint-scss): 
Es un plugin de `stylelint`. `stylelint` por sí solo soporta sintaxis `SCSS` (así como las sintaxis de otros preprocesadores). Sin embargo, `stylelint` se centra en general en `CSS` estándar.

`stylelint-scss` presenta reglas específicas para la sintaxis `SCSS`. Dicho esto, las reglas de este complemento se pueden usar con otras sintaxis, como Less o algunas sintaxis PostCSS. 

#### Paso N°1:
`stylelint-scss` es un complemento para `stylelint`, por lo que debe usarse con él. 

```
$ npm install --save-dev stylelint stylelint-scss
```

#### Paso N°2:
Crear un archivo de configuración `.stylelintrc.json` en la raíz de su proyecto. Agregue `stylelint-scss` a la matriz de complementos y las [reglas](https://stylelint.io/user-guide/rules/list) que necesita a la lista de reglas. Todas las reglas de `stylelint-scss` deben tener un espacio de nombres con scss. 

```js
{
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "scss/dollar-variable-pattern": "^foo",
    "scss/selector-no-redundant-nesting-selector": true,
    ...
  }
}
```

#### Paso N°3:
Configure el script correspondiente. Puede añadir parámetros del [CLI](https://stylelint.io/user-guide/usage/cli).

```js
// `--aei` permite que el proceso finalice sin generar un error cuando el patrón global no coincide con ningún archivo. 
 "scripts": {
     "stylelint": "stylelint --aei src/**/*.css src/**/*.scss"
 }
```

#### Paso N°4:
Si todo ha ido bien, podrá ejecutar el comando `npm run stylelint` para analizar el código `CSS` y `SCSS`.


### [`ESlint`](https://eslint.org/): 
Es una herramienta para identificar e informar sobre patrones encontrados en el código `ECMAScript` / `JavaScript`, con el objetivo de hacer que el código sea más coherente y evitar errores.

#### Paso N°1:
Realice la instalación local.

```
$ npm install --save-dev eslint
```

#### Paso N°2:
Ejecute el comando `eslint --init`. Después obtendrá un archivo `.eslintrc` en su directorio. Puede agregar algunas [reglas](https://eslint.org/docs/user-guide/configuring) de configuración.


#### Paso N°3:
Configure el script correspondiente. Puede añadir parámetros del [CLI](https://eslint.org/docs/user-guide/command-line-interface).

```js
// `--ext` especifica la extensión del archivo javascript. 
 "scripts": {
      "eslint": "eslint --ext .js src/"
 }
```

#### Paso N°4:
Si todo ha ido bien, podrá ejecutar el comando `npm run eslint` para analizar el código `JavaScript`.



