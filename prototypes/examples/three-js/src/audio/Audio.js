import{Object3D}from'../core/Object3D.js';function Audio(a){Object3D.call(this),this.type='Audio',this.context=a.context,this.gain=this.context.createGain(),this.gain.connect(a.getInput()),this.autoplay=!1,this.buffer=null,this.loop=!1,this.startTime=0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType='empty',this.filters=[]}Audio.prototype=Object.assign(Object.create(Object3D.prototype),{constructor:Audio,getOutput:function(){return this.gain},setNodeSource:function(a){return this.hasPlaybackControl=!1,this.sourceType='audioNode',this.source=a,this.connect(),this},setBuffer:function(a){return this.buffer=a,this.sourceType='buffer',this.autoplay&&this.play(),this},play:function(){if(!0===this.isPlaying)return void console.warn('THREE.Audio: Audio is already playing.');if(!1===this.hasPlaybackControl)return void console.warn('THREE.Audio: this Audio has no playback control.');var a=this.context.createBufferSource();return a.buffer=this.buffer,a.loop=this.loop,a.onended=this.onEnded.bind(this),a.playbackRate.setValueAtTime(this.playbackRate,this.startTime),a.start(0,this.startTime),this.isPlaying=!0,this.source=a,this.connect()},pause:function(){return!1===this.hasPlaybackControl?void console.warn('THREE.Audio: this Audio has no playback control.'):(this.source.stop(),this.startTime=this.context.currentTime,this.isPlaying=!1,this)},stop:function(){return!1===this.hasPlaybackControl?void console.warn('THREE.Audio: this Audio has no playback control.'):(this.source.stop(),this.startTime=0,this.isPlaying=!1,this)},connect:function(){if(0<this.filters.length){this.source.connect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].connect(this.filters[a]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].disconnect(this.filters[a]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(a){return a||(a=[]),!0===this.isPlaying?(this.disconnect(),this.filters=a,this.connect()):this.filters=a,this},getFilter:function(){return this.getFilters()[0]},setFilter:function(a){return this.setFilters(a?[a]:[])},setPlaybackRate:function(a){return!1===this.hasPlaybackControl?void console.warn('THREE.Audio: this Audio has no playback control.'):(this.playbackRate=a,!0===this.isPlaying&&this.source.playbackRate.setValueAtTime(this.playbackRate,this.context.currentTime),this)},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return!1===this.hasPlaybackControl?(console.warn('THREE.Audio: this Audio has no playback control.'),!1):this.loop},setLoop:function(a){return!1===this.hasPlaybackControl?void console.warn('THREE.Audio: this Audio has no playback control.'):(this.loop=a,!0===this.isPlaying&&(this.source.loop=this.loop),this)},getVolume:function(){return this.gain.gain.value},setVolume:function(a){return this.gain.gain.value=a,this}});export{Audio};