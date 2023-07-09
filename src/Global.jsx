import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
}
html {
  scroll-snap-type: y mandatory;
}
::-webkit-scrollbar{
	height: 0px;
	width: 10px;
	background: rgba(255, 255, 255, 1);
}
::-webkit-scrollbar-thumb {
  background: rgba(221, 87, 137, 0.8);
  -webkit-border-radius: 3ex;
}

::-webkit-scrollbar-corner {
  background: rgba(255,255,255,1);
}
*{
	scroll-behavior: smooth;
}
#progressY{
	position: fixed;
  	left: 10px;
  	right: 0;
  	height: 5px;
  	background: rgba(221,87,137,0.8);
  	bottom: 100px;
}
circle {
  stroke-dashoffset: 0;
  stroke-width: 15%;
  fill: none;
}
#indicator{
	stroke: rgba(221,87,137,0.8);
}
    }
`;

export default GlobalStyle;