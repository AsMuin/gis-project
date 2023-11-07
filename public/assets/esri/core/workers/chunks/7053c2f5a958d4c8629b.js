"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3230],{66643:(e,t,n)=>{n.d(t,{Ed:()=>l,UI:()=>c,mt:()=>f,q6:()=>d,vr:()=>m});var r=n(43697),o=n(92036),i=n(70586),a=n(95330),s=n(5600),u=n(52011);function l(e,t,n){return(0,a.as)(e.map(((e,r)=>t.apply(n,[e,r]))))}async function c(e,t,n){return(await(0,a.as)(e.map(((e,r)=>t.apply(n,[e,r]))))).map((e=>e.value))}function p(e){return{ok:!0,value:e}}function y(e){return{ok:!1,error:e}}async function d(e){if(null==e)return{ok:!1,error:new Error("no promise provided")};try{return p(await e)}catch(e){return y(e)}}async function f(e){try{return p(await e)}catch(e){return(0,a.r9)(e),y(e)}}function m(e,t){return new h(e,t)}let h=class extends o.Z{get value(){return null!=(e=this._result)&&!0===e.ok?e.value:null;var e}get error(){return null!=(e=this._result)&&!1===e.ok?e.error:null;var e}get finished(){return null!=this._result}constructor(e,t){super({}),this._result=null,this._abortHandle=null,this.abort=()=>{this._abortController=(0,i.IM)(this._abortController)},this.remove=this.abort,this._abortController=new AbortController;const{signal:n}=this._abortController;this.promise=e(n),this.promise.then((e=>{this._result=p(e),this._cleanup()}),(e=>{this._result=y(e),this._cleanup()})),this._abortHandle=(0,a.fu)(t,this.abort)}normalizeCtorArgs(){return{}}destroy(){this.abort()}_cleanup(){this._abortHandle=(0,i.hw)(this._abortHandle),this._abortController=null}};(0,r._)([(0,s.Cb)()],h.prototype,"value",null),(0,r._)([(0,s.Cb)()],h.prototype,"error",null),(0,r._)([(0,s.Cb)()],h.prototype,"finished",null),(0,r._)([(0,s.Cb)()],h.prototype,"promise",void 0),(0,r._)([(0,s.Cb)()],h.prototype,"_result",void 0),h=(0,r._)([(0,u.j)("esri.core.asyncUtils.ReactiveTask")],h)},43230:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(66643),o=n(20102),i=n(92604),a=n(95330),s=n(8744),u=n(98732),l=n(57191),c=n(37427),p=n(66202),y=n(92722),d=n(23095),f=n(51432),m=n(99514);class h{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,n=await(0,f.Bm)(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await(0,y.O3)(n),(0,a.k_)(e);const r=(0,y.lG)(n,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!(0,s.fS)(this._queryEngine.spatialReference,s.Zn))for(const e of r)null!=e.geometry&&(e.geometry=(0,u.GH)((0,c.iV)((0,u.di)(e.geometry,this._queryEngine.geometryType,!1,!1),s.Zn,this._queryEngine.spatialReference)));let o=1;for(const e of r){const n={};(0,d.O0)(this._fieldsIndex,n,e.attributes,!0),e.attributes=n,null==e.attributes[t]&&(e.objectId=e.attributes[t]=o++)}return r}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:n,getFeatureOutputFormat:r,spatialReference:o,fields:i,geometryType:s,featureType:u,objectIdField:c,customParameters:y}=e;this._featureType=u,this._customParameters=y,this._getFeatureUrl=n,this._getFeatureOutputFormat=r,this._fieldsIndex=new m.Z(i),await this._checkProjection(o),(0,a.k_)(t),this._queryEngine=new p.q({fields:i,geometryType:s,hasM:!1,hasZ:!1,objectIdField:c,spatialReference:o,timeInfo:null,featureStore:new l.Z({geometryType:s,hasM:!1,hasZ:!1})});const d=await this._snapshotFeatures(t.signal);return this._queryEngine.featureStore.addMany(d),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new o.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){return this._customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=(0,r.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),(0,a.D_)(e)||i.Z.getLogger("esri.layers.WFSLayer").error(new o.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await(0,c._W)(s.Zn,e)}catch{throw new o.Z("unsupported-projection","Projection not supported",{spatialReference:e})}}}},92722:(e,t,n)=>{n.d(t,{O3:()=>S,lG:()=>T,my:()=>F,q9:()=>u});var r=n(20102),o=n(70272),i=n(5428),a=n(35671);const s={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function u(e){return s[e]}function*l(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*c(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function p(e){for(const t of e)if(t.length>2)return!0;return!1}function y(e){let t=0;for(let n=0;n<e.length;n++){const r=e[n],o=e[(n+1)%e.length];t+=r[0]*o[1]-o[0]*r[1]}return t<=0}function d(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function f(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return g(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const r of t.coordinates)g(e,r,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const r of t.coordinates){m(e,r[0],n);for(let t=1;t<r.length;t++)h(e,r[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const r=t.coordinates;m(e,r[0],n);for(let t=1;t<r.length;t++)h(e,r[t],n);return e}(e,t,n)}}function m(e,t,n){const r=d(t);!function(e){return!y(e)}(r)?g(e,r,n):w(e,r,n)}function h(e,t,n){const r=d(t);!function(e){return y(e)}(r)?g(e,r,n):w(e,r,n)}function g(e,t,n){for(const r of t)b(e,r,n);e.lengths.push(t.length)}function w(e,t,n){for(let r=t.length-1;r>=0;r--)b(e,t[r],n);e.lengths.push(t.length)}function b(e,t,n){const[r,o,i]=t;e.coords.push(r,o),n.hasZ&&e.coords.push(i||0)}function _(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function S(e){if(!e)throw new r.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new r.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,o=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!o.test(n))throw new r.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function F(e,t={}){const n=[],r=new Set,o=new Set;let i,s=!1,y=null,d=!1,{geometryType:f=null}=t,m=!1;for(const t of l(e)){const{geometry:e,properties:l,id:h}=t;if((!e||(f||(f=u(e.type)),u(e.type)===f))&&(s||(s=p(c(e))),d||(d=null!=h,d&&(i=typeof h,l&&(y=Object.keys(l).filter((e=>l[e]===h))))),l&&y&&d&&null!=h&&(y.length>1?y=y.filter((e=>l[e]===h)):1===y.length&&(y=l[y[0]]===h?y:[])),!m&&l)){let e=!0;for(const t in l){if(r.has(t))continue;const i=l[t];if(null==i){e=!1,o.add(t);continue}const s=_(i);if("unknown"===s){o.add(t);continue}o.delete(t),r.add(t);const u=(0,a.q6)(t);u&&n.push({name:u,alias:t,type:s})}m=e}}const h=(0,a.q6)(1===y?.length&&y[0]||null)??void 0;if(h)for(const e of n)if(e.name===h&&(0,a.H7)(e)){e.type="esriFieldTypeOID";break}return{fields:n,geometryType:f,hasZ:s,objectIdFieldName:h,objectIdFieldType:i,unknownFields:Array.from(o)}}function T(e,t){return Array.from(function*(e,t={}){const{geometryType:n,objectIdField:r}=t;for(const a of e){const{geometry:e,properties:s,id:l}=a;if(e&&u(e.type)!==n)continue;const c=s||{};let p;r&&(p=c[r],null==l||p||(c[r]=p=l));const y=new o.u_(e?f(new i.Z,e,t):null,c,null,p??void 0);yield y}}(l(e),t))}},51432:(e,t,n)=>{n.d(t,{M8:()=>_,ft:()=>q,FU:()=>j,Bm:()=>D,be:()=>O,eB:()=>R}),n(66577);var r=n(3172),o=n(20102),i=n(66374),a=n(95330),s=n(81271),u=n(44547),l=n(8744),c=n(86973),p=n(92722);function y(e){return function(e){const t=d.exec(e);if(!t?.groups)return null;const n=t.groups,r=+n.year,o=+n.month-1,i=+n.day,a=+(n.hours??"0"),s=+(n.minutes??"0"),u=+(n.seconds??"0");if(a>23)return null;if(s>59)return null;if(u>59)return null;const l=n.ms??"0",c=l?+l.padEnd(3,"0").substring(0,3):0;let p;if(n.isUTC)p=Date.UTC(r,o,i,a,s,u,c);else if(n.offsetSign){const e=+n.offsetHours,t=+n.offsetMinutes;p=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(r,o,i,a,s,u,c)}else p=new Date(r,o,i,a,s,u,c).getTime();return Number.isNaN(p)?null:p}(e)??function(e){const t=new Date(e).getTime();return Number.isNaN(t)?null:t}(e)}const d=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;var f=n(88724),m=n(1231),h=n(82971),g=n(6570);const w="xlink:href",b="2.0.0",_="__esri_wfs_id__",S="wfs-layer:getWFSLayerTypeInfo-error",F="wfs-layer:empty-service",T="wfs-layer:feature-type-not-found",C="wfs-layer:geojson-not-supported",v="wfs-layer:kvp-encoding-not-supported",x="wfs-layer:malformed-json",E="wfs-layer:unknown-geometry-type",P="wfs-layer:unknown-field-type",k="wfs-layer:unsupported-spatial-reference",N="wfs-layer:unsupported-wfs-version";async function j(e,t){const n=function(e){const t=U(e);(function(e){const t=e.firstElementChild?.getAttribute("version");if(t&&t!==b)throw new o.Z(N,`Unsupported WFS version ${t}. Supported version: ${b}`)})(t),J(t);const n=t.firstElementChild,r=(0,i.Fs)(function(e){return(0,f.H)(e,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},n=new Set([4326]),r=e=>{const t=parseInt(e.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);Number.isNaN(t)||n.add(t)};return(0,f.h)(e,{Name:e=>{const{name:n,prefix:r}=L(e.textContent);t.typeName=`${r}:${n}`,t.name=n,t.namespacePrefix=r,t.namespaceUri=e.lookupNamespaceURI(r)},Abstract:e=>{t.description=e.textContent},Title:e=>{t.title=e.textContent},WGS84BoundingBox:e=>{t.extent=function(e){let t,n,r,o;for(const i of e.children)switch(i.localName){case"LowerCorner":[t,n]=i.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[r,o]=i.textContent.split(" ").map((e=>Number.parseFloat(e)))}return{xmin:t,ymin:n,xmax:r,ymax:o,spatialReference:l.Zn}}(e)},DefaultSRS:r,DefaultCRS:r,OtherSRS:r,OtherCRS:r}),t.title||(t.title=t.name),t.supportedSpatialReferences.push(...n),t}}})}(n));return{operations:V(n),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}((await(0,r.default)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:b,...t?.customParameters},signal:t?.signal})).data);return function(e,t){(0,s.$U)(e)&&((0,s.D6)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,s.hO)(t.operations.DescribeFeatureType.url)),(0,s.D6)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,s.hO)(t.operations.GetFeature.url)))}(e,n),n}const Z=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function V(e){let t=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if((0,f.h)(e,{OperationsMetadata:{Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(w)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(w)}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(w)}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:e=>{const t=e.textContent;t&&Z.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!t)throw new o.Z(v,"WFS service doesn't support key/value pair (KVP) encoding");if(null==n.GetFeature.outputFormat)throw new o.Z(C,"WFS service doesn't support GeoJSON output format");return n}function q(e,t,n){return(0,i.sE)(e,(e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t))}async function O(e,t,n,r={}){const{featureType:i,extent:s}=await async function(e,t,n,r={}){const{spatialReference:i=h.Z.WGS84}=r,a=e.readFeatureTypes(),s=t?q(a,t,n):a.next().value;if(null==s)throw t?new o.Z(T,`The type '${t}' could not be found in the service`):new o.Z(F,"The service is empty");let c=new g.Z({...s.extent,spatialReference:i});if(!(0,l.fS)(i,l.Zn))try{await(0,u.initializeProjection)(l.Zn,i,void 0,r),c=(0,u.iV)(c,l.Zn)}catch{throw new o.Z(k,"Projection not supported")}return{extent:c,spatialReference:i,featureType:s}}(e,t,n,r),{fields:c,geometryType:p,swapXY:y,objectIdField:d,geometryField:f}=await async function(e,t,n={}){const[r,i]=await(0,a.as)([A(e.operations.DescribeFeatureType.url,t,n),G(e,t,n)]);if(r.error||i.error)throw new o.Z(S,`An error occurred while getting info about the feature type '${t}'`,{error:r.error||i.error});const{fields:s,errors:u}=r.value??{},l=r.value?.geometryType||i.value?.geometryType,c=i.value?.swapXY??!1;if(null==l)throw new o.Z(E,`The geometry type could not be determined for type '${t}`,{typeName:t,geometryType:l,fields:s,errors:u});return{...R(s??[]),geometryType:l,swapXY:c}}(e,i.typeName,r);return{url:e.operations.GetCapabilities.url,name:i.name,namespaceUri:i.namespaceUri,fields:c,geometryField:f,geometryType:p,objectIdField:d,spatialReference:r.spatialReference??h.Z.WGS84,extent:s,swapXY:y,wfsCapabilities:e,customParameters:r.customParameters}}function R(e){const t=e.find((e=>"geometry"===e.type));let n=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),n||(n=new m.Z({name:_,type:"oid",alias:_}),e.unshift(n)),{geometryField:t?.name??null,objectIdField:n.name,fields:e}}async function G(e,t,n={}){let o,i=!1;const[a,s]=await Promise.all([D(e.operations.GetFeature.url,t,e.operations.GetFeature.outputFormat,{...n,count:1}),(0,r.default)(e.operations.GetFeature.url,{responseType:"text",query:M(t,void 0,{...n,count:1}),signal:n?.signal})]),u="FeatureCollection"===a.type&&a.features[0]?.geometry;if(u){let e;switch(o=c.M.fromJSON((0,p.q9)(u.type)),u.type){case"Point":e=u.coordinates;break;case"LineString":case"MultiPoint":e=u.coordinates[0];break;case"MultiLineString":case"Polygon":e=u.coordinates[0][0];break;case"MultiPolygon":e=u.coordinates[0][0][0]}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(s.data);if(t){const n=e[0].toFixed(3),r=e[1].toFixed(3),o=parseFloat(t[1]).toFixed(3);n===parseFloat(t[2]).toFixed(3)&&r===o&&(i=!0)}}return{geometryType:o,swapXY:i}}async function A(e,t,n){return function(e,t){const{name:n}=L(e),r=U(t);J(r);const a=(0,i.sE)((0,f.H)(r.firstElementChild,{element:e=>({name:e.getAttribute("name"),typeName:L(e.getAttribute("type")).name})}),(({name:e})=>e===n));if(null!=a){const e=(0,i.sE)((0,f.H)(r.firstElementChild,{complexType:e=>e}),(e=>e.getAttribute("name")===a.typeName));if(null!=e)return function(e){const t=[],n=[];let r;const i=(0,f.H)(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const a of i){const i=a.getAttribute("name");if(!i)continue;let s,u;if(a.hasAttribute("type")?s=L(a.getAttribute("type")).name:(0,f.h)(a,{simpleType:{restriction:e=>(s=L(e.getAttribute("base")).name,{maxLength:e=>{u=+e.getAttribute("value")}})}}),!s)continue;const l="true"===a.getAttribute("nillable");let c=!1;switch(s.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":n.push(new m.Z({name:i,alias:i,type:"integer",nullable:l}));break;case"float":case"double":case"decimal":n.push(new m.Z({name:i,alias:i,type:"double",nullable:l}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":n.push(new m.Z({name:i,alias:i,type:"string",nullable:l,length:u??255}));break;case"datetime":case"date":n.push(new m.Z({name:i,alias:i,type:"date",nullable:l,length:u??36}));break;case"pointpropertytype":r="point",c=!0;break;case"multipointpropertytype":r="multipoint",c=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",c=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",c=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":c=!0,t.push(new o.Z(E,`geometry type '${s}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:t.push(new o.Z(P,`Unknown field type '${s}'`,{type:(new XMLSerializer).serializeToString(e)}))}c&&n.push(new m.Z({name:i,alias:i,type:"geometry",nullable:l}))}for(const e of n)if("integer"===e.type&&!e.nullable&&I.has(e.name.toLowerCase())){e.type="oid";break}return{geometryType:r,fields:n,errors:t}}(e)}throw new o.Z(T,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(r)})}(t,(await(0,r.default)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:b,TYPENAME:t,...n?.customParameters},signal:n?.signal})).data)}const I=new Set(["objectid","fid"]);async function D(e,t,n,i){let{data:a}=await(0,r.default)(e,{responseType:"text",query:M(t,n,i),signal:i?.signal});a=a.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{if(i?.dateFields?.length){const e=new Set(i.dateFields);return JSON.parse(a,((t,n)=>e.has(t)?y(n):n))}return JSON.parse(a)}catch(e){throw new o.Z(x,"Error while parsing the response",{response:a,error:e})}}function M(e,t,n){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:b,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:n?.startIndex,COUNT:n?.count,...n?.customParameters}}function U(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function L(e){const[t,n]=e.split(":");return{prefix:n?t:"",name:n??t}}function J(e){let t="",n="";if((0,f.h)(e.firstElementChild,{Exception:e=>(t=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent}})}),t)throw new o.Z(`wfs-layer:${t}`,n)}},88724:(e,t,n)=>{function r(e,t){if(e&&t)for(const n of e.children)if(n.localName in t){const e=t[n.localName];if("function"==typeof e){const t=e(n);t&&r(n,t)}else r(n,e)}}function*o(e,t){for(const n of e.children)if(n.localName in t){const e=t[n.localName];"function"==typeof e?yield e(n):yield*o(n,e)}}n.d(t,{H:()=>o,h:()=>r})},1231:(e,t,n)=>{n.d(t,{Z:()=>h});var r,o=n(43697),i=n(35454),a=n(96674),s=n(5600),u=n(75215),l=(n(67676),n(80442),n(36030)),c=n(71715),p=n(52011),y=n(72729),d=n(86719);const f=new i.X({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=r=class extends a.wq{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:t}){let n=null;try{n=t?JSON.parse(t):null}catch(e){}return n?.value??null}readValueType(e,{description:t}){let n=null;try{n=t?JSON.parse(t):null}catch(e){}return n?f.fromJSON(n.fieldValueType):null}clone(){return new r({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};(0,o._)([(0,s.Cb)({type:String,json:{write:!0}})],m.prototype,"alias",void 0),(0,o._)([(0,s.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),(0,o._)([(0,s.Cb)()],m.prototype,"description",void 0),(0,o._)([(0,c.r)("description")],m.prototype,"readDescription",null),(0,o._)([(0,s.Cb)({types:y.V5,json:{read:{reader:y.im},write:!0}})],m.prototype,"domain",void 0),(0,o._)([(0,s.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),(0,o._)([(0,s.Cb)({type:u.z8,json:{write:!0}})],m.prototype,"length",void 0),(0,o._)([(0,s.Cb)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,o._)([(0,s.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),(0,o._)([(0,l.J)(d.v)],m.prototype,"type",void 0),(0,o._)([(0,s.Cb)()],m.prototype,"valueType",void 0),(0,o._)([(0,c.r)("valueType",["description"])],m.prototype,"readValueType",null),(0,o._)([(0,s.Cb)({type:Boolean,json:{read:!1}})],m.prototype,"visible",void 0),m=r=(0,o._)([(0,p.j)("esri.layers.support.Field")],m);const h=m},72729:(e,t,n)=>{n.d(t,{im:()=>C,V5:()=>T}),n(80442);var r,o=n(43697),i=n(22974),a=n(5600),s=(n(75215),n(36030)),u=n(52011),l=n(96674);n(67676);let c=r=class extends l.wq{constructor(e){super(e),this.name=null,this.code=null}clone(){return new r({name:this.name,code:this.code})}};(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],c.prototype,"name",void 0),(0,o._)([(0,a.Cb)({type:[String,Number],json:{write:!0}})],c.prototype,"code",void 0),c=r=(0,o._)([(0,u.j)("esri.layers.support.CodedValue")],c);const p=new(n(35454).X)({inherited:"inherited",codedValue:"coded-value",range:"range"});let y=class extends l.wq{constructor(e){super(e),this.name=null,this.type=null}};(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],y.prototype,"name",void 0),(0,o._)([(0,s.J)(p)],y.prototype,"type",void 0),y=(0,o._)([(0,u.j)("esri.layers.support.Domain")],y);const d=y;var f;let m=f=class extends d{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const n=String(e);this.codedValues.some((e=>(String(e.code)===n&&(t=e.name),!!t)))}return t}clone(){return new f({codedValues:(0,i.d9)(this.codedValues),name:this.name})}};(0,o._)([(0,a.Cb)({type:[c],json:{write:!0}})],m.prototype,"codedValues",void 0),(0,o._)([(0,s.J)({codedValue:"coded-value"})],m.prototype,"type",void 0),m=f=(0,o._)([(0,u.j)("esri.layers.support.CodedValueDomain")],m);const h=m;var g;n(92604),n(20102);let w=g=class extends d{constructor(e){super(e),this.type="inherited"}clone(){return new g}};(0,o._)([(0,s.J)({inherited:"inherited"})],w.prototype,"type",void 0),w=g=(0,o._)([(0,u.j)("esri.layers.support.InheritedDomain")],w);const b=w;var _;let S=_=class extends d{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new _({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,o._)([(0,a.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,n){t[n]=[this.minValue||0,e]}}}})],S.prototype,"maxValue",void 0),(0,o._)([(0,a.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[0]},write:{target:"range",writer(e,t,n){t[n]=[e,this.maxValue||0]}}}})],S.prototype,"minValue",void 0),(0,o._)([(0,s.J)({range:"range"})],S.prototype,"type",void 0),S=_=(0,o._)([(0,u.j)("esri.layers.support.RangeDomain")],S);const F=S,T={key:"type",base:d,typeMap:{range:S,"coded-value":h,inherited:b}};function C(e){if(!e||!e.type)return null;switch(e.type){case"range":return F.fromJSON(e);case"codedValue":return h.fromJSON(e);case"inherited":return b.fromJSON(e)}return null}}}]);