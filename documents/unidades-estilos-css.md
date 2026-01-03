# Unidades y Estilos CSS

[Fundamentos](fundamentos-css.md) |
[Unidades y Estilos](unidades-estilos-css.md) |
[Efectos Visuales y Movimientos](efectos-visuales-movimientos-css.md)

> -   [Colores](#colores-en-css) `red` `#F609` `rgba(0, 0, 0, 0.5)`
> -   [Unidades de Medida](#unidades-de-medida-en-css) `px` `rem` `vw - vh`
> -   [Custom Properties y Funciones](#custom-properties-y-funciones) `var` `calc` `clamp`
> -   [Estilos para Fuentes y Textos](#estilos-de-fuentes-y-textos) `font-size` `text-overflow`
> -   [Bordes y Outlines](#bordes-y-outlines) `border` `outline-*`
> -   [Fondos](#fondos-en-css) `background` `background-clip` `background-position`
> -   [Imagenes](#imagenes-en-css) `object-fit` `object-position`
> -   [Listas](#listas-en-css) `list-style-*` `list-style-image` `list-style-position`
> -   [Textos en Columnas](#texto-en-columnas) `column-count` `column-rule`
> -   [Tablas en css](#tablas-en-css) `border-collapse` `empty-cells` `border-spacing`
> -   [Estilos en Formularios](#estilos-de-formularios) `resize` `caret-color`

## Colores en CSS

### Colores por Nombres

```CSS
.color-by-name {
    background-color: coral;
    color: rebeccapurple;
    border: thick solid greenyellow;
}
```

### Sistema Hexadecimal

**0123456789ABCDEF**

| A   | B   | C   |
| --- | --- | --- |
| 10  | 11  | 12  |

<br>

| D   | E   | F   |
| --- | --- | --- |
| 13  | 14  | 15  |

_RedGreenBlue (Medios Digitales)_ vs _CyanMagentaYellowKey (Medios Impresos)_

Colores en HEX van a ser colores de 6 digitos

**#FF6600**

| Red | Green | Blue |
| --- | ----- | ---- |
| FF  | 66    | 00   |

**Canal de opacidad**

_0-100_

#00000050

_1-9_ (simplificado)

#FF660090 o #F609

```CSS
.color-hex {
    background-color: #ff6600;
    background-color: #f60;
    background-color: #ff6605;
    background-color: #000000;
    background-color: #00000000;
    background-color: #00000050;
    background-color: #0005;
    color: #12ac78;
    border: thick solid #ffffff;
    border: thick solid #ff0000;
    border: thick solid #00ff00;
    border: thick solid #0000ff;
    border: thick solid #000000;
}
```

### Sistema RGB

Acepta 8 bits por canal

**Bit**: (0/1) 2 elevado a la potencia 8 = 2×2×2×2×2×2×2×2 = 256

Por cada canal de color tenemos valores que van del 0 - 255.

rgb(0, 255, 0)

**Canal de opacidad**

0 - 1

rbga(0,0,0, **0.5**)

```CSS
.color-rgb {
    background-color: rgb(255, 255, 255);
    background-color: rgb(255, 0, 0);
    background-color: rgb(0, 255, 0);
    background-color: rgb(0, 0, 255);
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.5);
    color: rgb(255, 102, 0);
    border: thick solid rgb(128, 109, 7);
}
```

### Sistema HSL

HueSaturationLightness (Tono-Saturacion-Luminosidad)

1. Hue (Circulo Cromatico)

![HSL-wheel](../assets/HSL-wheel.jpg)

| Grados | Color   |
| ------ | ------- |
| 0-360° | Red     |
| 60°    | Yellow  |
| 120°   | Green   |
| 180°   | Cyan    |
| 240°   | Blue    |
| 300°   | Magenta |

2. Saturation (Saturación) **Intensidad de Color**

    0% -> Escala de grises

    100% -> Color puro

3. Lightness (Luminosidad del color)

    0% -> Negro

    50% -> Color puro

    100% -> Blanco

**Opacidad**

_0-1_

hsla(30, 100%, 50%, 0.25);

```CSS
.color-hsl {
    background-color: hsl(0, 100%, 50%);
    background-color: hsl(120, 100%, 50%);
    background-color: hsl(240, 100%, 50%);
    background-color: hsl(30, 100%, 50%);
    background-color: hsla(30, 100%, 50%, 0.25);
    color: hsl(0, 0%, 100%);
    color: hsl(0, 0%, 0%);
    border: thick solid hsl(210, 75%, 65%);
}
```

### transparent y currentColor

Valor transparent: Color transparente aplica rgb(0,0,0,0)
Valor currentColor: Hereda el valor por defecto (del navegador) o asignado de la propiedad color, del ancestro que tenga definida esta propiedad, busca del ancestro más cercano.

```HTML
<section style="color: red;">
    <div class="color-transparent-current">
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolore delectus,
            beatae doloremque dignissimos magni eligendi.
        </p>
    </div>
    Lorem
</section>
```

```CSS
.color-transparent-current {
    /* background-color: darkmagenta; */
    /* background-color: currentColor; */
    background-color: transparent;
    color: olive;
    border: thick solid currentColor;
}
```

### Propiedad Opacity

```HTML
<div class="opacity opacity-30">
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Illum dolore delectus, beatae doloremque dignissimos
    </p>
</div>
```

```CSS
.opacity {
    background-color: orchid;
    color: navy;
    border: thick solid black;
    opacity: .5;
    opacity: 1;
    opacity: 0;
    opacity: 0.75;
}

.opacity-00 {
    opacity: 0;
}

.opacity-10 {
    opacity: 0.1;
}

.opacity-20 {
    opacity: 0.2;
}

.opacity-30 {
    opacity: 0.3;
}
```

## Unidades de Medida en CSS

1. Absolutas: Su valor no cambia, son unidades del mundo real.

-   pc, cm, mm, in, Q
-   pt (1/72in)
-   px (1/96in)

2. Relativas: Su valor es relativo a un contexto.

-   em, rem, ex, ch - al tamaño de la fuente \*(m - letra mas ancha)

    -   em - Basada en la anchura de la "m" (letra m) de la fuente del elemento.
    -   rem - Basada en la anchura de la "m" de la fuente del elemento raíz (html).
    -   ex - Basada en la altura de la "x" de la fuente del elemento.
    -   ch - Basada en la altura de la "0" (cero) de la fuente del elemento.

-   % - al tamaño del contenedor

-   vw, vh, vmin, vmax - al tamaño del viewport
    -   vw - Ancho del viewport van de 1 a 100.
    -   vh - Alto del viewport van de 1 a 100.
    -   vmax - Entre "vw" y "vh" toma el que tenga el mayor valor.
    -   vmin - Entre "vw" y "vh" toma el que tenga el menor valor.

Conversiones entre unidades - http://pxtoem.com/

### Pixeles

1px = 1/96 in

```HTML
<div class="pixels">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusamus facere rerum quaerat, neque vel assumenda
    possimus accusantium
</div>
```

```CSS
.pixels {
    background-color: cadetblue;
    width: 500px;
    height: 400px;
    padding: 20px;
    font-size: 16px; /* default */
    font-size: 1.2rem;
    border: 5px solid rebeccapurple;
}
```

### Relativas

#### **Em**

Basada en la anchura de la "m" de la fuente (font-size) del elemento (contenedor), no la raiz root.

```HTML
<div class="ems">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facere rerum quaerat, neque vel assumenda.
    <section class="em-child">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut architecto, quas est, vero fuga obcaecati pariatur
    </section>
</div>
```

```CSS
.ems {
    background-color: cadetblue;
    font-size: 24px;
    padding: 1em .5em;
    border: 5px solid rebeccapurple;
}

.em-child {
    background-color: salmon;
    border: thick solid beige;
    margin: .5em;
    padding: 1em;
    font-size: 2em;
}
```

#### **Rem**

Basada en la anchura de la "m" de la fuente del elemento raíz (html).

```HTML
<div class="rems">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusamus facere rerum quaerat, neque vel assumenda.
    Accusamus facere rerum quaerat, neque vel assumenda
    <section class="rem-child">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eius ut architecto, quas est, vero fuga obcaecati
        pariatur debitis qui a nemo corporis deserunt iure
        consequatur voluptatem. Quo animi sed at?
    </section>
</div>
```

```CSS
html {
    /* font-size: 20px; */
    font-size: 16px;
}

.rems {
    background-color: cadetblue;
    font-size: 24px;
    padding: 1rem .5rem;
    border: 5px solid rebeccapurple;
}

.rem-child {
    background-color: salmon;
    border: thick solid beige;
    margin: .5rem;
    padding: 1rem;
    font-size: 2rem;
}
```

#### Exs

Basada en la altura de la "x" de la fuente del elemento.

```HTML
<div class="exs">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusamus facere rerum quaerat, neque vel assumenda.
    <section class="ex-child">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eius ut architecto, quas est, vero fuga obcaecati
    </section>
</div>
```

```CSS
/* Base html font-size = 16px => 1ex = 7.15625 */
/* Base html font-size = 24px => 1ex = 10.7344 */
/* 1ex ≈ 0.5rem */

.exs {
    background-color: cadetblue;
    font-size: 24px;
    padding: 1ex;
    border: 5px solid rebeccapurple;
}

.ex-child {
    background-color: salmon;
    border: thick solid beige;
    margin: 0.5ex;
    padding: 1ex;
    font-size: 1ex;
}
```

#### CHs

Basada en la altura de la "0" (cero) de la fuente del elemento.

Unidad para asignar una anchura de acuerdo a una cantidad de caracteres fijo.

```HTML
<div class="chs">
    1234567890
</div>
<div class="chs">
    qwertyasdfg
</div>
<div class="chs">
    12we.,6y{}B
</div>
```

```CSS
.chs {
    background-color: cadetblue;
    width: 10ch;
}
```

#### Porcentajes

Al tamaño del contenedor

```HTML
<div class="percentages">
    Caja
</div>
<div class="height-parent">
    <section class="height-child">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo at,
        explicabo, culpa reprehenderit facilis earum accusantium
        laboriosam aperiam nisi voluptatibus, consectetur dicta.
        Suscipit, praesentium aliquid doloribus quis quae nesciunt hic!
    </section>
</div>
```

```CSS
.percentages {
    background-color: darkkhaki;
    padding: 5%;
    margin: 20% 10%;
    width: 80%;
    font-size: 100%; /* 16px del font-size del html*/
    height: 100%;
}

.height-parent {
    background-color: brown;
    width: 500px;
    height: 500px;
}

.height-child {
    background-color: coral;
    width: 50%;
    height: 50%;
}
```

#### Unidades del Viewport

**vw vh**

Recuerda: La etiqueta body tiene margenes por defecto y las barras de scroll tambien forman parte de viewport

```HTML
<section>
    <div class="viewport">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos soluta quos odio maxime itaque reprehenderit, quisquam tenetur reiciendis ipsam architecto. Molestiae accusamus nam optio molestias commodi aperiam quasi ullam est.
    </div>
</section>
```

```CSS
.viewport {
    background-color: darkcyan;
    width: 50vw;
    /* Recuerda: La etiqueta body tiene margenes por defecto  */
    /* Las barras de scroll tambien forman parte de viewport */
    /* width: 100%; */
    width: 100vw;
    height: 50vh;
    height: 100vh;
    font-size: 5vw;
    padding: 2vh 2vw;
}
```

**vmin vmax**

-   vmax: Valor maximo del viewport sea del vw o vh
-   vmin: Valor minimo del viewport sea del vw o vh

```HTML
<div class="vmax">
    Caja vmax
</div>
<div class="vmin">
    Caja vmin
</div>
```

```CSS
.vmin,
.vmax {
    background-color: darksalmon;
    border: thick solid cyan;
    width: 50vmax;
    height: 50vmin;
}
```

### ¿Cuándo usar cada unidad de medida?

-   Para impresion utiliza pixeles, pt y unidades absolutas (pc, cm, mm, in)

-   En la etiqueta html, el font-size definelo en 16px.

-   La tipografia expresalo en `rem`, tambien para padding y margin. Los ems utilizalo cuando quieres respetar proporcionalmente los espaciados, bordes, tamaños de ciertos elementos.

## Custom Properties y Funciones

Las Custom Properties o Variables CCS: Son variables (espacio reservado de memoria) que almacenan datos y que exsisten en un hambito de alcance (selector y sus elementos hijos). Estas variables se definen dentro de un selector.

### Función var

**var()**: Sirve para invocar variables.

```HTML
<h2 class="title-props">Custom Properties (Variables)</h2>
<article class="custom-props-1">
  <section class="custom-props-2" style="--border-color: red;">
      <div class="custom-props-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Omnis alias reprehenderit quidem vel nulla labore sapiente
          cumque aperiam, minus dolor odio repellendus odit velit!
          Nemo maiores qui hic velit earum.
      </div>
  </section>
</article>
```

```CSS
:root {
    color: darkgreen;
    --default-bg-color: skyblue;
}

html {
    color: red;
}

.custom-props-1 {
    --primary-color: gray;
    --font-size: 32px;
    background-color: var(--primary-color);
}

.custom-props-2 {
    background-color: var(--default-bg-color);
    border: thin solid var(--border-color);
    padding: 1rem;
}

.custom-props-3 {
    font-size: var(--font-size);
    border: thin solid var(--border-color);
}

.title-props {
    --primary-color: navy;
    color: var(--primary-color, orange);
    background-color: var(--default-bg-color);
}
```

### Función url

**url()**: Sirve para cargar una hoja de estilos y archivos tipograficos o imagenes de fondo (contenido externo)

```CSS
@import url("otra-hoja.css")
```

### Función calc

**calc()**: Sirve para hacer calculos aritmeticos.

```HTML
<div class="ch-10">
    1234567890
</div>
```

```CSS
html {
    box-sizing: border-box;
}

*,
*::after,
*::before {
    box-sizing: inherit;
}

.ch-10 {
    --padding-size: 3ch;
    --num-ch: 10ch;
    background-color: var(--default-bg-color);
    font-size: 2rem;
    padding: var(--padding-size);
    width: calc( var(--num-ch) + var(--padding-size) * 2 );
}
```

### Función min y max

**min() & max()**: Son funciones que tomaran valores minimos o maximos dependiendo de los valores.

**min()**: Toma el minimo valor de una lista de tamaños.

**max()**: Toma el mayor valor de una lista de tamaños.

```HTML
<div class="min-max">
    Función min() & max()
</div>
```

```CSS
.min-max {
    background-color: var(--default-bg-color);
    width: min(250px, 20vw);
    height: max(150px, 25vh);
}
```

### Función clamp

**clamp()**: Recibe tres valores tamaño minimo, ideal y maximo.

```CSS
h1 {
    font-size: clamp(2rem, 1rem + 3vw, 3rem );
}
```

## Estilos de Fuentes y Textos

### Estilos de Fuentes Tipográficas

**font-family**: Lista de familia de fuentes que el navegador elige (Georgia, 'Times New Roman', Times, serif, etc).

**font-size**: Define el tamaño de la fuente (16px, 32px)

**font-weight**: Define el grosor de la tipografia. Depende de la familia tipografica

-   100: Thin
-   300: Light
-   400: Normal
-   500: Medium
-   600: Semi Bold
-   700: Bold
-   800: Extra Bold
-   900: Ultra Bold

**font-style**: Define el tipo de estilo de la tipografia (normal, italic, oblique)

**font-variant**: Define la representacion visual de las letras (glyph).

-   `normal` : Predeterminada
-   `small-caps` : Convierte las minusculas en pequeñas mayusculas.

**line-height**: Iterlineado o altura de cada linea del parrafo.

**font**: ShortHand de los estilos de fuente. Respetar el orden:

_\*(Es importante poner un **/** entre font-size y line-height )_

`font-style font-variant font-weight font-size / line-height font-family;`

```HTML
<p class="font">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aspernatur vel aut totam? Quam maxime.
</p>
```

```CSS
.font {
    /* font-family: Georgia, 'Times New Roman', Times, serif; */
    /* font-family: sans-serif; */
    font-family: monospace;
    font-size: 32px;
    font-weight: bold;
    font-style: oblique;
    font-variant:small-caps;
    line-height: 2;
    font: italic small-caps bold 24px / 1.5 monospace ;
}
```

### Fuentes externas @font-face y font-display

Formato **woff** o **woff2** - Web Open Font Format

**font-display**: Nos permite como queremos que carge el texto miestras carga las fuentes (tipografia) personalizadas.

-   **auto**: Permite que el navegador utilice el método predeterminado que suele ser block.
-   **block**: Oculta brevemente el texto hasta que la fuente haya sido cargada por completo.
-   **swap**: Indica al navegador que utilice la fuente alternativa para mostrar el texto hasta que la fuente personalizada se haya cargado por completo.
-   **fallback**: Es una mezcla de auto y swap.
-   **optional**: Ocultará el texto, luego lo cargará con la fuente alternativa y finalmente aplicará la fuente personalizada.

```HTML
<p class="chalet">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium corporis maiores beatae, minima quis delectus
</p>
<p class="pecita">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Placeat assumenda in voluptatibus consequuntur velit
</p>
```

```CSS
@font-face {
    font-family: "Chalet";
    src: url("../assets/Chalet.woff") format("woff");
    font-display: swap;

    /* src: url("../assets/Chalet.woff") format("woff"),
         url("../assets/Chalet.woff2") format("woff2"); */
}

.chalet {
    font-family: "Chalet", sans-serif;
    font-size: 2rem;
}

@font-face {
    font-family: "Pecita";
    src: url("../assets/Pecita.woff") format("woff");
    font-display: swap;
}

.pecita {
    font-family: "Pecita", cursive;
    font-size: 2rem;
}
```

### Google Fonts

```HTML
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
    href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
    rel="stylesheet"
/>
```

```HTML
<p class="raleway">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Placeat assumenda in voluptatibus consequuntur velit,
    quam incidunt corporis delectus doloremque quasi
    repellendus provident, maxime non consequatur harum ducimus
</p>
```

```CSS
.raleway {
    font-family: "Raleway", sans-serif;
    font-size: 2rem;
}
```

### Estilos de Texto

-   **text-align**: `left|right|center|justify` ;
-   **text-decoration**: `none|underline|overline` ;
-   **text-indent** (sangria): `1rem 2rem` ;
-   **text-overflow**: `clip|ellipsis` ;

    -   **overflow**: `hidden`;
    -   **white-space**: `nowrap`;

-   **text-transform**: `none|capitalize|uppcase|lowercase` ;
-   **letter-spacing**: `1rem 2rem`;
-   **white-space**: `normal|nowrap|pre||pre-wrap|pre-line` ;
-   **word-break**: `normal|break-all` ;
-   **word-spacing**: `normal 5px 2rem`;
-   **writing-mode**: `horizontal-tb|vertical-lr|vertical-rl` ;

```HTML
<p class="text">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Delectus atque eos dolor illo impedit vero dolores dolore odio
    fugiat ut, vel dolorem voluptate officia facere rem possimus.
    <a href="index.html#temario-css">Enlace</a>
</p>
<p class="text-overflow">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Architecto officia esse dignissimos autem est tempore
    provident dolorum aut, cumque laboriosam velit tenetur sapiente
</p>
<p class="white-space">
    import React from "react"
    import Title from "./Title"
    function App {
        return Title;
    }
</p>
<p class="word-spacing">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Laudantium consequuntur dolore sint vero, minima corrupti
    laborum ad aliquid. Sapiente consequuntur cupiditate, quae
    soluta debitis voluptatem beatae officiis tempore recusandae
</p>
```

```CSS
.text {
    font-size: 2rem;
    /* text-.. */
    text-align: center;
    text-align: left;
    text-decoration: overline;
    text-decoration: none;
    text-indent: 3rem;
    text-transform: capitalize;
    text-transform: lowercase;
    text-transform: uppercase;
    text-transform: none;
    letter-spacing: .5rem;
    word-break: break-all;
    writing-mode: horizontal-tb;
    writing-mode: vertical-lr;
    writing-mode: vertical-rl;
}

.text a {
    text-decoration: none;
}

.text-overflow {
    background-color: blanchedalmond;
    border: thin solid black;
    font-size: 2rem;
    padding: 1rem;
    width: 50%;
    /* text-overflow */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.white-space {
    white-space: pre;
}

.word-spacing {
    font-size: 2rem;
    word-spacing: 3rem;
}
```

### Tipográficas de Íconos Vectoriales

**GOOGLE FONT ICONS**

```HTML
<!-- GOOGLE FONT ICONS -->
<link href="https://fonts.googleapis.com/icon?family=Material-Icons" rel="stylesheet">
```

```HTML
<div>
    <span class="material-icons">
        info
    </span>
    <span class="material-icons">
        face
    </span>
    <span class="material-icons">
        favorite
    </span>
</div>
```

```CSS
.material-icons {
    font-family: "Material Icons";
    font-weight: normal;
    font-style: normal;
    font-size: 24px; /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers */
    -webkit-font-smoothing: antialiased;

    /* Support for Safari and Chrome */
    text-rendering: optimizeLegibility;

    /* Support for Firefox */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: "liga";
}
```

**BOOTSTRAP CDN**

```HTML
<!-- BOOTSTRAP - CDN -->
<link href="https://cdnjsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet">
```

```HTML
<div>
    <i class="bi bi-twitter"></i>
    <i class="bi bi-youtube"></i>
    <i class="bi bi-instagram"></i>
    <i class="bi bi-alarm-fill"></i>
</div>
```

**FONT AWESOME - CDNJS**

```HTML
<!-- FONT AWESOME - CDNJS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
```

```HTML
<div>
    <i class="far fa-angry"></i>
    <i class="fab fa-youtube"></i>
    <i class="fas fa-thumbs-up"></i>
</div>
```

## Bordes y Outlines

### Bordes Redondeados

```HTML
<div class="box border-radius"></div>
<div class="box border-radius-2"></div>
<div class="box border-radius-3"></div>
<div class="box border-radius-4"></div>
```

```CSS
.box {
    background-color: black;
    margin: 2rem auto;
    width: 400px;
    height: 400px;
    border: thick solid red;
}
```

```CSS
/* Borde Circular (1 radio) */
.border-radius {
    border-radius: 2rem;
    border-top-left-radius: 4rem;
    border-top-right-radius: 4rem;
    border-bottom-right-radius: 4rem;
    border-bottom-left-radius: 4rem;

    /* 2 valores:
        top-left&bottom-right | top-right&bottom-left */
    border-radius: 2rem 4rem;

    /* 3 valores:
        top-left | top-right&bottom-left | bottom-right */
    border-radius: 2rem 4rem 0;

    /* 4 valores:
        top-left | top-right | bottom-right | bottom-left */
    border-radius: 4rem 3rem 2rem 1rem;
}

/* Borde Eliptico (2 radios) */
.border-radius-2 {
    /* Elipse: ejeX / ejeY  */

    /* 1 valor / 1 valor:
        ejeX (anchura) / ejeY (altura) (todos los lados)
    */
    border-radius: 1rem / 3rem;

    /* 2 valores / 2 valores:
        top-leftX&bottom-rightX top-rightX&bottom-leftX
         /
        top-leftY&bottom-rightY top-rightY&bottom-leftY
    */
    border-radius: 1rem 2rem / 3rem 4rem;

    /* 3 valores / 3 valores:
        top-leftX top-rightX&bottom-leftX bottom-rightX
         /
        top-leftY top-rightY&bottom-leftY bottom-rightY
    */
    border-radius: 1rem 2rem 5rem / 3rem 4rem 2rem;

    /* 4 valores:
        top-leftX top-rightX bottom-rightX bottom-leftX
         /
        top-leftY top-rightY bottom-rightY bottom-leftY
    */
    border-radius: 2rem 1rem 3rem 5rem / 4rem 3rem 4rem 2rem;
}

.border-radius-3 {
    border-radius: 50%;
}

.border-radius-4 {
    width: 400px;
    height: 200px;
    width: 200px;
    height: 400px;
    border-radius: 50%;
}
```

### Outlines

```HTML
<div class="box outline">Outline</div>
<div style="text-align: center;">
    <input type="text" name="" id="">
</div>
```

```CSS
.outline {
    color: white;
    text-align: center;

    outline-width: 5px;
    outline-style: dashed;
    outline-color: chartreuse;
    outline: thick solid blue;
    /* border-width: 100px; */
    /* outline-width: 100px; */
    outline-offset: 3rem;
    outline-offset: -3rem;
}
```

## Fondos en CSS

```CSS
.box {
    margin: 2rem auto;
    width: 300px;
    height: 300px;
    border: thick dashed red;
}
```

### background-color

Define el color de fondo del elemento

```HTML
<div class="box bg-color"></div>
```

```CSS
.bg-color {
    background-color: skyblue;
}
```

### background-image

Define la imagen de fondo del elemento.

```HTML
<div class="box bg-image"></div>
```

```CSS
.bg-image {
    background-image: url(../assets/puesta-sol.jpg);
}
```

### background-size

Define el tamaño de la imagen de fondo, primer valor x (ancho), segundo valor y (altura).

-   `cover`: Cambia el tamaño de la imagen de fondo para asegurarse de que permanezca completamente visible. Adapta el tamaño de la imagen al tamaño de la caja.

-   `contain`: Cambia el tamaño de la imagen de fondo para asegurarse de que el elemento esté completamente cubierto. Adapta el tamaño para que toda la imagen se vea en la caja

```HTML
<div class="box bg-size"></div>
```

```CSS
.bg-size {
    background-image: url(../assets/puesta-sol.jpg);
    background-size: 300px 200px;
    /* con 1 valor - se asigna el ancho y la altura la
    calcula automaticamente */
    background-size: 300px;
    background-size: cover;
    background-size: contain;
}
```

### background-repeat

Define cómo se repite la imagen de fondo en el elemento.

```HTML
<div class="box bg-repeat"></div>
```

```CSS
.bg-repeat {
    background-image: url(../assets/puesta-sol.jpg);
    background-size: 100px;
    background-repeat: repeat;
    background-repeat: repeat-x;
    background-repeat: repeat-y;
    background-repeat: no-repeat;
}
```

### background-position

Define la posición del imagen de fondo, primer valor x, segundo y. Si no se especifica un segundo valor éste será center.

Aparte de valores numéricos podemos indicar el posicionamiento con las palabras center, top, bottom, left y right.

```HTML
<div class="box bg-position"></div>
```

```CSS
.bg-position {
    background-color: skyblue;
    background-image: url(../assets/puesta-sol.jpg);
    background-size: 100px;
    background-repeat: no-repeat;
    background-position: 10px 20px; /* left top */
    background-position: 1rem 2rem;
    background-position: 10% 20%;
    /* el segundo valor lo centra en la vertical*/
    background-position: 10%;
    background-position: top;
    background-position: top center;
    background-position: top right;
    background-position: top left;
    background-position: bottom center;
    background-position: bottom right;
    background-position: bottom left;
    background-position: bottom;
}
```

### background-clip

Define cuánto debe extenderse el fondo dentro del elemento. El valor por defecto es border-box.

```HTML
<div class="box bg-clip"></div>
```

```CSS
.bg-clip {
    background-color: skyblue;
    background-image: url(../assets/puesta-sol.jpg);
    background-repeat: no-repeat;
    /* background-size: 200px; */
    background-size: cover;

    /* bg-clip: Pricipalmente afecta al bg-color (en general) */
    /* border-box | content-box | padding-box */
    background-clip: border-box; /* default */
    background-clip: padding-box;
    background-clip: content-box;
    padding: 1rem;
}
```

### background-origin

Define el origen de la imagen de fondo.

```HTML
<div class="box bg-origin"></div>
```

```CSS
.bg-origin {
    background-color: skyblue;
    background-image: url(../assets/puesta-sol.jpg);
    background-repeat: no-repeat;
    /* background-size: 200px; */
    background-size: cover;

    /* bg-origin: Pricipalmente afecta al bg-image */
    background-origin: padding-box; /* default */
    background-origin: border-box;
    background-origin: content-box;
    padding: 1rem;
}
```

### background-attachment

Define cómo se comportarán la imagen de fondo al desplazarse por la página.

```HTML
<div class="box bg-attachment"></div>
```

```CSS
.bg-attachment {
    background-color: skyblue;
    background-image: url(../assets/puesta-sol.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 50vh;

    background-attachment: scroll; /* default */
    background-attachment: fixed;
}
```

### Fondos Múltiples background

Propiedad Shorthand para: `background-image` `background-position` `background-size` `background-repeat` `background-origin` `background-clip` `background-attachment` y `background-color`.

\*_Evita usar el shorthand `background`_

```HTML
<div class="box bg-multiple"></div>
<div class="box bg-art"></div>
```

```CSS
.bg-multiple {
    width: 50%;
    height: 30vh;
    background-image:
        url("../assets/favicon.png"),
        url("../assets/puesta-sol.jpg");
    background-repeat: repeat-x, no-repeat;
    background-size: 10%, cover;
}

.bg-art {
    width: 1000px;
    height: 700px;
    background:
        url("../assets/arbol.png") no-repeat center bottom,
        url("../assets/aves.png") no-repeat center bottom,
        url("../assets/cielo.png") no-repeat center top;
}
```

![art](art.png)

## Imagenes en CSS

### Imágenes Responsivas

```HTML
<img src="assets/puesta-sol.jpg" alt="kEnAi y la puesta del sol">
<img src="assets/favicon.png" alt="kEnAi">
```

```CSS
img {
    max-width: 100%;
    height: auto;
}
```

### Imágenes con tamaños específicos

```HTML
<article class="card">
    <img src="assets/puesta-sol.jpg" alt="kEnAi y la puesta del sol">
    <h4>Puesta de Sol</h4>
</article>
```

```CSS
.card {
    border: medium solid black;
    width: 400px;
    height: 400px;
}

.card img {
    background-color: blanchedalmond;
    height: 300px;

    object-fit: fill; /* default */
    object-fit: cover;
    object-fit: contain;
    object-fit: none;
    object-fit: scale-down;
    /* scale-dowm toma el valor que sea menor de
    los valores contain y none */

    object-position: left top;
    object-position: 50% 50%;
    object-position: right bottom;
    object-position: left center;
    object-position: -40px center;
    object-position: 50% 50%;
}
```

## Listas en CSS

**_list-style-type_**: El tipo de estilo de las viñetas de una lista desordenada.

**_list-style-image_**: Define una imagen como viñeta.

**_list-style-position_**: Define la posición de la viñeta. Pueden ser `outside` o `inside`.

**_list-style_**: Shorthand de `list-style-type` `list-style-image` y `list-style-position`.

```HTML
<ul class="list">
    <li>Primavera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
</ul>

<ul class="list-2">
    <li>Primavera Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Architecto harum cum quisquam
        quos culpa eum, tempora minima vel animi atque
        repudiandae facilis minus maxime ad veniam modi
        expedita. Deleniti, nulla.</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
</ul>

<ul class="list-3">
    <li>Primavera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
</ul>
```

```CSS
.list {
    /* list-style-type */
    list-style-type: disc; /* default */
    list-style-type: square;
    list-style-type: circle;
    list-style-type: lower-roman;
    list-style-type: upper-roman;
    list-style-type: lower-alpha;
    list-style-type: upper-alpha;
    list-style-type: lower-greek;
    list-style-type: lower-latin;
    list-style-type: upper-latin;
    list-style-type: decimal;
    list-style-type: none;
    list-style-type: decimal-leading-zero;

    /* list-style-image */
    list-style-image: url("../assets/favicon.png");
    list-style-image: url("../assets/cielo.png");
    list-style-image: none; /* default */
}

.list li {
    list-style-type: none;
}

.list li::before {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-image: url("../assets/favicon.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.list-2 li {
    background-color: coral;
    list-style-position: inside;
    list-style-position: outside; /* ourside */
}

.list-3 li {
    background-color: cornsilk;
    list-style: lower-greek  outside;
}
```

## Texto en Columnas

```HTML
<ol class="text-column-4">
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

<article class="text-column-3">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sunt recusandae
    exercitationem ullam cum maxime</p>
    <p>Laborum veniam necessitatibus esse, qui itaque, voluptas earum tenetur architecto
    fugit velit facilis ex.</p>
    <p>Perspiciatis esse alias, vel suscipit doloremque nesciunt reprehenderit illo eaque!
    Asperiores</p>
</article>
```

```CSS
.text-column-4 {
    list-style-position: inside;

    /* Cuantas columnas */
    column-count: 4;

    /* Separacion entre columnas */
    column-gap: 2rem;

    /* Separacion con una lineaA<> */
    column-rule: thin dotted red;

    /* Tamaño minimo de anchura de las columnas */
    column-width: 100px;
}

.text-column-3 {
    column-count: 3;
    column-gap: 1rem;
    column-rule: thin solid gray;
    column-width: 100px;
}
```

## Tablas en CSS

```HTML
<table class="table">
    <tr>
        <th>A</th>
        <th>B</th>
        <th>C</th>
    </tr>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
    <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
    </tr>
    <tr>
        <td>7</td>
        <td></td>
        <td>9</td>
    </tr>
</table>
```

```CSS
.table {
    font-size: 3rem;
    /* Controla si la celdas se mantienen juntas */
    border-collapse: collapse;
    border-collapse: separate; /* default */
    empty-cells: show; /* default */
    empty-cells: hide;
}

table,
td,
th {
    border: medium solid black;
    border-spacing: 0;
    border-spacing: 1rem;

}
```

## Estilos de Formularios

```HTML
<form class="contact-form" action="https://formsubmit.co/your@email.com" method="POST">

    <input type="text" name="nombre" placeholder="Escribe tu nombre"
        pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
        title="Nombre sólo acepta letras y espacios en blanco"
        required>

    <input type="email" name="correo" placeholder="Escribe tu correo"
        pattern="^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$"
        title="Formato de correo invalido" required>

    <textarea name="comentario" placeholder="Escribe tus comentarios"
        title="comentarios" cols="30" rows="10" required></textarea>

    <input type="submit">

</form>
```

```CSS
html {
    box-sizing: border-box;
    font-size: 16px;
}

*,
*::after,
*::before {
    box-sizing: inherit;
}

.contact-form {
    --form-text-color: #666;
    --form-placeholder-color: #006999;
    --form-success-color: #4caf50;
    --form-error-color: #f44336;
    --form-bg-color: #eee;
    --form-border-color: #222;

    background-color: var(--form-bg-color);

    border: thin solid var(--form-border-color);
    margin-left: auto;
    margin-right: auto;
    padding: 2rem;
    width: 80%;
}

.contact-form > *::placeholder {
    color: var(--form-placeholder-color);
}

.contact-form > * {
    display: block;
    width: 100%;
    margin-bottom: 2rem;
    font-family: sans-serif;
    font-size: 1rem;
    padding: .5rem;
    border-radius: 0.25rem;
    color: var(--form-text-color);
    caret-color: var(--form-border-color);
}

.contact-form > *:focus {
    outline: none;
}

.contact-form > *[required]:invalid {
    border: thin solid var(--form-error-color);
}

.contact-form > *[required]:valid {
    border: thin solid var(--form-success-color);
}

.contact-form input[type="submit"] {
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    background-color: var(--form-placeholder-color);
    font-weight: bold;
    font-size: 1.25rem;
    color: #fff;
    padding: .25rem;
}

.contact-form input[type="submit"]:hover {
    cursor: default; /* default */
    cursor: pointer;
    opacity: 80%;
}

.contact-form textarea {
    resize: none;
}
```
