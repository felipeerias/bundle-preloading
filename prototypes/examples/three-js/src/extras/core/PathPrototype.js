import{CurvePath}from'./CurvePath.js';import{EllipseCurve}from'../curves/EllipseCurve.js';import{SplineCurve}from'../curves/SplineCurve.js';import{Vector2}from'../../math/Vector2.js';import{CubicBezierCurve}from'../curves/CubicBezierCurve.js';import{QuadraticBezierCurve}from'../curves/QuadraticBezierCurve.js';import{LineCurve}from'../curves/LineCurve.js';var PathPrototype=Object.assign(Object.create(CurvePath.prototype),{fromPoints:function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)},moveTo:function(a,b){this.currentPoint.set(a,b)},lineTo:function(a,b){var c=new LineCurve(this.currentPoint.clone(),new Vector2(a,b));this.curves.push(c),this.currentPoint.set(a,b)},quadraticCurveTo:function(a,b,c,d){var e=new QuadraticBezierCurve(this.currentPoint.clone(),new Vector2(a,b),new Vector2(c,d));this.curves.push(e),this.currentPoint.set(c,d)},bezierCurveTo:function(a,b,c,d,e,f){var g=new CubicBezierCurve(this.currentPoint.clone(),new Vector2(a,b),new Vector2(c,d),new Vector2(e,f));this.curves.push(g),this.currentPoint.set(e,f)},splineThru:function(a){var b=[this.currentPoint.clone()].concat(a),c=new SplineCurve(b);this.curves.push(c),this.currentPoint.copy(a[a.length-1])},arc:function(a,b,c,d,e,f){var g=this.currentPoint.x,h=this.currentPoint.y;this.absarc(a+g,b+h,c,d,e,f)},absarc:function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)},ellipse:function(a,b,c,d,e,f,g,h){var i=this.currentPoint.x,j=this.currentPoint.y;this.absellipse(a+i,b+j,c,d,e,f,g,h)},absellipse:function(a,b,c,d,e,f,g,h){var i=new EllipseCurve(a,b,c,d,e,f,g,h);if(0<this.curves.length){var j=i.getPoint(0);j.equals(this.currentPoint)||this.lineTo(j.x,j.y)}this.curves.push(i);var k=i.getPoint(1);this.currentPoint.copy(k)}});export{PathPrototype};