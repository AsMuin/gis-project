"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4547],{83305:(e,t,n)=>{n.d(t,{e:()=>E,f:()=>P,g:()=>u,h:()=>p,i:()=>i,j:()=>N,l:()=>l,p:()=>G});var r=n(99880),o=n(80442);let _,s=null;function i(){return!!s}function l(){return _||(_=n.e(6774).then(n.bind(n,66774)).then((e=>e.p)).then((({default:e})=>e({locateFile:e=>(0,r.V)(`esri/geometry/support/${e}`)}))).then((e=>{T(e)})),_)}var u,P,E,c;!function(e){function t(e,t,n){s.ensureCache.prepare();const r=h(n),o=n===r,_=s.ensureFloat64(r),i=s._pe_geog_to_proj(s.getPointer(e),t,_);return i&&L(n,t,_,o),i}function n(e,t,n){return r(e,t,n,0)}function r(e,t,n,r){s.ensureCache.prepare();const o=h(n),_=n===o,i=s.ensureFloat64(o),l=s._pe_proj_to_geog_center(s.getPointer(e),t,i,r);return l&&L(n,t,i,_),l}e.geogToProj=t,e.projGeog=function(e,r,o,_){switch(_){case P.PE_TRANSFORM_P_TO_G:return n(e,r,o);case P.PE_TRANSFORM_G_TO_P:return t(e,r,o)}return 0},e.projToGeog=n,e.projToGeogCenter=r}(u||(u={})),(c=P||(P={})).init=function(){c.PE_BUFFER_MAX=s.PeDefs.prototype.PE_BUFFER_MAX,c.PE_NAME_MAX=s.PeDefs.prototype.PE_NAME_MAX,c.PE_MGRS_MAX=s.PeDefs.prototype.PE_MGRS_MAX,c.PE_USNG_MAX=s.PeDefs.prototype.PE_USNG_MAX,c.PE_DD_MAX=s.PeDefs.prototype.PE_DD_MAX,c.PE_DDM_MAX=s.PeDefs.prototype.PE_DDM_MAX,c.PE_DMS_MAX=s.PeDefs.prototype.PE_DMS_MAX,c.PE_UTM_MAX=s.PeDefs.prototype.PE_UTM_MAX,c.PE_PARM_MAX=s.PeDefs.prototype.PE_PARM_MAX,c.PE_TYPE_NONE=s.PeDefs.prototype.PE_TYPE_NONE,c.PE_TYPE_GEOGCS=s.PeDefs.prototype.PE_TYPE_GEOGCS,c.PE_TYPE_PROJCS=s.PeDefs.prototype.PE_TYPE_PROJCS,c.PE_TYPE_GEOGTRAN=s.PeDefs.prototype.PE_TYPE_GEOGTRAN,c.PE_TYPE_COORDSYS=s.PeDefs.prototype.PE_TYPE_COORDSYS,c.PE_TYPE_UNIT=s.PeDefs.prototype.PE_TYPE_UNIT,c.PE_TYPE_LINUNIT=s.PeDefs.prototype.PE_TYPE_LINUNIT,c.PE_STR_OPTS_NONE=s.PeDefs.prototype.PE_STR_OPTS_NONE,c.PE_STR_AUTH_NONE=s.PeDefs.prototype.PE_STR_AUTH_NONE,c.PE_STR_AUTH_TOP=s.PeDefs.prototype.PE_STR_AUTH_TOP,c.PE_STR_NAME_CANON=s.PeDefs.prototype.PE_STR_NAME_CANON,c.PE_PARM_X0=s.PeDefs.prototype.PE_PARM_X0,c.PE_PARM_ND=s.PeDefs.prototype.PE_PARM_ND,c.PE_TRANSFORM_1_TO_2=s.PeDefs.prototype.PE_TRANSFORM_1_TO_2,c.PE_TRANSFORM_2_TO_1=s.PeDefs.prototype.PE_TRANSFORM_2_TO_1,c.PE_TRANSFORM_P_TO_G=s.PeDefs.prototype.PE_TRANSFORM_P_TO_G,c.PE_TRANSFORM_G_TO_P=s.PeDefs.prototype.PE_TRANSFORM_G_TO_P,c.PE_HORIZON_RECT=s.PeDefs.prototype.PE_HORIZON_RECT,c.PE_HORIZON_POLY=s.PeDefs.prototype.PE_HORIZON_POLY,c.PE_HORIZON_LINE=s.PeDefs.prototype.PE_HORIZON_LINE,c.PE_HORIZON_DELTA=s.PeDefs.prototype.PE_HORIZON_DELTA},function(e){const t={},n={},r=e=>{if(e){const t=e.getType();switch(t){case P.PE_TYPE_GEOGCS:e=s.castObject(e,s.PeGeogcs);break;case P.PE_TYPE_PROJCS:e=s.castObject(e,s.PeProjcs);break;case P.PE_TYPE_GEOGTRAN:e=s.castObject(e,s.PeGeogtran);break;default:t&P.PE_TYPE_UNIT&&(e=s.castObject(e,s.PeUnit))}}return e};function o(e,n){let o=null,_=t[e];if(_||(_={},t[e]=_),_.hasOwnProperty(String(n)))o=_[n];else{const t=s.PeFactory.prototype.factoryByType(e,n);s.compare(t,s.NULL)||(o=t,_[n]=o)}return o=r(o),o}e.initialize=function(){s.PeFactory.prototype.initialize(null)},e.coordsys=function(e){return o(P.PE_TYPE_COORDSYS,e)},e.factoryByType=o,e.fromString=function(e,t){let o=null,_=n[e];if(_||(_={},n[e]=_),_.hasOwnProperty(t))o=_[t];else{const n=s.PeFactory.prototype.fromString(e,t);s.compare(n,s.NULL)||(o=n,_[t]=o)}return o=r(o),o},e.geogcs=function(e){return o(P.PE_TYPE_GEOGCS,e)},e.geogtran=function(e){return o(P.PE_TYPE_GEOGTRAN,e)},e.getCode=function(e){return s.PeFactory.prototype.getCode(e)},e.projcs=function(e){return o(P.PE_TYPE_PROJCS,e)},e.unit=function(e){return o(P.PE_TYPE_UNIT,e)}}(E||(E={}));let a=null;var f,S,p,A,C,R,O,N,M;function T(e){function t(e,t,n){e[t]=n(e[t])}s=e,P.init(),f.init(),C.init(),O.init(),N.init(),a=class extends s.PeGCSExtent{destroy(){s.destroy(this)}};const n=[s.PeDatum,s.PeGeogcs,s.PeGeogtran,s.PeObject,s.PeParameter,s.PePrimem,s.PeProjcs,s.PeSpheroid,s.PeUnit];for(const e of n)t(e.prototype,"getName",(e=>function(){return e.call(this,new Array(P.PE_NAME_MAX))}));for(const e of[s.PeGeogtran,s.PeProjcs])t(e.prototype,"getParameters",(e=>function(){const t=new Array(P.PE_PARM_MAX);let n=e.call(this);for(let e=0;e<t.length;e++){const r=s.getValue(n,"*");t[e]=r?s.wrapPointer(r,s.PeParameter):null,n+=Int32Array.BYTES_PER_ELEMENT}return t}));t(s.PeHorizon.prototype,"getCoord",(e=>function(){const t=this.getSize();if(!t)return null;const n=[];return L(n,t,e.call(this)),n})),t(s.PeGTlistExtendedEntry.prototype,"getEntries",(e=>{const t=s._pe_getPeGTlistExtendedGTsSize();return function(){let n=null;const r=e.call(this);if(!s.compare(r,s.NULL)){n=[r];const e=this.getSteps();if(e>1){const o=s.getPointer(r);for(let r=1;r<e;r++)n.push(s.wrapPointer(o+t*r,s.PeGTlistExtendedGTs))}}return n}}));const r=s._pe_getPeHorizonSize(),o=e=>function(){let t=this._cache;if(t||(t=new Map,this._cache=t),t.has(e))return t.get(e);let n=null;const o=e.call(this);if(!s.compare(o,s.NULL)){n=[o];const e=o.getNump();if(e>1){const t=s.getPointer(o);for(let o=1;o<e;o++)n.push(s.wrapPointer(t+r*o,s.PeHorizon))}}return t.set(e,n),n};t(s.PeProjcs.prototype,"horizonGcsGenerate",o),t(s.PeProjcs.prototype,"horizonPcsGenerate",o),s.PeObject.prototype.toString=function(e=P.PE_STR_OPTS_NONE){s.ensureCache.prepare();const t=s.getPointer(this),n=s.ensureInt8(new Array(P.PE_BUFFER_MAX));return s.UTF8ToString(s._pe_object_to_string_ext(t,e,n))}}function g(e){if(!e)return;const t=s.getClass(e);if(!t)return;const n=s.getCache(t);if(!n)return;const r=s.getPointer(e);r&&delete n[r]}function d(e,t){const n=[],r=new Array(t);for(let t=0;t<e;t++)n.push(s.ensureInt8(r));return n}function h(e){let t;return Array.isArray(e[0])?(t=[],e.forEach((e=>{t.push(e[0],e[1])}))):t=e,t}function L(e,t,n,r=!1){if(r)for(let r=0;r<2*t;r++)e[r]=s.getValue(n+r*Float64Array.BYTES_PER_ELEMENT,"double");else{const r=0===e.length;for(let o=0;o<t;o++)r&&(e[o]=new Array(2)),e[o][0]=s.getValue(n,"double"),e[o][1]=s.getValue(n+Float64Array.BYTES_PER_ELEMENT,"double"),n+=2*Float64Array.BYTES_PER_ELEMENT}}!function(e){let t;e.init=function(){e.PE_GTLIST_OPTS_COMMON=s.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON,t=s._pe_getPeGTlistExtendedEntrySize()},e.getGTlist=function(e,n,r,o,_,i){let l=null;const u=new s.PeInteger(i);try{const P=s.PeGTlistExtended.prototype.getGTlist(e,n,r,o,_,u);if((i=u.val)&&(l=[P],i>1)){const e=s.getPointer(P);for(let n=1;n<i;n++)l.push(s.wrapPointer(e+t*n,s.PeGTlistExtendedEntry))}}finally{s.destroy(u)}return l}}(f||(f={})),function(e){e.destroy=function(e){if(e&&e.length){for(const t of e)g(t),t.getEntries().forEach((e=>{g(e);const t=e.getGeogtran();g(t),t.getParameters().forEach(g),[t.getGeogcs1(),t.getGeogcs2()].forEach((e=>{g(e);const t=e.getDatum();g(t),g(t.getSpheroid()),g(e.getPrimem()),g(e.getUnit())}))}));s.PeGTlistExtendedEntry.prototype.Delete(e[0])}}}(S||(S={})),function(e){e.geogToGeog=function(e,t,n,r,o){s.ensureCache.prepare();const _=h(n),i=n===_,l=s.ensureFloat64(_);let u=0;r&&(u=s.ensureFloat64(r));const P=s._pe_geog_to_geog(s.getPointer(e),t,l,u,o);return P&&L(n,t,l,i),P}}(p||(p={})),function(e){const t=(e,t,n,r,o,_)=>{let i,l;switch(s.ensureCache.prepare(),e){case"dd":i=s._pe_geog_to_dd,l=P.PE_DD_MAX;break;case"ddm":i=s._pe_geog_to_ddm,l=P.PE_DDM_MAX;break;case"dms":i=s._pe_geog_to_dms,l=P.PE_DMS_MAX}let u=0;t&&(u=s.getPointer(t));const E=h(r),c=s.ensureFloat64(E),a=d(n,l),f=i(u,n,c,o,s.ensureInt32(a));if(f)for(let e=0;e<n;e++)_[e]=s.UTF8ToString(a[e]);return f},n=(e,t,n,r,o)=>{let _;switch(s.ensureCache.prepare(),e){case"dd":_=s._pe_dd_to_geog;break;case"ddm":_=s._pe_ddm_to_geog;break;case"dms":_=s._pe_dms_to_geog}let i=0;t&&(i=s.getPointer(t));const l=r.map((e=>s.ensureString(e))),u=s.ensureInt32(l),P=s.ensureFloat64(new Array(2*n)),E=_(i,n,u,P);return E&&L(o,n,P),E};e.geogToDms=function(e,n,r,o,_){return t("dms",e,n,r,o,_)},e.dmsToGeog=function(e,t,r,o){return n("dms",e,t,r,o)},e.geogToDdm=function(e,n,r,o,_){return t("ddm",e,n,r,o,_)},e.ddmToGeog=function(e,t,r,o){return n("ddm",e,t,r,o)},e.geogToDd=function(e,n,r,o,_){return t("dd",e,n,r,o,_)},e.ddToGeog=function(e,t,r,o){return n("dd",e,t,r,o)}}(A||(A={})),function(e){e.init=function(){e.PE_MGRS_STYLE_NEW=s.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW,e.PE_MGRS_STYLE_OLD=s.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD,e.PE_MGRS_STYLE_AUTO=s.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO,e.PE_MGRS_180_ZONE_1_PLUS=s.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS,e.PE_MGRS_ADD_SPACES=s.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES},e.geogToMgrsExtended=function(e,t,n,r,o,_,i){s.ensureCache.prepare();let l=0;e&&(l=s.getPointer(e));const u=h(n),E=s.ensureFloat64(u),c=d(t,P.PE_MGRS_MAX),a=s.ensureInt32(c),f=s._pe_geog_to_mgrs_extended(l,t,E,r,o,_,a);if(f)for(let e=0;e<t;e++)i[e]=s.UTF8ToString(c[e]);return f},e.mgrsToGeogExtended=function(e,t,n,r,o){s.ensureCache.prepare();let _=0;e&&(_=s.getPointer(e));const i=n.map((e=>s.ensureString(e))),l=s.ensureInt32(i),u=s.ensureFloat64(new Array(2*t)),P=s._pe_mgrs_to_geog_extended(_,t,l,r,u);return P&&L(o,t,u),P}}(C||(C={})),function(e){e.geogToUsng=function(e,t,n,r,o,_,i){s.ensureCache.prepare();let l=0;e&&(l=s.getPointer(e));const u=h(n),E=s.ensureFloat64(u),c=d(t,P.PE_MGRS_MAX),a=s.ensureInt32(c),f=s._pe_geog_to_usng(l,t,E,r,o,_,a);if(f)for(let e=0;e<t;e++)i[e]=s.UTF8ToString(c[e]);return f},e.usngToGeog=function(e,t,n,r){s.ensureCache.prepare();let o=0;e&&(o=s.getPointer(e));const _=n.map((e=>s.ensureString(e))),i=s.ensureInt32(_),l=s.ensureFloat64(new Array(2*t)),u=s._pe_usng_to_geog(o,t,i,l);return u&&L(r,t,l),u}}(R||(R={})),function(e){e.init=function(){e.PE_UTM_OPTS_NONE=s.PeNotationUtm.prototype.PE_UTM_OPTS_NONE,e.PE_UTM_OPTS_ADD_SPACES=s.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES,e.PE_UTM_OPTS_NS=s.PeNotationUtm.prototype.PE_UTM_OPTS_NS},e.geogToUtm=function(e,t,n,r,o){s.ensureCache.prepare();let _=0;e&&(_=s.getPointer(e));const i=h(n),l=s.ensureFloat64(i),u=d(t,P.PE_UTM_MAX),E=s.ensureInt32(u),c=s._pe_geog_to_utm(_,t,l,r,E);if(c)for(let e=0;e<t;e++)o[e]=s.UTF8ToString(u[e]);return c},e.utmToGeog=function(e,t,n,r,o){s.ensureCache.prepare();let _=0;e&&(_=s.getPointer(e));const i=n.map((e=>s.ensureString(e))),l=s.ensureInt32(i),u=s.ensureFloat64(new Array(2*t)),P=s._pe_utm_to_geog(_,t,l,r,u);return P&&L(o,t,u),P}}(O||(O={})),function(e){const t=new Map;e.init=function(){e.PE_PCSINFO_OPTION_NONE=s.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE,e.PE_PCSINFO_OPTION_DOMAIN=s.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN,e.PE_POLE_OUTSIDE_BOUNDARY=s.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY,e.PE_POLE_POINT=s.PePCSInfo.prototype.PE_POLE_POINT},e.generate=function(n,r=e.PE_PCSINFO_OPTION_DOMAIN){let o=null,_=null;return t.has(n)&&(_=t.get(n),_[r]&&(o=_[r])),o||(o=s.PePCSInfo.prototype.generate(n,r),_||(_=[],t.set(n,_)),_[r]=o),o}}(N||(N={})),function(e){e.versionString=function(){return s.PeVersion.prototype.version_string()}}(M||(M={}));const G=Object.freeze(Object.defineProperty({__proto__:null,get PeCSTransformations(){return u},get PeDefs(){return P},get PeFactory(){return E},get PeGCSExtent(){return a},get PeGTTransformations(){return p},get PeGTlistExtended(){return f},get PeGTlistExtendedEntry(){return S},get PeNotationDms(){return A},get PeNotationMgrs(){return C},get PeNotationUsng(){return R},get PeNotationUtm(){return O},get PePCSInfo(){return N},get PeVersion(){return M},_init:T,get _pe(){return s},isLoaded:i,isSupported:function(){return!!(0,o.Z)("esri-wasm")},load:l},Symbol.toStringTag,{value:"Module"}))},44547:(e,t,n)=>{n.d(t,{Up:()=>v,Bm:()=>X,initializeProjection:()=>B,kR:()=>m,zD:()=>F,iV:()=>W,projectBuffer:()=>z,oj:()=>w,dz:()=>U,JY:()=>D,KC:()=>j,Wt:()=>Y});var r=n(20102),o=n(22021),_=n(95330),s=n(67900),i=n(58971),l=n(10661),u=n(52138),P=(n(17896),n(65617)),E=n(2109),c=n(6570),a=n(65091),f=n(83305),S=n(94139),p=n(38913),A=n(58901),C=(n(24470),n(68441));Math.PI;const R=C.sv.radius,O=C.sv.eccentricitySquared,N={a1:R*O,a2:R*O*R*O,a3:R*O*O/2,a4:R*O*R*O*2.5,a5:R*O+R*O*O/2,a6:1-O};C.sv.radius,C.sv.flattening,C.Z1.radius,C.Z1.flattening,C.yr.radius,C.yr.flattening,C.yr.radius;var M=n(18571),T=n(8744),g=n(56726),d=n(69285);let h=null,L=null,G=null,y={};const I=new l.s;function m(){return!!h&&(0,f.i)()}function F(e){return null==G&&(G=Promise.all([(0,f.l)(),Promise.all([n.e(5837),n.e(5732)]).then(n.bind(n,45837)).then((e=>e.g)),n.e(819).then(n.bind(n,80819))])),G.then((([,t,{hydratedAdapter:n}])=>{(0,_.k_)(e),L=n,h=t.default,h._enableProjection(f.p),I.notify()}))}function W(e,t,n=null,r=null){return Array.isArray(e)?0===e.length?[]:w(L,e,e[0].spatialReference,t,n,r):w(L,[e],e.spatialReference,t,n,r)[0]}function w(e,t,n,r,o=null,_=null){if(null==n||null==r)return t;if(v(n,r,o))return t.map((e=>function(e,t,n){return e?"x"in e?function(e,t,n,r,o){de[0]=e.x,de[1]=e.y;const _=e.z;return de[2]=void 0!==_?_:o,z(de,t,0,de,r,0,1)?(n.x=de[0],n.y=de[1],n.spatialReference=r,void 0===_?(n.z=void 0,n.hasZ=!1):(n.z=de[2],n.hasZ=!0),void 0===e.m?(n.m=void 0,n.hasM=!1):(n.m=e.m,n.hasM=!0),n):null}(e,t,new S.Z,n,0):"xmin"in e?function(e,t,n,r,o){const{xmin:_,ymin:s,xmax:i,ymax:l,hasZ:u,hasM:P}=e;return Z(_,s,u?e.zmin:o,t,de,r)?(n.xmin=de[0],n.ymin=de[1],u&&(n.zmin=de[2]),Z(i,l,u?e.zmax:o,t,de,r)?(n.xmax=de[0],n.ymax=de[1],u&&(n.zmax=de[2]),P&&(n.mmin=e.mmin,n.mmax=e.mmax),n.spatialReference=r,n):null):null}(e,t,new c.Z,n,0):"rings"in e?x(e,t,new p.Z,n,0):"paths"in e?function(e,t,n,r,o){const{paths:_,hasZ:s,hasM:i}=e,l=[];return K(_,s??!1,i??!1,t,l,r,o)?(n.paths=l,n.spatialReference=r,n.hasZ=s,n.hasM=i,n):null}(e,t,new A.Z,n,0):"points"in e?function(e,t,n,r,o){const{points:_,hasZ:s,hasM:i}=e,l=[],u=_.length,P=[];for(const e of _)P.push(e[0],e[1],s?e[2]:o);if(!z(P,t,0,P,r,0,u))return null;for(let e=0;e<u;++e){const t=3*e,n=P[t],r=P[t+1];s&&i?l.push([n,r,P[t+2],_[e][3]]):s?l.push([n,r,P[t+2]]):i?l.push([n,r,_[e][2]]):l.push([n,r])}return n.points=l,n.spatialReference=r,n.hasZ=s,n.hasM=i,n}(e,t,new a.Z,n,0):null:null}(e,n,r)));if(null==o){const e=M.Z.cacheKey(n,r);void 0!==y[e]?o=y[e]:(null==(o=function(e,t,n=null){if(null==e||null==t)return null;if(null==h||null==L)throw new H;const r=h._getTransformation(L,e,t,n,n?.spatialReference);return null!==r?M.Z.fromGE(r):null}(n,r,void 0))&&(o=new M.Z),y[e]=o)}if(null==h||null==e)throw new H;return null!=_?h._project(e,t,n,r,o,_):h._project(e,t,n,r,o)}function U(e,t){const n=D([e],t);return null!=n.pending?{pending:n.pending,geometry:null}:null!=n.geometries?{pending:null,geometry:n.geometries[0]}:{pending:null,geometry:null}}function D(e,t){if(!m())for(const n of e)if(null!=n&&!(0,T.fS)(n.spatialReference,t)&&(0,T.JY)(n.spatialReference)&&(0,T.JY)(t)&&!v(n.spatialReference,t))return(0,i.it)(I),{pending:F(),geometries:null};return{pending:null,geometries:e.map((e=>null==e?null:(0,T.fS)(e.spatialReference,t)?e:(0,T.JY)(e.spatialReference)&&(0,T.JY)(t)?function(e,t){try{const n=W(e,t);if(null==n)return null;"xmin"in e&&"xmin"in n&&(n.zmin=e.zmin,n.zmax=e.zmax);const r=(0,d.k)(n.type,e.spatialReference,t);return null!=r&&r(n),n}catch(e){if(!(e instanceof H))throw e;return null}}(e,t):null))}}class H extends r.Z{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}}var k;function v(e,t,n){return!n&&(!!(0,T.fS)(e,t)||(0,T.JY)(e)&&(0,T.JY)(t)&&!!Se(e,t,Re))}async function B(e,t,n,r){if(m())return(0,_.Yn)(r);if(Array.isArray(e)){for(const{source:t,dest:n,geographicTransformation:o}of e)if(!v(t,n,o))return F(r)}else if(!v(e,t,n))return F(r);return(0,_.Yn)(r)}function Y(e,t,n=t.spatialReference,r=0){return null!=e.spatialReference&&null!=n&&null!=x(e,e.spatialReference,t,n,r)}function x(e,t,n,r,o){const{rings:_,hasZ:s,hasM:i}=e,l=[];return K(_,s??!1,i??!1,t,l,r,o)?(n.rings=l,n.spatialReference=r,n.hasZ=s,n.hasM=i,n):null}function j(e,t,n,r=0){de[0]=e.x,de[1]=e.y;const o=e.z;return de[2]=void 0!==o?o:r,z(de,e.spatialReference,0,t,n,0,1)}function Z(e,t,n,r,o,_){return Me[0]=e,Me[1]=t,Me[2]=n,z(Me,r,0,o,_,0,1)}function z(e,t,n,r,o,_,s=1){const i=Se(t,o,Re);if(null==i)return!1;if(i===V){if(e===r&&n===_)return!0;const t=n+3*s;for(let o=n,s=_;o<t;o++,s++)r[s]=e[o];return!0}const l=n+3*s;for(let t=n,o=_;t<l;t+=3,o+=3)i(e,t,r,o);return!0}function K(e,t,n,r,o,_,s=0){const i=new Array;for(const n of e)for(const e of n)i.push(e[0],e[1],t?e[2]:s);if(!z(i,r,0,i,_,0,i.length/3))return!1;let l=0;o.length=0;for(const r of e){const e=new Array;for(const o of r)t&&n?e.push([i[l++],i[l++],i[l++],o[3]]):t?e.push([i[l++],i[l++],i[l++]]):n?(e.push([i[l++],i[l++],o[2]]),l++):(e.push([i[l++],i[l++]]),l++);o.push(e)}return!0}function X(e,t,n,r){if(null==e||null==r)return!1;const o=q(e,Ae),_=q(r,Ce);if(o===_&&!b(_)&&(o!==k.UNKNOWN||(0,T.fS)(e,r)))return(0,u.f)(n,t),!0;if(b(_)){const e=fe[o][k.LON_LAT],r=fe[k.LON_LAT][_];return null!=e&&null!=r&&(e(t,0,Te,0),r(Te,0,ge,0),J(Oe*Te[0],Oe*Te[1],n),n[12]=ge[0],n[13]=ge[1],n[14]=ge[2],!0)}if((_===k.WEB_MERCATOR||_===k.PLATE_CARREE)&&(o===k.WGS84||o===k.CGCS2000&&_===k.PLATE_CARREE||o===k.SPHERICAL_ECEF||o===k.WEB_MERCATOR)){const e=fe[o][k.LON_LAT],r=fe[k.LON_LAT][_];return null!=e&&null!=r&&(e(t,0,Te,0),r(Te,0,ge,0),o===k.SPHERICAL_ECEF?function(e,t,n){J(e,t,n),(0,u.t)(n,n)}(Oe*Te[0],Oe*Te[1],n):(0,u.i)(n),n[12]=ge[0],n[13]=ge[1],n[14]=ge[2],!0)}return!1}function b(e){return e===k.SPHERICAL_ECEF||e===k.SPHERICAL_MARS_PCPF||e===k.SPHERICAL_MOON_PCPF}function J(e,t,n){const r=Math.sin(e),o=Math.cos(e),_=Math.sin(t),s=Math.cos(t),i=n;return i[0]=-r,i[4]=-_*o,i[8]=s*o,i[12]=0,i[1]=o,i[5]=-_*r,i[9]=s*r,i[13]=0,i[2]=0,i[6]=s,i[10]=_,i[14]=0,i[3]=0,i[7]=0,i[11]=0,i[15]=1,i}function q(e,t){return e?t.spatialReference===e?t.spatialReferenceId:(t.spatialReference=e,"metersPerUnit"in t&&(t.metersPerUnit=(0,s.c9)(e,1)),e.wkt===E.kU.wkt?t.spatialReferenceId=k.SPHERICAL_ECEF:(0,T.oR)(e)?t.spatialReferenceId=k.WGS84:(0,T.sS)(e)?t.spatialReferenceId=k.WEB_MERCATOR:(0,T.QM)(e)?t.spatialReferenceId=k.PLATE_CARREE:e.wkt===E.pn.wkt?t.spatialReferenceId=k.WGS84_ECEF:e.wkid===g.W.CGCS2000?t.spatialReferenceId=k.CGCS2000:e.wkt===E.JL.wkt?t.spatialReferenceId=k.SPHERICAL_MARS_PCPF:e.wkt===E.mM.wkt?t.spatialReferenceId=k.SPHERICAL_MOON_PCPF:(0,T.BZ)(e)?t.spatialReferenceId=k.GCSMARS2000:(0,T.V2)(e)?t.spatialReferenceId=k.GCSMOON2000:t.spatialReferenceId=k.UNKNOWN):k.UNKNOWN}function V(e,t,n,r){e!==n&&(n[r++]=e[t++],n[r++]=e[t++],n[r]=e[t])}function Q(e,t,n,r){n[r++]=Ne*(e[t++]/C.sv.radius),n[r++]=Ne*(Math.PI/2-2*Math.atan(Math.exp(-e[t++]/C.sv.radius))),n[r]=e[t]}function $(e,t,n,r){!function(e,t,n,r,_){const s=.4999999*Math.PI,i=(0,o.uZ)(Oe*e[t+1],-s,s),l=Math.sin(i);n[r++]=Oe*e[t]*_.radius,n[r++]=_.halfSemiMajorAxis*Math.log((1+l)/(1-l)),n[r]=e[t+2]}(e,t,n,r,C.sv)}!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.SPHERICAL_ECEF=1]="SPHERICAL_ECEF",e[e.WGS84=2]="WGS84",e[e.WEB_MERCATOR=3]="WEB_MERCATOR",e[e.WGS84_ECEF=4]="WGS84_ECEF",e[e.CGCS2000=5]="CGCS2000",e[e.WGS84_COMPARABLE_LON_LAT=6]="WGS84_COMPARABLE_LON_LAT",e[e.SPHERICAL_MARS_PCPF=7]="SPHERICAL_MARS_PCPF",e[e.GCSMARS2000=8]="GCSMARS2000",e[e.SPHERICAL_MOON_PCPF=9]="SPHERICAL_MOON_PCPF",e[e.GCSMOON2000=10]="GCSMOON2000",e[e.LON_LAT=11]="LON_LAT",e[e.PLATE_CARREE=12]="PLATE_CARREE"}(k||(k={}));const ee=C.sv.radius*Math.PI/180,te=180/(C.sv.radius*Math.PI);function ne(e,t,n,r){n[r]=e[t]*ee,n[r+1]=e[t+1]*ee,n[r+2]=e[t+2]}function re(e,t,n,r){n[r]=e[t]*te,n[r+1]=e[t+1]*te,n[r+2]=e[t+2]}function oe(e,t,n,r,o){const _=o+e[t+2],s=Oe*e[t+1],i=Oe*e[t],l=Math.cos(s);n[r++]=Math.cos(i)*l*_,n[r++]=Math.sin(i)*l*_,n[r]=Math.sin(s)*_}function _e(e,t,n,r){oe(e,t,n,r,C.Z1.radius)}function se(e,t,n,r){oe(e,t,n,r,C.yr.radius)}function ie(e,t,n,r){oe(e,t,n,r,C.sv.radius)}function le(e,t,n,r,_){const s=e[t],i=e[t+1],l=e[t+2],u=Math.sqrt(s*s+i*i+l*l),P=(0,o.Kt)(l/(0===u?1:u)),E=Math.atan2(i,s);n[r++]=Ne*E,n[r++]=Ne*P,n[r]=u-_}function ue(e,t,n,r){le(e,t,n,r,C.Z1.radius)}function Pe(e,t,n,r){le(e,t,n,r,C.yr.radius)}function Ee(e,t,n,r){le(e,t,n,r,C.sv.radius)}function ce(e,t,n,r){!function(e,t,n,r,o){const _=Oe*e[t],s=Oe*e[t+1],i=e[t+2],l=Math.sin(s),u=Math.cos(s),P=o.radius/Math.sqrt(1-o.eccentricitySquared*l*l);n[r++]=(P+i)*u*Math.cos(_),n[r++]=(P+i)*u*Math.sin(_),n[r++]=(P*(1-o.eccentricitySquared)+i)*l}(e,t,n,r,C.sv)}function ae(e,t,n,r){const o=N,_=e[t],s=e[t+1],i=e[t+2];let l,u,P,E,c,a,f,S,p,A,R,O,M,T,g,d,h,L,G,y,I;l=Math.abs(i),u=_*_+s*s,P=Math.sqrt(u),E=u+i*i,c=Math.sqrt(E),y=Math.atan2(s,_),a=i*i/E,f=u/E,T=o.a2/c,g=o.a3-o.a4/c,f>.3?(S=l/c*(1+f*(o.a1+T+a*g)/c),G=Math.asin(S),A=S*S,p=Math.sqrt(1-A)):(p=P/c*(1-a*(o.a5-T-f*g)/c),G=Math.acos(p),A=1-p*p,S=Math.sqrt(A)),R=1-C.sv.eccentricitySquared*A,O=C.sv.radius/Math.sqrt(R),M=o.a6*O,T=P-O*p,g=l-M*S,h=p*T+S*g,d=p*g-S*T,L=d/(M/R+h),G+=L,I=h+d*L/2,i<0&&(G=-G),n[r++]=Ne*y,n[r++]=Ne*G,n[r]=I}const fe={[k.WGS84]:{[k.CGCS2000]:null,[k.GCSMARS2000]:null,[k.GCSMOON2000]:null,[k.LON_LAT]:V,[k.WGS84_COMPARABLE_LON_LAT]:V,[k.SPHERICAL_ECEF]:ie,[k.SPHERICAL_MARS_PCPF]:null,[k.SPHERICAL_MOON_PCPF]:null,[k.UNKNOWN]:null,[k.WEB_MERCATOR]:$,[k.PLATE_CARREE]:ne,[k.WGS84]:V,[k.WGS84_ECEF]:ce},[k.CGCS2000]:{[k.CGCS2000]:V,[k.GCSMARS2000]:null,[k.GCSMOON2000]:null,[k.LON_LAT]:V,[k.WGS84_COMPARABLE_LON_LAT]:V,[k.SPHERICAL_ECEF]:ie,[k.SPHERICAL_MARS_PCPF]:null,[k.SPHERICAL_MOON_PCPF]:null,[k.UNKNOWN]:null,[k.WEB_MERCATOR]:null,[k.PLATE_CARREE]:ne,[k.WGS84]:null,[k.WGS84_ECEF]:ce},[k.GCSMARS2000]:{[k.CGCS2000]:null,[k.GCSMARS2000]:V,[k.GCSMOON2000]:null,[k.LON_LAT]:V,[k.WGS84_COMPARABLE_LON_LAT]:null,[k.SPHERICAL_ECEF]:null,[k.SPHERICAL_MARS_PCPF]:se,[k.SPHERICAL_MOON_PCPF]:null,[k.UNKNOWN]:null,[k.WEB_MERCATOR]:null,[k.PLATE_CARREE]:null,[k.WGS84]:null,[k.WGS84_ECEF]:null},[k.GCSMOON2000]:{[k.CGCS2000]:null,[k.GCSMARS2000]:null,[k.GCSMOON2000]:V,[k.LON_LAT]:V,[k.WGS84_COMPARABLE_LON_LAT]:null,[k.SPHERICAL_ECEF]:null,[k.SPHERICAL_MARS_PCPF]:null,[k.SPHERICAL_MOON_PCPF]:_e,[k.UNKNOWN]:null,[k.WEB_MERCATOR]:null,[k.PLATE_CARREE]:null,[k.WGS84]:null,[k.WGS84_ECEF]:null},[k.WEB_MERCATOR]:{[k.CGCS2000]:null,[k.GCSMARS2000]:null,[k.GCSMOON2000]:null,[k.LON_LAT]:Q,[k.WGS84_COMPARABLE_LON_LAT]:Q,[k.SPHERICAL_ECEF]:function(e,t,n,r){Q(e,t,n,r),ie(n,r,n,r)},[k.SPHERICAL_MARS_PCPF]:null,[k.SPHERICAL_MOON_PCPF]:null,[k.UNKNOWN]:null,[k.WEB_MERCATOR]:V,[k.PLATE_CARREE]:function(e,t,n,r){Q(e,t,n,r),ne(n,r,n,r)},[k.WGS84]:Q,[k.WGS84_ECEF]:function(e,t,n,r){Q(e,t,n,r),ce(n,r,n,r)}},[k.WGS84_ECEF]:{[k.CGCS2000]:ae,[k.GCSMARS2000]:null,[k.GCSMOON2000]:null,[k.LON_LAT]:ae,[k.WGS84_COMPARABLE_LON_LAT]:ae,[k.SPHERICAL_ECEF]:function(e,t,n,r){ae(e,t,n,r),ie(n,r,n,r)},[k.SPHERICAL_MARS_PCPF]:null,[k.SPHERICAL_MOON_PCPF]:null,[k.UNKNOWN]:null,[k.WEB_MERCATOR]:function(e,t,n,r){ae(e,t,n,r),$(n,r,n,r)},[k.PLATE_CARREE]:function(e,t,n,r){ae(e,t,n,r),ne(n,r,n,r)},[k.WGS84]:ae,[k.WGS84_ECEF]:V},[k.SPHERICAL_ECEF]:{[k.CGCS2000]:Ee,[k.GCSMARS2000]:null,[k.GCSMOON2000]:null,[k.LON_LAT]:Ee,[k.WGS84_COMPARABLE_LON_LAT]:Ee,[k.SPHERICAL_ECEF]:V,[k.SPHERICAL_MARS_PCPF]:null,[k.SPHERICAL_MOON_PCPF]:null,[k.UNKNOWN]:null,[k.WEB_MERCATOR]:function(e,t,n,r){Ee(e,t,n,r),$(n,r,n,r)},[k.PLATE_CARREE]:function(e,t,n,r){Ee(e,t,n,r),ne(n,r,n,r)},[k.WGS84]:Ee,[k.WGS84_ECEF]:function(e,t,n,r){Ee(e,t,n,r),ce(n,r,n,r)}},[k.SPHERICAL_MARS_PCPF]:{[k.CGCS2000]:null,[k.GCSMARS2000]:Pe,[k.GCSMOON2000]:null,[k.LON_LAT]:Pe,[k.WGS84_COMPARABLE_LON_LAT]:null,[k.SPHERICAL_ECEF]:null,[k.SPHERICAL_MARS_PCPF]:V,[k.SPHERICAL_MOON_PCPF]:null,[k.UNKNOWN]:null,[k.WEB_MERCATOR]:null,[k.PLATE_CARREE]:null,[k.WGS84]:null,[k.WGS84_ECEF]:null},[k.SPHERICAL_MOON_PCPF]:{[k.CGCS2000]:null,[k.GCSMARS2000]:null,[k.GCSMOON2000]:ue,[k.LON_LAT]:ue,[k.WGS84_COMPARABLE_LON_LAT]:null,[k.SPHERICAL_ECEF]:null,[k.SPHERICAL_MARS_PCPF]:null,[k.SPHERICAL_MOON_PCPF]:V,[k.UNKNOWN]:null,[k.WEB_MERCATOR]:null,[k.PLATE_CARREE]:null,[k.WGS84]:null,[k.WGS84_ECEF]:null},[k.UNKNOWN]:{[k.CGCS2000]:null,[k.GCSMARS2000]:null,[k.GCSMOON2000]:null,[k.LON_LAT]:null,[k.WGS84_COMPARABLE_LON_LAT]:null,[k.SPHERICAL_ECEF]:null,[k.SPHERICAL_MARS_PCPF]:null,[k.SPHERICAL_MOON_PCPF]:null,[k.UNKNOWN]:V,[k.WEB_MERCATOR]:null,[k.PLATE_CARREE]:null,[k.WGS84]:null,[k.WGS84_ECEF]:null},[k.LON_LAT]:{[k.CGCS2000]:V,[k.GCSMARS2000]:V,[k.GCSMOON2000]:V,[k.LON_LAT]:V,[k.WGS84_COMPARABLE_LON_LAT]:V,[k.SPHERICAL_ECEF]:ie,[k.SPHERICAL_MARS_PCPF]:se,[k.SPHERICAL_MOON_PCPF]:_e,[k.UNKNOWN]:null,[k.WEB_MERCATOR]:$,[k.PLATE_CARREE]:ne,[k.WGS84]:V,[k.WGS84_ECEF]:ce},[k.WGS84_COMPARABLE_LON_LAT]:{[k.CGCS2000]:null,[k.GCSMARS2000]:null,[k.GCSMOON2000]:null,[k.LON_LAT]:V,[k.WGS84_COMPARABLE_LON_LAT]:V,[k.SPHERICAL_ECEF]:ie,[k.SPHERICAL_MARS_PCPF]:null,[k.SPHERICAL_MOON_PCPF]:null,[k.UNKNOWN]:null,[k.WEB_MERCATOR]:null,[k.PLATE_CARREE]:ne,[k.WGS84]:V,[k.WGS84_ECEF]:ce},[k.PLATE_CARREE]:{[k.CGCS2000]:re,[k.GCSMARS2000]:null,[k.GCSMOON2000]:null,[k.LON_LAT]:re,[k.WGS84_COMPARABLE_LON_LAT]:re,[k.SPHERICAL_ECEF]:function(e,t,n,r){re(e,t,n,r),ie(n,r,n,r)},[k.SPHERICAL_MARS_PCPF]:null,[k.SPHERICAL_MOON_PCPF]:null,[k.UNKNOWN]:null,[k.WEB_MERCATOR]:function(e,t,n,r){re(e,t,n,r),$(n,r,n,r)},[k.PLATE_CARREE]:V,[k.WGS84]:re,[k.WGS84_ECEF]:function(e,t,n,r){re(e,t,n,r),ce(n,r,n,r)}}};function Se(e,t,n=pe()){return null==e||null==t?null:function(e,t,n){if(null==e||null==t||n.source.spatialReference===e&&n.dest.spatialReference===t)return n;const r=q(e,n.source),o=q(t,n.dest);return r===k.UNKNOWN&&o===k.UNKNOWN?(0,T.fS)(e,t)?n.projector=V:n.projector=null:n.projector=fe[r][o],n}(e,t,n).projector}function pe(){return{source:{spatialReference:null,spatialReferenceId:k.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:k.UNKNOWN,metersPerUnit:1},projector:V}}const Ae={spatialReference:null,spatialReferenceId:k.UNKNOWN},Ce={spatialReference:null,spatialReferenceId:k.UNKNOWN},Re=pe(),Oe=(pe(),(0,o.Vl)(1)),Ne=(0,o.BV)(1),Me=(0,P.c)(),Te=(0,P.c)(),ge=(0,P.c)(),de=(0,P.c)();(0,P.c)()},18571:(e,t,n)=>{n.d(t,{Z:()=>_});let r=0;class o{static fromGE(e){const t=new o;return t._wkt=e.wkt,t._wkid=e.wkid,t._isInverse=e.isInverse,t}constructor(e){this.uid=r++,e?(this._wkt=null!=e.wkt?e.wkt:null,this._wkid=null!=e.wkid?e.wkid:-1,this._isInverse=null!=e.isInverse&&!0===e.isInverse):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}get wkt(){return this._wkt}set wkt(e){this._wkt=e,this.uid=r++}get wkid(){return this._wkid}set wkid(e){this._wkid=e,this.uid=r++}get isInverse(){return this._isInverse}set isInverse(e){this._isInverse=e,this.uid=r++}getInverse(){const e=new o;return e._wkt=this.wkt,e._wkid=this._wkid,e._isInverse=!this.isInverse,e}}class _{static cacheKey(e,t){return[void 0!==e.wkid&&null!==e.wkid?e.wkid.toString():"-1",void 0!==e.wkt&&null!==e.wkt?e.wkt.toString():"",void 0!==t.wkid&&null!==t.wkid?t.wkid.toString():"-1",void 0!==t.wkt&&null!==t.wkt?t.wkt.toString():""].join(",")}static fromGE(e){const t=new _;let n="";for(const r of e.steps){const e=o.fromGE(r);t.steps.push(e),n+=e.uid.toString()+","}return t._cachedProjection={},t._gtlistentry=null,t._chain=n,t}constructor(e){if(this.steps=[],this._cachedProjection={},this._chain="",this._gtlistentry=null,e&&e.steps)for(const t of e.steps)t instanceof o?this.steps.push(t):this.steps.push(new o({wkid:t.wkid,wkt:t.wkt,isInverse:t.isInverse}))}getInverse(){const e=new _;e.steps=[];for(let t=this.steps.length-1;t>=0;t--){const n=this.steps[t];e.steps.push(n.getInverse())}return e}getGTListEntry(){let e="";for(const t of this.steps)e+=t.uid.toString()+",";return e!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=e),this._gtlistentry}assignCachedGe(e,t,n){this._cachedProjection[_.cacheKey(e,t)]=n}getCachedGeTransformation(e,t){let n="";for(const e of this.steps)n+=e.uid.toString()+",";n!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=n);const r=this._cachedProjection[_.cacheKey(e,t)];return void 0===r?null:r}}},69285:(e,t,n)=>{n.d(t,{k:()=>_});var r=n(67900),o=n(8744);function _(e,t,n){if(null==t||null==n||n.vcsWkid||(0,o.fS)(t,n))return null;const _=(0,r._R)(t)/(0,r._R)(n);if(1===_)return null;switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,_);case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const n of e.paths)for(const e of n)e.length>2&&(e[2]*=t)}(e,_);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const n of e.rings)for(const e of n)e.length>2&&(e[2]*=t)}(e,_);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const n of e.points)n.length>2&&(n[2]*=t)}(e,_);case"extent":case"esriGeometryEnvelope":return e=>function(e,t){e&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t)}(e,_);default:return null}}}}]);