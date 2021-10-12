import{ShaderMaterial}from'./ShaderMaterial.js';import{ShaderChunk}from'../renderers/shaders/ShaderChunk.js';import{UniformsLib}from'../renderers/shaders/UniformsLib.js';import{UniformsUtils}from'../renderers/shaders/UniformsUtils.js';function ShadowMaterial(a){ShaderMaterial.call(this,{uniforms:UniformsUtils.merge([UniformsLib.lights,{opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}),this.lights=!0,this.transparent=!0,Object.defineProperties(this,{opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(a){this.uniforms.opacity.value=a}}}),this.setValues(a)}ShadowMaterial.prototype=Object.create(ShaderMaterial.prototype),ShadowMaterial.prototype.constructor=ShadowMaterial,ShadowMaterial.prototype.isShadowMaterial=!0;export{ShadowMaterial};