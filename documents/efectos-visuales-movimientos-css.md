# Efectos Visuales y Movimientos en CSS

[Fundamentos](fundamentos-css.md) |
[Unidades y Estilos](unidades-estilos-css.md) |
[Efectos Visuales y Movimientos](efectos-visuales-movimientos-css.md)

## Sombras

```CSS
html {
    box-sizing: border-box;
    font-family: sans-serif;
    font-size: 16px;
}

*,
*::after,
*::before {
    box-sizing: inherit;
}

.box {
    border: thick solid #000;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    height: 200px;
    margin-bottom: 5rem;
}
```

### Sombras en las Cajas y el los textos

#### Sombras en las Cajas

`box-shadow: mov-x mov-y blur-radius spread-blur color inset/outset;`

_Si no se asigna un color, lo toma del color de letra_

_`outset` es un valor por defecto, pero no lo escribas_

#### Sombras en los Textos

`text-shadow: mov-x mov-y blur-radius color;`

<br>

```HTML
<div class="box shadows">
    <p>Sombras</p>
</div>
```

```CSS
.shadows {
    color: navy;
    font-size: 2rem;
    text-align: center;

    /** Sombras a las cajas */
    box-shadow: 1rem 1rem 1rem 1rem;
    box-shadow: -1rem -1rem 1rem 1rem;
    box-shadow: 1rem 1rem 1rem 1rem #0005;
    box-shadow: 1rem 1rem 1rem 1rem #f00 inset;
    box-shadow: 1rem 1rem 2rem 0.5rem #0007;

    /** Sombras a los textos */
    text-shadow: -1rem -1rem 0.5rem hotpink;
}
```

### Sombras Multiple

```HTML
<div class="box shadows-multiple">
    <p>Sombras</p>
</div>
```

```CSS
.shadows-multiple {
    font-size: 2rem;
    text-align: center;
    /* Para agrgar mas sombras los separas con una coma */
    box-shadow: 1rem 1rem 1rem 1rem #0005, 1rem 1rem 1rem 1rem #f00 inset,
     -.5rem -.5rem 0.5rem 2rem hotpink;

    text-shadow: -1rem -1rem 0.5rem navy, 1rem 1rem 0.5rem greenyellow;
}
```

### Propiedad Filter con drop-shadow

`filter: drop-shadow(mov-x mov-y blur-radius color);`

```HTML
<div class="box drop-shadow">
    <img src="assets/arbol.png" alt="arbol">
</div>
```

```CSS
.drop-shadow {
    width: 600px;
    height: auto;
}

.drop-shadow img {
    max-width: 100%;
    box-shadow: 1rem 1rem 1rem .5rem #0005;

    /* filter: drop-shadow(mov-x mov-y blur-radius color); */
    /* No se aplica las sombras multiples en drop-shadow */
    filter: drop-shadow(1rem 1rem 1rem orangered);
    filter: drop-shadow(1rem 1rem 1rem steelblue);
}
```

## Degradados - Gradient

### linear-gradient

`background-image: linear-gradient(grados o posición, color (porcentaje), color (porcentaje), ...);`

_El ángulo de la linea van en sentido de las manecillas del relog_

```HTML
<div class="box linear-gradient"></div>
```

```CSS
.linear-gradient {
    background-image: linear-gradient(red, green);
    background-image: linear-gradient(red, green, blue);
    background-image: linear-gradient(0deg,red, green, blue);
    background-image: linear-gradient(20deg,red, green, blue);
    background-image: linear-gradient(45deg,red, green, blue);
    background-image: linear-gradient(90deg,red, green, blue);
    background-image: linear-gradient(180deg,red, green, blue);
    background-image: linear-gradient(270deg,red, green, blue);
    background-image: linear-gradient(360deg,red, green, blue);
    background-image: linear-gradient(to right,red, green, blue);
    background-image: linear-gradient(to top,red, green, blue);
    background-image: linear-gradient(to bottom,red, green, blue);
    background-image: linear-gradient(to left,red, green, blue);
    background-image: linear-gradient(to top left,red, green, blue);
    background-image: linear-gradient(to top right,red, green, blue);
    background-image: linear-gradient(to bottom left,red, green, blue);
    background-image: linear-gradient(to bottom right,red, green, blue);
    background-image: linear-gradient(90deg, red 30%, green 60%, blue);
    background-image: linear-gradient(90deg, green 0% 33%, white 34% 67%, red 68% 100%);
    background-image: linear-gradient(90deg, red 0% 33%, white 34% 67%, red 68% 100%);
}
```

### radial-gradient

`background-image: radial-gradient( circle|ellipse (tamaño del radio o radios) (posicion) ,color, color, ... );`

```HTML
<div class="box radial-gradient"></div>
```

```CSS
.radial-gradient {

    background-image: radial-gradient(cyan, magenta);
    background-image: radial-gradient(cyan, magenta, yellow);
    background-image: radial-gradient(circle 2rem, cyan, magenta, yellow);
    background-image: radial-gradient(circle 4rem, cyan, magenta, yellow);
    background-image: radial-gradient(circle 4rem, cyan 30%, magenta 80%, yellow);

    background-image: radial-gradient(
        circle 100px, cyan 30%, magenta 60%, yellow 90%
    );
    background-image: radial-gradient(
        circle 100px at top, cyan 30%, magenta 60%, yellow 90%
    );
    background-image: radial-gradient(
        circle 100px at bottom, cyan 30%, magenta 60%, yellow 90%
    );
    background-image: radial-gradient(
        circle 100px at left, cyan 30%, magenta 60%, yellow 90%
    );
    background-image: radial-gradient(
        circle 100px at top left, cyan 30%, magenta 60%, yellow 90%
    );
    background-image: radial-gradient(
        circle 100px at top right, cyan 30%, magenta 60%, yellow 90%
    );
    background-image: radial-gradient(
        circle 100px at top center, cyan 30%, magenta 60%, yellow 90%
    );
    background-image: radial-gradient(
        circle 100px at bottom left, cyan 30%, magenta 60%, yellow 90%
    );
    background-image: radial-gradient(
        circle 100px,
        cyan 30%,
        magenta 60%,
        yellow 90%
    );
    background-image: radial-gradient(
        ellipse 50px 100px,
        cyan 30%,
        magenta 60%,
        yellow 90%
    );
    background-image: radial-gradient(
        circle 100px, red 50%,white 50%
    );
}
```

### conic-gradient

`background-image: conic-gradient(from [angulo de inicio], color (porcetajes o angulos), color, ...);`

```HTML
<div class="box conic-gradient"></div>
```

```CSS
.conic-gradient {
    background-image: conic-gradient(red, green);
    background-image: conic-gradient(red, green, blue);
    background-image: conic-gradient(red 0% 50%, green 60%, blue 80%);
    background-image: conic-gradient(
        red 0deg 90deg,
        green 120deg 240deg,
        blue 270deg
    );
    background-image: conic-gradient(
        from 90deg,
        red 0deg 90deg,
        green 120deg 240deg,
        blue 270deg
    );
    background-image: conic-gradient(
        from 180deg,
        red 0deg 90deg,
        green 120deg 240deg,
        blue 270deg
    );
    background-image: conic-gradient(
        from 270deg,
        red 0deg 90deg,
        green 120deg 240deg,
        blue 270deg
    );
    background-image: conic-gradient(
        from 90deg,
        red 0deg 120deg,
        white 120deg 240deg,
        blue 240deg
    );
}
```

### Patrones con degradados

```HTML
<div class="box repeat-gradient-linear"></div>
<div class="box repeat-gradient-radial"></div>
<div class="box repeat-gradient-conic"></div>
```

```CSS
.repeat-gradient-linear {
    background-image: repeating-linear-gradient(
        red 0 10px,
        green 10px 20px,
        blue 20px 30px
    );
    background-image: repeating-linear-gradient(
        90deg,
        red 0 10px,
        green 10px 20px,
        blue 20px 30px
    );
    background-image: repeating-linear-gradient(
        45deg,
        red 0 10px,
        green 10px 20px,
        blue 20px 30px
    );
}

.repeat-gradient-radial {
    background-image: repeating-radial-gradient(
        circle 4rem,
        cyan 0 10px,
        magenta 10px 20px,
        yellow 20px 30px
    );
    background-image: repeating-radial-gradient(
        circle 4rem at top,
        cyan 0 10px,
        magenta 10px 20px,
        yellow 20px 30px
    );
    background-image: repeating-radial-gradient(
        circle 4rem at bottom left,
        cyan 0 10px,
        magenta 10px 20px,
        yellow 20px 30px
    );
}

.repeat-gradient-conic {
    background-image: repeating-conic-gradient(
        red 0 8%,
        yellow 8% 16%,
        black 16% 24%
    );
}
```

### Gráficas con degradados

```HTML
<div class="box chart-gradient"></div>
<div class="box donut-gradient"></div>
```

```CSS
.chart-gradient {
    background-image: conic-gradient(
        cyan 0 50%,
        magenta 50% 80%,
        yellow 80%
    );
    border-radius: 50%;
}

.donut-gradient {
    background-image:
    radial-gradient(
        white 0 40%,
        black 40% 44%,
        transparent 44%
    ),
    conic-gradient(
        cyan 0 50%,
        magenta 50% 80%,
        yellow 80%
    );
    border-radius: 50%;
}
```

## Filtros

### Filtros con filter

```HTML
<article class="card">
    <img class="filter" src="assets/puesta-sol.jpg" alt="puesta-de-sol">
</article>
```

```CSS
.card {
    border: thick solid #000;
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    height: 400px;
    margin-bottom: 5rem;
}

.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 50%;
}
```

```CSS
.filter {

    /* Filter */
    /* filter: blur(tamanio); */
    filter: blur(1rem);
    filter: blur(.25rem);
    filter: blur(.15rem);

    /* filter: brightness(0-1); */
    filter: brightness(1);
    filter: brightness(0.75);
    filter: brightness(0.5);
    filter: brightness(0.25);
    filter: brightness(0);
    filter: brightness(2);
    filter: brightness(4);

    /* filter: contrast(0-1); */
    filter: contrast(0);
    filter: contrast(0.25);
    filter: contrast(0.5);
    filter: contrast(0.75);
    filter: contrast(1);
    filter: contrast(2);

    /* filter: grayscale(0-1); */
    filter: grayscale(0);
    filter: grayscale(0.25);
    filter: grayscale(0.5);
    filter: grayscale(0.75);
    filter: grayscale(1);

    /* filter: sepia(0-1); */
    filter: sepia(0);
    filter: sepia(0.25);
    filter: sepia(0.75);
    filter: sepia(1);

    /* filter: hue-rotate(grados Hue (Circulo Cromatico)); */
    filter: hue-rotate(0deg);
    filter: hue-rotate(30deg);
    filter: hue-rotate(60deg);
    filter: hue-rotate(90deg);
    filter: hue-rotate(120deg);
    filter: hue-rotate(150deg);
    filter: hue-rotate(180deg);
    filter: hue-rotate(210deg);
    filter: hue-rotate(240deg);
    filter: hue-rotate(270deg);
    filter: hue-rotate(300deg);
    filter: hue-rotate(330deg);

    /* filter: invert(boolean 0|1); */
    filter: invert(0);
    filter: invert(1);

    /* filter: opacity(0-1); */
    filter: opacity(0);
    filter: opacity(0.25);
    filter: opacity(0.5);
    filter: opacity(0.75);
    filter: opacity(1);

    /* filter: saturate(0-1); */
    filter: saturate(0);
    filter: saturate(0.25);
    filter: saturate(0.5);
    filter: saturate(0.75);
    filter: saturate(1);
    filter: saturate(4);

    filter: drop-shadow(1rem 1rem 1rem steelblue);
}
```

### Filtros múltiples

```HTML
<article class="card">
    <img class="filters-multiple" src="assets/puesta-sol.jpg" alt="puesta-de-sol">
</article>
```

```CSS
.filters-multiple {
    filter: blur(0.1rem) hue-rotate(270deg) opacity(0.75) invert(1);
    filter: hue-rotate(270deg) invert(1);
}
```

### Filtros a fondos (backdrop-filter)

```HTML
<h3>Filtros a fondos (backdrop-filter)</h3>
<article class="card relative">
    <img src="assets/puesta-sol.jpg" alt="puesta-de-sol">
    <div class="backdrop-filter">
        <h4>Puesta de Sol</h4>
    </div>
</article>

<h3>Filtros Múltiples a Fondos</h3>
<article class="card relative">
    <img src="assets/puesta-sol.jpg" alt="puesta-de-sol">
    <div class="backdrop-filter-multiple">
        <h4>Puesta de Sol</h4>
    </div>
</article>
```

```CSS
.relative {
    position: relative;
}

.backdrop-filter,
.backdrop-filter-multiple {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.backdrop-filter h4 {
    border-radius: 1rem;
    font-size: 3rem;
    padding: 2rem;
    color: #fff;
    color: #000;
    background-color: rgba(255, 102, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.5);

    -webkit-backdrop-filter: grayscale(1);
    backdrop-filter: grayscale(1);
    -webkit-backdrop-filter: sepia(1);
    backdrop-filter: sepia(1);
    -webkit-backdrop-filter: opacity(0.75);
    backdrop-filter: opacity(0.75);
    -webkit-backdrop-filter: hue-rotate(180deg);
    backdrop-filter: hue-rotate(180deg);
    -webkit-backdrop-filter: blur(0.5rem);
    backdrop-filter: blur(0.5rem);
}

.backdrop-filter-multiple h4 {
    border-radius: 1rem;
    font-size: 3rem;
    padding: 2rem;
    color: #fff;
    background-color: rgba(255, 102, 255, 0.5);

    -webkit-backdrop-filter: blur(1rem) hue-rotate(240deg) opacity(.75) invert(1);
    backdrop-filter: blur(1rem) hue-rotate(240deg) opacity(.75) invert(1);
}
```

### Modo Dark/Light con filtros

```HTML
<html lang="es" class="dark-mode">
    ...
    <article class="card">
        <img src="assets/puesta-sol.jpg" alt="puesta-de-sol">
    </article>

    <article class="card">
        <img src="assets/favicon.png" alt="kEnAi">
    </article>
</html>
```

```CSS
.dark-mode {
    background-color: #fff;
    color: #222;
    filter: invert(1);
}

.dark-mode img {
    filter: invert(1);
}
```

## Modos de Mezcla

### Modo de Mezcla a imágenes img mix-blend-mode

```HTML
<article class="card relative blend-modes">
    <img src="assets/puesta-sol.jpg" alt="Puesta de Sol">
    <img class="absolute" src="assets/buenos-dias.jpg" alt="Buenos Dias">
</article>
```

```CSS
.absolute {
    position: absolute;
    top: 0;
    left: 0;
}
```

```CSS
.blend-modes img {
    mix-blend-mode: normal; /* default */
    mix-blend-mode: color;
    mix-blend-mode: color-dodge;
    mix-blend-mode: color-burn;
    mix-blend-mode: screen;
    mix-blend-mode: multiply;
    mix-blend-mode: saturation;
    mix-blend-mode: luminosity;
    mix-blend-mode: hue;
    mix-blend-mode: exclusion;
    mix-blend-mode: difference;
    mix-blend-mode: hard-light;
    mix-blend-mode: soft-light;
    mix-blend-mode: lighten;
    mix-blend-mode: overlay;
    mix-blend-mode: darken;
}
```

### Modos de Mezcla a fondos background-image background-blend-mode

```HTML
<article class="card bg-blend-modes"></article>
```

```CSS
.bg-blend-modes {
    background-image:
        url("../assets/puesta-sol.jpg"),
        url("../assets/buenos-dias.jpg");
    background-size: cover;
    background-position: center;

    background-blend-mode: normal; /* default */
    background-blend-mode: color;
    background-blend-mode: color-dodge;
    background-blend-mode: color-burn;
    background-blend-mode: screen;
    background-blend-mode: multiply;
    background-blend-mode: saturation;
    background-blend-mode: luminosity;
    background-blend-mode: hue;
    background-blend-mode: exclusion;
    background-blend-mode: difference;
    background-blend-mode: hard-light;
    background-blend-mode: soft-light;
    background-blend-mode: lighten;
    background-blend-mode: overlay;
    background-blend-mode: darken;
}
```

## Máscaras y Formas

### Mascaras con clip-path

```HTML
<article class="card clip-path">
    <img src="assets/puesta-sol.jpg" alt="Puesta de Sol">
</article>
```

```CSS
.clip-path {

    /* clip-path: circle([radius] [position]); */
    clip-path: circle();
    clip-path: circle(2rem);
    clip-path: circle(100px);
    clip-path: circle(100px at top);
    clip-path: circle(100px at left);
    clip-path: circle(100px at right);
    clip-path: circle(100px at bottom);
    clip-path: circle(100px at left bottom);
    clip-path: circle(100px at right bottom);
    clip-path: circle(100px at left top);
    clip-path: circle(100px at right top);
    clip-path: circle(100px at 0 0);
    clip-path: circle(100px at 30%);
    clip-path: circle(100px at 30% 20%);
    clip-path: circle(100px at 30% 70%);
    clip-path: circle(100px at 20% 60%);

    /* clip-path: ellipse([radius-x radius-y] [position]); */
    clip-path: ellipse(1rem 2rem);
    clip-path: ellipse(2rem 1rem);
    clip-path: ellipse(100px 50px);
    clip-path: ellipse(100px 50px at left);
    clip-path: ellipse(100px 50px at right);
    clip-path: ellipse(100px 50px at top);
    clip-path: ellipse(100px 50px at bottom);
    clip-path: ellipse(100px 50px at left bottom);
    clip-path: ellipse(100px 50px at right bottom);
    clip-path: ellipse(100px 50px at left top);
    clip-path: ellipse(100px 50px at right top);
    clip-path: ellipse(100px 50px at 0 0);
    clip-path: ellipse(100px 50px at 300px 50px);
    clip-path: ellipse(100px 50px at 18% 60%);

    /* clip-path: inset( top right bottom left round top right bottom left ); "modelo de caja" */
    /* round = border radius */
    clip-path: inset(2rem);
    clip-path: inset(4rem);
    clip-path: inset(2rem 1rem);
    clip-path: inset(3rem 2rem 1rem);
    clip-path: inset(3rem 2rem 1rem 0.5rem);
    clip-path: inset(1rem round 1rem);
    clip-path: inset(1rem round 1rem 2rem);
    clip-path: inset(1rem round 1rem 2rem 3rem);
    clip-path: inset(1rem round 1rem 2rem 3rem 4rem);

    /* clip-path: polygon( x% y% , x% y% , x% y%, ... ); */
    clip-path: polygon( 0 0 , 100% 0, 50% 100% );

    /* CSS clip-path maker */
    clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
         2% 35%,
        39% 35%
    );
}
```

### Formas con shape-outside

```HTML
<article class="shapes">
    <h3>Ejemplos de Formas y siluetas entre textos e imágenes</h3>
    <img src="assets/puesta-sol.jpg" alt="Puesta de Sol" class="float-left shape-1">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Molestiae a nemo ducimus! Aliquid ratione architecto iste.</p>
    <p>Atque provident consequuntur nihil, illum perferendis
       asperiores dolores ab dolorum ipsam sint quisquam amet.</p>
    <p>Nobis, consequatur qui. Alias atque velit quod ad! Quo
       veniam expedita corrupti accusamus vitae minus perspiciatis</p>
    <p>Itaque asperiores ab, maiores excepturi dolorem at debitis
       assumenda nam minus maxime facere animi inventore dolor?</p>
    <img src="assets/puesta-sol.jpg" alt="Puesta de Sol" class="float-right shape-2">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Molestiae a nemo ducimus! Aliquid ratione architecto iste.</p>
    <p>Atque provident consequuntur nihil, illum perferendis
       asperiores dolores ab dolorum ipsam sint quisquam amet.</p>
    <p>Nobis, consequatur qui. Alias atque velit quod ad! Quo
       veniam expedita corrupti accusamus vitae minus perspiciatis</p>
    <p>Itaque asperiores ab, maiores excepturi dolorem at debitis
       assumenda nam minus maxime facere animi inventore dolor?</p>
    <img src="assets/puesta-sol.jpg" alt="Puesta de Sol" class="float-left shape-3">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Molestiae a nemo ducimus! Aliquid ratione architecto iste.</p>
    <p>Atque provident consequuntur nihil, illum perferendis
       asperiores dolores ab dolorum ipsam sint quisquam amet.</p>
    <p>Nobis, consequatur qui. Alias atque velit quod ad! Quo
       veniam expedita corrupti accusamus vitae minus perspiciatis</p>
    <p>Itaque asperiores ab, maiores excepturi dolorem at debitis
       assumenda nam minus maxime facere animi inventore dolor?</p>
</article>
```

```CSS
.shapes {
    border: thick solid black;
    padding: 1rem;
    margin: 0 auto 5rem;
    max-width: 800px;
}

.shapes img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: 0 50%;
}

.float-left {
    float: left;
}

.float-right {
    float: right;
}

.shape-1 {
    margin: 4rem 2rem 4rem 0;

    /* shape-outside: polygon|circle|ellipse; */
    shape-outside: circle(5rem);
    shape-outside: circle();
    shape-outside: ellipse();
    shape-outside: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
    );
    shape-outside: circle();
}

.shape-2 {
    margin: 4rem 0 4rem 2rem;

    shape-outside: ellipse();
}

.shape-3 {
    margin: 2rem 8rem 0 0;
    shape-outside: polygon(
        1% 19%,
       25%  4%,
       52%  4%,
       59% 16%,
       69% 37%,
       66% 53%,
       63% 67%,
       72% 77%,
       83% 84%,
       98% 99%,
        1% 99%
    );
}
```

## Efectos con Scroll (Sitio One Page)

-   Define el comportamiento del Scroll

    `scroll-behavior: auto|smooth;`

-   Define un margen alrededor de un elemento para influir en su posición cuando se usa el desplazamiento (scroll) hacia el dicho elemento. Se usa junto con métodos como `scrollIntoView` en JavaScript o el desplazamiento automatico con el anclaje `id` de los enlaces `a`.

    `scroll-margin`

    `scroll-margin-top`

    `scroll-margin-right`

    `scroll-margin-bottom`

    `scroll-margin-left`

```HTML
<header class="header">
    <h1>
        Efectos con Scroll (<small>Sitio One Page</small>)
    </h1>
    <nav>
        <a href="#seccion-1">Sección 1</a>
        <a href="#seccion-2">Sección 2</a>
        <a href="#seccion-3">Sección 3</a>
        <a href="#seccion-4">Sección 4</a>
        <a href="#seccion-5">Sección 5</a>
    </nav>
</header>
<section id="seccion-1" class="slide">
    <h2>Sección 1</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Molestiae a nemo ducimus! Aliquid ratione architecto iste.</p>
    <img src="assets/puesta-sol.jpg" alt="Puesta de Sol">
</section>
<section id="seccion-2" class="slide">
    <h2>Sección 2</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Molestiae a nemo ducimus! Aliquid ratione architecto iste.</p>
    <img src="assets/puesta-sol.jpg" alt="Puesta de Sol">
</section>
<section id="seccion-3" class="slide">
    <h2>Sección 3</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Molestiae a nemo ducimus! Aliquid ratione architecto iste.</p>
    <img src="assets/puesta-sol.jpg" alt="Puesta de Sol">
</section>
<section id="seccion-4" class="slide">
    <h2>Sección 4</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Molestiae a nemo ducimus! Aliquid ratione architecto iste.</p>
    <img src="assets/puesta-sol.jpg" alt="Puesta de Sol">
</section>
<section id="seccion-5" class="slide">
    <h2>Sección 5</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Molestiae a nemo ducimus! Aliquid ratione architecto iste.</p>
    <img src="assets/puesta-sol.jpg" alt="Puesta de Sol">
</section>
```

```CSS
html {
    box-sizing: border-box;
    font-family: sans-serif;
    font-size: 16px;
    /* scroll-behavior: auto; */
    scroll-behavior: smooth;
}

*,
*::after,
*::before {
    box-sizing: inherit;
}

body,
h1,
h2 {
    margin: 0;
}

img {
    max-width: 50%;
    height: auto;
}

.header {
    position: sticky;
    top: 0;
    padding: 0.25rem;
    text-align: center;
    background-color: #000;
    color: #fff;
}

/*
1rem = 16px
1ex = 0.5rem = 8px
8ex = 4rem = 64px
7.8ex = 3.9rem = 62.4px
*/
[id] {
    scroll-margin-top: 7.5ex;
}

.header a {
    margin: 0 1rem;
    color: #00c4d6;
}

.header a:hover {
    color: #e94bb4;
}

.slide {
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    color: #d9e8f0;
    background-color: #1e2345;
}

.slide:nth-child(even) {
    background-color: #108eb4;
}
```

## Ajuste del Scroll Efecto Slides Verticales (scroll-snap-type & scroll-snap-align)

Requisitos para que el efecto scroll vertical `scroll-snap-type` y `scroll-snap-align` funcione:

-   **Para el contenedor (.slides)**

    -   El contenedor de los elementos (`.slides`) debe tener una altura definida **(en este caso 100vh)**.
    -   La propiedad `overflow` (desbordamiento) en la direccion x o y (`overflow-x` o `overflow-y`) debe tener el valor `scroll`.
    -   La propiedad `scroll-snap-type` con los valores `[none|x|inline|y|block|both] [ mandatory | proximity`.

-   **Para los elementos del contenedor (.slide)**
    -   Debe heredar la altura del contenedor.
    -   La propiedad `scroll-snap-align` con los valores `none|end|start|center`.

```HTML
<main class="slides">
    <section class="slide">
        <article class="slide-container">
            <h1>Ajuste del Scroll (<small>Slides</small>)</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.
               Nostrum minus facilis, libero dolorum eius.</p>
        </article>
    </section>
    <section class="slide">
        <article class="slide-container">
            <h2>Slide 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.
               Nostrum minus facilis, libero dolorum eius.</p>
        </article>
    </section>
    <section class="slide">
        <article class="slide-container">
            <h2>Slide 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.
               Nostrum minus facilis, libero dolorum eius.</p>
        </article>
    </section>
    <section class="slide">
        <article class="slide-container">
            <h2>Slide 4</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.
               Nostrum minus facilis, libero dolorum eius.</p>
        </article>
    </section>
    <section class="slide">
        <article class="slide-container">
            <h2>Slide 5</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.
               Nostrum minus facilis, libero dolorum eius.</p>
        </article>
    </section>
</main>
```

```CSS
html {
    box-sizing: border-box;
    font-family: sans-serif;
    font-size: 16px;
}

*,
*::after,
*::before {
    box-sizing: inherit;
}

body {
    margin: 0;
}
```

```CSS
.slides {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;

    /* scroll-snap-type: [ x ó inline (desplazamiento horizontal) | y ó block (desplazamiento vertical) | both ] [ mandatory | proximity ] ; */
    /* scroll-snap-type: none; */
    /* scroll-snap-type: x mandatory; */
    /* scroll-snap-type: inline mandatory; */
    /* scroll-snap-type: block mandatory; */
    /* scroll-snap-type: y mandatory; */
    /* scroll-snap-type: y proximity; */
    scroll-snap-type: both mandatory;
}

.slide {
    width: 100%;
    height: inherit;
    background-color: #1e2345;

    /* scroll-snap-align: none; */
    /* scroll-snap-align: end; */
    /* scroll-snap-align: start; */
    scroll-snap-align: center;
}

.slide:nth-child(even) {
    background-color: #108eb4;
}

.slide-container {
    width: 80%;
    height: inherit;
    margin: 0 auto;
    font-size: 3vw;
    color: #d9e8f0;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
```

## Ajuste del Scroll Efecto Carrusel Horizontal (scroll-snap-type & scroll-snap-align)

```HTML
<section class="slide">
    <article class="slide-container">
        <h1>Ajuste del Scroll (<small>Slides</small>)</h1>
        <section class="carousel">
            <div class="carousel-container">
                <article class="carousel-slide">
                    <div class="carousel-slide-content">
                        <h3>Slide 1</h3>
                    </div>
                </article>
                <article class="carousel-slide">
                    <div class="carousel-slide-content">
                        <h3>Slide 2</h3>
                    </div>
                </article>
                <article class="carousel-slide">
                    <div class="carousel-slide-content">
                        <h3>Slide 3</h3>
                    </div>
                </article>
                <article class="carousel-slide">
                    <div class="carousel-slide-content">
                        <h3>Slide 4</h3>
                    </div>
                </article>
                <article class="carousel-slide">
                    <div class="carousel-slide-content">
                        <h3>Slide 5</h3>
                    </div>
                </article>
            </div>
        </section>
    </article>
</section>
```

```CSS
.carousel {
    border: thick solid #d938f0;
    width: 60%;
    height: 50vh;
    display: flex;

    overflow-x: hidden;
}

.carousel-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 100%);

    overflow-x: scroll;
    overflow-y: hidden;

    /* scroll-snap-type: x proximity; */
    /* scroll-snap-type: both proximity; */
    scroll-snap-type: x mandatory;
}

.carousel-slide {
    background-color: #108eb4;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* scroll-snap-align: center; */
    scroll-snap-align: start;
}

.carousel-slide:nth-child(even) {
    background-color: #1e2345;
}
```

## Texto con Degradado

```HTML
<section class="slide">
    <article class="slide-container">
        <h2 class="gradient-text">Slide 2</h2>
        <p class="gradient-text">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus atque.</p>
    </article>
</section>
```

```CSS
.gradient-text {
    background-image: linear-gradient(45deg, magenta, yellow);

    -ms-background-clip: text;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    background-clip: text;

    -ms-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
}
```

## Movimiento en CSS - Transiciones

Propiedades para las transiciones:

-   **transition-property**: A que propiedad se le aplica la transicion.
-   **transition-duration**: Duraciones de la transicion.
-   **transition-timing-function**: `none|linear|ease|ease-in|ease-out|ease-in-out|steps()`
-   **transition-delay**: Tiempo de espera s o ms.
-   **transition**: _property_ _duration_ _timing-function_ _delay_

-   `all` Todas las propiedades que sean animables aplica los estilos
-   Propiedades no Animables Animatable CSS properties MDN

**¿Porqué no usar la palabra all en tus transiciones?**

`all` puede afecta a las otras propiedades que no querias que afecte.

\*_Las Transiciones en las propiedades se comienza a observar cuando se carga el documento._

```HTML
<section class="transitions">
    <div class="box"></div>
    <article class="card">
        <img src="assets/puesta-sol.jpg" alt="Puesta de Sol">
    </article>
</section>
```

```CSS
.transitions .box {
    background-color: magenta;

    transition-property: background-color;
    transition-duration: 500ms;
    transition-timing-function: ease;
    transition-delay: .5s;

    transition: border-color 2s linear 1s;

    /* transition: all 2s ease-in-out 250ms; */

    transition:
        background-color 2s ease-in-out 250ms,
        border-color 2s ease-in-out 250ms,
        border-radius 2s ease-in-out 250ms;
}

.transitions .box:hover {
    background-color: cyan;
    border-color: red;
    border-radius: 2rem;

    /* Propiedades no animables  */
    /* border-style: dashed; */
}

.transitions .card {
    /* transition: all 2s ease; */

    transition:
        opacity 1s ease-out,
        border-color 3s steps(5),
        filter 2s ease-in 1s,
        box-shadow 1.5s linear 2s;
}

.transitions .card:hover {
    opacity: 75%;
    border-color: orchid;
    filter: blur(.15rem);
    box-shadow: 1rem 1rem 2rem .5rem #000;
}

.transitions .card img {
    transition: object-position 2s ease-in-out 3s;
}

.transitions .card img:hover {
    object-position: 100% 50%;
}
```

## Movimiento en CSS - Transformaciones

### Transformaciones en 2D

```HTML
<article class="card transform-2d">
    <img src="assets/puesta-sol.jpg" alt="Puesta de Sol">
</article>
```

```CSS
.transform-2d img {
    transition: transform 2s ease-in-out;
}

.transform-2d img:hover {
    transform: none;

    /** Translate */
    transform: translateX(4rem);
    transform: translateY(-4rem);
    transform: translateZ(-4rem);
    /* transform: translate3d(); */

    /* transform: translate(X, Y); */
    transform: translate(-4rem, 4rem);
    transform: translate(50%, 50%);
    transform: translate(-50%, -50%);
    transform: translate(-50%, 100px);

    /** Scale */
    transform: scaleX(2);
    transform: scaleY(.5);
    transform: scaleZ(1.5);

    /* transform: scale(X, Y); */
    transform: scale(1.5, 1.5);
    transform: scale(-1, -1);
    transform: scale(-.5, -.5);

    /* Rotate */
    transform: rotateX(60deg);
    transform: rotateX(90deg);
    transform: rotateY(60deg);
    transform: rotateY(90deg);
    transform: rotateZ(-60deg);
    transform: rotateZ(360deg);

    /* transform: rotate(Z); (igual a rotateZ) */
    transform: rotate(360deg);
    transform: rotate(-360deg);

    /* Skew */
    transform: skewX(20deg);
    transform: skewX(-20deg);
    transform: skewY(20deg);
    transform: skewY(-20deg);

    /* transform: skew(X, Y); */
    transform: skew(20deg, 20deg);
}
```

### Transformación Matrix 2D

`transform: matrix( scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY() );`

```CSS
.transform-2d img:hover {
    transform: matrix(1,2,2,1,20,10);
}
```

### Transformaciones 2D Múltiples

```CSS
.transform-2d img:hover {
    /* Separar cada valor con espacios */
    transform:
        translate(25%, -50%) rotate(240deg)
        skew(10deg, 20deg) scale(-.5, -.5);
}
```

### Activando la Perspectiva 3D

\*_Para que funcione las tranformaciones 3d, se tiene que aplicar perspectiva al contenedor padre o aplicar el valor `perpective()` antes del valor que queremos aplicar_

```HTML
<article class="card transform-3d">
    <img src="assets/puesta-sol.jpg" alt="Puesta de Sol">
</article>
```

```CSS
/* Aplicando perspectiva al contenedor padre */
.transform-3d {
    perspective: 10rem;
}

.transform-3d img {
    transition: transform 2s ease-in-out;
}

.transform-3d img:hover {

    /* Aplicando perpectiva con perspective(valor: px, rem) */
    transform: translateZ(4rem);
    transform: perspective(1000px) translateZ(4rem);
    transform: perspective(100rem) translateZ(4rem);
    transform: perspective(1rem) translateZ(4rem);
    transform: perspective(10rem) translateZ(4rem);
    transform: perspective(10rem) translateZ(-1rem);
    transform: translateZ(-1rem);
    transform: translateZ(1rem);
}
```

### Transformaciones en 3D

```CSS
.transform-3d {
    perspective: 10rem;
}

.transform-3d img {
    transition: transform 2s ease-in-out;
}

.transform-3d img:hover {

    /* TRANSLATE */
    transform: translateZ(-4rem);
    /* transform: translate3d(X, Y, profundidad); */
    transform: translate3d(2rem, 50%, -3rem);

    /* SCALE */
    transform: scaleZ(1.5); /* scala en volumen*/
    /* transform: scale3d(X, Y, Z); */
    transform: scale3d(2, .5, 3);

    /* ROTATE */
    transform: rotateX(60deg);
    transform: rotateX(90deg);
    transform: rotateY(60deg);
    transform: rotateY(-90deg);
    transform: rotateY(-180deg);
    /* transform:
        rotate3d(node-x, node-y, node-z,angulo-inclinacion); */
    transform: rotate3d(1, 1, 1, 45deg);
    transform: rotate3d(1, .5, 0, -45deg);
    transform: rotate3d(-1, 2.5, -2, 60deg);
}
```

### Transformación Matrix 3D

```CSS
.transform-3d {
    perspective: 10rem;
}

.transform-3d img:hover {
    /* transform: matrix3d(16 valores); 4x4 */
    transform: matrix3d(
         1,   0, 0,   0,
         0,   1, 6,   0,
         0,   0, 1,   0,
        50, 100, 0, 1.1
    );
}
```

### Transformaciones 3D Múltiples

```CSS
.transform-3d img:hover {
    transform:
        rotate3d(-1, 2.5, -2, 60deg)
        translate3d(2rem, 50%, -3rem)
        scale3d(2, .5, 3);
}
```

### Origen de Transformación (transform-origin)

Es el punto o centro de rotación

```CSS
.transform-origin img {
    transition: transform 2s ease-in-out;

    /* transform-origin: x y z; */
    transform-origin: 50% 50% 0; /* default */
    transform-origin: 0 0; /* x y */
    transform-origin: 0; /* x 50% */
    transform-origin: center;
    transform-origin: top left;
    transform-origin: top right;
    transform-origin: top center;
    transform-origin: bottom center;
    transform-origin: bottom left;
    transform-origin: bottom right;
    transform-origin: center right;
    transform-origin: center left;
    transform-origin: center center;
    transform-origin: -2rem -3rem;
    transform-origin: 2rem 3rem;
    transform-origin: 2rem 75%;
    transform-origin: 25% 75%;
    transform-origin: -5% -5%;
    transform-origin: 30%;
    transform-origin: 30% 90%;
}

.transform-origin img:hover {
    transform: rotate(360deg);
}
```

### Flip Cards con transiciones y transformaciones

```HTML
<article class="flip-card-1">
    <div class="flip-face flip-front">
        <img src="assets/puesta-sol.jpg" alt="Puesta de Sol">
    </div>
    <div class="flip-face flip-back">
        <img src="assets/buenos-dias.jpg" alt="Buenos Dias">
    </div>
</article>

<article class="flip-card-2">
    <div class="flip-face flip-front">
        <img src="assets/puesta-sol.jpg" alt="Puesta de Sol">
    </div>
    <div class="flip-face flip-back">
        <img src="assets/buenos-dias.jpg" alt="Buenos Dias">
    </div>
</article>
```

```CSS
.flip-card-1,
.flip-card-2 {
    border: thick solid #000;
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    height: 400px;
    margin-bottom: 5rem;

    position: relative;
    cursor: pointer;

    transition: transform 1s ease-in-out;

    perspective: 10rem;
    /* transform-style: flat|preserve-3d; */
    transform-style: flat;
    transform-style: preserve-3d;
}

.flip-card-2 {
    transform-origin: center right;
}

.flip-card-1:hover {
    transform: rotateY(180deg);
}

.flip-card-2:hover {
    transform: translateX(-100%) rotateY(-180deg);
}

.flip-card-1 img,
.flip-card-2 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 50%;
}

.flip-face {
    position: absolute;
    width: 100%;
    height: 100%;

    /* backface-visibility: visible|hidden; */
    backface-visibility: visible;
    backface-visibility: hidden;
}

.flip-front {
    transform: rotateY(0deg);
}

.flip-back {
    transform: rotateY(180deg);
}
```

## Movimiento en CSS - Animaciones

### Propiedades de Animación en CSS

```HTML
<article class="card my-animation">
    <img src="assets/puesta-sol.jpg" alt="Puesta de Sol">
</article>
```

```CSS
@keyframes myAwesomeAnimation {
    /* Fotograma de inicio (from|0%) */
    from {
        opacity: 0;
        transform: translateX(0);
    }

    /* Fotograma de final (to|100%) */
    to {
        opacity: 1;
        transform: translateX(100%);
    }
}

.my-animation {
    /* animation: name (obligatorio)
                  duration (obligatorio)
                  timing-function (opsional)
                  delay (opsional)
                  iteration-count (opsional)
                  direction (opsional)
                  fill-mode (opsional)
                  play-state (opsional); */

    /* Propiedades Basicas */
    animation-name: myAwesomeAnimation;
    animation-duration: 3s;
    /* Propiedades Adicionales */
    /* cubic-bezier.com */
    animation-timing-function: cubic-bezier(1, 0, 0, 1);
    animation-timing-function: ease-in-out;

    animation-delay: 1500ms;
    animation-delay: 0;

    animation-iteration-count: 3;
    animation-iteration-count: infinite;
    animation-iteration-count: 1;

    animation-direction: reverse;
    animation-direction: alternate;
    animation-direction: alternate-reverse;
    animation-direction: normal;

    animation-fill-mode: none;
    /* forwards - Al final de la animacion se queda
       con los estilos finales de la animacion */
    animation-fill-mode: forwards;
    /* backwards - Al inicio de la animacion se queda
       con los estilos iniciales de la animacion */
    animation-fill-mode: backwards;
    animation-fill-mode: both;

    animation-play-state: paused;
    animation-play-state: running;

    animation: myAwesomeAnimation 1s;
    animation: myAwesomeAnimation 1.5s ease 250ms 7 alternate both running;
}
```

### Linea de tiempo y fotogramas claves en CSS

```HTML
<article class="card my-animation-2">
    <img src="assets/puesta-sol.jpg" alt="Puesta de Sol">
</article>
```

```CSS
@keyframes myAwesomeAnimation2 {
    0% {
        opacity: 0;
        transform: translateX(0);
    }

    50% {
        opacity: .5;
        transform: translateX(-50%);
    }

    75% {
        transform: translateX(-75%);
    }

    100% {
        opacity: 1;
        transform: translateX(100%);
    }
}

.my-animation-2 {
    animation: myAwesomeAnimation2 2s;
    animation: myAwesomeAnimation2 5s;
    animation: myAwesomeAnimation2 1s;
    animation: myAwesomeAnimation2 6s;
}
```

### Animaciones Múltiples

```HTML
<article class="card animation-multiple">
    <img src="assets/puesta-sol.jpg" alt="Puesta de Sol">
</article>
```

```CSS
@keyframes multipleAnimation1 {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes multipleAnimation2 {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(0);
    }
}

.animation-multiple {
    /* animation: multipleAnimation1 2s infinite; */
    /* animation: multipleAnimation2 1s 3 ease-in-out; */
    animation:
        multipleAnimation1 2s infinite ,
        multipleAnimation2 1s 3 ease-in-out;
}
```

## Ejercicio Efecto fadein & fadeout

```HTML
<div class="fade-in">🧔‍♂️</div>
<div class="fade-out">🧔‍♂️</div>
```

```CSS
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.fade-in {
    font-size: 5vw;
    animation: fadeIn 2s linear 2s infinite alternate both;
}

.fade-out {
    font-size: 5vw;
    animation: fadeOut 2s linear 2s infinite alternate both;
}
```

## Ejercicio Efecto shake & pulse

```HTML
<div class="pulse">💖</div>
<div class="pulse">🦊kEnAi🦊</div>
<div class="pulse">❤️ Eres el CSS de mi HTML ❤️</div>
<div class="heart"></div>
```

```CSS
@keyframes shake {
    10%, 90% {
        transform: translate(-1px, 0);
    }
    20%, 80% {
        transform: translate(2px, 0);
    }
    40%, 60% {
        transform: translate(4px, 0);
    }
    30%, 50%, 70% {
        transform: translate(-4px, 0);
    }
}

.shake {
    font-size: 5vw;
    cursor: pointer;
    display: inline-block;
}

.shake:hover {
    animation: shake 1s cubic-bezier(0.36, .07, 0.19, .97) both;
    transform: translate(0,0);
}

@keyframes pulse {
    0% {
        transform: scale(1.1);
    }
    50% {
        transform: scale(.8);
    }
    100% {
        transform: scale(1);
    }
}

.pulse {
    font-size: 5vw;
    animation: pulse 1s linear infinite;
    width: fit-content;
    margin: 0 auto;
}
```

```CSS
@keyframes heartColor {
    15% {
        background-color: #dd0000;
    }
}

.heart {
    position: relative;
    /* border: thin solid black; */
    width: 10vw;
    height: 10vw;
    margin-left: auto;
    margin-right: auto;
    /* background-color: #888; */
    animation: pulse 2s infinite;
}

.heart::after,
.heart::before {
    position: absolute;
    content: "";
    left: 5vw;
    top: 0;
    width: 5vw;
    height: 8vw;
    background-color: #aa0000;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    border-radius: 5vw 5vw 00;
    animation: heartColor 2s infinite;
}

.heart::after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
}
```

## Ejercicio Spinner|Loader

```HTML
<div class="spinner"></div>
```

```CSS
@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.spinner {
    /* background-color: #d00; */
    width: 5vw;
    height: 5vw;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    border: .5vw solid rgba(0, 0, 0, .1);
    /* border-left-color: #09f; */
    border-right-color: #09f;
    animation: spinner 1s ease-out infinite;
}
```

## Botones Animados con interacciones y Gradientes Animados

```HTML
<button class="btn anim-bottom to-left">Animacion Izquierda</button>
<button class="btn anim-bottom to-center">Animacion Centro</button>
<button class="btn anim-bottom to-right">Animacion Derecha</button>
<button class="btn anim-bg-gradient">Fondo con Gradiente</button>
```

```CSS
.btn {
    /* background-color: rgb(220, 109, 109); */
    position: relative;
    border: none;
    border-radius: .25rem;
    padding: .2rem;
    width: 15rem;
    height: 2.5rem;
    font-size: 1.25rem;
    font-weight: bold;
    cursor: pointer;
    overflow: hidden;
    box-shadow: .25rem .25rem .5rem .25rem rgba(0, 0, 0, 0.15);
}

.anim-bottom::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    height: .5rem;
    background-color: #d00;
    transition: width .5s ease, left .5s ease, right .5s ease;
}

.anim-bottom:hover::after {
    width: 100%;
}

.to-left::after {
    left: 0;
}

.to-center::after {
    left: 50%;
}

.to-center:hover::after {
    left: 0;
}

.to-right::after {
    right: 0;
}

.anim-bg-gradient {
    background-image: linear-gradient(to right ,pink, violet, orange, orangered);
    background-size: 300% 100%;
    transition: background-position .5s ease-in-out;
    /* background-clip: text; */
    /* color: transparent; */
}

.anim-bg-gradient:hover {
    background-position: 100% 0;
}
```

## Menú de Pestañas Tabs

```HTML
<nav class="tabs-menu">
    <input type="radio" id="tab-1" name="tabs">
    <label for="tab-1">Seccion 1</label>
    <input type="radio" id="tab-2" name="tabs">
    <label for="tab-2">Seccion 2</label>
    <input type="radio" id="tab-3" name="tabs">
    <label for="tab-3">Seccion 3</label>
    <input type="radio" id="tab-4" name="tabs">
    <label for="tab-4">Seccion 4</label>
    <div class="tab-bg-hover"></div>
</nav>
```

```CSS
.tabs-menu {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    border-radius: 1rem;
    width: 70%;
    height: 3rem;
    background-color: #ddd;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.tabs-menu input[type="radio"] {
    display: none;
}

.tabs-menu label{
    position: relative;
    width: calc(100% / 4 - 0.5rem);
    text-align: center;
    cursor: pointer;
    z-index: 1;
}

.tabs-menu label:hover {
    color: white;
}

.tabs-menu input[type="radio"]:checked + label {
    color: white;
}

.tab-bg-hover {
    position: absolute;
    width: calc(100% / 4 - 0.5rem);
    height: 2rem;
    background-image: linear-gradient(90deg, #a00, #d00);
    border-radius: .5rem;
    transition: transform 300ms ease-in-out;
}

#tab-1:checked ~ .tab-bg-hover {
    transform: translateX(0%);
}

#tab-2:checked ~ .tab-bg-hover {
    transform: translateX(100%);
}

#tab-3:checked ~ .tab-bg-hover {
    transform: translateX(200%);
}

#tab-4:checked ~ .tab-bg-hover {
    transform: translateX(300%);
}
```

## Menú Off Canvas

```HTML
<input type="checkbox" class="off-canvas-btn" title="Menú">
<label class="off-canvas-burger"></label>
<nav class="off-canvas-menu">
    <div class="off-canvas-menu-container">
        <a href="#" class="off-canvas-link">Sección 1</a>
        <a href="#" class="off-canvas-link">Sección 2</a>
        <a href="#" class="off-canvas-link">Sección 3</a>
        <a href="#" class="off-canvas-link">Sección 4</a>
        <a href="#" class="off-canvas-link">Sección 5</a>
    </div>
</nav>
```

```CSS
.off-canvas-btn {
    margin: 0;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 999;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    opacity: 0;
}

.off-canvas-burger {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 998;
    width: 3rem;
    height: 0.6rem;
    background-color: #d00;
    border-radius: .3rem;
    transform: rotate(0deg) translate(0, -1.2rem);
    transition: transform .5s ease;
    transform-origin: top left;
    transition: background-color 500ms ease;
}

.off-canvas-burger::before,
.off-canvas-burger::after {
    content: "";
    display: block;
    width: 100%;
    height: 0.6rem;
    background-color: #d00;
    border-radius: .3rem;
    transition: transform 500ms ease;
}

.off-canvas-burger::before {
    transform: rotate(0deg) translate(0, -0.9rem);
}

.off-canvas-burger::after {
    transform: rotate(0deg) translate(0, 0.3rem);
}

.off-canvas-btn:checked + .off-canvas-burger {
    background-color: transparent;
}

.off-canvas-btn:checked + .off-canvas-burger::before {
    transform: rotate(45deg) translate(0, 0) ;
}

.off-canvas-btn:checked + .off-canvas-burger::after {
    transform: rotate(-45deg) translate(.4rem, -.5rem);
}

.off-canvas-menu {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.611);
    z-index: 997;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-100%, 0);
    transition: transform 300ms ease-in-out;
}

.off-canvas-btn:checked ~ .off-canvas-menu {
    transform: translate(0, 0);
}

.off-canvas-menu-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.off-canvas-link {
    border-bottom: thin solid #d00;
    padding: 2rem;
    font-size: 1.5rem;
    text-align: center;
    text-decoration: none;
    color: #fff;
    transition: background-color 300ms ease;
}

.off-canvas-link:first-child {
    border-top: thin solid #d00;
}

.off-canvas-link:hover {
    background-color: #d005;
}
```

## Ventana Modal

```HTML
<article id="modal-1" class="modal">
    <div class="modal-container">
        <a href="#cerrar" class="modal-close">X</a>
        <h2>Esto es una Ventana Modal</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
           Fugiat eos, earum tempora labore quo excepturi cum
           consequatur vel aliquid saepe incidunt ad reiciendis
           aliquam, exercitationem sequi harum veritatis assumenda!
           Corporis.</p>
        <ul>
            <li><a href="">Enlace</a></li>
            <li><a href="">Enlace</a></li>
            <li><a href="">Enlace</a></li>
            <li><a href="">Enlace</a></li>
            <li><a href="">Enlace</a></li>
            <li><a href="">Enlace</a></li>
        </ul>
    </div>
</article>
```

```CSS
.modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 997;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0008;

    opacity: 0;
    pointer-events: none;

    transition: opacity 500ms ease-in-out;
}

.modal:target {
    opacity: 1;

    pointer-events: auto;
}

.modal-container {
    position: relative;
    border: thick double #d00;
    border-radius: 1rem;
    padding: 2rem;
    width: 70%;
    height: 70vh;
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    text-align: left;
    overflow: hidden;
}

.modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    background-color: #d00;
    text-align: center;
    line-height: 3rem;
    text-decoration: none;
    transition:
        background-color 300ms linear,
        transform 300ms ease-in-out;
}

.modal-close:hover {
    background-color: #a00;
    transform: scale(1.1);
}
```

## Intro Películas Star Wars

```HTML
<article class="star-wars">
    <div class="star-wars-container">
        <h2>Episode III</h2>
        <h3>REVENGE OF THE SITH</h3>
        <p>
            War! The Republic is crumbling under attacks by the
            ruthless Sith Lord, Count Dooku. There are heroes
            on both sides. Evil is everywhere.
        </p>
        <p>
            In a stunning move, the fiendish droid leader,
            General Grievous has swept into the Republic
            capital and kidnapped Chancellor Palpatine, leader
            of the Galactic Senate.
        </p>
        <p>
            As the Separatist Droid Army attempts to flee the
            besieged capital with their valuable hostage, two
            Jedi Knights lead a desperate mission to rescue the
            captive Chancellor...
        </p>
    </div>
</article>
```

```CSS
@keyframes introStarWars {
    0% {
        transform: perspective(100vh) rotateX(15deg) translateY(110%);
    }
    100% {
        transform: perspective(100vh) rotateX(25deg) translateY(-200%);
    }
}

.star-wars {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    color: #ffb13a;
    background-image: url("../assets/stars.gif");
}

.star-wars-container {
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    text-align: justify;
    letter-spacing: .1rem;

    animation: introStarWars 30s linear 0ms infinite both;
}

.star-wars h2,
.star-wars h3 {
    font-size: 5vw;
    text-align: center;
}

.star-wars p {
    font-size: 3vw;
    line-height: 4rem;
}
```
