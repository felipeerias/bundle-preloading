import{EventDispatcher}from'../core/EventDispatcher.js';import{NoColors,FrontSide,SmoothShading,NormalBlending,LessEqualDepth,AddEquation,OneMinusSrcAlphaFactor,SrcAlphaFactor}from'../constants.js';import{_Math}from'../math/Math.js';var materialId=0;function Material(){Object.defineProperty(this,'id',{value:materialId++}),this.uuid=_Math.generateUUID(),this.name='',this.type='Material',this.fog=!0,this.lights=!0,this.blending=NormalBlending,this.side=FrontSide,this.shading=SmoothShading,this.vertexColors=NoColors,this.opacity=1,this.transparent=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.overdraw=0,this.visible=!0,this.needsUpdate=!0}Object.assign(Material.prototype,EventDispatcher.prototype,{isMaterial:!0,setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c){console.warn('THREE.Material: \''+b+'\' parameter is undefined.');continue}var d=this[b];if(void 0===d){console.warn('THREE.'+this.type+': \''+b+'\' is not a property of this material.');continue}d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):'overdraw'==b?this[b]=+c:this[b]=c}},toJSON:function(a){function b(a){var b=[];for(var c in a){var d=a[c];delete d.metadata,b.push(d)}return b}var c=void 0===a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.5,type:'Material',generator:'Material.toJSON'}};if(d.uuid=this.uuid,d.type=this.type,''!==this.name&&(d.name=this.name),this.color&&this.color.isColor&&(d.color=this.color.getHex()),void 0!==this.roughness&&(d.roughness=this.roughness),void 0!==this.metalness&&(d.metalness=this.metalness),this.emissive&&this.emissive.isColor&&(d.emissive=this.emissive.getHex()),this.specular&&this.specular.isColor&&(d.specular=this.specular.getHex()),void 0!==this.shininess&&(d.shininess=this.shininess),void 0!==this.clearCoat&&(d.clearCoat=this.clearCoat),void 0!==this.clearCoatRoughness&&(d.clearCoatRoughness=this.clearCoatRoughness),this.map&&this.map.isTexture&&(d.map=this.map.toJSON(a).uuid),this.alphaMap&&this.alphaMap.isTexture&&(d.alphaMap=this.alphaMap.toJSON(a).uuid),this.lightMap&&this.lightMap.isTexture&&(d.lightMap=this.lightMap.toJSON(a).uuid),this.bumpMap&&this.bumpMap.isTexture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid),this.specularMap&&this.specularMap.isTexture&&(d.specularMap=this.specularMap.toJSON(a).uuid),this.envMap&&this.envMap.isTexture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity),this.gradientMap&&this.gradientMap.isTexture&&(d.gradientMap=this.gradientMap.toJSON(a).uuid),void 0!==this.size&&(d.size=this.size),void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(d.blending=this.blending),this.shading!==SmoothShading&&(d.shading=this.shading),this.side!==FrontSide&&(d.side=this.side),this.vertexColors!==NoColors&&(d.vertexColors=this.vertexColors),1>this.opacity&&(d.opacity=this.opacity),!0===this.transparent&&(d.transparent=this.transparent),d.depthFunc=this.depthFunc,d.depthTest=this.depthTest,d.depthWrite=this.depthWrite,0<this.alphaTest&&(d.alphaTest=this.alphaTest),!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(d.wireframe=this.wireframe),1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth),'round'!==this.wireframeLinecap&&(d.wireframeLinecap=this.wireframeLinecap),'round'!==this.wireframeLinejoin&&(d.wireframeLinejoin=this.wireframeLinejoin),d.skinning=this.skinning,d.morphTargets=this.morphTargets,d.dithering=this.dithering,c){var e=b(a.textures),f=b(a.images);0<e.length&&(d.textures=e),0<f.length&&(d.images=f)}return d},clone:function(){return new this.constructor().copy(this)},copy:function(a){this.name=a.name,this.fog=a.fog,this.lights=a.lights,this.blending=a.blending,this.side=a.side,this.shading=a.shading,this.vertexColors=a.vertexColors,this.opacity=a.opacity,this.transparent=a.transparent,this.blendSrc=a.blendSrc,this.blendDst=a.blendDst,this.blendEquation=a.blendEquation,this.blendSrcAlpha=a.blendSrcAlpha,this.blendDstAlpha=a.blendDstAlpha,this.blendEquationAlpha=a.blendEquationAlpha,this.depthFunc=a.depthFunc,this.depthTest=a.depthTest,this.depthWrite=a.depthWrite,this.colorWrite=a.colorWrite,this.precision=a.precision,this.polygonOffset=a.polygonOffset,this.polygonOffsetFactor=a.polygonOffsetFactor,this.polygonOffsetUnits=a.polygonOffsetUnits,this.dithering=a.dithering,this.alphaTest=a.alphaTest,this.premultipliedAlpha=a.premultipliedAlpha,this.overdraw=a.overdraw,this.visible=a.visible,this.clipShadows=a.clipShadows,this.clipIntersection=a.clipIntersection;var b=a.clippingPlanes,c=null;if(null!==b){var d=b.length;c=Array(d);for(var e=0;e!==d;++e)c[e]=b[e].clone()}return this.clippingPlanes=c,this},dispose:function(){this.dispatchEvent({type:'dispose'})}});export{Material};