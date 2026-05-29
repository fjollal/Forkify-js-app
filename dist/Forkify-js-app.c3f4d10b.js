var e,t,r,n,i,o,a,s,c,u,l,p,d,f,h,v,g,m,y=globalThis;function _(e){return e&&e.__esModule?e.default:e}var b={},w={},E=function(e){return e&&e.Math===Math&&e};w=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||E("object"==typeof self&&self)||E("object"==typeof y&&y)||E("object"==typeof w&&w)||function(){return this}()||Function("return this")();var k={},S={};k=!(S=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},O={};O=!S(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var j=Function.prototype.call;$=O?j.bind(j):function(){return j.apply(j,arguments)};var L={}.propertyIsEnumerable,M=Object.getOwnPropertyDescriptor;i=M&&!L.call({1:2},1)?function(e){var t=M(this,e);return!!t&&t.enumerable}:L;var F={};F=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var P={},x={},T={},N=Function.prototype,I=N.call,q=O&&N.bind.bind(I,I),H={},C=(T=O?q:function(e){return function(){return I.apply(e,arguments)}})({}.toString),D=T("".slice);H=function(e){return D(C(e),8,-1)};var R=Object,A=T("".split);x=S(function(){return!R("z").propertyIsEnumerable(0)})?function(e){return"String"===H(e)?A(e,""):R(e)}:R;var U={},z={};z=function(e){return null==e};var W=TypeError;U=function(e){if(z(e))throw new W("Can't call method on "+e);return e},P=function(e){return x(U(e))};var B={},G={},Q={},J={},Y="object"==typeof document&&document.all;J=void 0===Y&&void 0!==Y?function(e){return"function"==typeof e||e===Y}:function(e){return"function"==typeof e},Q=function(e){return"object"==typeof e?null!==e:J(e)};var K={},V={};V=function(e,t){var r;return arguments.length<2?(r=w[e],J(r)?r:void 0):w[e]&&w[e][t]};var X={};X=T({}.isPrototypeOf);var Z={},ee={},et={},er={},en=w.navigator,ei=en&&en.userAgent;er=ei?String(ei):"";var eo=w.process,ea=w.Deno,es=eo&&eo.versions||ea&&ea.version,ec=es&&es.v8;ec&&(a=(o=ec.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!a&&er&&(!(o=er.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=er.match(/Chrome\/(\d+)/))&&(a=+o[1]),et=a;var eu=w.String;Z=(ee=!!Object.getOwnPropertySymbols&&!S(function(){var e=Symbol("symbol detection");return!eu(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&et&&et<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var el=Object;K=Z?function(e){return"symbol"==typeof e}:function(e){var t=V("Symbol");return J(t)&&X(t.prototype,el(e))};var ep={},ed={},ef={},eh=String;ef=function(e){try{return eh(e)}catch(e){return"Object"}};var ev=TypeError;ed=function(e){if(J(e))return e;throw new ev(ef(e)+" is not a function")},ep=function(e,t){var r=e[t];return z(r)?void 0:ed(r)};var eg={},em=TypeError;eg=function(e,t){var r,n;if("string"===t&&J(r=e.toString)&&!Q(n=$(r,e))||J(r=e.valueOf)&&!Q(n=$(r,e))||"string"!==t&&J(r=e.toString)&&!Q(n=$(r,e)))return n;throw new em("Can't convert object to primitive value")};var ey={},e_={},eb={};eb=!1;var ew={},eE=Object.defineProperty;ew=function(e,t){try{eE(w,e,{value:t,configurable:!0,writable:!0})}catch(r){w[e]=t}return t};var ek="__core-js_shared__",eS=e_=w[ek]||ew(ek,{});(eS.versions||(eS.versions=[])).push({version:"3.49.0",mode:eb?"pure":"global",copyright:"© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ey=function(e,t){return e_[e]||(e_[e]=t||{})};var e$={},eO={},ej=Object;eO=function(e){return ej(U(e))};var eL=T({}.hasOwnProperty);e$=Object.hasOwn||function(e,t){return eL(eO(e),t)};var eM={},eF=0,eP=Math.random(),ex=T(1.1.toString);eM=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ex(++eF+eP,36)};var eT=w.Symbol,eN=ey("wks"),eI=Z?eT.for||eT:eT&&eT.withoutSetter||eM,eq=TypeError,eH=function(e){return e$(eN,e)||(eN[e]=ee&&e$(eT,e)?eT[e]:eI("Symbol."+e)),eN[e]}("toPrimitive");G=function(e,t){if(!Q(e)||K(e))return e;var r,n=ep(e,eH);if(n){if(void 0===t&&(t="default"),r=$(n,e,t),!Q(r)||K(r))return r;throw new eq("Can't convert object to primitive value")}return void 0===t&&(t="number"),eg(e,t)},B=function(e){var t=G(e,"string");return K(t)?t:t+""};var eC={},eD={},eR=w.document,eA=Q(eR)&&Q(eR.createElement);eD=function(e){return eA?eR.createElement(e):{}},eC=!k&&!S(function(){return 7!==Object.defineProperty(eD("div"),"a",{get:function(){return 7}}).a});var eU=Object.getOwnPropertyDescriptor;n=k?eU:function(e,t){if(e=P(e),t=B(t),eC)try{return eU(e,t)}catch(e){}if(e$(e,t))return F(!$(i,e,t),e[t])};var ez={},eW={};eW=k&&S(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eB={},eG=String,eQ=TypeError;eB=function(e){if(Q(e))return e;throw new eQ(eG(e)+" is not an object")};var eJ=TypeError,eY=Object.defineProperty,eK=Object.getOwnPropertyDescriptor,eV="enumerable",eX="configurable",eZ="writable";s=k?eW?function(e,t,r){if(eB(e),t=B(t),eB(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eZ in r&&!r[eZ]){var n=eK(e,t);n&&n[eZ]&&(e[t]=r.value,r={configurable:eX in r?r[eX]:n[eX],enumerable:eV in r?r[eV]:n[eV],writable:!1})}return eY(e,t,r)}:eY:function(e,t,r){if(eB(e),t=B(t),eB(r),eC)try{return eY(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eJ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},ez=k?function(e,t,r){return s(e,t,F(1,r))}:function(e,t,r){return e[t]=r,e};var e0={},e1={},e2=Function.prototype,e4=k&&Object.getOwnPropertyDescriptor,e3=e$(e2,"name"),e5=e3&&(!k||k&&e4(e2,"name").configurable),e7={},e6=T(Function.toString);J(e_.inspectSource)||(e_.inspectSource=function(e){return e6(e)}),e7=e_.inspectSource;var e8={},e9={},te=w.WeakMap;e9=J(te)&&/native code/.test(String(te));var tt={},tr=ey("keys");tt=function(e){return tr[e]||(tr[e]=eM(e))};var tn={};tn={};var ti="Object already initialized",to=w.TypeError,ta=w.WeakMap;if(e9||e_.state){var ts=e_.state||(e_.state=new ta);ts.get=ts.get,ts.has=ts.has,ts.set=ts.set,c=function(e,t){if(ts.has(e))throw new to(ti);return t.facade=e,ts.set(e,t),t},u=function(e){return ts.get(e)||{}},l=function(e){return ts.has(e)}}else{var tc=tt("state");tn[tc]=!0,c=function(e,t){if(e$(e,tc))throw new to(ti);return t.facade=e,ez(e,tc,t),t},u=function(e){return e$(e,tc)?e[tc]:{}},l=function(e){return e$(e,tc)}}var tu=(e8={set:c,get:u,has:l,enforce:function(e){return l(e)?u(e):c(e,{})},getterFor:function(e){return function(t){var r;if(!Q(t)||(r=u(t)).type!==e)throw new to("Incompatible receiver, "+e+" required");return r}}}).enforce,tl=e8.get,tp=String,tf=Object.defineProperty,th=T("".slice),tv=T("".replace),tg=T([].join),tm=k&&!S(function(){return 8!==tf(function(){},"length",{value:8}).length}),ty=String(String).split("String"),t_=e1=function(e,t,r){"Symbol("===th(tp(t),0,7)&&(t="["+tv(tp(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!e$(e,"name")||e5&&e.name!==t)&&(k?tf(e,"name",{value:t,configurable:!0}):e.name=t),tm&&r&&e$(r,"arity")&&e.length!==r.arity&&tf(e,"length",{value:r.arity});try{r&&e$(r,"constructor")&&r.constructor?k&&tf(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tu(e);return e$(n,"source")||(n.source=tg(ty,"string"==typeof t?t:"")),e};Function.prototype.toString=t_(function(){return J(this)&&tl(this).source||e7(this)},"toString"),e0=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(J(r)&&e1(r,o,n),n.global)i?e[t]=r:ew(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:s(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tb={},tw={},tE={},tk={},tS={},t$={},tO=Math.ceil,tj=Math.floor;t$=Math.trunc||function(e){var t=+e;return(t>0?tj:tO)(t)},tS=function(e){var t=+e;return t!=t||0===t?0:t$(t)};var tL=Math.max,tM=Math.min;tk=function(e,t){var r=tS(e);return r<0?tL(r+t,0):tM(r,t)};var tF={},tP={},tx=Math.min;tP=function(e){var t=tS(e);return t>0?tx(t,0x1fffffffffffff):0},tF=function(e){return tP(e.length)};var tT=function(e){return function(t,r,n){var i,o=P(t),a=tF(o);if(0===a)return!e&&-1;var s=tk(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tN={includes:tT(!0),indexOf:tT(!1)}.indexOf,tI=T([].push);tE=function(e,t){var r,n=P(e),i=0,o=[];for(r in n)!e$(tn,r)&&e$(n,r)&&tI(o,r);for(;t.length>i;)e$(n,r=t[i++])&&(~tN(o,r)||tI(o,r));return o};var tq=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tE(e,tq)},d=Object.getOwnPropertySymbols;var tH=T([].concat);tw=V("Reflect","ownKeys")||function(e){var t=p(eB(e));return d?tH(t,d(e)):t},tb=function(e,t,r){for(var i=tw(t),o=0;o<i.length;o++){var a=i[o];e$(e,a)||r&&e$(r,a)||s(e,a,n(t,a))}};var tC={},tD=/#|\.prototype\./,tR=function(e,t){var r=tU[tA(e)];return r===tW||r!==tz&&(J(t)?S(t):!!t)},tA=tR.normalize=function(e){return String(e).replace(tD,".").toLowerCase()},tU=tR.data={},tz=tR.NATIVE="N",tW=tR.POLYFILL="P";tC=tR,b=function(e,t){var r,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?w:l?w[c]||ew(c,{}):w[c]&&w[c].prototype)for(i in t){if(a=t[i],o=e.dontCallGetSet?(s=n(r,i))&&s.value:r[i],!tC(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tb(a,o)}(e.sham||o&&o.sham)&&ez(a,"sham",!0),e0(r,i,a,e)}};var tB={},tG={},tQ=Function.prototype,tJ=tQ.apply,tY=tQ.call;tG="object"==typeof Reflect&&Reflect.apply||(O?tY.bind(tJ):function(){return tY.apply(tJ,arguments)});var tK={},tV={},tX=(tV=function(e){if("Function"===H(e))return T(e)})(tV.bind);tK=function(e,t){return ed(e),void 0===t?e:O?tX(e,t):function(){return e.apply(t,arguments)}};var tZ={};tZ=V("document","documentElement");var t0={};t0=T([].slice);var t1={},t2=TypeError;t1=function(e,t){if(e<t)throw new t2("Not enough arguments");return e};var t4={};t4=/ipad|iphone|ipod/i.test(er)&&/applewebkit/i.test(er);var t3={},t5={},t7=function(e){return er.slice(0,e.length)===e};t3="NODE"===(t5=t7("Bun/")?"BUN":t7("Cloudflare-Workers")?"CLOUDFLARE":t7("Deno/")?"DENO":t7("Node.js/")?"NODE":w.Bun&&"string"==typeof Bun.version?"BUN":w.Deno&&"object"==typeof Deno.version?"DENO":"process"===H(w.process)?"NODE":w.window&&w.document?"BROWSER":"REST");var t6=w.setImmediate,t8=w.clearImmediate,t9=w.process,re=w.Dispatch,rt=w.Function,rr=w.MessageChannel,rn=w.String,ri=0,ro={},ra="onreadystatechange";S(function(){f=w.location});var rs=function(e){if(e$(ro,e)){var t=ro[e];delete ro[e],t()}},rc=function(e){return function(){rs(e)}},ru=function(e){rs(e.data)},rl=function(e){w.postMessage(rn(e),f.protocol+"//"+f.host)};t6&&t8||(t6=function(e){t1(arguments.length,1);var t=J(e)?e:rt(e),r=t0(arguments,1);return ro[++ri]=function(){tG(t,void 0,r)},h(ri),ri},t8=function(e){delete ro[e]},t3?h=function(e){t9.nextTick(rc(e))}:re&&re.now?h=function(e){re.now(rc(e))}:rr&&!t4?(g=(v=new rr).port2,v.port1.onmessage=ru,h=tK(g.postMessage,g)):w.addEventListener&&J(w.postMessage)&&!w.importScripts&&f&&"file:"!==f.protocol&&!S(rl)?(h=rl,w.addEventListener("message",ru,!1)):h=ra in eD("script")?function(e){tZ.appendChild(eD("script"))[ra]=function(){tZ.removeChild(this),rs(e)}}:function(e){setTimeout(rc(e),0)});var rp=(tB={set:t6,clear:t8}).clear;b({global:!0,bind:!0,enumerable:!0,forced:w.clearImmediate!==rp},{clearImmediate:rp});var rd=tB.set,rf={},rh=w.Function,rv=/MSIE .\./.test(er)||"BUN"===t5&&((e=w.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));rf=function(e,t){var r=t?2:1;return rv?function(n,i){var o=t1(arguments.length,1)>r,a=J(n)?n:rh(n),s=o?t0(arguments,r):[],c=o?function(){tG(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rg=w.setImmediate?rf(rd,!1):rd;b({global:!0,bind:!0,enumerable:!0,forced:w.setImmediate!==rg},{setImmediate:rg});let rm="https://forkify-api.herokuapp.com/api/v2/recipes/",ry=async function(e){let t;try{t=await Promise.race([fetch(e),new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 30 seconds"))},3e4)})])}catch(e){throw Error(`Network error: ${e.message}`)}if(!t)throw Error("No response from server");let r=await t.json();if(!t.ok)throw Error(`${r.message||"Request failed"} (${t.status})`);return r},r_={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rb=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key?{key:t.key}:{}}},rw=async function(e){r_.recipe=rb(await ry(`${rm}${e}`))},rE=async function(e){r_.search.query=e,r_.search.page=1;let t=await ry(`${rm}?search=${encodeURIComponent(e)}`);if(!t?.data?.recipes)throw Error("Invalid API response");r_.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))},rk=function(e=r_.search.page){r_.search.page=e;let t=(e-1)*r_.search.resultsPerPage,r=e*r_.search.resultsPerPage;return r_.search.results.slice(t,r)},rS=function(e){r_.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/r_.recipe.servings}),r_.recipe.servings=e},r$=function(e){r_.bookmarks.push(e),rj()},rO=function(e){let t=r_.bookmarks.findIndex(t=>t.id===e);r_.bookmarks.splice(t,1),rj()},rj=function(){localStorage.setItem("bookmarks",JSON.stringify(r_.bookmarks))},rL=function(){let e=localStorage.getItem("bookmarks");e&&(r_.bookmarks=JSON.parse(e))},rM=function(){r_.recipe.bookmarked=r_.bookmarks.some(e=>e.id===r_.recipe.id)},rF=async function(e){let t=await fetch(`${rm}?key=5f20685c-8267-4528-9a91-f65d20653dc7`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);r_.recipe=rb(r),r$(r_.recipe)};var rP={};rP=import.meta.resolve("eyyUD");class rx{_data;_message="";_errorMessage="";_parentElementSelector="";get _parentElement(){return document.querySelector(this._parentElementSelector)}render(e){if(!this._parentElement)return;if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement&&(this._parentElement.innerHTML="")}renderSpinner(){if(!this._parentElement)return;let e=`
      <div class="spinner">
        <svg>
          <use href="${_(rP)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){if(!this._parentElement)return;let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${_(rP)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){if(!this._parentElement)return;let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${_(rP)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(t(this.denominator)){var e=r(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(t(this.numerator)){var e=r(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},m=Fraction;var rT=new class extends rx{_parentElementSelector=".recipe";_errorMessage="We could not find that recipe. Please try another one!";_message="Start by searching for a recipe or an ingredient. Have fun!";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement?.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerBookmark(e){this._parentElement?.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){let e=this._data;return`
      <figure class="recipe__fig">
        <img src="${e.image}" alt="${e.title}" class="recipe__img" />
        <h1 class="recipe__title"><span>${e.title}</span></h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${_(rP)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${e.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${_(rP)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${e.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${e.servings-1}">
              <svg><use href="${_(rP)}#icon-minus-circle"></use></svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${e.servings+1}">
              <svg><use href="${_(rP)}#icon-plus-circle"></use></svg>
            </button>
          </div>
        </div>

        ${e.key?`<div class="recipe__user-generated">
            <svg><use href="${_(rP)}#icon-user"></use></svg>
          </div>`:""}
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${_(rP)}#icon-bookmark${e.bookmarked?"-fill":""}"></use>
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
            <use href="${_(rP)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}_formatQuantity(e){if(null==e||""===e)return"";try{return new m(e).toString()}catch{return String(e)}}_generateMarkupIngredient(e){return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${_(rP)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${this._formatQuantity(e.quantity)}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit?e.unit:""}</span>
          ${e.description}
        </div>
      </li>
    `}update(e){if(!this._parentElement)return;this._data.ingredients=e.ingredients,this._data.servings=e.servings;let{servings:t,ingredients:r}=this._data;this._parentElement.querySelector(".recipe__info-data--people").textContent=`${t}`,r.forEach((e,t)=>{this._parentElement.querySelector(`.recipe__ingredient:nth-child(${t+1}) .recipe__quantity`).textContent=this._formatQuantity(e.quantity)})}},rN=new class{_parentElementSelector=".search";get _parentElement(){return document.querySelector(this._parentElementSelector)}getQuery(){let e=this._parentElement?.querySelector(".search__field");return e?e.value.trim():""}clearInput(){let e=this._parentElement?.querySelector(".search__field");e&&(e.value="")}addHandlerSearch(e){let t=this._parentElement;t&&t.addEventListener("submit",function(t){t.preventDefault(),e()})}},rI=new class extends rx{_parentElementSelector=".results";_errorMessage="No recipes found for your query. Please try again!";_message="Start by searching for a recipe or an ingredient. Have fun!";_generateMarkup(){return this._data.map(this._generateMarkupPreview.bind(this)).join("")}_generateMarkupPreview(e){let t=window.location.hash.slice(1);return`
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
                  <use href="${_(rP)}#icon-user"></use>
                </svg>
              </div>`:""}
          </div>
        </a>
      </li>
    `}},rq=new class extends rx{_parentElementSelector=".pagination";addHandlerClick(e){this._parentElement?.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===this._data.page&&t>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${_(rP)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:this._data.page===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${_(rP)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:this._data.page<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${_(rP)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${_(rP)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:""}},rH=new class extends rx{_parentElementSelector=".bookmarks__list";_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}_generateMarkup(){return this._data.map(e=>`
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
                  <use href="${_(rP)}#icon-user"></use>
                </svg>
              </div>`:""}
          </div>
        </a>
      </li>
    `).join("")}};class rC{_parentElement=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_btnUpload=document.querySelector(".upload__btn");toggleWindow(){this._parentElement.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}addHandlerUpload(e){this._btnUpload&&this._btnUpload.addEventListener("click",function(t){t.preventDefault(),e()})}addHandlerOpenWindow(){this._btnOpen&&this._btnOpen.addEventListener("click",this.toggleWindow.bind(this)),this._btnClose&&this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay&&this._overlay.addEventListener("click",this.toggleWindow.bind(this))}getRecipe(){let e=[...this._parentElement.querySelectorAll("input")].map(e=>e.value),t=e.slice(6).map(e=>{let t=e.split(",").map(e=>e.trim());return""===t[0]&&""===t[1]?null:{quantity:t[0],unit:t[1],description:t[2]}}).filter(e=>null!==e);return{title:e[0],source_url:e[1],image_url:e[2],publisher:e[3],cooking_time:+e[4],servings:+e[5],ingredients:t}}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${_(rP)}#icon-loader"></use>
        </svg>
      </div>
    `;this._parentElement.insertAdjacentHTML("beforeend",e)}renderError(e){this.renderSpinner();let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${_(rP)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._parentElement.insertAdjacentHTML("beforeend",t)}}var rD=new rC,rR=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c,u,l=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(l,"_invoke",{value:(a=e,s=n,c=new j(o||[]),u=d,function(e,r){if(u===f)throw Error("Generator is already running");if(u===h){if("throw"===e)throw r;return{value:t,done:!0}}for(c.method=e,c.arg=r;;){var n=c.delegate;if(n){var i=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?v:("return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v);var a=p(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(n,c);if(i){if(i===v)continue;return i}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===d)throw u=h,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=f;var o=p(a,s,c);if("normal"===o.type){if(u=c.done?h:"suspendedYield",o.arg===v)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=h,c.method="throw",c.arg=o.arg)}})}),l}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",f="executing",h="completed",v={};function g(){}function m(){}function y(){}var _={};u(_,a,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(L([])));w&&w!==r&&n.call(w,a)&&(_=w);var E=y.prototype=g.prototype=Object.create(_);function k(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=p(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function L(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(E,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},k(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},k(E),u(E,c,"Generator"),u(E,a,function(){return this}),u(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);else if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rR}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rR:Function("r","regeneratorRuntime = r")(rR)}let rA=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rT.renderSpinner(),await rw(e),rM(),rT.render(r_.recipe),r_.search.results.length&&rI.render(rk())}catch(e){console.error(e),rT.renderError(`${e.message}`)}},rU=async function(){let e=rN.getQuery();if(!e)return void rI.renderMessage("Please type a recipe name or ingredient.");try{if(rI.renderSpinner(),rT.renderSpinner(),await rE(e),!r_.search.results.length){rI.renderError(),rT.renderMessage();return}rI.render(rk()),rq.render(r_.search);let t=r_.search.results[0].id;await rw(t),rM(),rT.render(r_.recipe),window.location.hash=t,rI.render(rk()),rN.clearInput()}catch(e){console.error(e),rI.renderError(`${e.message}`),rT.renderError(`${e.message}`)}},rz=function(e){rI.render(rk(e)),rq.render(r_.search)},rW=function(e){rS(e),rT.update(r_.recipe)},rB=function(){rH.render(r_.bookmarks)},rG=function(){r_.bookmarks.some(e=>e.id===r_.recipe.id)?rO(r_.recipe.id):r$(r_.recipe),rM(),rH.render(r_.bookmarks),rT.render(r_.recipe)},rQ=async function(){try{rD.renderSpinner();let e=rD.getRecipe();await rF(e),rD.toggleWindow(),rM(),rT.render(r_.recipe),window.location.hash=r_.recipe.id}catch(e){console.error(e),rD.renderError(e.message)}},rJ=function(){rH.addHandlerRender(rB),rT.addHandlerRender(rA),rT.addHandlerUpdateServings(rW),rT.addHandlerBookmark(rG),rN.addHandlerSearch(rU),rq.addHandlerClick(rz),rD.addHandlerOpenWindow(),rD.addHandlerUpload(rQ),rL(),rH.render(r_.bookmarks),rI.renderMessage()};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",rJ):rJ();
//# sourceMappingURL=Forkify-js-app.c3f4d10b.js.map
