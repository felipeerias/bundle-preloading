var _Math={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var a,b=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],c=Array(36),d=0;return function(){for(var e=0;36>e;e++)8===e||13===e||18===e||23===e?c[e]='-':14===e?c[e]='4':(2>=d&&(d=0|33554432+16777216*Math.random()),a=15&d,d>>=4,c[e]=b[19===e?8|3&a:a]);return c.join('')}}(),clamp:function(a,b,c){return Math.max(b,Math.min(c,a))},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},lerp:function(a,b,c){return(1-c)*a+c*b},smoothstep:function(a,b,c){return a<=b?0:a>=c?1:(a=(a-b)/(c-b),a*a*(3-2*a))},smootherstep:function(a,b,c){return a<=b?0:a>=c?1:(a=(a-b)/(c-b),a*a*a*(a*(6*a-15)+10))},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(0.5-Math.random())},degToRad:function(a){return a*_Math.DEG2RAD},radToDeg:function(a){return a*_Math.RAD2DEG},isPowerOfTwo:function(a){return 0==(a&a-1)&&0!==a},nearestPowerOfTwo:function(a){return Math.pow(2,Math.round(Math.log(a)/Math.LN2))},nextPowerOfTwo:function(a){return a--,a|=a>>1,a|=a>>2,a|=a>>4,a|=a>>8,a|=a>>16,a++,a}};export{_Math};