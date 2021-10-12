import{LineSegments}from'../objects/LineSegments.js';import{VertexColors}from'../constants.js';import{LineBasicMaterial}from'../materials/LineBasicMaterial.js';import{Float32BufferAttribute}from'../core/BufferAttribute.js';import{BufferGeometry}from'../core/BufferGeometry.js';import{Color}from'../math/Color.js';function GridHelper(a,b,c,d){a=a||10,b=b||10,c=new Color(c===void 0?4473924:c),d=new Color(d===void 0?8947848:d);for(var e=b/2,f=a/b,g=a/2,h=[],l=[],m=0,i=0,j=-g;m<=b;m++,j+=f){h.push(-g,0,j,g,0,j),h.push(j,0,-g,j,0,g);var k=m===e?c:d;k.toArray(l,i),i+=3,k.toArray(l,i),i+=3,k.toArray(l,i),i+=3,k.toArray(l,i),i+=3}var n=new BufferGeometry;n.addAttribute('position',new Float32BufferAttribute(h,3)),n.addAttribute('color',new Float32BufferAttribute(l,3));var o=new LineBasicMaterial({vertexColors:VertexColors});LineSegments.call(this,n,o)}GridHelper.prototype=Object.create(LineSegments.prototype),GridHelper.prototype.constructor=GridHelper;export{GridHelper};