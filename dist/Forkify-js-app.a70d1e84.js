let e;var t,r,n,i,o,a,s,c,u,l,p,d,f,h,v,g,m,y,b=globalThis;function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=function(e){return e&&e.Math===Math&&e};k=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||E("object"==typeof self&&self)||E("object"==typeof b&&b)||E("object"==typeof k&&k)||function(){return this}()||Function("return this")();var S={},$={};S=!($=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var O={},j={};j=!$(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var L=Function.prototype.call;O=j?L.bind(L):function(){return L.apply(L,arguments)};var F={}.propertyIsEnumerable,M=Object.getOwnPropertyDescriptor;o=M&&!F.call({1:2},1)?function(e){var t=M(this,e);return!!t&&t.enumerable}:F;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var x={},T={},N={},q=Function.prototype,I=q.call,H=j&&q.bind.bind(I,I),C={},D=(N=j?H:function(e){return function(){return I.apply(e,arguments)}})({}.toString),R=N("".slice);C=function(e){return R(D(e),8,-1)};var A=Object,z=N("".split);T=$(function(){return!A("z").propertyIsEnumerable(0)})?function(e){return"String"===C(e)?z(e,""):A(e)}:A;var U={},W={};W=function(e){return null==e};var B=TypeError;U=function(e){if(W(e))throw new B("Can't call method on "+e);return e},x=function(e){return T(U(e))};var G={},J={},Y={},Q={},K="object"==typeof document&&document.all;Q=void 0===K&&void 0!==K?function(e){return"function"==typeof e||e===K}:function(e){return"function"==typeof e},Y=function(e){return"object"==typeof e?null!==e:Q(e)};var V={},X={};X=function(e,t){var r;return arguments.length<2?(r=k[e],Q(r)?r:void 0):k[e]&&k[e][t]};var Z={};Z=N({}.isPrototypeOf);var ee={},et={},er={},en={},ei=k.navigator,eo=ei&&ei.userAgent;en=eo?String(eo):"";var ea=k.process,es=k.Deno,ec=ea&&ea.versions||es&&es.version,eu=ec&&ec.v8;eu&&(s=(a=eu.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&en&&(!(a=en.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=en.match(/Chrome\/(\d+)/))&&(s=+a[1]),er=s;var el=k.String;ee=(et=!!Object.getOwnPropertySymbols&&!$(function(){var e=Symbol("symbol detection");return!el(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&er&&er<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ep=Object;V=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return Q(t)&&Z(t.prototype,ep(e))};var ed={},ef={},eh={},ev=String;eh=function(e){try{return ev(e)}catch(e){return"Object"}};var eg=TypeError;ef=function(e){if(Q(e))return e;throw new eg(eh(e)+" is not a function")},ed=function(e,t){var r=e[t];return W(r)?void 0:ef(r)};var em={},ey=TypeError;em=function(e,t){var r,n;if("string"===t&&Q(r=e.toString)&&!Y(n=O(r,e))||Q(r=e.valueOf)&&!Y(n=O(r,e))||"string"!==t&&Q(r=e.toString)&&!Y(n=O(r,e)))return n;throw new ey("Can't convert object to primitive value")};var eb={},e_={},ew={};ew=!1;var ek={},eE=Object.defineProperty;ek=function(e,t){try{eE(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var eS="__core-js_shared__",e$=e_=k[eS]||ek(eS,{});(e$.versions||(e$.versions=[])).push({version:"3.49.0",mode:ew?"pure":"global",copyright:"© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",source:"https://github.com/zloirock/core-js"}),eb=function(e,t){return e_[e]||(e_[e]=t||{})};var eO={},ej={},eL=Object;ej=function(e){return eL(U(e))};var eF=N({}.hasOwnProperty);eO=Object.hasOwn||function(e,t){return eF(ej(e),t)};var eM={},eP=0,ex=Math.random(),eT=N(1.1.toString);eM=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eT(++eP+ex,36)};var eN=k.Symbol,eq=eb("wks"),eI=ee?eN.for||eN:eN&&eN.withoutSetter||eM,eH=TypeError,eC=function(e){return eO(eq,e)||(eq[e]=et&&eO(eN,e)?eN[e]:eI("Symbol."+e)),eq[e]}("toPrimitive");J=function(e,t){if(!Y(e)||V(e))return e;var r,n=ed(e,eC);if(n){if(void 0===t&&(t="default"),r=O(n,e,t),!Y(r)||V(r))return r;throw new eH("Can't convert object to primitive value")}return void 0===t&&(t="number"),em(e,t)},G=function(e){var t=J(e,"string");return V(t)?t:t+""};var eD={},eR={},eA=k.document,ez=Y(eA)&&Y(eA.createElement);eR=function(e){return ez?eA.createElement(e):{}},eD=!S&&!$(function(){return 7!==Object.defineProperty(eR("div"),"a",{get:function(){return 7}}).a});var eU=Object.getOwnPropertyDescriptor;i=S?eU:function(e,t){if(e=x(e),t=G(t),eD)try{return eU(e,t)}catch(e){}if(eO(e,t))return P(!O(o,e,t),e[t])};var eW={},eB={};eB=S&&$(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eG={},eJ=String,eY=TypeError;eG=function(e){if(Y(e))return e;throw new eY(eJ(e)+" is not an object")};var eQ=TypeError,eK=Object.defineProperty,eV=Object.getOwnPropertyDescriptor,eX="enumerable",eZ="configurable",e0="writable";c=S?eB?function(e,t,r){if(eG(e),t=G(t),eG(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e0 in r&&!r[e0]){var n=eV(e,t);n&&n[e0]&&(e[t]=r.value,r={configurable:eZ in r?r[eZ]:n[eZ],enumerable:eX in r?r[eX]:n[eX],writable:!1})}return eK(e,t,r)}:eK:function(e,t,r){if(eG(e),t=G(t),eG(r),eD)try{return eK(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eQ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eW=S?function(e,t,r){return c(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var e1={},e2={},e4=Function.prototype,e3=S&&Object.getOwnPropertyDescriptor,e5=eO(e4,"name"),e7=e5&&(!S||S&&e3(e4,"name").configurable),e6={},e8=N(Function.toString);Q(e_.inspectSource)||(e_.inspectSource=function(e){return e8(e)}),e6=e_.inspectSource;var e9={},te={},tt=k.WeakMap;te=Q(tt)&&/native code/.test(String(tt));var tr={},tn=eb("keys");tr=function(e){return tn[e]||(tn[e]=eM(e))};var ti={};ti={};var to="Object already initialized",ta=k.TypeError,ts=k.WeakMap;if(te||e_.state){var tc=e_.state||(e_.state=new ts);tc.get=tc.get,tc.has=tc.has,tc.set=tc.set,u=function(e,t){if(tc.has(e))throw new ta(to);return t.facade=e,tc.set(e,t),t},l=function(e){return tc.get(e)||{}},p=function(e){return tc.has(e)}}else{var tu=tr("state");ti[tu]=!0,u=function(e,t){if(eO(e,tu))throw new ta(to);return t.facade=e,eW(e,tu,t),t},l=function(e){return eO(e,tu)?e[tu]:{}},p=function(e){return eO(e,tu)}}var tl=(e9={set:u,get:l,has:p,enforce:function(e){return p(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!Y(t)||(r=l(t)).type!==e)throw new ta("Incompatible receiver, "+e+" required");return r}}}).enforce,tp=e9.get,tf=String,th=Object.defineProperty,tv=N("".slice),tg=N("".replace),tm=N([].join),ty=S&&!$(function(){return 8!==th(function(){},"length",{value:8}).length}),tb=String(String).split("String"),t_=e2=function(e,t,r){"Symbol("===tv(tf(t),0,7)&&(t="["+tg(tf(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eO(e,"name")||e7&&e.name!==t)&&(S?th(e,"name",{value:t,configurable:!0}):e.name=t),ty&&r&&eO(r,"arity")&&e.length!==r.arity&&th(e,"length",{value:r.arity});try{r&&eO(r,"constructor")&&r.constructor?S&&th(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tl(e);return eO(n,"source")||(n.source=tm(tb,"string"==typeof t?t:"")),e};Function.prototype.toString=t_(function(){return Q(this)&&tp(this).source||e6(this)},"toString"),e1=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Q(r)&&e2(r,o,n),n.global)i?e[t]=r:ek(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tw={},tk={},tE={},tS={},t$={},tO={},tj=Math.ceil,tL=Math.floor;tO=Math.trunc||function(e){var t=+e;return(t>0?tL:tj)(t)},t$=function(e){var t=+e;return t!=t||0===t?0:tO(t)};var tF=Math.max,tM=Math.min;tS=function(e,t){var r=t$(e);return r<0?tF(r+t,0):tM(r,t)};var tP={},tx={},tT=Math.min;tx=function(e){var t=t$(e);return t>0?tT(t,0x1fffffffffffff):0},tP=function(e){return tx(e.length)};var tN=function(e){return function(t,r,n){var i,o=x(t),a=tP(o);if(0===a)return!e&&-1;var s=tS(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tq={includes:tN(!0),indexOf:tN(!1)}.indexOf,tI=N([].push);tE=function(e,t){var r,n=x(e),i=0,o=[];for(r in n)!eO(ti,r)&&eO(n,r)&&tI(o,r);for(;t.length>i;)eO(n,r=t[i++])&&(~tq(o,r)||tI(o,r));return o};var tH=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");d=Object.getOwnPropertyNames||function(e){return tE(e,tH)},f=Object.getOwnPropertySymbols;var tC=N([].concat);tk=X("Reflect","ownKeys")||function(e){var t=d(eG(e));return f?tC(t,f(e)):t},tw=function(e,t,r){for(var n=tk(t),o=0;o<n.length;o++){var a=n[o];eO(e,a)||r&&eO(r,a)||c(e,a,i(t,a))}};var tD={},tR=/#|\.prototype\./,tA=function(e,t){var r=tU[tz(e)];return r===tB||r!==tW&&(Q(t)?$(t):!!t)},tz=tA.normalize=function(e){return String(e).replace(tR,".").toLowerCase()},tU=tA.data={},tW=tA.NATIVE="N",tB=tA.POLYFILL="P";tD=tA,w=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?k:l?k[c]||ek(c,{}):k[c]&&k[c].prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tD(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tw(a,o)}(e.sham||o&&o.sham)&&eW(a,"sham",!0),e1(r,n,a,e)}};var tG={},tJ={},tY=Function.prototype,tQ=tY.apply,tK=tY.call;tJ="object"==typeof Reflect&&Reflect.apply||(j?tK.bind(tQ):function(){return tK.apply(tQ,arguments)});var tV={},tX={},tZ=(tX=function(e){if("Function"===C(e))return N(e)})(tX.bind);tV=function(e,t){return ef(e),void 0===t?e:j?tZ(e,t):function(){return e.apply(t,arguments)}};var t0={};t0=X("document","documentElement");var t1={};t1=N([].slice);var t2={},t4=TypeError;t2=function(e,t){if(e<t)throw new t4("Not enough arguments");return e};var t3={};t3=/ipad|iphone|ipod/i.test(en)&&/applewebkit/i.test(en);var t5={},t7={},t6=function(e){return en.slice(0,e.length)===e};t5="NODE"===(t7=t6("Bun/")?"BUN":t6("Cloudflare-Workers")?"CLOUDFLARE":t6("Deno/")?"DENO":t6("Node.js/")?"NODE":k.Bun&&"string"==typeof Bun.version?"BUN":k.Deno&&"object"==typeof Deno.version?"DENO":"process"===C(k.process)?"NODE":k.window&&k.document?"BROWSER":"REST");var t8=k.setImmediate,t9=k.clearImmediate,re=k.process,rt=k.Dispatch,rr=k.Function,rn=k.MessageChannel,ri=k.String,ro=0,ra={},rs="onreadystatechange";$(function(){h=k.location});var rc=function(e){if(eO(ra,e)){var t=ra[e];delete ra[e],t()}},ru=function(e){return function(){rc(e)}},rl=function(e){rc(e.data)},rp=function(e){k.postMessage(ri(e),h.protocol+"//"+h.host)};t8&&t9||(t8=function(e){t2(arguments.length,1);var t=Q(e)?e:rr(e),r=t1(arguments,1);return ra[++ro]=function(){tJ(t,void 0,r)},v(ro),ro},t9=function(e){delete ra[e]},t5?v=function(e){re.nextTick(ru(e))}:rt&&rt.now?v=function(e){rt.now(ru(e))}:rn&&!t3?(m=(g=new rn).port2,g.port1.onmessage=rl,v=tV(m.postMessage,m)):k.addEventListener&&Q(k.postMessage)&&!k.importScripts&&h&&"file:"!==h.protocol&&!$(rp)?(v=rp,k.addEventListener("message",rl,!1)):v=rs in eR("script")?function(e){t0.appendChild(eR("script"))[rs]=function(){t0.removeChild(this),rc(e)}}:function(e){setTimeout(ru(e),0)});var rd=(tG={set:t8,clear:t9}).clear;w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==rd},{clearImmediate:rd});var rf=tG.set,rh={},rv=k.Function,rg=/MSIE .\./.test(en)||"BUN"===t7&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rh=function(e,t){var r=t?2:1;return rg?function(n,i){var o=t2(arguments.length,1)>r,a=Q(n)?n:rv(n),s=o?t1(arguments,r):[],c=o?function(){tJ(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rm=k.setImmediate?rh(rf,!1):rf;w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rm},{setImmediate:rm});let ry="https://forkify-api.herokuapp.com/api/v2/recipes/",rb="5f20685c-8267-4528-9a91-f65d20653dc7",r_=async function(e){try{let t=await Promise.race([fetch(e),new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 seconds"))},1e4)})]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw e}},rw={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rk=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key?{key:t.key}:{}}},rE=async function(e){try{let t=await r_(`${ry}${e}?key=${rb}`);rw.recipe=rk(t)}catch(e){throw e}},rS=async function(e){try{rw.search.query=e,rw.search.page=1;let t=await r_(`${ry}?search=${e}`);rw.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))}catch(e){throw e}},r$=function(e=rw.search.page){rw.search.page=e;let t=(e-1)*rw.search.resultsPerPage,r=e*rw.search.resultsPerPage;return rw.search.results.slice(t,r)},rO=function(e){rw.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rw.recipe.servings}),rw.recipe.servings=e},rj=function(e){rw.bookmarks.push(e),rF()},rL=function(e){let t=rw.bookmarks.findIndex(t=>t.id===e);rw.bookmarks.splice(t,1),rF()},rF=function(){localStorage.setItem("bookmarks",JSON.stringify(rw.bookmarks))},rM=function(){rw.recipe.bookmarked=rw.bookmarks.some(e=>e.id===rw.recipe.id)},rP=async function(e){try{let t=await fetch(`${ry}?key=${rb}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);rw.recipe=rk(r),rj(rw.recipe)}catch(e){throw e}};var rx={};rx=import.meta.resolve("eyyUD");class rT{_data;_message="";_errorMessage="";render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${_(rx)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${_(rx)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${_(rx)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},y=Fraction;class rN extends rT{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="Start by searching for a recipe or an ingredient. Have fun!";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){let e=this._data;return`
      <figure class="recipe__fig">
        <img src="${e.image}" alt="${e.title}" class="recipe__img" />
        <h1 class="recipe__title"><span>${e.title}</span></h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${_(rx)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${e.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${_(rx)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${e.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${e.servings-1}">
              <svg><use href="${_(rx)}#icon-minus-circle"></use></svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${e.servings+1}">
              <svg><use href="${_(rx)}#icon-plus-circle"></use></svg>
            </button>
          </div>
        </div>

        ${e.key?`<div class="recipe__user-generated">
            <svg><use href="${_(rx)}#icon-user"></use></svg>
          </div>`:""}
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${_(rx)}#icon-bookmark${e.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${e.ingredients.map(e=>this._generateMarkupIngredient(e)).join("")}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${e.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a class="btn--small recipe__btn" href="${e.sourceUrl||"#"}" target="_blank">
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${_(rx)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}_generateMarkupIngredient(e){return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${_(rx)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit?e.unit:""}</span>
          ${e.description}
        </div>
      </li>
    `}update(e){this._data.ingredients=e.ingredients,this._data.servings=e.servings;let{servings:t,ingredients:r}=this._data;this._parentElement.querySelector(".recipe__info-data--people").textContent=`${t}`,r.forEach((e,t)=>{this._parentElement.querySelector(`.recipe__ingredient:nth-child(${t+1}) .recipe__quantity`).textContent=e.quantity?new y(e.quantity).toString():""})}}var rq=new rN;class rI{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rH=new rI;class rC extends rT{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query. Please try again!";_message="Start by searching for a recipe or an ingredient. Have fun!";_generateMarkup(){return this._data.map(this._generateMarkupPreview.bind(this)).join("")}_generateMarkupPreview(e){let t=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${e.id===t?"preview__link--active":""}" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">
              ${e.title}
            </h4>
            <p class="preview__publisher">
              ${e.publisher}
            </p>
            ${e.key?`<div class="preview__user-generated">
                <svg>
                  <use href="${_(rx)}#icon-user"></use>
                </svg>
              </div>`:""}
          </div>
        </a>
      </li>
    `}}var rD=new rC;class rR extends rT{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===this._data.page&&t>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${_(rx)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:this._data.page===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${_(rx)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:this._data.page<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${_(rx)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${_(rx)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}}var rA=new rR;class rz extends rT{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}_generateMarkup(){return this._data.map(e=>`
      <li class="preview">
        <a class="preview__link" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">
              ${e.title}
            </h4>
            <p class="preview__publisher">
              ${e.publisher}
            </p>
            ${e.key?`<div class="preview__user-generated">
                <svg>
                  <use href="${_(rx)}#icon-user"></use>
                </svg>
              </div>`:""}
          </div>
        </a>
      </li>
    `).join("")}}var rU=new rz;class rW{_parentElement=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_btnUpload=document.querySelector(".upload__btn");toggleWindow(){this._parentElement.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}addHandlerUpload(e){this._btnUpload.addEventListener("click",function(t){t.preventDefault(),e()})}addHandlerOpenWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this)),this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}getRecipe(){let e=[...this._parentElement.querySelectorAll("input")].map(e=>e.value),t=e.slice(6).map(e=>{let t=e.split(",").map(e=>e.trim());return""===t[0]&&""===t[1]?null:{quantity:t[0],unit:t[1],description:t[2]}}).filter(e=>null!==e);return{title:e[0],source_url:e[1],image_url:e[2],publisher:e[3],cooking_time:+e[4],servings:+e[5],ingredients:t}}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${_(rx)}#icon-loader"></use>
        </svg>
      </div>
    `;this._parentElement.insertAdjacentHTML("beforeend",e)}renderError(e){this.renderSpinner();let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${_(rx)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._parentElement.insertAdjacentHTML("beforeend",t)}}var rB=new rW,rG=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c,u,l=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(l,"_invoke",{value:(a=e,s=n,c=new j(o||[]),u=d,function(e,r){if(u===f)throw Error("Generator is already running");if(u===h){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var i=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?v:("return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v);var a=p(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(n,c);if(i){if(i===v)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===d)throw u=h,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=f;var o=p(a,s,c);if("normal"===o.type){if(u=c.done?h:"suspendedYield",o.arg===v)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=h,c.method="throw",c.arg=o.arg)}})}),l}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",f="executing",h="completed",v={};function g(){}function m(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=p(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function L(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);else if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rG}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rG:Function("r","regeneratorRuntime = r")(rG)}let rJ=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rq.renderSpinner(),await rE(e),rM(),rq.render(rw.recipe),rw.search.results.length&&rD.render(r$())}catch(e){console.error(e),rq.renderError()}},rY=async function(){try{let e=rH.getQuery();if(!e)return;if(rD.renderSpinner(),rq.renderSpinner(),await rS(e),!rw.search.results.length){rD.renderError(),rq.renderMessage();return}rD.render(r$()),rA.render(rw.search);let t=rw.search.results[0].id;window.location.hash=t}catch(e){console.error(e),rD.renderError(),rq.renderError()}},rQ=async function(){try{rB.renderSpinner();let e=rB.getRecipe();await rP(e),rB.toggleWindow(),rM(),rq.render(rw.recipe),window.history.pushState(null,"",`#${rw.recipe.id}`)}catch(e){console.error(e),rB.renderError(e.message)}};rU.addHandlerRender(function(){rU.render(rw.bookmarks)}),rq.addHandlerRender(rJ),rq.addHandlerUpdateServings(function(e){rO(e),rq.update(rw.recipe)}),rq.addHandlerBookmark(function(){rw.bookmarks.some(e=>e.id===rw.recipe.id)?rL(rw.recipe.id):rj(rw.recipe),rM(),rU.render(rw.bookmarks),rq.render(rw.recipe)}),rH.addHandlerSearch(rY),rA.addHandlerClick(function(e){rD.render(r$(e)),rA.render(rw.search)}),rB.addHandlerOpenWindow(),rB.addHandlerUpload(rQ),(e=localStorage.getItem("bookmarks"))&&(rw.bookmarks=JSON.parse(e)),rU.render(rw.bookmarks);
//# sourceMappingURL=Forkify-js-app.a70d1e84.js.map
