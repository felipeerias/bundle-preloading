import{Geometry}from'../core/Geometry.js';import{BufferGeometry}from'../core/BufferGeometry.js';import{Float32BufferAttribute}from'../core/BufferAttribute.js';function PlaneGeometry(a,b,c,d){Geometry.call(this),this.type='PlaneGeometry',this.parameters={width:a,height:b,widthSegments:c,heightSegments:d},this.fromBufferGeometry(new PlaneBufferGeometry(a,b,c,d)),this.mergeVertices()}PlaneGeometry.prototype=Object.create(Geometry.prototype),PlaneGeometry.prototype.constructor=PlaneGeometry;function PlaneBufferGeometry(e,f,g,h){var i=Math.floor;BufferGeometry.call(this),this.type='PlaneBufferGeometry',this.parameters={width:e,height:f,widthSegments:g,heightSegments:h};var j,k,l=i(g)||1,m=i(h)||1,n=l+1,o=[],p=[],q=[],r=[];for(k=0;k<m+1;k++){var s=k*(f/m)-f/2;for(j=0;j<n;j++){var t=j*(e/l)-e/2;p.push(t,-s,0),q.push(0,0,1),r.push(j/l),r.push(1-k/m)}}for(k=0;k<m;k++)for(j=0;j<l;j++){var u=j+n*k,a=j+n*(k+1),b=j+1+n*(k+1),c=j+1+n*k;o.push(u,a,c),o.push(a,b,c)}this.setIndex(o),this.addAttribute('position',new Float32BufferAttribute(p,3)),this.addAttribute('normal',new Float32BufferAttribute(q,3)),this.addAttribute('uv',new Float32BufferAttribute(r,2))}PlaneBufferGeometry.prototype=Object.create(BufferGeometry.prototype),PlaneBufferGeometry.prototype.constructor=PlaneBufferGeometry;export{PlaneGeometry,PlaneBufferGeometry};