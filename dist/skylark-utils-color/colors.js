/**
 * skylark-utils-color - The skylark color utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx"],function(e,r){function a(e){var r={};for(var a in e)e.hasOwnProperty(a)&&(r[e[a]]=a);return r}function f(e){var r={r:0,g:0,b:0},a=1,f=!1,t=!1;return"string"==typeof e&&(e=w(e)),"object"==typeof e&&(e.hasOwnProperty("r")&&e.hasOwnProperty("g")&&e.hasOwnProperty("b")?(r=n(e.r,e.g,e.b),f=!0,t="%"===String(e.r).substr(-1)?"prgb":"rgb"):e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("v")?(e.s=y(e.s),e.v=y(e.v),r=i(e.h,e.s,e.v),f=!0,t="hsv"):e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("l")&&(e.s=y(e.s),e.l=y(e.l),r=o(e.h,e.s,e.l),f=!0,t="hsl"),e.hasOwnProperty("a")&&(a=e.a)),a=c(a),{ok:f,format:e.format||t,r:T(255,q(r.r,0)),g:T(255,q(r.g,0)),b:T(255,q(r.b,0)),a:a}}function n(e,r,a){return{r:255*b(e,255),g:255*b(r,255),b:255*b(a,255)}}function t(e,r,a){e=b(e,255),r=b(r,255),a=b(a,255);var f,n,t=q(e,r,a),o=T(e,r,a),l=(t+o)/2;if(t==o)f=n=0;else{var i=t-o;switch(n=l>.5?i/(2-t-o):i/(t+o),t){case e:f=(r-a)/i+(r<a?6:0);break;case r:f=(a-e)/i+2;break;case a:f=(e-r)/i+4}f/=6}return{h:f,s:n,l:l}}function o(e,r,a){function f(e,r,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+6*(r-e)*a:a<.5?r:a<2/3?e+(r-e)*(2/3-a)*6:e}var n,t,o;if(e=b(e,360),r=b(r,100),a=b(a,100),0===r)n=t=o=a;else{var l=a<.5?a*(1+r):a+r-a*r,i=2*a-l;n=f(i,l,e+1/3),t=f(i,l,e),o=f(i,l,e-1/3)}return{r:255*n,g:255*t,b:255*o}}function l(e,r,a){e=b(e,255),r=b(r,255),a=b(a,255);var f,n,t=q(e,r,a),o=T(e,r,a),l=t,i=t-o;if(n=0===t?0:i/t,t==o)f=0;else{switch(t){case e:f=(r-a)/i+(r<a?6:0);break;case r:f=(a-e)/i+2;break;case a:f=(e-r)/i+4}f/=6}return{h:f,s:n,v:l}}function i(e,r,a){e=6*b(e,360),r=b(r,100),a=b(a,100);var f=O.floor(e),n=e-f,t=a*(1-r),o=a*(1-n*r),l=a*(1-(1-n)*r),i=f%6,s=[a,o,t,t,l,a][i],d=[l,a,a,o,t,t][i],c=[t,t,l,a,a,o][i];return{r:255*s,g:255*d,b:255*c}}function s(e,r,a,f){var n=[m(P(e).toString(16)),m(P(r).toString(16)),m(P(a).toString(16))];return f&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function d(e,r,a,f){var n=[m(v(f)),m(P(e).toString(16)),m(P(r).toString(16)),m(P(a).toString(16))];return n.join("")}function c(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function b(e,r){h(e)&&(e="100%");var a=p(e);return e=T(r,q(0,parseFloat(e))),a&&(e=parseInt(e*r,10)/100),O.abs(e-r)<1e-6?1:e%r/parseFloat(r)}function g(e){return T(1,q(0,e))}function u(e){return parseInt(e,16)}function h(e){return"string"==typeof e&&e.indexOf(".")!=-1&&1===parseFloat(e)}function p(e){return"string"==typeof e&&e.indexOf("%")!=-1}function m(e){return 1==e.length?"0"+e:""+e}function y(e){return e<=1&&(e=100*e+"%"),e}function v(e){return Math.round(255*parseFloat(e)).toString(16)}function k(e){return u(e)/255}function w(e){e=e.replace(A,"").replace(F,"").toLowerCase();var r=!1;if(R[e])e=R[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};var a;return(a=S.rgb.exec(e))?{r:a[1],g:a[2],b:a[3]}:(a=S.rgba.exec(e))?{r:a[1],g:a[2],b:a[3],a:a[4]}:(a=S.hsl.exec(e))?{h:a[1],s:a[2],l:a[3]}:(a=S.hsla.exec(e))?{h:a[1],s:a[2],l:a[3],a:a[4]}:(a=S.hsv.exec(e))?{h:a[1],s:a[2],v:a[3]}:(a=S.hsva.exec(e))?{h:a[1],s:a[2],v:a[3],a:a[4]}:(a=S.hex8.exec(e))?{a:k(a[1]),r:u(a[2]),g:u(a[3]),b:u(a[4]),format:r?"name":"hex8"}:(a=S.hex6.exec(e))?{r:u(a[1]),g:u(a[2]),b:u(a[3]),format:r?"name":"hex"}:!!(a=S.hex3.exec(e))&&{r:u(a[1]+""+a[1]),g:u(a[2]+""+a[2]),b:u(a[3]+""+a[3]),format:r?"name":"hex"}}var x=e.colors=e.colors||{},A=/^[\s,#]+/,F=/\s+$/,O=Math,P=O.round,T=O.min,q=O.max,R=(O.random,x.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"}),S=(x.hexNames=a(R),function(){var e="[-\\+]?\\d+%?",r="[-\\+]?\\d*\\.\\d+%?",a="(?:"+r+")|(?:"+e+")",f="[\\s|\\(]+("+a+")[,|\\s]+("+a+")[,|\\s]+("+a+")\\s*\\)?",n="[\\s|\\(]+("+a+")[,|\\s]+("+a+")[,|\\s]+("+a+")[,|\\s]+("+a+")\\s*\\)?";return{rgb:new RegExp("rgb"+f),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+f),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+f),hsva:new RegExp("hsva"+n),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}());return r.mixin(x,{inputToRGB:f,rgbToRgb:n,rgbToHsl:t,hslToRgb:o,rgbToHsv:l,rgbToHex:s,rgbaToHex:d,boundAlpha:c,bound01:b,clamp01:g,parseIntFromHex:u,isOnePointZero:h,isPercentage:p,pad2:m,convertToPercentage:y,convertHexToDecimal:k,stringInputToObject:w}),x});
//# sourceMappingURL=sourcemaps/colors.js.map
