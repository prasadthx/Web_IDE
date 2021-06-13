export const Twilight = `/**
 * prism.js Twilight theme
 * Based (more or less) on the Twilight theme originally of Textmate fame.
 * @author Remy Bach
 */
code[class*="language-"],
pre[class*="language-"] {
\tcolor: white;
\tdirection: ltr;
\tfont-family: Consolas, Monaco, 'Andale Mono', monospace;
\ttext-align: left;
\ttext-shadow: 0 -.1em .2em black;
\twhite-space: pre;
\tword-spacing: normal;
\tword-break: normal;
\tline-height: 1.5;

\t-moz-tab-size: 4;
\t-o-tab-size: 4;
\ttab-size: 4;

\t-webkit-hyphens: none;
\t-moz-hyphens: none;
\t-ms-hyphens: none;
\thyphens: none;
}

pre[class*="language-"],
:not(pre) > code[class*="language-"] {
\tbackground: hsl(0, 0%, 8%); /* #141414 */
}

/* Code blocks */
pre[class*="language-"] {
\tborder-radius: 0em;
\tborder: .3em solid hsl(0, 0%, 33%); /* #282A2B */
\tbox-shadow: 1px 1px .5em black inset;
\tmargin: 0em 0;
\toverflow: auto;
\tpadding: 1em;
}

pre[class*="language-"]::selection {
\t/* Safari */
\tbackground: hsl(200, 4%, 16%); /* #282A2B */
}

pre[class*="language-"]::selection {
\t/* Firefox */
\tbackground: hsl(200, 4%, 16%); /* #282A2B */
}

/* Text Selection colour */
pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
\ttext-shadow: none;
\tbackground: hsla(0, 0%, 93%, 0.15); /* #EDEDED */
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
\ttext-shadow: none;
\tbackground: hsla(0, 0%, 93%, 0.15); /* #EDEDED */
}

/* Inline code */
:not(pre) > code[class*="language-"] {
\tborder-radius: .3em;
\tborder: .13em solid hsl(0, 0%, 33%); /* #545454 */
\tbox-shadow: 1px 1px .3em -.1em black inset;
\tpadding: .15em .2em .05em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
\tcolor: hsl(0, 0%, 47%); /* #777777 */
}

.token.punctuation {
\topacity: .7;
}

.namespace {
\topacity: .7;
}

.token.tag,
.token.boolean,
.token.number,
.token.deleted {
\tcolor: hsl(14, 58%, 55%); /* #CF6A4C */
}

.token.keyword,
.token.property,
.token.selector,
.token.constant,
.token.symbol,
.token.builtin {
\tcolor: hsl(53, 89%, 79%); /* #F9EE98 */
}

.token.attr-name,
.token.attr-value,
.token.string,
.token.char,
.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable,
.token.inserted {
\tcolor: hsl(76, 21%, 52%); /* #8F9D6A */
}

.token.atrule {
\tcolor: hsl(218, 22%, 55%); /* #7587A6 */
}

.token.regex,
.token.important {
\tcolor: hsl(42, 75%, 65%); /* #E9C062 */
}

.token.important,
.token.bold {
\tfont-weight: bold;
}
.token.italic {
\tfont-style: italic;
}

.token.entity {
\tcursor: help;
}

pre[data-line] {
\tpadding: 1em 0 1em 3em;
\tposition: relative;
}

/* Markup */
.language-markup .token.tag,
.language-markup .token.attr-name,
.language-markup .token.punctuation {
\tcolor: hsl(33, 33%, 52%); /* #AC885B */
}

/* Make the tokens sit above the line highlight so the colours don't look faded. */
.token {
\tposition: relative;
\tz-index: 1;
}

.line-highlight {
\tbackground: -moz-linear-gradient(left, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0)); /* #545454 */
\tbackground: -o-linear-gradient(left, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0)); /* #545454 */
\tbackground: -webkit-linear-gradient(left, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0)); /* #545454 */
\tbackground: hsla(0, 0%, 33%, 0.25); /* #545454 */
\tbackground: linear-gradient(left, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0)); /* #545454 */
\tborder-bottom: 1px dashed hsl(0, 0%, 33%); /* #545454 */
\tborder-top: 1px dashed hsl(0, 0%, 33%); /* #545454 */
\tleft: 0;
\tline-height: inherit;
\tmargin-top: 0.75em; /* Same as .prism’s padding-top */
\tpadding: inherit 0;
\tpointer-events: none;
\tposition: absolute;
\tright: 0;
\twhite-space: pre;
\tz-index: 0;
}

.line-highlight:before,
.line-highlight[data-end]:after {
\tbackground-color: hsl(215, 15%, 59%); /* #8794A6 */
\tborder-radius: 999px;
\tbox-shadow: 0 1px white;
\tcolor: hsl(24, 20%, 95%); /* #F5F2F0 */
\tcontent: attr(data-start);
\tfont: bold 65%/1.5 sans-serif;
\tleft: .6em;
\tmin-width: 1em;
\tpadding: 0 .5em;
\tposition: absolute;
\ttext-align: center;
\ttext-shadow: none;
\ttop: .4em;
\tvertical-align: .3em;
}

.line-highlight[data-end]:after {
\tbottom: .4em;
\tcontent: attr(data-end);
\ttop: auto;
}`;


export const Dark = `/**
 * prism.js Dark theme for JavaScript, CSS and HTML
 * Based on the slides of the talk “/Reg(exp){2}lained/”
 * @author Lea Verou
 */

code[class*="language-"],
pre[class*="language-"] {
\tcolor: white;
\ttext-shadow: 0 -.1em .2em black;
\tfont-family: Consolas, Monaco, 'Andale Mono', monospace;
\tdirection: ltr;
\ttext-align: left;
\twhite-space: pre;
\tword-spacing: normal;
\tword-break: normal;
\tline-height: 1.5;

\t-moz-tab-size: 4;
\t-o-tab-size: 4;
\ttab-size: 4;

\t-webkit-hyphens: none;
\t-moz-hyphens: none;
\t-ms-hyphens: none;
\thyphens: none;
}

@media print {
\tcode[class*="language-"],
\tpre[class*="language-"] {
\t\ttext-shadow: none;
\t}
}

pre[class*="language-"],
:not(pre) > code[class*="language-"] {
\tbackground: hsl(30, 20%, 25%);
}

/* Code blocks */
pre[class*="language-"] {
\tpadding: 1em;
\tmargin: 0em 0;
\toverflow: auto;
\tborder: .3em solid hsl(30, 20%, 40%);
\tborder-radius: 0em;
\tbox-shadow: 1px 1px .5em black inset;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
\tpadding: .15em .2em .05em;
\tborder-radius: .3em;
\tborder: .13em solid hsl(30, 20%, 40%);
\tbox-shadow: 1px 1px .3em -.1em black inset;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
\tcolor: hsl(30, 20%, 50%);
}

.token.punctuation {
\topacity: .7;
}

.namespace {
\topacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol {
\tcolor: hsl(350, 40%, 70%);
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
\tcolor: hsl(75, 70%, 60%);
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
\tcolor: hsl(40, 90%, 60%);
}

.token.atrule,
.token.attr-value,
.token.keyword {
\tcolor: hsl(350, 40%, 70%);
}

.token.regex,
.token.important {
\tcolor: #e90;
}

.token.important,
.token.bold {
\tfont-weight: bold;
}
.token.italic {
\tfont-style: italic;
}

.token.entity {
\tcursor: help;
}

.token.deleted {
\tcolor: red;
}`


export const Okaidia = `/**
 * okaidia theme for JavaScript, CSS and HTML
 * Loosely based on Monokai textmate theme by http://www.monokai.nl/
 * @author ocodia
 */

code[class*="language-"],
pre[class*="language-"] {
\tcolor: #f8f8f2;
\ttext-shadow: 0px 1px rgba(0,0,0,0.3);
\tfont-family: Consolas, Monaco, 'Andale Mono', monospace;
\tdirection: ltr;
\ttext-align: left;
\twhite-space: pre;
\tword-spacing: normal;
\t
\t-moz-tab-size: 4;
\t-o-tab-size: 4;
\ttab-size: 4;
\t
\t-webkit-hyphens: none;
\t-moz-hyphens: none;
\t-ms-hyphens: none;
\thyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
\tpadding: 1em;
\tmargin: 0em 0;
\toverflow: auto;\t
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
\tbackground: #272822;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
\tpadding: .1em;
\tborder-radius: 0em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
\tcolor: slategray;
}

.token.punctuation {
\tcolor: #f8f8f2;
}

.namespace {
\topacity: .7;
}

.token.property,
.token.tag {
\tcolor: #f92672;
}

.token.boolean,
.token.number{
\tcolor: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string {
\tcolor: #a6e22e;
}


.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
\tcolor: #f8f8f2;
}

.token.atrule,
.token.attr-value
{
\tcolor: #e6db74;
}


.token.keyword{
color: #f92672;
}

.token.regex,
.token.important {
\tcolor: #fd971f;
}

.token.important {
\tfont-weight: bold;
}

.token.entity {
\tcursor: help;
}`


export const Coy = `/**
 * prism.js Coy theme for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/tshedor/workshop-wp-theme (Example: http://workshop.kansan.com/category/sessions/basics or http://workshop.timshedor.com/category/sessions/basics);
 * @author Tim  Shedor
 */

code[class*="language-"],
pre[class*="language-"] {
\tcolor: black;
\tfont-family: Consolas, Monaco, 'Andale Mono', monospace;
\tdirection: ltr;
\ttext-align: left;
\twhite-space: pre;
\tword-spacing: normal;
\tword-break: normal;
\tline-height: 1.5;

\t-moz-tab-size: 4;
\t-o-tab-size: 4;
\ttab-size: 4;

\t-webkit-hyphens: none;
\t-moz-hyphens: none;
\t-ms-hyphens: none;
\thyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
\tposition: relative;
\tmargin: 0em 0;
\t-webkit-box-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;
\t-moz-box-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;
\tbox-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;
\tborder-left: 10px solid #358ccb;
\tbackground-color: #fdfdfd;
\tbackground-image: -webkit-linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);
\tbackground-image: -moz-linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);
\tbackground-image: -ms-linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);
\tbackground-image: -o-linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);
\tbackground-image: linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);
\tbackground-size: 3em 3em;
\tbackground-origin: content-box;
\toverflow: visible;
\tmax-height: 30em;
}

code[class*="language"] {
\tmax-height: inherit;
\theight: 100%;
\tpadding: 0 1em;
\tdisplay: block;
\toverflow: auto;
}

/* Margin bottom to accomodate shadow */
:not(pre) > code[class*="language-"],
pre[class*="language-"] {
\tbackground-color: #fdfdfd;
\t-webkit-box-sizing: border-box;
\t-moz-box-sizing: border-box;
\tbox-sizing: border-box;
\tmargin-bottom: 1em;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
\tposition: relative;
\tpadding: .2em;
\t-webkit-border-radius: 0.3em;
\t-moz-border-radius: 0.3em;
\t-ms-border-radius: 0.3em;
\t-o-border-radius: 0.3em;
\tborder-radius: 0.3em;
\tcolor: #c92c2c;
\tborder: 1px solid rgba(0, 0, 0, 0.1);
}

pre[class*="language-"]:before,
pre[class*="language-"]:after {
\tcontent: '';
\tz-index: -2;
\tdisplay: block;
\tposition: absolute;
\tbottom: 0.75em;
\tleft: 0.18em;
\twidth: 40%;
\theight: 20%;
\t-webkit-box-shadow: 0px 13px 8px #979797;
\t-moz-box-shadow: 0px 13px 8px #979797;
\tbox-shadow: 0px 13px 8px #979797;
\t-webkit-transform: rotate(-2deg);
\t-moz-transform: rotate(-2deg);
\t-ms-transform: rotate(-2deg);
\t-o-transform: rotate(-2deg);
\ttransform: rotate(-2deg);
}

:not(pre) > code[class*="language-"]:after,
pre[class*="language-"]:after {
\tright: 0.75em;
\tleft: auto;
\t-webkit-transform: rotate(2deg);
\t-moz-transform: rotate(2deg);
\t-ms-transform: rotate(2deg);
\t-o-transform: rotate(2deg);
\ttransform: rotate(2deg);
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
\tcolor: #7D8B99;
}

.token.punctuation {
\tcolor: #5F6364;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.function-name,
.token.constant,
.token.symbol,
.token.deleted {
\tcolor: #c92c2c;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.function,
.token.builtin,
.token.inserted {
\tcolor: #2f9c0a;
}

.token.operator,
.token.entity,
.token.url,
.token.variable {
\tcolor: #a67f59;
\tbackground: rgba(255, 255, 255, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword,
.token.class-name {
\tcolor: #1990b8;
}

.token.regex,
.token.important {
\tcolor: #e90;
}

.language-css .token.string,
.style .token.string {
\tcolor: #a67f59;
\tbackground: rgba(255, 255, 255, 0.5);
}

.token.important {
\tfont-weight: normal;
}

.token.bold {
\tfont-weight: bold;
}
.token.italic {
\tfont-style: italic;
}

.token.entity {
\tcursor: help;
}

.namespace {
\topacity: .7;
}

@media screen and (max-width: 767px) {
\tpre[class*="language-"]:before,
\tpre[class*="language-"]:after {
\t\tbottom: 14px;
\t\t-webkit-box-shadow: none;
\t\t-moz-box-shadow: none;
\t\tbox-shadow: none;
\t}

}

/* Plugin styles */
.token.tab:not(:empty):before,
.token.cr:before,
.token.lf:before {
\tcolor: #e0d7d1;
}

/* Plugin styles: Line Numbers */
pre[class*="language-"].line-numbers {
\tpadding-left: 0;
}

pre[class*="language-"].line-numbers code {
\tpadding-left: 3.8em;
}

pre[class*="language-"].line-numbers .line-numbers-rows {
\tleft: 0;
}

/* Plugin styles: Line Highlight */
pre[class*="language-"][data-line] {
\tpadding-top: 0;
\tpadding-bottom: 0;
\tpadding-left: 0;
}
pre[data-line] code {
\tposition: relative;
\tpadding-left: 4em;
}
pre .line-highlight {
\tmargin-top: 0;
}
`