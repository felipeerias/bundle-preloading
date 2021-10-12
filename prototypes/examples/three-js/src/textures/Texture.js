import{EventDispatcher}from'../core/EventDispatcher.js';import{UVMapping}from'../constants.js';import{MirroredRepeatWrapping,ClampToEdgeWrapping,RepeatWrapping,LinearEncoding,UnsignedByteType,RGBAFormat,LinearMipMapLinearFilter,LinearFilter}from'../constants.js';import{_Math}from'../math/Math.js';import{Vector2}from'../math/Vector2.js';var textureId=0;function Texture(a,b,c,d,e,f,g,h,i,j){Object.defineProperty(this,'id',{value:textureId++}),this.uuid=_Math.generateUUID(),this.name='',this.image=a===void 0?Texture.DEFAULT_IMAGE:a,this.mipmaps=[],this.mapping=b===void 0?Texture.DEFAULT_MAPPING:b,this.wrapS=c===void 0?ClampToEdgeWrapping:c,this.wrapT=d===void 0?ClampToEdgeWrapping:d,this.magFilter=e===void 0?LinearFilter:e,this.minFilter=f===void 0?LinearMipMapLinearFilter:f,this.anisotropy=i===void 0?1:i,this.format=g===void 0?RGBAFormat:g,this.type=h===void 0?UnsignedByteType:h,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=j===void 0?LinearEncoding:j,this.version=0,this.onUpdate=null}Texture.DEFAULT_IMAGE=void 0,Texture.DEFAULT_MAPPING=UVMapping,Object.defineProperty(Texture.prototype,'needsUpdate',{set:function(a){!0===a&&this.version++}}),Object.assign(Texture.prototype,EventDispatcher.prototype,{constructor:Texture,isTexture:!0,clone:function(){return new this.constructor().copy(this)},copy:function(a){return this.name=a.name,this.image=a.image,this.mipmaps=a.mipmaps.slice(0),this.mapping=a.mapping,this.wrapS=a.wrapS,this.wrapT=a.wrapT,this.magFilter=a.magFilter,this.minFilter=a.minFilter,this.anisotropy=a.anisotropy,this.format=a.format,this.type=a.type,this.offset.copy(a.offset),this.repeat.copy(a.repeat),this.generateMipmaps=a.generateMipmaps,this.premultiplyAlpha=a.premultiplyAlpha,this.flipY=a.flipY,this.unpackAlignment=a.unpackAlignment,this.encoding=a.encoding,this},toJSON:function(a){function b(a){var b;return void 0===a.toDataURL?(b=document.createElementNS('http://www.w3.org/1999/xhtml','canvas'),b.width=a.width,b.height=a.height,b.getContext('2d').drawImage(a,0,0,a.width,a.height)):b=a,2048<b.width||2048<b.height?b.toDataURL('image/jpeg',0.6):b.toDataURL('image/png')}if(void 0!==a.textures[this.uuid])return a.textures[this.uuid];var c={metadata:{version:4.5,type:'Texture',generator:'Texture.toJSON'},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY};if(void 0!==this.image){var d=this.image;void 0===d.uuid&&(d.uuid=_Math.generateUUID()),void 0===a.images[d.uuid]&&(a.images[d.uuid]={uuid:d.uuid,url:b(d)}),c.image=d.uuid}return a.textures[this.uuid]=c,c},dispose:function(){this.dispatchEvent({type:'dispose'})},transformUv:function(a){var b=Math.ceil,c=Math.abs,d=Math.floor;if(this.mapping===UVMapping){if(a.multiply(this.repeat),a.add(this.offset),0>a.x||1<a.x)switch(this.wrapS){case RepeatWrapping:a.x-=d(a.x);break;case ClampToEdgeWrapping:a.x=0>a.x?0:1;break;case MirroredRepeatWrapping:1===c(d(a.x)%2)?a.x=b(a.x)-a.x:a.x-=d(a.x);}if(0>a.y||1<a.y)switch(this.wrapT){case RepeatWrapping:a.y-=d(a.y);break;case ClampToEdgeWrapping:a.y=0>a.y?0:1;break;case MirroredRepeatWrapping:1===c(d(a.y)%2)?a.y=b(a.y)-a.y:a.y-=d(a.y);}this.flipY&&(a.y=1-a.y)}}});export{Texture};