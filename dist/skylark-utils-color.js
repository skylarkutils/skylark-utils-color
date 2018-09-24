/**
 * skylark-utils-color - The skylark color utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,t){function e(r,t){if("."!==r[0])return r;var e=t.split("/"),n=r.split("/");e.pop();for(var a=0;a<n.length;a++)"."!=n[a]&&(".."==n[a]?e.pop():e.push(n[a]));return e.join("/")}var n=t.define,a=t.require,i="function"==typeof n&&n.amd,o=!i&&"undefined"!=typeof exports;if(!i&&!n){var s={};n=t.define=function(r,t,n){"function"==typeof n?(s[r]={factory:n,deps:t.map(function(t){return e(t,r)}),exports:null},a(r)):s[r]=n},a=t.require=function(r){if(!s.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var t=s[r];if(!t.exports){var e=[];t.deps.forEach(function(r){e.push(a(r))}),t.exports=t.factory.apply(window,e)}return t.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(r(n,a),!i){var f=a("skylark-utils/main");o?exports=f:t.skylarkjs=f}}(function(r,t){r("skylark-utils-color/colors",["skylark-langx/skylark","skylark-langx/langx"],function(r,t){function e(r){var t={};for(var e in r)r.hasOwnProperty(e)&&(t[r[e]]=e);return t}function n(r){var t={r:0,g:0,b:0},e=1,n=!1,i=!1;return"string"==typeof r&&(r=x(r)),"object"==typeof r&&(r.hasOwnProperty("r")&&r.hasOwnProperty("g")&&r.hasOwnProperty("b")?(t=a(r.r,r.g,r.b),n=!0,i="%"===String(r.r).substr(-1)?"prgb":"rgb"):r.hasOwnProperty("h")&&r.hasOwnProperty("s")&&r.hasOwnProperty("v")?(r.s=_(r.s),r.v=_(r.v),t=f(r.h,r.s,r.v),n=!0,i="hsv"):r.hasOwnProperty("h")&&r.hasOwnProperty("s")&&r.hasOwnProperty("l")&&(r.s=_(r.s),r.l=_(r.l),t=o(r.h,r.s,r.l),n=!0,i="hsl"),r.hasOwnProperty("a")&&(e=r.a)),e=u(e),{ok:n,format:r.format||i,r:S(255,T(t.r,0)),g:S(255,T(t.g,0)),b:S(255,T(t.b,0)),a:e}}function a(r,t,e){return{r:255*c(r,255),g:255*c(t,255),b:255*c(e,255)}}function i(r,t,e){r=c(r,255),t=c(t,255),e=c(e,255);var n,a,i=T(r,t,e),o=S(r,t,e),s=(i+o)/2;if(i==o)n=a=0;else{var f=i-o;switch(a=s>.5?f/(2-i-o):f/(i+o),i){case r:n=(t-e)/f+(t<e?6:0);break;case t:n=(e-r)/f+2;break;case e:n=(r-t)/f+4}n/=6}return{h:n,s:a,l:s}}function o(r,t,e){function n(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+6*(t-r)*e:e<.5?t:e<2/3?r+(t-r)*(2/3-e)*6:r}var a,i,o;if(r=c(r,360),t=c(t,100),e=c(e,100),0===t)a=i=o=e;else{var s=e<.5?e*(1+t):e+t-e*t,f=2*e-s;a=n(f,s,r+1/3),i=n(f,s,r),o=n(f,s,r-1/3)}return{r:255*a,g:255*i,b:255*o}}function s(r,t,e){r=c(r,255),t=c(t,255),e=c(e,255);var n,a,i=T(r,t,e),o=S(r,t,e),s=i,f=i-o;if(a=0===i?0:f/i,i==o)n=0;else{switch(i){case r:n=(t-e)/f+(t<e?6:0);break;case t:n=(e-r)/f+2;break;case e:n=(r-t)/f+4}n/=6}return{h:n,s:a,v:s}}function f(r,t,e){r=6*c(r,360),t=c(t,100),e=c(e,100);var n=R.floor(r),a=r-n,i=e*(1-t),o=e*(1-a*t),s=e*(1-(1-a)*t),f=n%6,h=[e,o,i,i,s,e][f],l=[s,e,e,o,i,i][f],u=[i,i,s,e,e,o][f];return{r:255*h,g:255*l,b:255*u}}function h(r,t,e,n){var a=[m(A(r).toString(16)),m(A(t).toString(16)),m(A(e).toString(16))];return n&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function l(r,t,e,n){var a=[m(v(n)),m(A(r).toString(16)),m(A(t).toString(16)),m(A(e).toString(16))];return a.join("")}function u(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function c(r,t){d(r)&&(r="100%");var e=p(r);return r=S(t,T(0,parseFloat(r))),e&&(r=parseInt(r*t,10)/100),R.abs(r-t)<1e-6?1:r%t/parseFloat(t)}function g(r){return S(1,T(0,r))}function b(r){return parseInt(r,16)}function d(r){return"string"==typeof r&&r.indexOf(".")!=-1&&1===parseFloat(r)}function p(r){return"string"==typeof r&&r.indexOf("%")!=-1}function m(r){return 1==r.length?"0"+r:""+r}function _(r){return r<=1&&(r=100*r+"%"),r}function v(r){return Math.round(255*parseFloat(r)).toString(16)}function y(r){return b(r)/255}function x(r){r=r.replace(w,"").replace(H,"").toLowerCase();var t=!1;if(P[r])r=P[r],t=!0;else if("transparent"==r)return{r:0,g:0,b:0,a:0,format:"name"};var e;return(e=M.rgb.exec(r))?{r:e[1],g:e[2],b:e[3]}:(e=M.rgba.exec(r))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=M.hsl.exec(r))?{h:e[1],s:e[2],l:e[3]}:(e=M.hsla.exec(r))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=M.hsv.exec(r))?{h:e[1],s:e[2],v:e[3]}:(e=M.hsva.exec(r))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=M.hex8.exec(r))?{a:y(e[1]),r:b(e[2]),g:b(e[3]),b:b(e[4]),format:t?"name":"hex8"}:(e=M.hex6.exec(r))?{r:b(e[1]),g:b(e[2]),b:b(e[3]),format:t?"name":"hex"}:!!(e=M.hex3.exec(r))&&{r:b(e[1]+""+e[1]),g:b(e[2]+""+e[2]),b:b(e[3]+""+e[3]),format:t?"name":"hex"}}var k=r.colors=r.colors||{},w=/^[\s,#]+/,H=/\s+$/,R=Math,A=R.round,S=R.min,T=R.max,P=(R.random,k.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"}),M=(k.hexNames=e(P),function(){var r="[-\\+]?\\d+%?",t="[-\\+]?\\d*\\.\\d+%?",e="(?:"+t+")|(?:"+r+")",n="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",a="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?";return{rgb:new RegExp("rgb"+n),rgba:new RegExp("rgba"+a),hsl:new RegExp("hsl"+n),hsla:new RegExp("hsla"+a),hsv:new RegExp("hsv"+n),hsva:new RegExp("hsva"+a),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}());return t.mixin(k,{inputToRGB:n,rgbToRgb:a,rgbToHsl:i,hslToRgb:o,rgbToHsv:s,rgbToHex:h,rgbaToHex:l,boundAlpha:u,bound01:c,clamp01:g,parseIntFromHex:b,isOnePointZero:d,isPercentage:p,pad2:m,convertToPercentage:_,convertHexToDecimal:y,stringInputToObject:x}),k}),r("skylark-utils-color/Color",["skylark-langx/langx","./colors"],function(r,t){function e(r,t){t=0===t?0:t||10;var e=M(r).toHsl();return e.s-=t/100,e.s=k(e.s),M(e)}function n(r,t){t=0===t?0:t||10;var e=M(r).toHsl();return e.s+=t/100,e.s=k(e.s),M(e)}function a(r){return M(r).desaturate(100)}function i(r,t){t=0===t?0:t||10;var e=M(r).toHsl();return e.l+=t/100,e.l=k(e.l),M(e)}function o(r,t){t=0===t?0:t||10;var e=M(r).toRgb();return e.r=T(0,S(255,e.r-A(255*-(t/100)))),e.g=T(0,S(255,e.g-A(255*-(t/100)))),e.b=T(0,S(255,e.b-A(255*-(t/100)))),M(e)}function s(r,t){t=0===t?0:t||10;var e=M(r).toHsl();return e.l-=t/100,e.l=k(e.l),M(e)}function f(r,t){var e=M(r).toHsl(),n=(A(e.h)+t)%360;return e.h=n<0?360+n:n,M(e)}function h(r){var t=M(r).toHsl();return t.h=(t.h+180)%360,M(t)}function l(r){var t=M(r).toHsl(),e=t.h;return[M(r),M({h:(e+120)%360,s:t.s,l:t.l}),M({h:(e+240)%360,s:t.s,l:t.l})]}function u(r){var t=M(r).toHsl(),e=t.h;return[M(r),M({h:(e+90)%360,s:t.s,l:t.l}),M({h:(e+180)%360,s:t.s,l:t.l}),M({h:(e+270)%360,s:t.s,l:t.l})]}function c(r){var t=M(r).toHsl(),e=t.h;return[M(r),M({h:(e+72)%360,s:t.s,l:t.l}),M({h:(e+216)%360,s:t.s,l:t.l})]}function g(r,t,e){t=t||6,e=e||30;var n=M(r).toHsl(),a=360/e,i=[M(r)];for(n.h=(n.h-(a*t>>1)+720)%360;--t;)n.h=(n.h+a)%360,i.push(M(n));return i}function b(r,t){t=t||6;for(var e=M(r).toHsv(),n=e.h,a=e.s,i=e.v,o=[],s=1/t;t--;)o.push(M({h:n,s:a,v:i})),i=(i+s)%1;return o}var d=t.inputToRGB,p=(t.rgbToRgb,t.rgbToHsl),m=(t.hslToRgb,t.rgbToHsv),_=t.rgbToHex,v=t.rgbaToHex,y=t.boundAlpha,x=t.bound01,k=t.clamp01,w=(t.parseIntFromHex,t.isOnePointZero,t.isPercentage,t.pad2,t.convertToPercentage),H=(t.convertHexToDecimal,t.stringInputToObject,0),R=Math,A=R.round,S=R.min,T=R.max,P=R.random,M=t.Color=r.klass({init:function(r,t){if(r=r?r:"",t=t||{},r instanceof M)return r;var e=d(r);this._originalInput=r,this._r=e.r,this._g=e.g,this._b=e.b,this._a=e.a,this._roundA=A(1e3*this._a)/1e3,this._format=t.format||e.format,this._gradientType=t.gradientType,this._r<1&&(this._r=A(this._r)),this._g<1&&(this._g=A(this._g)),this._b<1&&(this._b=A(this._b)),this._ok=e.ok,this._tc_id=H++},isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(299*r.r+587*r.g+114*r.b)/1e3},setAlpha:function(r){return this._a=y(r),this._roundA=A(1e3*this._a)/1e3,this},toHsv:function(){var r=m(this._r,this._g,this._b);return{h:360*r.h,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=m(this._r,this._g,this._b),t=A(360*r.h),e=A(100*r.s),n=A(100*r.v);return 1==this._a?"hsv("+t+", "+e+"%, "+n+"%)":"hsva("+t+", "+e+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var r=p(this._r,this._g,this._b);return{h:360*r.h,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=p(this._r,this._g,this._b),t=A(360*r.h),e=A(100*r.s),n=A(100*r.l);return 1==this._a?"hsl("+t+", "+e+"%, "+n+"%)":"hsla("+t+", "+e+"%, "+n+"%, "+this._roundA+")"},toHex:function(r){return _(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(){return v(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:A(this._r),g:A(this._g),b:A(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+A(this._r)+", "+A(this._g)+", "+A(this._b)+")":"rgba("+A(this._r)+", "+A(this._g)+", "+A(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:A(100*x(this._r,255))+"%",g:A(100*x(this._g,255))+"%",b:A(100*x(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+A(100*x(this._r,255))+"%, "+A(100*x(this._g,255))+"%, "+A(100*x(this._b,255))+"%)":"rgba("+A(100*x(this._r,255))+"%, "+A(100*x(this._g,255))+"%, "+A(100*x(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(hexNames[_(this._r,this._g,this._b,!0)]||!1)},toFilter:function(r){var t="#"+v(this._r,this._g,this._b,this._a),e=t,n=this._gradientType?"GradientType = 1, ":"";if(r){var a=M(r);e=a.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+e+")"},toString:function(r){var t=!!r;r=r||this._format;var e=!1,n=this._a<1&&this._a>=0,a=!t&&n&&("hex"===r||"hex6"===r||"hex3"===r||"name"===r);return a?"name"===r&&0===this._a?this.toName():this.toRgbString():("rgb"===r&&(e=this.toRgbString()),"prgb"===r&&(e=this.toPercentageRgbString()),"hex"!==r&&"hex6"!==r||(e=this.toHexString()),"hex3"===r&&(e=this.toHexString(!0)),"hex8"===r&&(e=this.toHex8String()),"name"===r&&(e=this.toName()),"hsl"===r&&(e=this.toHslString()),"hsv"===r&&(e=this.toHsvString()),e||this.toHexString())},_applyModification:function(r,t){var e=r.apply(null,[this].concat([].slice.call(t)));return this._r=e._r,this._g=e._g,this._b=e._b,this.setAlpha(e._a),this},lighten:function(){return this._applyModification(i,arguments)},brighten:function(){return this._applyModification(o,arguments)},darken:function(){return this._applyModification(s,arguments)},desaturate:function(){return this._applyModification(e,arguments)},saturate:function(){return this._applyModification(n,arguments)},greyscale:function(){return this._applyModification(a,arguments)},spin:function(){return this._applyModification(f,arguments)},_applyCombination:function(r,t){return r.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(g,arguments)},complement:function(){return this._applyCombination(h,arguments)},monochromatic:function(){return this._applyCombination(b,arguments)},splitcomplement:function(){return this._applyCombination(c,arguments)},triad:function(){return this._applyCombination(l,arguments)},tetrad:function(){return this._applyCombination(u,arguments)}});return M.fromRatio=function(r,t){if("object"==typeof r){var e={};for(var n in r)r.hasOwnProperty(n)&&("a"===n?e[n]=r[n]:e[n]=w(r[n]));r=e}return M(r,t)},M.equals=function(r,t){return!(!r||!t)&&M(r).toRgbString()==M(t).toRgbString()},M.random=function(){return M.fromRatio({r:P(),g:P(),b:P()})},M.mix=function(r,t,e){e=0===e?0:e||50;var n,a=M(r).toRgb(),i=M(t).toRgb(),o=e/100,s=2*o-1,f=i.a-a.a;n=s*f==-1?s:(s+f)/(1+s*f),n=(n+1)/2;var h=1-n,l={r:i.r*n+a.r*h,g:i.g*n+a.g*h,b:i.b*n+a.b*h,a:i.a*o+a.a*(1-o)};return M(l)},M.readability=function(r,t){var e=M(r),n=M(t),a=e.toRgb(),i=n.toRgb(),o=e.getBrightness(),s=n.getBrightness(),f=Math.max(a.r,i.r)-Math.min(a.r,i.r)+Math.max(a.g,i.g)-Math.min(a.g,i.g)+Math.max(a.b,i.b)-Math.min(a.b,i.b);return{brightness:Math.abs(o-s),color:f}},M.isReadable=function(r,t){var e=M.readability(r,t);return e.brightness>125&&e.color>500},M.mostReadable=function(r,t){for(var e=null,n=0,a=!1,i=0;i<t.length;i++){var o=M.readability(r,t[i]),s=o.brightness>125&&o.color>500,f=3*(o.brightness/125)+o.color/500;(s&&!a||s&&a&&f>n||!s&&!a&&f>n)&&(a=s,n=f,e=M(t[i]))}return e},M}),r("skylark-utils-color/hexNames",["skylark-langx/langx","./colors"],function(r,t){return t.hexNames}),r("skylark-utils-color/names",["skylark-langx/langx","./colors"],function(r,t){return t.names}),r("skylark-utils-color/main",["./colors","./Color","./hexNames","./names"],function(r){return r}),r("skylark-utils-color",["skylark-utils-color/main"],function(r){return r})},this);
//# sourceMappingURL=sourcemaps/skylark-utils-color.js.map
