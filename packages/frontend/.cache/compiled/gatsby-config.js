!function(e,n,t,r,o){var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof u[r]&&u[r],f=i.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(n,t){if(!f[n]){if(!e[n]){var o="function"==typeof u[r]&&u[r];if(!t&&o)return o(n,!0);if(i)return i(n,!0);if(l&&"string"==typeof n)return l(n);var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}a.resolve=function(t){var r=e[n][1][t];return null!=r?r:t},a.cache={};var c=f[n]=new d.Module(n);e[n][0].call(c.exports,a,c,c.exports,this)}return f[n].exports;function a(e){var n=a.resolve(e);return!1===n?{}:d(n)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=f,d.parent=i,d.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(d,"root",{get:function(){return u[r]}}),u[r]=d;for(var s=0;s<n.length;s++)d(n[s]);if(t){var c=d(t);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define((function(){return c}))}}({"8yNLm":[function(e,n,t){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(t);const r={siteMetadata:{title:"frontend",siteUrl:"https://www.yourdomain.tld"},graphqlTypegen:!0,plugins:["gatsby-plugin-postcss"]};t.default=r},{"@parcel/transformer-js/src/esmodule-helpers.js":"kmjAC"}],kmjAC:[function(e,n,t){t.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},t.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.exportAll=function(e,n){return Object.keys(e).forEach((function(t){"default"===t||"__esModule"===t||n.hasOwnProperty(t)||Object.defineProperty(n,t,{enumerable:!0,get:function(){return e[t]}})})),n},t.export=function(e,n,t){Object.defineProperty(e,n,{enumerable:!0,get:t})}},{}]},["8yNLm"],"8yNLm","parcelRequire6577");