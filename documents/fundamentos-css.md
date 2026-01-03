# Fundamentos CSS

[Fundamentos](fundamentos-css.md) |
[Unidades y Estilos](unidades-estilos-css.md) |
[Efectos Visuales y Movimientos](efectos-visuales-movimientos-css.md)

Cascading Style Sheets - Hojas de Estilo en Cascada

> -   [Sintaxis Básica](#sintaxis-básica)
> -   [Selectores Básicos](#selectores-básicos-etiquetas-identificadores-y-clases)
> -   [Selectores Avanzados](#selectores-avanzados-selector-de-hijos-directos-y-descendientes) `>` `~` `+`
> -   [Selectores de Atributos](#selectores-de-atributos) `[]` `[*=]` `[^=]` `[$=]` `[~=]` `[|=]`
> -   [Selector Universal](#selector-universal) `*`
> -   [Pseudoclases](#pseudoclases) `:hover` `:required` `:nth-child()` `:first-of-type`
> -   [Pseudoelementos](#pseudoelementos) `::before` `::after` `::first-letter` `::placeholder`
> -   [Agrupación de selectores](#agrupación-de-selectores)
> -   [El Algoritmo de CSS](#el-algoritmo-de-css)
> -   [Reseteo y Normalización de estilos](#reseteo-y-normalización-de-estilos)
> -   [Prefijos de los navegadores](#prefijos-de-los-navegadores) `-webkit` `-moz` `-ms`
> -   [Modelo de Caja](#modelo-de-caja) `width` `height` `border` `top` `bottom` `right` `left`
> -   [Posicionamiento CSS](#posicionamiento-css) `static` `relative` `absolute` `fixed` `sticky`

## Sintaxis básica

/\* Comentario en CSS \*/

Regla CSS consta de dos partes:

1. El selector
2. Bloque de declaraciones

```CSS
.bloque-de-declaraciones {
    atributo: valor;
    atributo-de-mas-de-dos-palabras: otro-valor;
}
```

```CSS
h1 {
    color: orangered;
    background-color: skyblue;
}
```

## Formas de invocación CSS

-   En Linea

```HTML
<p><i style="font-weight: bold; color: orangered ;">Cascading Style Sheets</i> - Hojas de Estilo en Cascada</p>
```

-   Dentro de HTML - Interno

```HTML
<style>
    h1 {
        color: yellowgreen;
    }
</style>
```

-   Hoja de CSS - Externo

```HTML
<link rel="stylesheet" href="css/style.css">
```

-   Importar otra hoja CSS

```CSS
/* Mala práctica, son bloqueantes cuando el browser lee la instruccion */
@import url("otra-hoja.css");
```

## Versiones, documentación y enlaces de referencia

-   https://es.wikipedia.o...
-   https://www.w3.org/htm...
-   https://www.w3.org/sta...
-   https://www.w3.org/TR/...
-   https://developer.mozi...
-   CSS Reference - https://cssreference.io/
-   Can I Use - https://caniuse.com/
-   Code Guide - https://codeguide.co/

## Selectores básicos Etiquetas Identificadores y Clases

**Selectores Básicos**

1. Etiquetas - Son elementos html
2. Identificadores - Atributo id - #
3. Clases - atributo class - .

```HTML
<p></p>
<p class="text-32 bg-skyblue"></p>
<p class="text-20 bg-steelblue text-white"></p>
<p class="text-32 bg-steelblue text-white"></p>
```

```CSS
p {
    color: midnightblue;
}

/* Dar estilos con Id se considera un AntiPatrón */
#parrafo-dos {
    background-color: skyblue;
}
```

```CSS
/* Dar estilos con clases nos permite reutilizar nuestro codigo CSS */
.bg-skyblue {
    background-color: skyblue;
}

.bg-steelblue {
    background-color: steelblue;
}

.text-20 {
    font-size: 20px;
}

.text-32 {
    font-size: 32px;
}

.text-white {
    color: white;
}
```

## Selectores Avanzados Selector de hijos directos y descendientes

```HTML
<!-- Selector de hijos directos -->
<ul class="hijos-directos">
    <li><b>Primavera</b></li>
</ul>

<!-- Selector de hijos descendientes -->
<ul class="hijos-descendientes">
    <li><b>Primavera</b></li>
</ul>
```

```CSS
.hijos-directos > li {
    background-color: thistle;
}

.hijos-descendientes b {
    background-color: thistle;
}
```

## Selector de hermanos y adyacente

```HTML
<ul>
    <li><b>Primavera</b></li>
    <li class="hermanos-general"><b>Verano</b></li>
    <li><b>Otoño</b></li>
    <li><b>Invierno</b></li>
</ul>
<ul>
    <li><b>Primavera</b></li>
    <li class="hermanos-adyacentes"><b>Verano</b></li>
    <li><b>Otoño</b></li>
    <li><b>Invierno</b></li>
</ul>
```

```CSS
/* Los selectores de hermanos (tanto general y adyacentes)
   va a aplicar a los elementos que son hermanos y que esten
   por debajo del elemento de referencia */

/* Va aplicar a todos los hermanos por debajo */
.hermanos-general ~ li {
    background-color: thistle;
}

/* Va aplicar a solo el siguiente hermano por debajo */
.hermanos-adyacentes + li {
    background-color: thistle;
}
```

## Selectores de Atributos

```HTML
<nav class="selectores-atributos">
  <ul>
    <li><a href="https://jonmircha.com" rel="noopener">Inicio</a></li>
    <li><a href="https://jonmircha.com/cursos" class="menu-item cursos button" target="_blank" rel="noopener">Cursos</a></li>
    <li><a href="http://jonmircha.com/blog" target="_blank" rel="noopener">Blog</a></li>
    <li><a href="https://jonmircha.com/cv" target="_blank" rel="noopener">CV</a></li>
    <li><a href="https://jonmircha.com/ahora" class="menu item ahora button" target="_blank" rel="noopener">Ahora</a></li>
    <li><a href="http://jonmircha.com/notas" class="menu-item notas button" target="_blank" rel="noopener">Notas</a></li>
    <li><a href="index.html#temario-css">Regresar al temario</a></li>
  </ul>
</nav>
```

```CSS
.selectores-atributos a[href] {
    color: orangered;
}

.selectores-atributos a[target="_blank"] {
    font-weight: bold;
}

/* El comodin * aplica el estilo si contiene el texto
 en cuestion en cualquier parte*/
.selectores-atributos a[href*="jonmircha"] {
    font-size: 24px;
}

/* El comodin ^ aplica el estilo si contiene el texto
 en cuestion al inicio */
.selectores-atributos a[href^="http://"] {
    text-decoration: none;
}

/* El comodin $ aplica el estilo si contiene el texto en
cuestion al final */
.selectores-atributos a[href$=".com"] {
    background-color: black;
}

/* El comodin ~ aplica el estilo si contiene el texto en
cuestion en una lista separada por espacios */
.selectores-atributos a[class~="cursos"] {
    background-color: midnightblue;
}

/* El comodin | aplica el estilo si contiene el texto en
cuestion en una lista separada por espacios y que despues
del texto en cuestion venga un guion medio -*/
.selectores-atributos a[class|="menu"] {
    font-style: italic;
}
```

## Selector Universal

```HTML
<ul class="selector-universal">
    <li><b>Primavera</b></li>
    <li><b>Verano</b></li>
    <li><b>Otoño</b></li>
    <li><b>Invierno</b></li>
</ul>
```

```CSS
* {
    font-family: sans-serif;
}

.selector-universal * {
    font-size: 24px;
}
```

## Pseudoclases

Dan estilos dependiendo del contexto, posicion o estado del elemento.

```HTML
<form class="form-pseudoclases">
    <input type="text" name="nombre"
     placeholder="Escribe tu nombre" required>
    <input type="email" name="correo"
     placeholder="Escribe tu correo" required>
    <input type="submit">
    <input type="submit" disabled>
</form>
<nav class="menu-pseudoclases">
    <a href="#seccion1">Seccion 1</a>
    <a href="#seccion2">Seccion 2</a>
    <a href="#seccion3">Seccion 3</a>
    <a href="#seccion4">Seccion 4</a>
</nav>
<p class="p-pseudoclases">
    Lorem ipsum dolor, sit amet consectetur adipisicing.
</p>
```

```CSS
/* Propias para elementos de formulario */
.form-pseudoclases *:required {
    border-color: yellow;
}

.form-pseudoclases *:valid {
    border-color: green;
}

.form-pseudoclases *:invalid {
    border-color: red;
}

.form-pseudoclases *:focus {
    background-color: skyblue;
}

.form-pseudoclases *:disabled {
    background-color: pink;
}

/* Enlaces */
.menu-pseudoclases a:visited {
    color: olive;
}

.menu-pseudoclases a:hover {
    color: orangered;
}

.p-pseudoclases:hover {
    font-size: 20px;
}

#temario-css:target {
    background-color: lightgreen;
}
```

### Pseudoclases por posición y tipo

```HTML
<ol class="lista-pseudoclases">
    <li>Mú de Aries</li>
    <li>Aldebarán de Tauro</li>
    <li>Saga & Kanon de Géminis</li>
    <li>Death Mask de cáncer</li>
    <li>Aioria de Leo</li>
    <li>Shaka de Virgo</li>
    <li>Dohko de libra</li>
    <li>Milo de escorpión</li>
    <li>Aioros de sagitario</li>
    <li>Shura de capricornio</li>
    <li>Camus de acuario</li>
    <li>Afrodita de Piscis</li>
</ol>
```

```CSS
/* Posición */
.lista-pseudoclases li:first-child {
    color: green;
}

.lista-pseudoclases li:last-child {
    color: violet;
}

.lista-pseudoclases li:nth-child(3) {
    color: navy;
}

.lista-pseudoclases li:nth-child(4n) {
    font-size: 20px;
}

.lista-pseudoclases li:nth-child(3n + 1) {
    font-weight: bold;
}

/*
even - par
odd - inpar
*/
.lista-pseudoclases li:nth-child(even) {
    background-color: yellow;
}

.lista-pseudoclases li:nth-child(odd) {
    background-color: orangered;
}
```

```HTML
<article class="articulo-pseudoclases">
    <header>Esto es un header</header>
    <p>Esto es un p</p>
    <div>Esto es un div</div>
    <p>Esto es un p</p>
    <section>Esto es una section</section>
    <p>Esto es un p</p>
    <div>Esto es un div</div>
    <p>Esto es un p</p>
    <footer>Esto es un footer</footer>
</article>
```

```CSS
/* Tipo */

.articulo-pseudoclases p:first-of-type {
    background-color: pink;
}

.articulo-pseudoclases p:last-of-type {
    background-color: pink;
}

.articulo-pseudoclases p:nth-of-type(3) {
    background-color: fuchsia;
}

/* negación */
.articulo-pseudoclases *:not(p) {
    background-color: beige;
}
```

## Pseudoelementos

Dan estilos a partes especificas de un elemento, se usa el `::` para diferenciarlos de las pseudoclases.

```HTML
<p>
    <i>Bandai Myth Cloth Ex</i>
    <span class="saga-geminis">Saga de Géminis</span>
    <span class="saga-precio">500</span>
</p>
```

```CSS
.saga-geminis::before {
    content: " 🤼";
}

.saga-geminis::after {
    content: "♊ ";
}

.saga-precio::before {
    content: "$";
    font-weight: bold;
}

.saga-precio::after {
    content: "USD";
    font-weight: bold;
}
```

```HTML
<p class="p-pseudolementos">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas amet rerum laudantium enim, suscipit non inventore laboriosam. Commodi enim reprehenderit...
</p>
```

```CSS
.p-pseudolementos::first-letter {
    font-weight: bold;
    font-size: 32px;
}

.p-pseudolementos::first-line {
    color: coral;
}

.p-pseudolementos::selection {
    color: greenyellow;
    background-color: black;
}
```

```HTML
<input class="input-pseudoelementos" type="text" name="nombre" placeholder="Escribe tu nombre">
```

```CSS
.input-pseudoelementos::placeholder {
    color: green;
}
```

## Agrupación de selectores

```HTML
<form class="form-agrupar-selectores">
    <input type="text" name="nombre" placeholder="Escribe tu nombre">
    <input type="email" name="correo" placeholder="Escribe tu correo">
    <textarea name="comentario" placeholder="Escribe tus comentarios" cols="30" rows="10"></textarea>
    <input type="submit">
</form>
```

```CSS
.form-agrupar-selectores input[type="text"],
.form-agrupar-selectores input[type="email"],
.form-agrupar-selectores textarea {
    border-color: yellow;
    border-width: 2px;
    border-style: dashed;
    background-color: black;
    font-size: 20px;
    display: block;
    width: 300px;
}
```

## El Algoritmo de CSS

Es la forma en que el navegador aplica los estilos al documento HTML. Es vital entender este concepto para que entiendas cómo se aplican y en algunas ocasiones se sobrescriben las reglas CSS.

1. **La Cáscada**
2. **La Especificidad**
3. **La Herencia**

### La Cascada

La Cascada es mecanismo en el que el navegador aplica los estilos. Y toma en cuenta lo siguiente en este orden.

1. El Origen del Código:
    - El User Agent (los estilos por defecto del navegador)
    - Personalizaciones del usuario.
    - Los estilos del autor.
2. La Especificidad de Selector.
3. Orden de Aparición

### La Especificidad

La especificidad es el peso que tiene un selector cuando hay conflicto de estilos. Se calcula de la siguiente forma:

| Selector                         |                Peso |
| :------------------------------- | ------------------: |
| Etiquetas html y pseudoelementos |         `(0,0,0,1)` |
| Clases, atributos y pseudoclases |         `(0,0,1,0)` |
| Identificadores                  |         `(0,1,0,0)` |
| Estilos en línea                 |         `(1,0,0,0)` |
| `!Important`                     | Rompe especificidad |

```HTML
<blockquote id="cita-marco" class="cita-marco"
 style="background-color: rebeccapurple;">
    Sé tolerante con los demás y estricto contigo mismo.
    - <cite>Marco Aurelio</cite>
</blockquote>
```

```CSS
blockquote#cita-marco.cita-marco {
    background-color: lightsteelblue;
}

blockquote {
    background-color: burlywood;
}

#cita-marco {
    background-color: lightgreen;
}

blockquote.cita-marco {
    background-color: tomato;
}

.cita-marco {
    background-color: cornflowerblue !important;
}

.cita-marco {
    background-color: mediumaquamarine;
}

blockquote#cita-marco {
    background-color: lightsalmon;
}

.cita-marco {
    background-color: moccasin !important;
}
```

### La Herencia

Es la capacidad de un selector de obtener (heredar) los valores de sus ancestros más cercanos, para aplicarla se usa el valor inherit, si
queremos evitarla podemos asignar otro valor o inicializar la propiedad
en cuestión con el valor inicial.

```CSS
.cita-marco {
    background-color: moccasin !important;
    background-color: darkorange !important;
    font-size: 32px;
    border-style: dotted;
    border-color: red;
}

.cita-marco cite {
    background-color: pink;
    background-color: inherit;
    font-size: 24px;
    font-size: initial;
    border-style: inherit;
    border-color: inherit;
    border-color: initial;
}
```

## Reseteo y Normalización de estilos

```HTML
<link rel="stylesheet" href="css/normalize-v8-0-1.css">
```

## Prefijos de los navegadores

Prefijos de los navegadores
https://autoprefixer.github.io/

```CSS
.example {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
```

## Modelo de Caja

Modelo de Caja: Es la forma en que CSS ve a los elementos HTML y ¿Comó los ve? Como si fueran cajas con las siguientes propiedades:

1. El contenido (content): El contenido (texto) del elemento HTML, tomando en cuenta sus dimensiones (width & height).
2. El borde (border): Lo que delimita cada uno de los elementos HTML.
3. El relleno (padding): Son las distancias internas (La distancia del borde al contenido).
4. El márgen (margin): Son las distancias externas (La distancia entre el elemento html y sus elementos hermanos o padres)

Dentro del modelo de caja hay que considerar que una caja tendrá 4 lados:

1. Arriba (top)
2. Derecha (right)
3. Abajo (bottom)
4. Izquierda (left)

### Width & Height

```HTML
<h1>Modelo de Caja en CSS</h1>
```

```CSS
h1 {
    width: 400px;
    height: 200px;
    border-width: 3px;
    border-style: solid;
}
```

### Border

```CSS
h1 {
    /* background-color: skyblue; */
    width: 400px;
    height: 200px;
    /* propiedades de tipo shorthand */
    border-color: green;
    border-top-color: red;
    border-width: thick; /* thin 1px,medium 3px,thick 5px */
    border-style: solid;
    border: 2px dashed blue;
}
```

### Margin y Padding

Esto aplica a margin y padding

1 valor = aplica a los 4 lados

2 valores =

-   primer valor (vertical top/bottom)
-   segundo valor (horizontal left/right)

3 valores =

-   primer valor (top)
-   segundo valor (left/right)
-   tercer valor (bottom)

4 valores = Piensa en las manecillas del reloj

-   primer valor (top) 12
-   segundo valor (right) 3
-   tercer valor (bottom) 6
-   cuarto valor (left) 9

| Valores   |                          Distribucion |
| :-------- | ------------------------------------: |
| 1 Valor   | Los 4 lados `(top/right/bottom/left)` |
| 2 Valores |         `(top/bottom)` `(left/right)` |
| 3 Valores |     `(top)` `(left/right)` `(bottom)` |
| 4 Valores | `(top)` `(right)` `(bottom)` `(left)` |

```HTML
<div class="caja-uno">Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Aut quaerat quasi assumenda nesciunt architecto perspiciatis iusto numquam
    molestiae itaque atque recusandae hic aliquid iste minima</div>
<div class="caja-dos">Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Aut quaerat quasi assumenda nesciunt architecto perspiciatis iusto numquam
    molestiae itaque atque recusandae hic aliquid iste minima</div>
```

```CSS
.caja-uno,
.caja-dos {
    background-color: chocolate;
    border: medium solid orange;
    /* 1 valor */
    padding: 20px;
    margin: 20px;
    /* 2 valores */
    padding: 20px 40px;
    margin: 40px 20px;
    /* 3 valores */
    padding: 0 40px 20px;
    margin: 50px 30px 0;
    /* 4 valores */
    padding: 0 40px 20px 50px;
    margin: 100px 50px 30px 0;
}
```

### Cajas de Línea VS Cajas de Bloque

Cajas de Línea:

-   Ocupan el espacio necesario para mostrar su contenido.
-   No tienen dimensiones modificables (alto, ancho).
-   Permiten otros elementos a su lado.
-   Padding y margin solo empujan a elementos adyacentes en en horizontal, NUNCA EN VERTICAL.

Cajas de Bloque:

-   Ocupan todo el ancho disponible, lo que genera saltos de línea.
-   Tienen dimensiones modificables (alto, ancho)
-   No permiten otros elementos a su lado (aunque especifique un ancho, sigue ocupando todo el espacio disponible a lo ancho, generando saltos de línea.

### Propiedad Display

-   inline
-   block
-   inline-block: Se comporta como un elemento de línea pero acepta modificar sus dimensiones (alto y ancho)
-   none
-   table
-   list-item
-   flex
-   grid

```CSS
.caja-linea-bloque {
    display: inline-block;
}

.caja-none {
    display: none;
}
```

### Propiedad Visibility

```CSS
.caja-hidden {
    visibility: hidden;
}
```

### Propiedad Overflow

```CSS
.over-flow {
    background-color: darkturquoise;
    width: 200px;
    height: 100px;
    padding: 7px;
    overflow: visible;
    overflow: hidden;
    overflow: scroll;
    overflow: auto;
    /* overflow-y: scroll; */
    /* overflow-x: scroll; */
}
```

### Tamaño de caja - Box Sizing

```HTML
<div class="box-sizing-content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nobis blanditiis doloremque minus magni ab
</div>
<div class="box-sizing-border">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quia expedita corporis delectus nesciunt nam
</div>
<br>
<article class="container-col-3">
    <section class="item">Sección 1</section>
    <section class="item">Sección 2</section>
    <section class="item">Sección 3</section>
</article>
```

```CSS
.box-sizing-content,
.box-sizing-border {
    background-color: deepskyblue;
    box-sizing: content-box;
    width: 500px;
    height: 250px;
    padding: 10px;
    border: thick solid black;
    /* w 500 + 10 + 10 + 5 + 5 = 530 */
    /* h 250 + 10 + 10 + 5 + 5 = 280 */
}

.box-sizing-border {
    box-sizing: border-box;
}

.container-col-3 {
    background-color: burlywood;
    width: 600px;
    height: 300px;
    margin-top: 20px;
}

.container-col-3 > * {
    box-sizing: border-box;
    background-color: goldenrod;
    width: 200px;
    border: thin solid red;
    padding: 10px;
    float: left;
}

/*
apply a natural box layout model to all elements,
but allowing components to charge
*/

html {
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}
```

### Propiedades Float y Clear

```HTML
<article class="container-floats">
    <section class="float-right">Este elemento flota a la derecha</section>

    <section class="float-left">Este elemento flota a la izquierda</section>
</article>
<div class="clearfix"></div>
<article>
    <section class="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto dolor officiis velit enim voluptatum nihil commodi esse vero voluptate et perspiciatis ipsam iusto tempore eaque quasi ad aut, corporis voluptates?</section>
</article>
```

```CSS
.container-floats {
    background-color: cornflowerblue;
}

.float-left {
    float: left;
}

.float-right {
    float: right;
}

.clearfix {
    clear: both;
}
```

### Colapso de márgenes verticales

```HTML
<article class="margin-collapse">
    <section>Seccion 1</section>
    <section>Seccion 2</section>
</article>
```

```CSS
.margin-collapse {
    background-color: skyblue;
}

.margin-collapse section {
    border: thin solid black;
    margin-top: 16px;
    margin-bottom: 16px;
}
```

### Adición de márgenes horizontales

```HTML
<article class="margin-collapse">
    <section>Seccion 1</section>
    <section>Seccion 2</section>
    <section><span>Span 1</span><span>Span 2</span><span>Span 3</span></section>
</article>
```

```CSS
.margin-collapse span {
    border: thin solid black;
    display: inline-block;
    margin-right: 16px;
    margin-left: 16px;
}
```

### Centrado de Cajas

```HTML
<article class="sitio-web">
    <header>Cabecera</header>
    <main>Contenido Pricipal</main>
    <footer>Pié de página</footer>
</article>
```

```CSS
.sitio-web {
    border: thin solid black;
    background-color:  thistle;
    width: 800px;
    height: 1000px;
    padding: 16px;
    margin-left: auto;
    margin-right: auto;
}
```

## Posicionamiento CSS

Las propiedades FLOAT y POSITION nos permiten modificar la posición natural de cualquier
elemento del documento HTML.

El navegador coloca cada elemento teniendo en cuenta el orden en el que aparece en el
documento y su tipo de visualización dependiendo si es un elemento de línea o de bloque.

Con FLOAT y POSITION podemos modificar este comportamiento.

Elementos Flotantes:

-   **float** : Convierte un elemento en flotante, desplazándolo hasta la zona más a la izquierda
    o más a la derecha de la posicion en la que originalmente se encontraba.
-   **clear** : Limpia la flotación (left, right, both)

Tipos de Posicionamiento:

-   static (default)
-   relative
-   absolute
-   fixed
-   sticky

Para mover los elementos posicionados se activan las propiedades:

-   top (vertical - eje Y)
-   bottom (vertical - eje Y)
-   left (horizontal - eje X)
-   right (horizontal - eje X)
-   z-index (profundidad - eje Z)

Las propiedades top y left van a tener preferencias por sobre bottom y right
respectivamente.

Estás 5 propiedades no funcionan con el valor de static.

### Posicionamiento Static

**Static**: Es el valor por defecto, significa que el elemento respeta el flujo del documento HTML, por lo que no se pude mover ni posicionar.

```HTML
<div class="static">Caja Estática</div>
```

```CSS
.static {
    background-color: yellow;
    position: static;
    top: 10px;
    left: 10px;
}
```

### Posicionamiento Relative

**Relative**: El elemento conserva sus dimensiones y posición original en el flujo del documento. Si se mueve toma como referencia su posición original.

```HTML
<div class="relative">Caja Relativa</div>
```

```CSS
.relative {
    background-color: turquoise;
    position: relative;
    width: 300px;
    height: 50px;
    /* top: 50px; */
    /* left: 50px; */
    bottom: 50px;
    right: 50px;
    top: -30px;
    left: -10px;
    top: 300px;
    left: 50px;
}
```

### Posicionamiento Absolute

**Absolute**: El elemento pierde sus dimensiones y posición oroginal
en el flujo del documento. Si se mueve puede tomar como referencia 2
elementos:

1. El primer ancestro con posicionamiento relativo.
1. Si no encuentra un ancestro relativo, se mueve respecto del documento HTML.

```HTML
<div class="absolute">Caja Absoluta</div>
<section class="relative-parent">
    <div class="absolute-child">
        Caja Absoluta con Ancestro Relativo
    </div>
</section>
```

```CSS
.absolute {
    background-color: tomato;
    position: absolute;
    width: 200px;
    height: 50px;
    /* top: 0; */
    /* left: 0; */
    /* top: 100px; */
    /* left: 100px; */
    right: 0;
    bottom: 0;
}

.relative-parent {
    background-color: khaki;
    width: 600px;
    height: 50px;
    position: relative;
    top: 50px;
    left: 50px;
}

.absolute-child {
    background-color: lightcoral;
    position: absolute;
    /* left: 0; */
    /* top: 0; */
    /* bottom: 0; */
    /* right: 0; */
    top: -50px;
    left: -30px;
}
```

### Posicionamiento Fixed

**Fixed**: El elemento pierde sus dimensiones y posición original en el flujo del documento. Si se mueve toma como referencia el documento HTML y queda fijo en la posición, cuando el scroll se mueva, el elemento no lo hará, queda FIJO.

```HTML
<div class="fixed">Caja Fija</div>
```

```CSS
.fixed {
    background-color: lightgreen;
    position: fixed;
    width: 300px;
    height: 100px;
    /* right: 20px; */
    /* bottom: 10px; */
    top: 30px;
    left: 400px;
}
```

### Posicionamiento Sticky

**Sticky**: Es una combinación de posicionamiento relative y fixed, para este posicionamiento las propiedades de top, left, bottom y right no mueven el elemento, sirven como un punto de referencia, mientras no lleguen a ese valor el elemento se comporta como relative, cuando llega se convierte en fixed.

Para que este comportamiento funcione el elemento sticky debe ser hijo directo del body o su elemento contenedor debe tener dimensiones definidas y sólo será Sticky dentro de las dimensiones de su contenedor padre.

```HTML
<div class="sticky">Caja Pegajosa</div>
<section class="sticky-parent">
    <div class="sticky-child">Caja Pegajosa como hijo</div>
</section>
```

```CSS
.sticky {
    background-color: lightskyblue;
    position: sticky;
    top: 50px;
}

.sticky-parent {
    border: thin dashed black;
    height: 600px;
}

.sticky-child {
    background-color: lightslategray;
    position: sticky;
    top: 100px;
    width: 300px;
}
```

### Propiedad z-index

**Z-Index**: Propiedad que permite controlar la profundidad de los elementos posicionados, su valor por defecto es auto, acepta números positivos, negativos y cero.

A mayor valor el elemento está más al frente, a menor valor más al fondo.

Un elemento padre nunca podrá estar sobre sus elementos hijos, sin embargo los elementos hijos si pueden dándoles un valor negativo y que el elemento padre no tenga definido valor de z-index.

```HTML
<div class="z-index-1">Probando z-index caja 1</div>
<div class="z-index-2">Probando z-index caja 2</div>

<section class="z-index-parent">
    <div class="z-index-child">Hijo z-index</div>
</section>
```

```CSS
.z-index-1,
.z-index-2 {
    background-color: mediumaquamarine;
    border: thin solid black;
    position: relative;
    width: 200px;
    height: 200px;

}

.z-index-1 {
    z-index: 1;
    z-index: 0;
}

.z-index-2 {
    top: -202px;
    left: 100px;
    z-index: 2;
    z-index: -1;
}

.z-index-parent {
    background-color: mediumorchid;
    width: 300px;
    height: 300px;
    position: relative;
    /* z-index: 2; */
}

.z-index-child {
    background-color: mediumvioletred;
    position: relative;
    width: 150px;
    height: 150px;
    top: -75px;
    left: 75px;
    z-index: -1;
}
```

### Márgenes negativos

```HTML
<br>
<div class="box">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, dolore animi. Dolorum modi ullam sint unde, nemo architecto sunt sapiente, recusandae cum cupiditate sequi veritatis vel perspiciatis fuga. Dolor, excepturi.
</div>
```

```CSS
.box {
    background-color: sandybrown;
    padding: 20px;
    margin-top: -30px;
    margin-left: -30px;
    padding-right: -30px;
}
```
