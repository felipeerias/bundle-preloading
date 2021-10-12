import{Vector3}from'./Vector3.js';import{Line3}from'./Line3.js';import{Plane}from'./Plane.js';function Triangle(d,a,b){this.a=d===void 0?new Vector3:d,this.b=a===void 0?new Vector3:a,this.c=b===void 0?new Vector3:b}Object.assign(Triangle,{normal:function(){var d=new Vector3;return function(e,a,b,c){var f=c||new Vector3;f.subVectors(b,a),d.subVectors(e,a),f.cross(d);var g=f.lengthSq();return 0<g?f.multiplyScalar(1/Math.sqrt(g)):f.set(0,0,0)}}(),barycoordFromPoint:function(){var d=new Vector3,e=new Vector3,f=new Vector3;return function(g,h,a,b,c){d.subVectors(b,h),e.subVectors(a,h),f.subVectors(g,h);var i=d.dot(d),j=d.dot(e),k=d.dot(f),l=e.dot(e),m=e.dot(f),n=i*l-j*j,o=c||new Vector3;if(0==n)return o.set(-2,-1,-1);var p=1/n,q=(l*k-j*m)*p,r=(i*m-j*k)*p;return o.set(1-q-r,r,q)}}(),containsPoint:function(){var d=new Vector3;return function(e,f,a,b){var c=Triangle.barycoordFromPoint(e,f,a,b,d);return 0<=c.x&&0<=c.y&&1>=c.x+c.y}}()}),Object.assign(Triangle.prototype,{set:function(d,a,b){return this.a.copy(d),this.b.copy(a),this.c.copy(b),this},setFromPointsAndIndices:function(a,b,c,d){return this.a.copy(a[b]),this.b.copy(a[c]),this.c.copy(a[d]),this},clone:function(){return new this.constructor().copy(this)},copy:function(a){return this.a.copy(a.a),this.b.copy(a.b),this.c.copy(a.c),this},area:function(){var a=new Vector3,b=new Vector3;return function(){return a.subVectors(this.c,this.b),b.subVectors(this.a,this.b),0.5*a.cross(b).length()}}(),midpoint:function(a){var b=a||new Vector3;return b.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return Triangle.normal(this.a,this.b,this.c,a)},plane:function(a){var b=a||new Plane;return b.setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return Triangle.containsPoint(a,this.a,this.b,this.c)},closestPointToPoint:function(){var a=new Plane,b=[new Line3,new Line3,new Line3],c=new Vector3,d=new Vector3;return function(e,f){var g=f||new Vector3,h=Infinity;if(a.setFromCoplanarPoints(this.a,this.b,this.c),a.projectPoint(e,c),!0===this.containsPoint(c))g.copy(c);else{b[0].set(this.a,this.b),b[1].set(this.b,this.c),b[2].set(this.c,this.a);for(var j=0;j<b.length;j++){b[j].closestPointToPoint(c,!0,d);var i=c.distanceToSquared(d);i<h&&(h=i,g.copy(d))}}return g}}(),equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}});export{Triangle};