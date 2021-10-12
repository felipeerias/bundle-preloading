import{NoBlending,NormalBlending,AdditiveBlending,SubtractiveBlending,MultiplyBlending,CustomBlending,FaceColors,VertexColors,DoubleSide,BackSide,MirroredRepeatWrapping,RepeatWrapping}from'../constants.js';import{_Math}from'../math/Math.js';import{MaterialLoader}from'./MaterialLoader.js';import{TextureLoader}from'./TextureLoader.js';import{Color}from'../math/Color.js';function Loader(){this.onLoadStart=function(){},this.onLoadProgress=function(){},this.onLoadComplete=function(){}}Loader.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=this.handlers,c=0,d=b.length;c<d;c+=2){var e=b[c],f=b[c+1];if(e.test(a))return f}return null}},Object.assign(Loader.prototype,{crossOrigin:void 0,extractUrlBase:function(a){var b=a.split('/');return 1===b.length?'./':(b.pop(),b.join('/')+'/')},initMaterials:function(a,b,c){for(var d=[],e=0;e<a.length;++e)d[e]=this.createMaterial(a[e],b,c);return d},createMaterial:function(){var a={NoBlending:NoBlending,NormalBlending:NormalBlending,AdditiveBlending:AdditiveBlending,SubtractiveBlending:SubtractiveBlending,MultiplyBlending:MultiplyBlending,CustomBlending:CustomBlending},b=new Color,c=new TextureLoader,d=new MaterialLoader;return function(e,f,g){function h(a,b,d,e,h){var j,k=f+a,l=Loader.Handlers.get(k);null===l?(c.setCrossOrigin(g),j=c.load(k)):j=l.load(k),void 0!==b&&(j.repeat.fromArray(b),1!==b[0]&&(j.wrapS=RepeatWrapping),1!==b[1]&&(j.wrapT=RepeatWrapping)),void 0!==d&&j.offset.fromArray(d),void 0!==e&&('repeat'===e[0]&&(j.wrapS=RepeatWrapping),'mirror'===e[0]&&(j.wrapS=MirroredRepeatWrapping),'repeat'===e[1]&&(j.wrapT=RepeatWrapping),'mirror'===e[1]&&(j.wrapT=MirroredRepeatWrapping)),void 0!==h&&(j.anisotropy=h);var m=_Math.generateUUID();return i[m]=j,m}var i={},j={uuid:_Math.generateUUID(),type:'MeshLambertMaterial'};for(var k in e){var l=e[k];switch(k){case'DbgColor':case'DbgIndex':case'opticalDensity':case'illumination':break;case'DbgName':j.name=l;break;case'blending':j.blending=a[l];break;case'colorAmbient':case'mapAmbient':console.warn('THREE.Loader.createMaterial:',k,'is no longer supported.');break;case'colorDiffuse':j.color=b.fromArray(l).getHex();break;case'colorSpecular':j.specular=b.fromArray(l).getHex();break;case'colorEmissive':j.emissive=b.fromArray(l).getHex();break;case'specularCoef':j.shininess=l;break;case'shading':'basic'===l.toLowerCase()&&(j.type='MeshBasicMaterial'),'phong'===l.toLowerCase()&&(j.type='MeshPhongMaterial'),'standard'===l.toLowerCase()&&(j.type='MeshStandardMaterial');break;case'mapDiffuse':j.map=h(l,e.mapDiffuseRepeat,e.mapDiffuseOffset,e.mapDiffuseWrap,e.mapDiffuseAnisotropy);break;case'mapDiffuseRepeat':case'mapDiffuseOffset':case'mapDiffuseWrap':case'mapDiffuseAnisotropy':break;case'mapEmissive':j.emissiveMap=h(l,e.mapEmissiveRepeat,e.mapEmissiveOffset,e.mapEmissiveWrap,e.mapEmissiveAnisotropy);break;case'mapEmissiveRepeat':case'mapEmissiveOffset':case'mapEmissiveWrap':case'mapEmissiveAnisotropy':break;case'mapLight':j.lightMap=h(l,e.mapLightRepeat,e.mapLightOffset,e.mapLightWrap,e.mapLightAnisotropy);break;case'mapLightRepeat':case'mapLightOffset':case'mapLightWrap':case'mapLightAnisotropy':break;case'mapAO':j.aoMap=h(l,e.mapAORepeat,e.mapAOOffset,e.mapAOWrap,e.mapAOAnisotropy);break;case'mapAORepeat':case'mapAOOffset':case'mapAOWrap':case'mapAOAnisotropy':break;case'mapBump':j.bumpMap=h(l,e.mapBumpRepeat,e.mapBumpOffset,e.mapBumpWrap,e.mapBumpAnisotropy);break;case'mapBumpScale':j.bumpScale=l;break;case'mapBumpRepeat':case'mapBumpOffset':case'mapBumpWrap':case'mapBumpAnisotropy':break;case'mapNormal':j.normalMap=h(l,e.mapNormalRepeat,e.mapNormalOffset,e.mapNormalWrap,e.mapNormalAnisotropy);break;case'mapNormalFactor':j.normalScale=[l,l];break;case'mapNormalRepeat':case'mapNormalOffset':case'mapNormalWrap':case'mapNormalAnisotropy':break;case'mapSpecular':j.specularMap=h(l,e.mapSpecularRepeat,e.mapSpecularOffset,e.mapSpecularWrap,e.mapSpecularAnisotropy);break;case'mapSpecularRepeat':case'mapSpecularOffset':case'mapSpecularWrap':case'mapSpecularAnisotropy':break;case'mapMetalness':j.metalnessMap=h(l,e.mapMetalnessRepeat,e.mapMetalnessOffset,e.mapMetalnessWrap,e.mapMetalnessAnisotropy);break;case'mapMetalnessRepeat':case'mapMetalnessOffset':case'mapMetalnessWrap':case'mapMetalnessAnisotropy':break;case'mapRoughness':j.roughnessMap=h(l,e.mapRoughnessRepeat,e.mapRoughnessOffset,e.mapRoughnessWrap,e.mapRoughnessAnisotropy);break;case'mapRoughnessRepeat':case'mapRoughnessOffset':case'mapRoughnessWrap':case'mapRoughnessAnisotropy':break;case'mapAlpha':j.alphaMap=h(l,e.mapAlphaRepeat,e.mapAlphaOffset,e.mapAlphaWrap,e.mapAlphaAnisotropy);break;case'mapAlphaRepeat':case'mapAlphaOffset':case'mapAlphaWrap':case'mapAlphaAnisotropy':break;case'flipSided':j.side=BackSide;break;case'doubleSided':j.side=DoubleSide;break;case'transparency':console.warn('THREE.Loader.createMaterial: transparency has been renamed to opacity'),j.opacity=l;break;case'depthTest':case'depthWrite':case'colorWrite':case'opacity':case'reflectivity':case'transparent':case'visible':case'wireframe':j[k]=l;break;case'vertexColors':!0===l&&(j.vertexColors=VertexColors),'face'===l&&(j.vertexColors=FaceColors);break;default:console.error('THREE.Loader.createMaterial: Unsupported',k,l);}}return'MeshBasicMaterial'===j.type&&delete j.emissive,'MeshPhongMaterial'!==j.type&&delete j.specular,1>j.opacity&&(j.transparent=!0),d.setTextures(i),d.parse(j)}}()});export{Loader};