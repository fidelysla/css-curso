# Curso de Flexbox

Flexbox se base en una Estructura unidimencional de filas o columnas.

-   Contenedor Padre (**Flex Container**)
-   Elementos Hijos (**Flex Items**)
-   Eje Principal (**Main Axis**)
-   Eje Transversal (**Cross Axis**)

![Modelo de Flexbox](flexbox-model.png)

## Resumen

> -   `display: flex;` `display: inline-flex;`
> -   `flex-direction`
> -   `flex-wrap`
> -   `flex-flow`
> -   `justify-content`
> -   `align-items`
> -   `align-content`
> -   `flex-grow`
> -   `flex-shrink`
> -   `flex-basis`
> -   `flex`
> -   `order`
> -   `align-self`

## Display

`display: inline-flex|flex;`

```CSS
.container {
    /* DISPLAY */
    /* Define si se trabaja en bloque (flex) o en linea (inline-flex) */
    /* display: inline-flex|flex; */
    display: flex;
    display: inline-flex;
}
```

## El Flujo de Flexbox flex-direction y flex-wrap

<!-- `flex-direction: row|row-reverse|column|column-reverse` -->

```CSS
.container {
    background-color: #333;
    height: 30vh;

    display: flex;

    /** El Flujo de Flexbox - flex-direction y flex-wrap */

    /* FLEX-DIRECTION */
    /* Define el eje pricipal (main axis) row - x, column - y */
    /* flex-direction: row|row-reverse|column|column-reverse; */
    flex-direction: row-reverse;

    /* FLEX-WRAP */
    /* Define si la caja flexbox envuelve o NO a sus hijos */
    /* flex-wrap: nowrap|wrap|wrap-reverse; */
    flex-wrap: wrap-reverse;

    /* FLEX-FLOW */
    /* Shortcut de flex-direction y flex-wrap */
    flex-flow: column nowrap;
}
```

## Alineacion del Main Axis justify-content

<!-- `justify-content: flex-start|center|flex-end|space-between|space-around|space-evenly;` -->

```CSS
.container {
    background-color: #333;
    height: 30vh;

    display: flex;

    flex-direction: row;
    flex-wrap: wrap-reverse;
    flex-flow: row-reverse wrap-reverse;

    /** Alineacion del Main Axis - justify-content */

    /* JUSTIFY-CONTENT */
    /* Define la alineacion de los elementos hijos
       respecto del eje pricipal (main-axis), el main axis
       depende si en flex-direction es (row - x) (column - y) */
    /* justify-content: flex-start|center|flex-end|space-between|
       space-around|space-evenly; */
    justify-content: flex-start;
}
```

## Alineacion del Cross Axis align-items aligh-content

```CSS
.container {
    background-color: #333;
    height: 30vh;

    display: flex;
    /* flex-direction: row; */
    /* flex-wrap: wrap-reverse; */
    flex-flow: row-reverse wrap-reverse;

    justify-content: flex-start;

    /* Alineacion del Cross Axis - align-items y aligh-content */

    /* ALIGN-ITEMS */
    /* Define la alineacion de los hijos en el eje transversal
       (cross-axis), dentro de cada linea. */
    /* align-items: stretch|flex-start|flex-end|center|baseline; */
    align-items: stretch;

    /* ALIGN-CONTENT */
    /* Define la alineacion de los hijos en el eje transversal
       (cross-axis), no funciona cuando los hijos estan en UNA
       sola linea. (es necesario la alineacion en wrap). Trabaja
       cuando las filas son en grupo */
    /* align-content: flex-start|flex-end|center|space-between|
       space-around|space-evenly; */
    /* Para que funcione (stretch) no debe haber propiedades
       de ancho y alto */
    align-content: stretch;
}
```

```CSS
.item {
    border: medium solid #d1d1d1;
    /* width: 20%; */
    /* height: 20%; */
    background-color: #8e8e8e;
}
```

## Factor de Crecimiento flex-grow

```CSS
.container {
    background-color: #333;
    height: 30vh;
    width: 1000px;

    display: flex;

    flex-direction: row;
    flex-wrap: nowrap;
    flex-flow: row nowrap;

    justify-content: flex-start;

    align-items: stretch;
    align-content: flex-start;
}
```

```CSS
.item {
    border: medium solid #d1d1d1;
    /* width: 20%; */
    /* height: 20%; */
    background-color: #8e8e8e;
    width: 100px;

    /** Factor de Crecimiento - flex-grow  */

    /* FLEX-GROW */
    /* Cuando la caja de flexbox tenga espacio sobrante.
       Es la habilidad o el factor de crecer y aprovechar
       ese espacio.

    /* Define la proporcion de crecimiento del elemento.
       Dependiendo del espacio sobrante se calculara cuanto va a
       crecer cada elemento, tomando en cuento su factor de
       crecimiento, es decir que porcion de crecimiento tendra.
       (Valor por defecto es 0, NO se acepta valores nagativos)
       - 0: no crecera
       - 1,2,3,...: Indica la proporcion de crecimiento
         en relacion con otros  */

    /* Como se calcula:
       - Dividir el espacio sobrante entre el total de las
         proporciones que va a tomar cada elemento, ej 1, 3, 2 = 6
       - El valor de la divicion sera el factor de crecimiento,
         dependiendo de cuanto vale el width de cada elemento, se
         sumara con el factor de crecimiento. */
    flex-grow: 1;
}

.item:nth-child(2) {
    flex-grow: 3;
}

.item:nth-child(3) {
    flex-grow: 2;
}
```

## Factor de Reduccion flex-shrink

```CSS
.container {
    background-color: #333;
    height: 30vh;
    width: 100%;

    display: flex;

    flex-direction: row;
    flex-wrap: nowrap;
    flex-flow: row nowrap;

    justify-content: flex-start;

    align-items: stretch;
    align-content: flex-start;
}
```

```CSS
.item {
    border: medium solid #d1d1d1;
    /* width: 20%; */
    /* height: 20%; */
    width: 80px;
    background-color: #8e8e8e;

    /** Factor de Reduccion - flex-shrink */

    /* FLEX-SHRINK */
    /* Cuando la caja flexbox NO tenga espacio sobrante.
       Es la habilidad o el factor de encogerse.
       Valor por defecto es 1. NO se acepta valores nagativos */
    /* Se reducen proporcionamente dependiendo el numero de
       factor de cada elemento */
    /* Si el contenedor se reduce 40px, hay tres elementos hijos,
       el primero y el tercero se reduce 10px y el segundo 20px */
    flex-shrink: 1;
}

.item:nth-child(2) {
    /* flex-grow: 3; */
    /* Se reduce 2 veces mas que los otros */
    flex-shrink: 2;
}
```

## Tamaño de los hijos flexbox flex-basis

```CSS
.container {
    width: 100%;
    height: 400px;
    display: flex;

    flex-flow: row nowrap;
    /* flex-flow: column nowrap; */
        ⋮
}
```

```CSS
.item {
    flex-grow: 0;

    flex-shrink: 1;

    /* FLEX-BASIS */
    /* Es el tamaño del elemento hijo dentro de la linea
       de la caja flexbox.
       - Si la caja flexbox tiene dirección de fila (row),
         flex-basis representa el width.
       - Si la caja flexbox tiene dirección de columna (column),
         flex-basis representa el height.
       - Ignora el width o el height asignado.
       - Valor por defecto auto. */

    width: 200px;
    /* height: 50px; */

    flex-basis: auto;
    flex-basis: 100px;
}
```

## Shorthand flex flex-grow flex-shrink flex-basis

```CSS
.item {
    /* FLEX */
    /* Es un shorthand de las propiedades flex-grow
       flex-shrink flex-basis, es ese orden */
    /* flex: flex-grow flex-shrink flex-basis; */
    /* flex: 0 1 auto; (default) */
    flex: 0 1 auto;
    flex: 1 1 auto;
    flex: 1 0 auto;
    flex: 0 1 150px;
}
```

## Orden y Alineación de hijos flexbox order y align-self

```CSS
.container {
    width: 100%;
    height: 400px;
    display: flex;

    flex-flow: row nowrap;
    /* flex-flow: column nowrap; */
        ⋮
}
```

```CSS
.item {
    flex: 0 1 auto;

    /* ORDER */
    /* Representa el orden que tendran los elementos hijos en la
       la caja flexbox
       - Valor por defecto 0.
       - Se aceptan valores positivos y negativos.
       - Un valor menor siempre irá antes que un valor mayor. */
    order: 0;
    /* order: 10; */

    /* ALIGN-SELF */
    /* Sobreescribe el valor de la propiedad align-items sólo
       para el elemento hijo especificado */
    /* align-self: stretch|flex-start|flex-end|center|baseline; */
    align-self: stretch;
}

.item:nth-child(2) {
    order: 1;
    order: -1;
}

.item:nth-child(3) {
    align-self: flex-end;
    align-self: flex-start;
    align-self: center;
}
```

## Flexbox Grid Artesanal

| 1 columna    | 2 columna   | 3 columna        | 4 columna   | 6 columna         |
| ------------ | ----------- | ---------------- | ----------- | ----------------- |
| 575px - 100% | 576px - 50% | 768px - 33.3333% | 992px - 25% | 1200px - 16.6667% |
| 575px        | 288px       | 256px            | 248px       | 200px             |

```HTML
<div class="container">
    <section class="flex-container">
        <article class="flex-item">Item 1</article>
        <article class="flex-item">Item 2</article>
        <article class="flex-item">Item 3</article>
        <article class="flex-item">Item 4</article>
        <article class="flex-item">Item 5</article>
        <article class="flex-item">Item 6</article>
        <article class="flex-item">Item 7</article>
        <article class="flex-item">Item 8</article>
        <article class="flex-item">Item 9</article>
        <article class="flex-item">Item 10</article>
        <article class="flex-item">Item 11</article>
        <article class="flex-item">Item 12</article>
        <article class="flex-item">Item 13</article>
        <article class="flex-item">Item 14</article>
        <article class="flex-item">Item 15</article>
        <article class="flex-item">Item 16</article>
        <article class="flex-item">Item 17</article>
        <article class="flex-item">Item 18</article>
        <article class="flex-item">Item 19</article>
    </section>
</div>
```

```CSS
*,
*::after,
*::before {
    box-sizing: border-box;
}

body {
    background-color: #569;
    margin: 0;
}

.container {
    margin: auto;
    max-width: 1200px;
}

.flex-container {
    display: flex;
    flex-flow: row wrap;
}

.flex-item {
    border: thin solid black;
    flex: 0 0 100%;
    padding: .5rem;
}

.flex-item:nth-child(even) {
    background-color: rgb(73, 73, 237);
    color: aliceblue;
}

.flex-item:nth-child(odd) {
    background-color: #ffff35e1;
    color: black;
}

@media (min-width: 576px) {
    .flex-item {
        flex: 0 0 50%;
    }
}
@media (min-width: 768px) {
    .flex-item {
        flex: 0 0 33.3333%;
    }
}
@media (min-width: 992px) {
    .flex-item {
        flex: 0 0 25%;
    }
}
@media (min-width: 1200px) {
    .flex-item {
        flex: 0 0 16.6667%;
    }
}
```

## Ejemplos Practicos Flexbox

```HTML
<header class="titulares header">
    <!-- <h2>Header</h2> -->
     <div class="logo">Logo</div>
     <nav class="menu">
        <ul>
            <li><a href="#">Sección 1</a></li>
            <li><a href="#">Sección 2</a></li>
            <li><a href="#">Sección 3</a></li>
            <li><a href="#">Sección 4</a></li>
        </ul>
     </nav>
</header>

<main>
    <!-- <h2>Contenido</h2> -->
    <article class="hero-image">
        <div>
            <h1>Flexbox is f*king COOL</h1>
        </div>
    </article>
</main>

<footer class="titulares">
    <h2>Sticky Footer</h2>
</footer>
```

```CSS
*,
*::after,
*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex-grow: 1;
}

.titulares {
    padding: 1rem;
    background-color: #222;
    color: #eee;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.menu ul {
    list-style-type: none;
}

.hero-image {
    background-image: url("../assets/puesta-sol.jpg");
    background-repeat: no-repeat;
    color: #fff;
    min-height: 100vh;
}

.hero-image div {
    background-color: rgba(0, 0, 0, 0.75);
    min-height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.hero-image  h1 {
    font-size: 5vw;
}

@media screen and (min-width: 1024px) {
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .menu ul {
        display: flex;
    }

    .menu li {
        padding: .5rem;
    }
}
```

## Responsive sin Media Queries con Flexbox

```HTML
<section class="flex-responsive">
    <article class="flex-responsive-item">Item Responsivo 1</article>
    <article class="flex-responsive-item">Item Responsivo 2</article>
    <article class="flex-responsive-item">Item Responsivo 3</article>
    <article class="flex-responsive-item">Item Responsivo 4</article>
    <article class="flex-responsive-item">Item Responsivo 5</article>
    <article class="flex-responsive-item">Item Responsivo 6</article>
    <article class="flex-responsive-item">Item Responsivo 7</article>
    <article class="flex-responsive-item">Item Responsivo 8</article>
    <article class="flex-responsive-item">Item Responsivo 9</article>
    <article class="flex-responsive-item">Item Responsivo 10</article>
    <article class="flex-responsive-item">Item Responsivo 11</article>
    <article class="flex-responsive-item">Item Responsivo 12</article>
    <article class="flex-responsive-item">Item Responsivo 13</article>
    <article class="flex-responsive-item">Item Responsivo 14</article>
    <article class="flex-responsive-item">Item Responsivo 15</article>
    <article class="flex-responsive-item">Item Responsivo 16</article>
    <article class="flex-responsive-item">Item Responsivo 17</article>
    <article class="flex-responsive-item">Item Responsivo 18</article>
    <article class="flex-responsive-item">Item Responsivo 19</article>
</section>
```

```CSS
*,
*::after,
*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
}

.flex-responsive {
    display: flex;
    flex-flow: row wrap;
}

.flex-responsive-item {
    border: thin solid #f60;
    flex: 1 1 200px;
    width: 250px;
    text-align: center;
}
```

## Recursos Adicionales

-   [CSS TRICKS](https://css-tricks.com)
