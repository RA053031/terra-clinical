"use strict";(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[8769],{6696:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=_(n(67294)),a=_(n(45697)),r=_(n(94184)),l=_(n(47166)),i=_(n(50026)),c=_(n(97309)),s=_(n(94394)),u=_(n(80918)),m=["text","isTruncated"];function _(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y=l.default.bind(u.default),p={text:a.default.string,isTruncated:a.default.bool},v=function(e){var t=e.text,n=e.isTruncated,a=f(e,m),l=o.default.useContext(i.default),u=(0,r.default)(y("item-comment",l.className),a.className);return o.default.createElement(s.default,d({text:t,isTruncated:n,icon:o.default.createElement(c.default,{className:y("inline-icon")})},a,{className:u}))};v.propTypes=p,v.defaultProps={text:"",isTruncated:!1};var w=v;t.default=w},94394:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var o=u(n(67294)),a=u(n(45697)),r=u(n(94184)),l=u(n(47166)),i=u(n(50026)),c=u(n(35950)),s=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},m.apply(this,arguments)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=l.default.bind(c.default),y={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=y;var p={text:a.default.string,textStyle:a.default.oneOf(Object.values(y)),isTruncated:a.default.bool,isDisabled:a.default.bool,icon:a.default.element,iconAlignment:a.default.oneOf(["center","top","inline"])},v={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},w=function(e){var t,n=e.text,a=e.textStyle,l=e.isTruncated,c=e.isDisabled,u=e.icon,p=e.iconAlignment,v=d(e,s),w=o.default.useContext(i.default),O=(0,r.default)(f("item-display",{"is-disabled":c},_({},"icon-".concat(p),u),w.className),v.className),b=f(["text",{"is-truncated":l},_({},"".concat(a),a===y.SECONDARY),_({},"".concat(a),a===y.ATTENTION),_({},"".concat(a),a===y.STRONG),{"strike-through":a===y.STRIKETHROUGH}]);return u&&(t=o.default.createElement("div",{className:f("icon")},u)),o.default.createElement("div",m({},v,{className:O,"aria-disabled":c}),t,o.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:b},n))};w.propTypes=p,w.defaultProps=v;var O=w;t.default=O},37856:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextEmphasisTypes=t.Layouts=t.AccessoryAlignments=void 0;var o=_(n(67294)),a=_(n(45697)),r=_(n(94184)),l=_(n(47166)),i=_(n(50026)),c=_(n(94394)),s=_(n(6696)),u=_(n(70901)),m=["layout","textEmphasis","isTruncated","accessoryAlignment","startAccessory","reserveStartAccessorySpace","endAccessory","displays","comment","refCallback"];function _(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y=l.default.bind(u.default),p={ONE_COLUMN:"oneColumn",TWO_COLUMNS:"twoColumns"};t.Layouts=p;var v={DEFAULT:"default",START:"start"};t.TextEmphasisTypes=v;var w={ALIGN_TOP:"alignTop",ALIGN_CENTER:"alignCenter"};t.AccessoryAlignments=w;var O={layout:a.default.oneOf(["oneColumn","twoColumns"]),textEmphasis:a.default.oneOf(["default","start"]),isTruncated:a.default.bool,accessoryAlignment:a.default.oneOf(["alignTop","alignCenter"]),startAccessory:a.default.node,reserveStartAccessorySpace:a.default.bool,endAccessory:a.default.node,displays:a.default.arrayOf(a.default.element),comment:a.default.node,refCallback:a.default.func},b={layout:p.ONE_COLUMN,textEmphasis:v.DEFAULT,isTruncated:!1,accessoryAlignment:w.ALIGN_CENTER,startAccessory:void 0,reserveStartAccessorySpace:!1,endAccessory:void 0,displays:[],comment:void 0},g=function(e,t,n,a){var r;if(e||t){var l=y("accessory","".concat(a,"-accessory"),{"accessory-align-center":n===w.ALIGN_CENTER},{"accessory-align-top":n===w.ALIGN_TOP});r=o.default.createElement("div",{className:l},e)}return r},h=function(e,t){var n="content-primary-size",o="content-primary-color";return e>0&&(n="content-secondary-size"),(2===t&&1===e||e>=2)&&(o="content-secondary-color"),[n,o]},I=function(e,t,n,o){var a;return a=o===v.START?function(e,t,n){return 1===n?["content-secondary-size","content-secondary-color"]:h(e,t)}(e,t,n):h(e,t),["content"].concat(a)},T=function(e,t,n){if(null!=e&&e.length){for(var a=[],r=e.slice(0,8),l=t===p.TWO_COLUMNS?2:1;r.length;)a.push(r.splice(0,l));return o.default.createElement("div",{className:y("row-container")},a.map((function(e,t){var r=function(e,t,n,a){var r=t;return o.default.createElement("div",{className:y("row"),key:r},e.map((function(e,r){var l=r,i=I(t,n,r,a);return o.default.createElement("div",{className:y(i),key:l},e)})))}(e,t,a.length,n);return r})))}},N=function(e){var t=e.layout,n=e.textEmphasis,a=e.isTruncated,l=e.accessoryAlignment,c=e.startAccessory,s=e.reserveStartAccessorySpace,u=e.endAccessory,_=e.displays,v=e.comment,w=e.refCallback,O=f(e,m),b=o.default.useContext(i.default),h=(0,r.default)(y("item-view",{"is-truncated":a},{"one-column":t===p.ONE_COLUMN},{"two-columns":t===p.TWO_COLUMNS},b.className),O.className);return o.default.createElement("div",d({},O,{className:h,ref:w}),g(c,s,l,"start"),o.default.createElement("div",{className:y("body")},T(_,t,n),v),g(u,!1,l,"end"))};N.propTypes=O,N.defaultProps=b,N.Display=c.default,N.Comment=s.default;var A=N;t.default=A},80918:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemComment-module__clinical-lowlight-theme___CErHr","orion-fusion-theme":"ItemComment-module__orion-fusion-theme___l7dPe","item-comment":"ItemComment-module__item-comment___-Fd1-","inline-icon":"ItemComment-module__inline-icon___JnHAP"}},35950:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___4qgu5","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___0dqB7","item-display":"ItemDisplay-module__item-display___SwtBC",text:"ItemDisplay-module__text___FVWmu",icon:"ItemDisplay-module__icon___i+07A","icon-center":"ItemDisplay-module__icon-center___OrGZa","icon-top":"ItemDisplay-module__icon-top___-eyYd","icon-inline":"ItemDisplay-module__icon-inline___fWRZQ","is-truncated":"ItemDisplay-module__is-truncated___4y5Gf","is-disabled":"ItemDisplay-module__is-disabled___sNXca",secondary:"ItemDisplay-module__secondary___23O-O",attention:"ItemDisplay-module__attention___RCytH",strong:"ItemDisplay-module__strong___xPBvv","strike-through":"ItemDisplay-module__strike-through___KCKYP"}},70901:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemView-module__clinical-lowlight-theme___XR3+f","orion-fusion-theme":"ItemView-module__orion-fusion-theme___XKzHL","item-view":"ItemView-module__item-view___2xlIP",accessory:"ItemView-module__accessory___PvuEA","start-accessory":"ItemView-module__start-accessory___XlRLU","end-accessory":"ItemView-module__end-accessory___d5XtL","accessory-align-top":"ItemView-module__accessory-align-top___+M66a","accessory-align-center":"ItemView-module__accessory-align-center___2zYD3",body:"ItemView-module__body___sK4Q9",row:"ItemView-module__row___uFTYs",content:"ItemView-module__content___6aCtZ","is-truncated":"ItemView-module__is-truncated___bmqU7","one-column":"ItemView-module__one-column___Kd1v8","row-container":"ItemView-module__row-container___AbNG-","two-columns":"ItemView-module__two-columns___JSHlK","content-primary-color":"ItemView-module__content-primary-color___-3mpu","content-primary-size":"ItemView-module__content-primary-size___TysDs","content-secondary-color":"ItemView-module__content-secondary-color___mYi7V","content-secondary-size":"ItemView-module__content-secondary-size___cQqN8"}},23543:function(e,t,n){n.r(t),t.default={"itemview-wrapper":"ItemViewCommon-test-module__itemview-wrapper___V7w-5","comment-itemview-wrapper":"ItemViewCommon-test-module__comment-itemview-wrapper___q1ScN","overflow-displays-itemview":"ItemViewCommon-test-module__overflow-displays-itemview___zisnc","accessory-itemview-wrapper":"ItemViewCommon-test-module__accessory-itemview-wrapper___CmwDw","itemview-fontsize":"ItemViewCommon-test-module__itemview-fontsize___HTvl9"}},97309:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(67294)),a=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}var i=function(e){var t=l({},e);return o.default.createElement(a.default,t,o.default.createElement("path",{d:"M46 2.1H2a2 2 0 00-2 2v28a2 2 0 002 2h31.2L45 45.9V34.1h1a2 2 0 002-2v-28a2 2 0 00-2-2z"}))};i.displayName="IconComment",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=i;t.default=c}}]);