import{REVISION,MaxEquation,MinEquation,RGB_ETC1_Format,RGBA_PVRTC_2BPPV1_Format,RGBA_PVRTC_4BPPV1_Format,RGB_PVRTC_2BPPV1_Format,RGB_PVRTC_4BPPV1_Format,RGBA_S3TC_DXT5_Format,RGBA_S3TC_DXT3_Format,RGBA_S3TC_DXT1_Format,RGB_S3TC_DXT1_Format,SrcAlphaSaturateFactor,OneMinusDstColorFactor,DstColorFactor,OneMinusDstAlphaFactor,DstAlphaFactor,OneMinusSrcAlphaFactor,SrcAlphaFactor,OneMinusSrcColorFactor,SrcColorFactor,OneFactor,ZeroFactor,ReverseSubtractEquation,SubtractEquation,AddEquation,DepthFormat,DepthStencilFormat,LuminanceAlphaFormat,LuminanceFormat,RGBAFormat,RGBFormat,AlphaFormat,HalfFloatType,FloatType,UnsignedIntType,IntType,UnsignedShortType,ShortType,ByteType,UnsignedInt248Type,UnsignedShort565Type,UnsignedShort5551Type,UnsignedShort4444Type,UnsignedByteType,LinearMipMapLinearFilter,LinearMipMapNearestFilter,LinearFilter,NearestMipMapLinearFilter,NearestMipMapNearestFilter,NearestFilter,MirroredRepeatWrapping,ClampToEdgeWrapping,RepeatWrapping,FrontFaceDirectionCW,NoBlending,BackSide,TriangleFanDrawMode,TriangleStripDrawMode,TrianglesDrawMode,NoColors,FlatShading,LinearToneMapping}from'../constants.js';import{_Math}from'../math/Math.js';import{Matrix4}from'../math/Matrix4.js';import{DataTexture}from'../textures/DataTexture.js';import{WebGLUniforms}from'./webgl/WebGLUniforms.js';import{UniformsLib}from'./shaders/UniformsLib.js';import{UniformsUtils}from'./shaders/UniformsUtils.js';import{ShaderLib}from'./shaders/ShaderLib.js';import{LensFlarePlugin}from'./webgl/plugins/LensFlarePlugin.js';import{SpritePlugin}from'./webgl/plugins/SpritePlugin.js';import{WebGLShadowMap}from'./webgl/WebGLShadowMap.js';import{ShaderMaterial}from'../materials/ShaderMaterial.js';import{Mesh}from'../objects/Mesh.js';import{BoxBufferGeometry}from'../geometries/BoxGeometry.js';import{PlaneBufferGeometry}from'../geometries/PlaneGeometry.js';import{MeshBasicMaterial}from'../materials/MeshBasicMaterial.js';import{PerspectiveCamera}from'../cameras/PerspectiveCamera.js';import{OrthographicCamera}from'../cameras/OrthographicCamera.js';import{WebGLAttributes}from'./webgl/WebGLAttributes.js';import{WebGLRenderLists}from'./webgl/WebGLRenderLists.js';import{WebGLIndexedBufferRenderer}from'./webgl/WebGLIndexedBufferRenderer.js';import{WebGLBufferRenderer}from'./webgl/WebGLBufferRenderer.js';import{WebGLGeometries}from'./webgl/WebGLGeometries.js';import{WebGLLights}from'./webgl/WebGLLights.js';import{WebGLObjects}from'./webgl/WebGLObjects.js';import{WebGLPrograms}from'./webgl/WebGLPrograms.js';import{WebGLTextures}from'./webgl/WebGLTextures.js';import{WebGLProperties}from'./webgl/WebGLProperties.js';import{WebGLState}from'./webgl/WebGLState.js';import{WebGLCapabilities}from'./webgl/WebGLCapabilities.js';import{BufferGeometry}from'../core/BufferGeometry.js';import{WebGLExtensions}from'./webgl/WebGLExtensions.js';import{Vector3}from'../math/Vector3.js';import{WebGLClipping}from'./webgl/WebGLClipping.js';import{Frustum}from'../math/Frustum.js';import{Vector4}from'../math/Vector4.js';import{Color}from'../math/Color.js';function WebGLRenderer(a){function b(){return null==V?ga:1}function c(){za.init(),za.scissor($.copy(ha).multiplyScalar(ga)),za.viewport(aa.copy(ja).multiplyScalar(ga)),za.buffers.color.setClear(ca.r,ca.g,ca.b,da,M)}function d(){U=null,Z=null,Y='',X=-1,za.reset()}function e(a){a.preventDefault(),d(),c(),Aa.clear(),Ea.clear()}function f(a){var b=a.target;b.removeEventListener('dispose',f),g(b)}function g(a){h(a),Aa.remove(a)}function h(a){var b=Aa.get(a).program;a.program=void 0,b!==void 0&&Fa.releaseProgram(b)}function i(a,b,c){a.render(function(a){T.renderBufferImmediate(a,b,c)})}function j(c,a){var b=Math.abs;return b(a[0])-b(c[0])}function k(a,b,c,d){if(c&&c.isInstancedBufferGeometry&&null===xa.get('ANGLE_instanced_arrays'))return void console.error('THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.');d===void 0&&(d=0),za.initAttributes();var e=c.attributes,f=b.getAttributes(),g=a.defaultAttributeValues;for(var h in f){var i=f[h];if(0<=i){var j=e[h];if(j!==void 0){var k=j.normalized,l=j.itemSize,m=Ca.get(j),n=m.buffer,o=m.type,p=m.bytesPerElement;if(j.isInterleavedBufferAttribute){var q=j.data,r=q.stride,s=j.offset;q&&q.isInstancedInterleavedBuffer?(za.enableAttributeAndDivisor(i,q.meshPerAttribute),c.maxInstancedCount===void 0&&(c.maxInstancedCount=q.meshPerAttribute*q.count)):za.enableAttribute(i),va.bindBuffer(va.ARRAY_BUFFER,n),va.vertexAttribPointer(i,l,o,k,r*p,(d*r+s)*p)}else j.isInstancedBufferAttribute?(za.enableAttributeAndDivisor(i,j.meshPerAttribute),void 0===c.maxInstancedCount&&(c.maxInstancedCount=j.meshPerAttribute*j.count)):za.enableAttribute(i),va.bindBuffer(va.ARRAY_BUFFER,n),va.vertexAttribPointer(i,l,o,k,0,d*l*p)}else if(g!==void 0){var t=g[h];if(t!==void 0)switch(t.length){case 2:va.vertexAttrib2fv(i,t);break;case 3:va.vertexAttrib3fv(i,t);break;case 4:va.vertexAttrib4fv(i,t);break;default:va.vertexAttrib1fv(i,t);}}}}za.disableUnusedAttributes()}function m(a,b,c){if(a.visible){var d=a.layers.test(b.layers);if(d)if(a.isLight)O.push(a);else if(a.isSprite)(!a.frustumCulled||ka.intersectsSprite(a))&&R.push(a);else if(a.isLensFlare)S.push(a);else if(a.isImmediateRenderObject)c&&pa.setFromMatrixPosition(a.matrixWorld).applyMatrix4(oa),P.push(a,null,a.material,pa.z,null);else if((a.isMesh||a.isLine||a.isPoints)&&(a.isSkinnedMesh&&a.skeleton.update(),!a.frustumCulled||ka.intersectsObject(a))){c&&pa.setFromMatrixPosition(a.matrixWorld).applyMatrix4(oa);var e=Ea.update(a),f=a.material;if(Array.isArray(f))for(var g=e.groups,h=0,i=g.length;h<i;h++){var j=g[h],k=f[j.materialIndex];k&&k.visible&&P.push(a,e,k,pa.z,j)}else f.visible&&P.push(a,e,f,pa.z,null)}for(var l=a.children,h=0,i=l.length;h<i;h++)m(l[h],b,c)}}function l(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e],h=g.object,i=g.geometry,k=void 0===d?g.material:d,l=g.group;if(h.onBeforeRender(T,b,c,i,k,l),c.isArrayCamera&&c.enabled)for(var m=c.cameras,o=0,j=m.length;o<j;o++){var p=m[o],q=p.bounds;T.setViewport(q.x*ea*ga,q.y*fa*ga,q.z*ea*ga,q.w*fa*ga),T.setScissor(q.x*ea*ga,q.y*fa*ga,q.z*ea*ga,q.w*fa*ga),T.setScissorTest(!0),n(h,b,p,i,k,l)}else n(h,b,c,i,k,l);h.onAfterRender(T,b,c,i,k,l)}}function n(a,b,c,d,e,f){if(a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,a.matrixWorld),a.normalMatrix.getNormalMatrix(a.modelViewMatrix),a.isImmediateRenderObject){za.setMaterial(e);var g=p(c,b.fog,e,a);Y='',i(a,g,e)}else T.renderBufferDirect(c,b.fog,d,e,a,f)}function o(a,b,c){var d=Aa.get(a),e=Fa.getParameters(a,sa,b,la.numPlanes,la.numIntersection,c),g=Fa.getProgramCode(a,e),j=d.program,k=!0;if(j===void 0)a.addEventListener('dispose',f);else if(j.code!==g)h(a);else{if(e.shaderID!==void 0)return;k=!1}if(k){if(e.shaderID){var l=ShaderLib[e.shaderID];d.__webglShader={name:a.type,uniforms:UniformsUtils.clone(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}}else d.__webglShader={name:a.type,uniforms:a.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader};a.__webglShader=d.__webglShader,j=Fa.acquireProgram(a,e,g),d.program=j,a.program=j}var m=j.getAttributes();if(a.morphTargets){a.numSupportedMorphTargets=0;for(var n=0;n<T.maxMorphTargets;n++)0<=m['morphTarget'+n]&&a.numSupportedMorphTargets++}if(a.morphNormals){a.numSupportedMorphNormals=0;for(var n=0;n<T.maxMorphNormals;n++)0<=m['morphNormal'+n]&&a.numSupportedMorphNormals++}var i=d.__webglShader.uniforms;(a.isShaderMaterial||a.isRawShaderMaterial)&&!0!==a.clipping||(d.numClippingPlanes=la.numPlanes,d.numIntersection=la.numIntersection,i.clippingPlanes=la.uniform),d.fog=b,d.lightsHash=sa.hash,a.lights&&(i.ambientLightColor.value=sa.ambient,i.directionalLights.value=sa.directional,i.spotLights.value=sa.spot,i.rectAreaLights.value=sa.rectArea,i.pointLights.value=sa.point,i.hemisphereLights.value=sa.hemi,i.directionalShadowMap.value=sa.directionalShadowMap,i.directionalShadowMatrix.value=sa.directionalShadowMatrix,i.spotShadowMap.value=sa.spotShadowMap,i.spotShadowMatrix.value=sa.spotShadowMatrix,i.pointShadowMap.value=sa.pointShadowMap,i.pointShadowMatrix.value=sa.pointShadowMatrix);var o=d.program.getUniforms(),p=WebGLUniforms.seqWithValue(o.seq,i);d.uniformsList=p}function p(a,b,c,d){ba=0;var e=Aa.get(c);if(ma&&(na||a!==Z)){var f=a===Z&&c.id===X;la.setState(c.clippingPlanes,c.clipIntersection,c.clipShadows,a,e,f)}!1===c.needsUpdate&&(void 0===e.program?c.needsUpdate=!0:c.fog&&e.fog!==b?c.needsUpdate=!0:c.lights&&e.lightsHash!==sa.hash?c.needsUpdate=!0:void 0!==e.numClippingPlanes&&(e.numClippingPlanes!==la.numPlanes||e.numIntersection!==la.numIntersection)&&(c.needsUpdate=!0)),c.needsUpdate&&(o(c,b,d),c.needsUpdate=!1);var g=!1,h=!1,i=!1,j=e.program,k=j.getUniforms(),l=e.__webglShader.uniforms;if(j.id!==U&&(va.useProgram(j.program),U=j.id,g=!0,h=!0,i=!0),c.id!==X&&(X=c.id,h=!0),g||a!==Z){if(k.setValue(va,'projectionMatrix',a.projectionMatrix),ya.logarithmicDepthBuffer&&k.setValue(va,'logDepthBufFC',2/(Math.log(a.far+1)/Math.LN2)),a!==Z&&(Z=a,h=!0,i=!0),c.isShaderMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.envMap){var m=k.map.cameraPosition;void 0!==m&&m.setValue(va,pa.setFromMatrixPosition(a.matrixWorld))}(c.isMeshPhongMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial||c.skinning)&&k.setValue(va,'viewMatrix',a.matrixWorldInverse),k.setValue(va,'toneMappingExposure',T.toneMappingExposure),k.setValue(va,'toneMappingWhitePoint',T.toneMappingWhitePoint)}if(c.skinning){k.setOptional(va,d,'bindMatrix'),k.setOptional(va,d,'bindMatrixInverse');var n=d.skeleton;if(n){var p=n.bones;if(ya.floatVertexTextures){if(void 0===n.boneTexture){var C=Math.sqrt(4*p.length);C=_Math.nextPowerOfTwo(Math.ceil(C)),C=F(C,4);var D=new Float32Array(4*(C*C));D.set(n.boneMatrices);var E=new DataTexture(D,C,C,RGBAFormat,FloatType);n.boneMatrices=D,n.boneTexture=E,n.boneTextureSize=C}k.setValue(va,'boneTexture',n.boneTexture),k.setValue(va,'boneTextureSize',n.boneTextureSize)}else k.setOptional(va,n,'boneMatrices')}}return h&&(c.lights&&B(l,i),b&&c.fog&&u(l,b),(c.isMeshBasicMaterial||c.isMeshLambertMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.isMeshNormalMaterial||c.isMeshDepthMaterial)&&q(l,c),c.isLineBasicMaterial?r(l,c):c.isLineDashedMaterial?(r(l,c),s(l,c)):c.isPointsMaterial?t(l,c):c.isMeshLambertMaterial?v(l,c):c.isMeshToonMaterial?x(l,c):c.isMeshPhongMaterial?w(l,c):c.isMeshPhysicalMaterial?z(l,c):c.isMeshStandardMaterial?y(l,c):c.isMeshDepthMaterial?c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias):c.isMeshNormalMaterial&&A(l,c),void 0!==l.ltcMat&&(l.ltcMat.value=UniformsLib.LTC_MAT_TEXTURE),void 0!==l.ltcMag&&(l.ltcMag.value=UniformsLib.LTC_MAG_TEXTURE),WebGLUniforms.upload(va,e.uniformsList,l,T)),k.setValue(va,'modelViewMatrix',d.modelViewMatrix),k.setValue(va,'normalMatrix',d.normalMatrix),k.setValue(va,'modelMatrix',d.matrixWorld),j}function q(a,b){a.opacity.value=b.opacity,a.diffuse.value=b.color,b.emissive&&a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),a.map.value=b.map,a.specularMap.value=b.specularMap,a.alphaMap.value=b.alphaMap,b.lightMap&&(a.lightMap.value=b.lightMap,a.lightMapIntensity.value=b.lightMapIntensity),b.aoMap&&(a.aoMap.value=b.aoMap,a.aoMapIntensity.value=b.aoMapIntensity);var c;if(b.map?c=b.map:b.specularMap?c=b.specularMap:b.displacementMap?c=b.displacementMap:b.normalMap?c=b.normalMap:b.bumpMap?c=b.bumpMap:b.roughnessMap?c=b.roughnessMap:b.metalnessMap?c=b.metalnessMap:b.alphaMap?c=b.alphaMap:b.emissiveMap&&(c=b.emissiveMap),void 0!==c){c.isWebGLRenderTarget&&(c=c.texture);var d=c.offset,e=c.repeat;a.offsetRepeat.value.set(d.x,d.y,e.x,e.y)}a.envMap.value=b.envMap,a.flipEnvMap.value=b.envMap&&b.envMap.isCubeTexture?-1:1,a.reflectivity.value=b.reflectivity,a.refractionRatio.value=b.refractionRatio}function r(a,b){a.diffuse.value=b.color,a.opacity.value=b.opacity}function s(a,b){a.dashSize.value=b.dashSize,a.totalSize.value=b.dashSize+b.gapSize,a.scale.value=b.scale}function t(a,b){if(a.diffuse.value=b.color,a.opacity.value=b.opacity,a.size.value=b.size*ga,a.scale.value=0.5*fa,a.map.value=b.map,null!==b.map){var c=b.map.offset,d=b.map.repeat;a.offsetRepeat.value.set(c.x,c.y,d.x,d.y)}}function u(a,b){a.fogColor.value=b.color,b.isFog?(a.fogNear.value=b.near,a.fogFar.value=b.far):b.isFogExp2&&(a.fogDensity.value=b.density)}function v(a,b){b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap)}function w(a,b){a.specular.value=b.specular,a.shininess.value=F(b.shininess,1e-4),b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap),b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale),b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale)),b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias)}function x(a,b){w(a,b),b.gradientMap&&(a.gradientMap.value=b.gradientMap)}function y(a,b){a.roughness.value=b.roughness,a.metalness.value=b.metalness,b.roughnessMap&&(a.roughnessMap.value=b.roughnessMap),b.metalnessMap&&(a.metalnessMap.value=b.metalnessMap),b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap),b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale),b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale)),b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias),b.envMap&&(a.envMapIntensity.value=b.envMapIntensity)}function z(a,b){a.clearCoat.value=b.clearCoat,a.clearCoatRoughness.value=b.clearCoatRoughness,y(a,b)}function A(a,b){b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale),b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale)),b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias)}function B(a,b){a.ambientLightColor.needsUpdate=b,a.directionalLights.needsUpdate=b,a.pointLights.needsUpdate=b,a.spotLights.needsUpdate=b,a.rectAreaLights.needsUpdate=b,a.hemisphereLights.needsUpdate=b}function C(a){for(var b,c=0,d=0,e=a.length;d<e;d++)b=a[d],b.castShadow&&(sa.shadows[c]=b,c++);sa.shadows.length=c}function D(a,c){var d,e,f,h,i,j,k,l,m=Math.cos,n=0,o=0,g=0,b=c.matrixWorldInverse,p=0,q=0,r=0,s=0,t=0;for(d=0,e=a.length;d<e;d++)if(f=a[d],i=f.color,j=f.intensity,k=f.distance,l=f.shadow&&f.shadow.map?f.shadow.map.texture:null,f.isAmbientLight)n+=i.r*j,o+=i.g*j,g+=i.b*j;else if(f.isDirectionalLight){var u=Ga.get(f);u.color.copy(f.color).multiplyScalar(f.intensity),u.direction.setFromMatrixPosition(f.matrixWorld),pa.setFromMatrixPosition(f.target.matrixWorld),u.direction.sub(pa),u.direction.transformDirection(b),u.shadow=f.castShadow,f.castShadow&&(h=f.shadow,u.shadowBias=h.bias,u.shadowRadius=h.radius,u.shadowMapSize=h.mapSize),sa.directionalShadowMap[p]=l,sa.directionalShadowMatrix[p]=f.shadow.matrix,sa.directional[p]=u,p++}else if(f.isSpotLight){var u=Ga.get(f);u.position.setFromMatrixPosition(f.matrixWorld),u.position.applyMatrix4(b),u.color.copy(i).multiplyScalar(j),u.distance=k,u.direction.setFromMatrixPosition(f.matrixWorld),pa.setFromMatrixPosition(f.target.matrixWorld),u.direction.sub(pa),u.direction.transformDirection(b),u.coneCos=m(f.angle),u.penumbraCos=m(f.angle*(1-f.penumbra)),u.decay=0===f.distance?0:f.decay,u.shadow=f.castShadow,f.castShadow&&(h=f.shadow,u.shadowBias=h.bias,u.shadowRadius=h.radius,u.shadowMapSize=h.mapSize),sa.spotShadowMap[r]=l,sa.spotShadowMatrix[r]=f.shadow.matrix,sa.spot[r]=u,r++}else if(f.isRectAreaLight){var u=Ga.get(f);u.color.copy(i).multiplyScalar(j/(f.width*f.height)),u.position.setFromMatrixPosition(f.matrixWorld),u.position.applyMatrix4(b),ra.identity(),qa.copy(f.matrixWorld),qa.premultiply(b),ra.extractRotation(qa),u.halfWidth.set(0.5*f.width,0,0),u.halfHeight.set(0,0.5*f.height,0),u.halfWidth.applyMatrix4(ra),u.halfHeight.applyMatrix4(ra),sa.rectArea[s]=u,s++}else if(f.isPointLight){var u=Ga.get(f);u.position.setFromMatrixPosition(f.matrixWorld),u.position.applyMatrix4(b),u.color.copy(f.color).multiplyScalar(f.intensity),u.distance=f.distance,u.decay=0===f.distance?0:f.decay,u.shadow=f.castShadow,f.castShadow&&(h=f.shadow,u.shadowBias=h.bias,u.shadowRadius=h.radius,u.shadowMapSize=h.mapSize),sa.pointShadowMap[q]=l,sa.pointShadowMatrix[q]=f.shadow.matrix,sa.point[q]=u,q++}else if(f.isHemisphereLight){var u=Ga.get(f);u.direction.setFromMatrixPosition(f.matrixWorld),u.direction.transformDirection(b),u.direction.normalize(),u.skyColor.copy(f.color).multiplyScalar(j),u.groundColor.copy(f.groundColor).multiplyScalar(j),sa.hemi[t]=u,t++}sa.ambient[0]=n,sa.ambient[1]=o,sa.ambient[2]=g,sa.directional.length=p,sa.spot.length=r,sa.rectArea.length=s,sa.point.length=q,sa.hemi.length=t,sa.hash=p+','+q+','+r+','+s+','+t+','+sa.shadows.length}function E(a){var b;if(a===RepeatWrapping)return va.REPEAT;if(a===ClampToEdgeWrapping)return va.CLAMP_TO_EDGE;if(a===MirroredRepeatWrapping)return va.MIRRORED_REPEAT;if(a===NearestFilter)return va.NEAREST;if(a===NearestMipMapNearestFilter)return va.NEAREST_MIPMAP_NEAREST;if(a===NearestMipMapLinearFilter)return va.NEAREST_MIPMAP_LINEAR;if(a===LinearFilter)return va.LINEAR;if(a===LinearMipMapNearestFilter)return va.LINEAR_MIPMAP_NEAREST;if(a===LinearMipMapLinearFilter)return va.LINEAR_MIPMAP_LINEAR;if(a===UnsignedByteType)return va.UNSIGNED_BYTE;if(a===UnsignedShort4444Type)return va.UNSIGNED_SHORT_4_4_4_4;if(a===UnsignedShort5551Type)return va.UNSIGNED_SHORT_5_5_5_1;if(a===UnsignedShort565Type)return va.UNSIGNED_SHORT_5_6_5;if(a===ByteType)return va.BYTE;if(a===ShortType)return va.SHORT;if(a===UnsignedShortType)return va.UNSIGNED_SHORT;if(a===IntType)return va.INT;if(a===UnsignedIntType)return va.UNSIGNED_INT;if(a===FloatType)return va.FLOAT;if(a===HalfFloatType&&(b=xa.get('OES_texture_half_float'),null!==b))return b.HALF_FLOAT_OES;if(a===AlphaFormat)return va.ALPHA;if(a===RGBFormat)return va.RGB;if(a===RGBAFormat)return va.RGBA;if(a===LuminanceFormat)return va.LUMINANCE;if(a===LuminanceAlphaFormat)return va.LUMINANCE_ALPHA;if(a===DepthFormat)return va.DEPTH_COMPONENT;if(a===DepthStencilFormat)return va.DEPTH_STENCIL;if(a===AddEquation)return va.FUNC_ADD;if(a===SubtractEquation)return va.FUNC_SUBTRACT;if(a===ReverseSubtractEquation)return va.FUNC_REVERSE_SUBTRACT;if(a===ZeroFactor)return va.ZERO;if(a===OneFactor)return va.ONE;if(a===SrcColorFactor)return va.SRC_COLOR;if(a===OneMinusSrcColorFactor)return va.ONE_MINUS_SRC_COLOR;if(a===SrcAlphaFactor)return va.SRC_ALPHA;if(a===OneMinusSrcAlphaFactor)return va.ONE_MINUS_SRC_ALPHA;if(a===DstAlphaFactor)return va.DST_ALPHA;if(a===OneMinusDstAlphaFactor)return va.ONE_MINUS_DST_ALPHA;if(a===DstColorFactor)return va.DST_COLOR;if(a===OneMinusDstColorFactor)return va.ONE_MINUS_DST_COLOR;if(a===SrcAlphaSaturateFactor)return va.SRC_ALPHA_SATURATE;if((a===RGB_S3TC_DXT1_Format||a===RGBA_S3TC_DXT1_Format||a===RGBA_S3TC_DXT3_Format||a===RGBA_S3TC_DXT5_Format)&&(b=xa.get('WEBGL_compressed_texture_s3tc'),null!==b)){if(a===RGB_S3TC_DXT1_Format)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT1_Format)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===RGBA_S3TC_DXT3_Format)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===RGBA_S3TC_DXT5_Format)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT}if((a===RGB_PVRTC_4BPPV1_Format||a===RGB_PVRTC_2BPPV1_Format||a===RGBA_PVRTC_4BPPV1_Format||a===RGBA_PVRTC_2BPPV1_Format)&&(b=xa.get('WEBGL_compressed_texture_pvrtc'),null!==b)){if(a===RGB_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===RGB_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===RGBA_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===RGBA_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(a===RGB_ETC1_Format&&(b=xa.get('WEBGL_compressed_texture_etc1'),null!==b))return b.COMPRESSED_RGB_ETC1_WEBGL;if((a===MinEquation||a===MaxEquation)&&(b=xa.get('EXT_blend_minmax'),null!==b)){if(a===MinEquation)return b.MIN_EXT;if(a===MaxEquation)return b.MAX_EXT}return a===UnsignedInt248Type&&(b=xa.get('WEBGL_depth_texture'),null!==b)?b.UNSIGNED_INT_24_8_WEBGL:0}var F=Math.max;console.log('THREE.WebGLRenderer',REVISION),a=a||{};var G=a.canvas===void 0?document.createElementNS('http://www.w3.org/1999/xhtml','canvas'):a.canvas,H=a.context===void 0?null:a.context,I=a.alpha!==void 0&&a.alpha,J=!(a.depth!==void 0)||a.depth,K=!(a.stencil!==void 0)||a.stencil,L=a.antialias!==void 0&&a.antialias,M=!(a.premultipliedAlpha!==void 0)||a.premultipliedAlpha,N=a.preserveDrawingBuffer!==void 0&&a.preserveDrawingBuffer,O=[],P=null,Q=new Float32Array(8),R=[],S=[];this.domElement=G,this.context=null,this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.gammaInput=!1,this.gammaOutput=!1,this.physicallyCorrectLights=!1,this.toneMapping=LinearToneMapping,this.toneMappingExposure=1,this.toneMappingWhitePoint=1,this.maxMorphTargets=8,this.maxMorphNormals=4;var T=this,U=null,V=null,W=null,X=-1,Y='',Z=null,$=new Vector4,_=null,aa=new Vector4,ba=0,ca=new Color(0),da=0,ea=G.width,fa=G.height,ga=1,ha=new Vector4(0,0,ea,fa),ia=!1,ja=new Vector4(0,0,ea,fa),ka=new Frustum,la=new WebGLClipping,ma=!1,na=!1,oa=new Matrix4,pa=new Vector3,qa=new Matrix4,ra=new Matrix4,sa={hash:'',ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],shadows:[]},ta={geometries:0,textures:0},ua={frame:0,calls:0,vertices:0,faces:0,points:0};this.info={render:ua,memory:ta,programs:null};var va;try{var wa={alpha:I,depth:J,stencil:K,antialias:L,premultipliedAlpha:M,preserveDrawingBuffer:N};if(va=H||G.getContext('webgl',wa)||G.getContext('experimental-webgl',wa),null===va)if(null!==G.getContext('webgl'))throw'Error creating WebGL context with your selected attributes.';else throw'Error creating WebGL context.';void 0===va.getShaderPrecisionFormat&&(va.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}}),G.addEventListener('webglcontextlost',e,!1)}catch(a){console.error('THREE.WebGLRenderer: '+a)}var xa=new WebGLExtensions(va);xa.get('WEBGL_depth_texture'),xa.get('OES_texture_float'),xa.get('OES_texture_float_linear'),xa.get('OES_texture_half_float'),xa.get('OES_texture_half_float_linear'),xa.get('OES_standard_derivatives'),xa.get('ANGLE_instanced_arrays'),xa.get('OES_element_index_uint')&&(BufferGeometry.MaxIndex=4294967296);var ya=new WebGLCapabilities(va,xa,a),za=new WebGLState(va,xa,E),Aa=new WebGLProperties,Ba=new WebGLTextures(va,xa,za,Aa,ya,E,ta),Ca=new WebGLAttributes(va),Da=new WebGLGeometries(va,Ca,ta),Ea=new WebGLObjects(va,Da,ua),Fa=new WebGLPrograms(this,ya),Ga=new WebGLLights,Ha=new WebGLRenderLists;this.info.programs=Fa.programs;var Ia,Ja,Ka,La,Ma=new WebGLBufferRenderer(va,xa,ua),Na=new WebGLIndexedBufferRenderer(va,xa,ua);c(),this.context=va,this.capabilities=ya,this.extensions=xa,this.properties=Aa,this.state=za;var Oa=new WebGLShadowMap(this,sa,Ea,ya);this.shadowMap=Oa;var Pa=new SpritePlugin(this,R),Qa=new LensFlarePlugin(this,S);this.getContext=function(){return va},this.getContextAttributes=function(){return va.getContextAttributes()},this.forceContextLoss=function(){var a=xa.get('WEBGL_lose_context');a&&a.loseContext()},this.getMaxAnisotropy=function(){return ya.getMaxAnisotropy()},this.getPrecision=function(){return ya.precision},this.getPixelRatio=function(){return ga},this.setPixelRatio=function(a){void 0===a||(ga=a,this.setSize(ja.z,ja.w,!1))},this.getSize=function(){return{width:ea,height:fa}},this.setSize=function(a,b,c){ea=a,fa=b,G.width=a*ga,G.height=b*ga,!1!==c&&(G.style.width=a+'px',G.style.height=b+'px'),this.setViewport(0,0,a,b)},this.setViewport=function(a,b,c,d){za.viewport(ja.set(a,b,c,d))},this.setScissor=function(a,b,c,d){za.scissor(ha.set(a,b,c,d))},this.setScissorTest=function(a){za.setScissorTest(ia=a)},this.getClearColor=function(){return ca},this.setClearColor=function(a,b){ca.set(a),da=b===void 0?1:b,za.buffers.color.setClear(ca.r,ca.g,ca.b,da,M)},this.getClearAlpha=function(){return da},this.setClearAlpha=function(a){da=a,za.buffers.color.setClear(ca.r,ca.g,ca.b,da,M)},this.clear=function(a,b,c){var d=0;(a===void 0||a)&&(d|=va.COLOR_BUFFER_BIT),(b===void 0||b)&&(d|=va.DEPTH_BUFFER_BIT),(c===void 0||c)&&(d|=va.STENCIL_BUFFER_BIT),va.clear(d)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.clearTarget=function(a,b,c,d){this.setRenderTarget(a),this.clear(b,c,d)},this.resetGLState=d,this.dispose=function(){G.removeEventListener('webglcontextlost',e,!1),Ha.dispose()},this.renderBufferImmediate=function(a,b,c){za.initAttributes();var d=Aa.get(a);a.hasPositions&&!d.position&&(d.position=va.createBuffer()),a.hasNormals&&!d.normal&&(d.normal=va.createBuffer()),a.hasUvs&&!d.uv&&(d.uv=va.createBuffer()),a.hasColors&&!d.color&&(d.color=va.createBuffer());var e=b.getAttributes();if(a.hasPositions&&(va.bindBuffer(va.ARRAY_BUFFER,d.position),va.bufferData(va.ARRAY_BUFFER,a.positionArray,va.DYNAMIC_DRAW),za.enableAttribute(e.position),va.vertexAttribPointer(e.position,3,va.FLOAT,!1,0,0)),a.hasNormals){if(va.bindBuffer(va.ARRAY_BUFFER,d.normal),!c.isMeshPhongMaterial&&!c.isMeshStandardMaterial&&!c.isMeshNormalMaterial&&c.shading===FlatShading)for(var f=0,g=3*a.count;f<g;f+=9){var h=a.normalArray,i=(h[f+0]+h[f+3]+h[f+6])/3,j=(h[f+1]+h[f+4]+h[f+7])/3,k=(h[f+2]+h[f+5]+h[f+8])/3;h[f+0]=i,h[f+1]=j,h[f+2]=k,h[f+3]=i,h[f+4]=j,h[f+5]=k,h[f+6]=i,h[f+7]=j,h[f+8]=k}va.bufferData(va.ARRAY_BUFFER,a.normalArray,va.DYNAMIC_DRAW),za.enableAttribute(e.normal),va.vertexAttribPointer(e.normal,3,va.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(va.bindBuffer(va.ARRAY_BUFFER,d.uv),va.bufferData(va.ARRAY_BUFFER,a.uvArray,va.DYNAMIC_DRAW),za.enableAttribute(e.uv),va.vertexAttribPointer(Ca.uv,2,va.FLOAT,!1,0,0)),a.hasColors&&c.vertexColors!==NoColors&&(va.bindBuffer(va.ARRAY_BUFFER,d.color),va.bufferData(va.ARRAY_BUFFER,a.colorArray,va.DYNAMIC_DRAW),za.enableAttribute(e.color),va.vertexAttribPointer(e.color,3,va.FLOAT,!1,0,0)),za.disableUnusedAttributes(),va.drawArrays(va.TRIANGLES,0,a.count),a.count=0},this.renderBufferDirect=function(a,c,d,e,f,g){za.setMaterial(e);var h=p(a,c,e,f),m=d.id+'_'+h.id+'_'+(!0===e.wireframe),n=!1;m!=Y&&(Y=m,n=!0);var o=f.morphTargetInfluences;if(o!==void 0){for(var q,r=[],s=0,i=o.length;s<i;s++)q=o[s],r.push([q,s]);r.sort(j),8<r.length&&(r.length=8);for(var q,l=d.morphAttributes,s=0,i=r.length;s<i;s++)if(q=r[s],Q[s]=q[0],0!==q[0]){var t=q[1];!0===e.morphTargets&&l.position&&d.addAttribute('morphTarget'+s,l.position[t]),!0===e.morphNormals&&l.normal&&d.addAttribute('morphNormal'+s,l.normal[t])}else!0===e.morphTargets&&d.removeAttribute('morphTarget'+s),!0===e.morphNormals&&d.removeAttribute('morphNormal'+s);for(var s=r.length,u=Q.length;s<u;s++)Q[s]=0;h.getUniforms().setValue(va,'morphTargetInfluences',Q),n=!0}var t=d.index,v=d.attributes.position,w=1;!0===e.wireframe&&(t=Da.getWireframeAttribute(d),w=2);var x=Ma;null!==t&&(x=Na,x.setIndex(t)),n&&(k(e,h,d),null!==t&&va.bindBuffer(va.ELEMENT_ARRAY_BUFFER,Ca.get(t).buffer));var y=0;null===t?v!==void 0&&(y=v.count):y=t.count;var z=d.drawRange.start*w,A=d.drawRange.count*w,B=null===g?0:g.start*w,C=null===g?Infinity:g.count*w,D=F(z,B),E=Math.min(y,z+A,B+C)-1,G=F(0,E-D+1);if(0!==G){if(f.isMesh){if(!0===e.wireframe)za.setLineWidth(e.wireframeLinewidth*b()),x.setMode(va.LINES);else switch(f.drawMode){case TrianglesDrawMode:x.setMode(va.TRIANGLES);break;case TriangleStripDrawMode:x.setMode(va.TRIANGLE_STRIP);break;case TriangleFanDrawMode:x.setMode(va.TRIANGLE_FAN);}}else if(f.isLine){var H=e.linewidth;void 0===H&&(H=1),za.setLineWidth(H*b()),f.isLineSegments?x.setMode(va.LINES):f.isLineLoop?x.setMode(va.LINE_LOOP):x.setMode(va.LINE_STRIP)}else f.isPoints&&x.setMode(va.POINTS);d&&d.isInstancedBufferGeometry?0<d.maxInstancedCount&&x.renderInstances(d,D,G):x.render(D,G)}},this.compile=function(a,b){O=[],a.traverse(function(a){a.isLight&&O.push(a)}),D(O,b),a.traverse(function(b){if(b.material)if(Array.isArray(b.material))for(var c=0;c<b.material.length;c++)o(b.material[c],a.fog,b);else o(b.material,a.fog,b)})},this.render=function(a,b,c,d){if(void 0!==b&&!0!==b.isCamera)return void console.error('THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.');Y='',X=-1,Z=null,!0===a.autoUpdate&&a.updateMatrixWorld(),b.onBeforeRender(T),null===b.parent&&b.updateMatrixWorld(),b.matrixWorldInverse.getInverse(b.matrixWorld),oa.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),ka.setFromMatrix(oa),O.length=0,R.length=0,S.length=0,na=this.localClippingEnabled,ma=la.init(this.clippingPlanes,na,b),P=Ha.get(a,b),P.init(),m(a,b,T.sortObjects),P.finish(),!0===T.sortObjects&&P.sort(),ma&&la.beginShadows(),C(O),Oa.render(a,b),D(O,b),ma&&la.endShadows(),ua.frame++,ua.calls=0,ua.vertices=0,ua.faces=0,ua.points=0,c===void 0&&(c=null),this.setRenderTarget(c);var e=a.background;null===e?za.buffers.color.setClear(ca.r,ca.g,ca.b,da,M):e&&e.isColor&&(za.buffers.color.setClear(e.r,e.g,e.b,1,M),d=!0),(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil),e&&e.isCubeTexture?(Ka==void 0&&(Ka=new PerspectiveCamera,La=new Mesh(new BoxBufferGeometry(5,5,5),new ShaderMaterial({uniforms:ShaderLib.cube.uniforms,vertexShader:ShaderLib.cube.vertexShader,fragmentShader:ShaderLib.cube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1}))),Ka.projectionMatrix.copy(b.projectionMatrix),Ka.matrixWorld.extractRotation(b.matrixWorld),Ka.matrixWorldInverse.getInverse(Ka.matrixWorld),La.material.uniforms.tCube.value=e,La.modelViewMatrix.multiplyMatrices(Ka.matrixWorldInverse,La.matrixWorld),Ea.update(La),T.renderBufferDirect(Ka,null,La.geometry,La.material,La,null)):e&&e.isTexture&&(Ia==void 0&&(Ia=new OrthographicCamera(-1,1,1,-1,0,1),Ja=new Mesh(new PlaneBufferGeometry(2,2),new MeshBasicMaterial({depthTest:!1,depthWrite:!1,fog:!1}))),Ja.material.map=e,Ea.update(Ja),T.renderBufferDirect(Ia,null,Ja.geometry,Ja.material,Ja,null));var f=P.opaque,g=P.transparent;if(a.overrideMaterial){var h=a.overrideMaterial;f.length&&l(f,a,b,h),g.length&&l(g,a,b,h)}else f.length&&l(f,a,b),g.length&&l(g,a,b);Pa.render(a,b),Qa.render(a,b,aa),c&&Ba.updateRenderTargetMipmap(c),za.buffers.depth.setTest(!0),za.buffers.depth.setMask(!0),za.buffers.color.setMask(!0),b.isArrayCamera&&b.enabled&&T.setScissorTest(!1),b.onAfterRender(T)},this.setFaceCulling=function(a,b){za.setCullFace(a),za.setFlipSided(b===FrontFaceDirectionCW)},this.allocTextureUnit=function(){var a=ba;return a>=ya.maxTextures&&console.warn('WebGLRenderer: trying to use '+a+' texture units while this GPU supports only '+ya.maxTextures),ba+=1,a},this.setTexture2D=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTarget&&(!a&&(console.warn('THREE.WebGLRenderer.setTexture2D: don\'t use render targets as textures. Use their .texture property instead.'),a=!0),b=b.texture),Ba.setTexture2D(b,c)}}(),this.setTexture=function(){var a=!1;return function(b,c){a||(console.warn('THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead.'),a=!0),Ba.setTexture2D(b,c)}}(),this.setTextureCube=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTargetCube&&(!a&&(console.warn('THREE.WebGLRenderer.setTextureCube: don\'t use cube render targets as textures. Use their .texture property instead.'),a=!0),b=b.texture),b&&b.isCubeTexture||Array.isArray(b.image)&&6===b.image.length?Ba.setTextureCube(b,c):Ba.setTextureCubeDynamic(b,c)}}(),this.getRenderTarget=function(){return V},this.setRenderTarget=function(a){V=a,a&&void 0===Aa.get(a).__webglFramebuffer&&Ba.setupRenderTarget(a);var b,c=a&&a.isWebGLRenderTargetCube;if(a){var d=Aa.get(a);b=c?d.__webglFramebuffer[a.activeCubeFace]:d.__webglFramebuffer,$.copy(a.scissor),_=a.scissorTest,aa.copy(a.viewport)}else b=null,$.copy(ha).multiplyScalar(ga),_=ia,aa.copy(ja).multiplyScalar(ga);if(W!==b&&(va.bindFramebuffer(va.FRAMEBUFFER,b),W=b),za.scissor($),za.setScissorTest(_),za.viewport(aa),c){var e=Aa.get(a.texture);va.framebufferTexture2D(va.FRAMEBUFFER,va.COLOR_ATTACHMENT0,va.TEXTURE_CUBE_MAP_POSITIVE_X+a.activeCubeFace,e.__webglTexture,a.activeMipMapLevel)}},this.readRenderTargetPixels=function(a,b,c,d,e,f){if(!1===(a&&a.isWebGLRenderTarget))return void console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.');var g=Aa.get(a).__webglFramebuffer;if(g){var h=!1;g!==W&&(va.bindFramebuffer(va.FRAMEBUFFER,g),h=!0);try{var i=a.texture,j=i.format,k=i.type;if(j!==RGBAFormat&&E(j)!==va.getParameter(va.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.');if(k!==UnsignedByteType&&E(k)!==va.getParameter(va.IMPLEMENTATION_COLOR_READ_TYPE)&&!(k===FloatType&&(xa.get('OES_texture_float')||xa.get('WEBGL_color_buffer_float')))&&!(k===HalfFloatType&&xa.get('EXT_color_buffer_half_float')))return void console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.');va.checkFramebufferStatus(va.FRAMEBUFFER)===va.FRAMEBUFFER_COMPLETE?0<=b&&b<=a.width-d&&0<=c&&c<=a.height-e&&va.readPixels(b,c,d,e,E(j),E(k),f):console.error('THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.')}finally{h&&va.bindFramebuffer(va.FRAMEBUFFER,W)}}}}export{WebGLRenderer};