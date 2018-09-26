/**
 * skylark-utils-color - The skylark color utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","./colors"],function(t,i){function r(t,i){i=0===i?0:i||10;var r=I(t).toHsl();return r.s-=i/100,r.s=y(r.s),I(r)}function n(t,i){i=0===i?0:i||10;var r=I(t).toHsl();return r.s+=i/100,r.s=y(r.s),I(r)}function s(t){return I(t).desaturate(100)}function o(t,i){i=0===i?0:i||10;var r=I(t).toHsl();return r.l+=i/100,r.l=y(r.l),I(r)}function h(t,i){i=0===i?0:i||10;var r=I(t).toRgb();return r.r=k(0,C(255,r.r-A(255*-(i/100)))),r.g=k(0,C(255,r.g-A(255*-(i/100)))),r.b=k(0,C(255,r.b-A(255*-(i/100)))),I(r)}function a(t,i){i=0===i?0:i||10;var r=I(t).toHsl();return r.l-=i/100,r.l=y(r.l),I(r)}function e(t,i){var r=I(t).toHsl(),n=(A(r.h)+i)%360;return r.h=n<0?360+n:n,I(r)}function u(t){var i=I(t).toHsl();return i.h=(i.h+180)%360,I(i)}function g(t){var i=I(t).toHsl(),r=i.h;return[I(t),I({h:(r+120)%360,s:i.s,l:i.l}),I({h:(r+240)%360,s:i.s,l:i.l})]}function _(t){var i=I(t).toHsl(),r=i.h;return[I(t),I({h:(r+90)%360,s:i.s,l:i.l}),I({h:(r+180)%360,s:i.s,l:i.l}),I({h:(r+270)%360,s:i.s,l:i.l})]}function l(t){var i=I(t).toHsl(),r=i.h;return[I(t),I({h:(r+72)%360,s:i.s,l:i.l}),I({h:(r+216)%360,s:i.s,l:i.l})]}function c(t,i,r){i=i||6,r=r||30;var n=I(t).toHsl(),s=360/r,o=[I(t)];for(n.h=(n.h-(s*i>>1)+720)%360;--i;)n.h=(n.h+s)%360,o.push(I(n));return o}function f(t,i){i=i||6;for(var r=I(t).toHsv(),n=r.h,s=r.s,o=r.v,h=[],a=1/i;i--;)h.push(I({h:n,s:s,v:o})),o=(o+a)%1;return h}var b=i.inputToRGB,p=(i.rgbToRgb,i.rgbToHsl),v=(i.hslToRgb,i.rgbToHsv),m=i.rgbToHex,d=i.rgbaToHex,H=i.boundAlpha,x=i.bound01,y=i.clamp01,R=(i.parseIntFromHex,i.isOnePointZero,i.isPercentage,i.pad2,i.convertToPercentage),S=(i.convertHexToDecimal,i.stringInputToObject,i.hexNames),M=0,T=Math,A=T.round,C=T.min,k=T.max,P=T.random,I=i.Color=t.klass({init:function(t,i){if(t=t?t:"",i=i||{},t instanceof I)return t;var r=b(t);this._originalInput=t,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=A(1e3*this._a)/1e3,this._format=i.format||r.format,this._gradientType=i.gradientType,this._r<1&&(this._r=A(this._r)),this._g<1&&(this._g=A(this._g)),this._b<1&&(this._b=A(this._b)),this._ok=r.ok,this._tc_id=M++},isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},setAlpha:function(t){return this._a=H(t),this._roundA=A(1e3*this._a)/1e3,this},toHsv:function(){var t=v(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=v(this._r,this._g,this._b),i=A(360*t.h),r=A(100*t.s),n=A(100*t.v);return 1==this._a?"hsv("+i+", "+r+"%, "+n+"%)":"hsva("+i+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=p(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=p(this._r,this._g,this._b),i=A(360*t.h),r=A(100*t.s),n=A(100*t.l);return 1==this._a?"hsl("+i+", "+r+"%, "+n+"%)":"hsla("+i+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return m(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(){return d(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:A(this._r),g:A(this._g),b:A(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+A(this._r)+", "+A(this._g)+", "+A(this._b)+")":"rgba("+A(this._r)+", "+A(this._g)+", "+A(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:A(100*x(this._r,255))+"%",g:A(100*x(this._g,255))+"%",b:A(100*x(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+A(100*x(this._r,255))+"%, "+A(100*x(this._g,255))+"%, "+A(100*x(this._b,255))+"%)":"rgba("+A(100*x(this._r,255))+"%, "+A(100*x(this._g,255))+"%, "+A(100*x(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(S[m(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var i="#"+d(this._r,this._g,this._b,this._a),r=i,n=this._gradientType?"GradientType = 1, ":"";if(t){var s=I(t);r=s.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+i+",endColorstr="+r+")"},toString:function(t){var i=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0,s=!i&&n&&("hex"===t||"hex6"===t||"hex3"===t||"name"===t);return s?"name"===t&&0===this._a?this.toName():this.toRgbString():("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString())},_applyModification:function(t,i){var r=t.apply(null,[this].concat([].slice.call(i)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(o,arguments)},brighten:function(){return this._applyModification(h,arguments)},darken:function(){return this._applyModification(a,arguments)},desaturate:function(){return this._applyModification(r,arguments)},saturate:function(){return this._applyModification(n,arguments)},greyscale:function(){return this._applyModification(s,arguments)},spin:function(){return this._applyModification(e,arguments)},_applyCombination:function(t,i){return t.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(c,arguments)},complement:function(){return this._applyCombination(u,arguments)},monochromatic:function(){return this._applyCombination(f,arguments)},splitcomplement:function(){return this._applyCombination(l,arguments)},triad:function(){return this._applyCombination(g,arguments)},tetrad:function(){return this._applyCombination(_,arguments)}});return I.fromRatio=function(t,i){if("object"==typeof t){var r={};for(var n in t)t.hasOwnProperty(n)&&("a"===n?r[n]=t[n]:r[n]=R(t[n]));t=r}return I(t,i)},I.equals=function(t,i){return!(!t||!i)&&I(t).toRgbString()==I(i).toRgbString()},I.random=function(){return I.fromRatio({r:P(),g:P(),b:P()})},I.mix=function(t,i,r){r=0===r?0:r||50;var n,s=I(t).toRgb(),o=I(i).toRgb(),h=r/100,a=2*h-1,e=o.a-s.a;n=a*e==-1?a:(a+e)/(1+a*e),n=(n+1)/2;var u=1-n,g={r:o.r*n+s.r*u,g:o.g*n+s.g*u,b:o.b*n+s.b*u,a:o.a*h+s.a*(1-h)};return I(g)},I.readability=function(t,i){var r=I(t),n=I(i),s=r.toRgb(),o=n.toRgb(),h=r.getBrightness(),a=n.getBrightness(),e=Math.max(s.r,o.r)-Math.min(s.r,o.r)+Math.max(s.g,o.g)-Math.min(s.g,o.g)+Math.max(s.b,o.b)-Math.min(s.b,o.b);return{brightness:Math.abs(h-a),color:e}},I.isReadable=function(t,i){var r=I.readability(t,i);return r.brightness>125&&r.color>500},I.mostReadable=function(t,i){for(var r=null,n=0,s=!1,o=0;o<i.length;o++){var h=I.readability(t,i[o]),a=h.brightness>125&&h.color>500,e=3*(h.brightness/125)+h.color/500;(a&&!s||a&&s&&e>n||!a&&!s&&e>n)&&(s=a,n=e,r=I(i[o]))}return r},I});
//# sourceMappingURL=sourcemaps/Color.js.map
