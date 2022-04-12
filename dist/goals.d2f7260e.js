function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequireafd0;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequireafd0=i),i.register("5Rd1x",(function(t,n){e(t.exports,"OrbitControls",(()=>l));var o=i("ilwiq");const a={type:"change"},s={type:"start"},r={type:"end"};class l extends o.EventDispatcher{constructor(e,t){super(),void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new o.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:o.MOUSE.ROTATE,MIDDLE:o.MOUSE.DOLLY,RIGHT:o.MOUSE.PAN},this.touches={ONE:o.TOUCH.ROTATE,TWO:o.TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",q),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(a),n.update(),l=i.NONE},this.update=function(){const t=new o.Vector3,s=(new o.Quaternion).setFromUnitVectors(e.up,new o.Vector3(0,1,0)),r=s.clone().invert(),y=new o.Vector3,w=new o.Quaternion,b=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(s),h.setFromVector3(t),n.autoRotate&&l===i.NONE&&T(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(h.theta+=p.theta*n.dampingFactor,h.phi+=p.phi*n.dampingFactor):(h.theta+=p.theta,h.phi+=p.phi);let o=n.minAzimuthAngle,f=n.maxAzimuthAngle;return isFinite(o)&&isFinite(f)&&(o<-Math.PI?o+=b:o>Math.PI&&(o-=b),f<-Math.PI?f+=b:f>Math.PI&&(f-=b),h.theta=o<=f?Math.max(o,Math.min(f,h.theta)):h.theta>(o+f)/2?Math.max(o,h.theta):Math.min(f,h.theta)),h.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,h.phi)),h.makeSafe(),h.radius*=d,h.radius=Math.max(n.minDistance,Math.min(n.maxDistance,h.radius)),!0===n.enableDamping?n.target.addScaledVector(m,n.dampingFactor):n.target.add(m),t.setFromSpherical(h),t.applyQuaternion(r),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(p.theta*=1-n.dampingFactor,p.phi*=1-n.dampingFactor,m.multiplyScalar(1-n.dampingFactor)):(p.set(0,0,0),m.set(0,0,0)),d=1,!!(u||y.distanceToSquared(n.object.position)>c||8*(1-w.dot(n.object.quaternion))>c)&&(n.dispatchEvent(a),y.copy(n.object.position),w.copy(n.object.quaternion),u=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",U),n.domElement.removeEventListener("pointerdown",V),n.domElement.removeEventListener("pointercancel",H),n.domElement.removeEventListener("wheel",F),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",G),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",q)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=i.NONE;const c=1e-6,h=new o.Spherical,p=new o.Spherical;let d=1;const m=new o.Vector3;let u=!1;const y=new o.Vector2,w=new o.Vector2,b=new o.Vector2,f=new o.Vector2,M=new o.Vector2,g=new o.Vector2,v=new o.Vector2,E=new o.Vector2,P=new o.Vector2,x=[],S={};function _(){return Math.pow(.95,n.zoomSpeed)}function T(e){p.theta-=e}function O(e){p.phi-=e}const A=function(){const e=new o.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),m.add(e)}}(),I=function(){const e=new o.Vector3;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),m.add(e)}}(),Y=function(){const e=new o.Vector3;return function(t,o){const i=n.domElement;if(n.object.isPerspectiveCamera){const a=n.object.position;e.copy(a).sub(n.target);let s=e.length();s*=Math.tan(n.object.fov/2*Math.PI/180),A(2*t*s/i.clientHeight,n.object.matrix),I(2*o*s/i.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(A(t*(n.object.right-n.object.left)/n.object.zoom/i.clientWidth,n.object.matrix),I(o*(n.object.top-n.object.bottom)/n.object.zoom/i.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(e){n.object.isPerspectiveCamera?d/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function L(e){n.object.isPerspectiveCamera?d*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(e){y.set(e.clientX,e.clientY)}function Z(e){f.set(e.clientX,e.clientY)}function C(){if(1===x.length)y.set(x[0].pageX,x[0].pageY);else{const e=.5*(x[0].pageX+x[1].pageX),t=.5*(x[0].pageY+x[1].pageY);y.set(e,t)}}function Q(){if(1===x.length)f.set(x[0].pageX,x[0].pageY);else{const e=.5*(x[0].pageX+x[1].pageX),t=.5*(x[0].pageY+x[1].pageY);f.set(e,t)}}function R(){const e=x[0].pageX-x[1].pageX,t=x[0].pageY-x[1].pageY,n=Math.sqrt(e*e+t*t);v.set(0,n)}function k(e){if(1==x.length)w.set(e.pageX,e.pageY);else{const t=K(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);w.set(n,o)}b.subVectors(w,y).multiplyScalar(n.rotateSpeed);const t=n.domElement;T(2*Math.PI*b.x/t.clientHeight),O(2*Math.PI*b.y/t.clientHeight),y.copy(w)}function z(e){if(1===x.length)M.set(e.pageX,e.pageY);else{const t=K(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);M.set(n,o)}g.subVectors(M,f).multiplyScalar(n.panSpeed),Y(g.x,g.y),f.copy(M)}function N(e){const t=K(e),o=e.pageX-t.x,i=e.pageY-t.y,a=Math.sqrt(o*o+i*i);E.set(0,a),P.set(0,Math.pow(E.y/v.y,n.zoomSpeed)),j(P.y),v.copy(E)}function V(e){!1!==n.enabled&&(0===x.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",D),n.domElement.addEventListener("pointerup",G)),function(e){x.push(e)}(e),"touch"===e.pointerType?function(e){switch(W(e),x.length){case 1:switch(n.touches.ONE){case o.TOUCH.ROTATE:if(!1===n.enableRotate)return;C(),l=i.TOUCH_ROTATE;break;case o.TOUCH.PAN:if(!1===n.enablePan)return;Q(),l=i.TOUCH_PAN;break;default:l=i.NONE}break;case 2:switch(n.touches.TWO){case o.TOUCH.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&R(),n.enablePan&&Q(),l=i.TOUCH_DOLLY_PAN;break;case o.TOUCH.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&R(),n.enableRotate&&C(),l=i.TOUCH_DOLLY_ROTATE;break;default:l=i.NONE}break;default:l=i.NONE}l!==i.NONE&&n.dispatchEvent(s)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case o.MOUSE.DOLLY:if(!1===n.enableZoom)return;!function(e){v.set(e.clientX,e.clientY)}(e),l=i.DOLLY;break;case o.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;Z(e),l=i.PAN}else{if(!1===n.enableRotate)return;X(e),l=i.ROTATE}break;case o.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;X(e),l=i.ROTATE}else{if(!1===n.enablePan)return;Z(e),l=i.PAN}break;default:l=i.NONE}l!==i.NONE&&n.dispatchEvent(s)}(e))}function D(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(W(e),l){case i.TOUCH_ROTATE:if(!1===n.enableRotate)return;k(e),n.update();break;case i.TOUCH_PAN:if(!1===n.enablePan)return;z(e),n.update();break;case i.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&N(e),n.enablePan&&z(e)}(e),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&N(e),n.enableRotate&&k(e)}(e),n.update();break;default:l=i.NONE}}(e):function(e){if(!1===n.enabled)return;switch(l){case i.ROTATE:if(!1===n.enableRotate)return;!function(e){w.set(e.clientX,e.clientY),b.subVectors(w,y).multiplyScalar(n.rotateSpeed);const t=n.domElement;T(2*Math.PI*b.x/t.clientHeight),O(2*Math.PI*b.y/t.clientHeight),y.copy(w),n.update()}(e);break;case i.DOLLY:if(!1===n.enableZoom)return;!function(e){E.set(e.clientX,e.clientY),P.subVectors(E,v),P.y>0?j(_()):P.y<0&&L(_()),v.copy(E),n.update()}(e);break;case i.PAN:if(!1===n.enablePan)return;!function(e){M.set(e.clientX,e.clientY),g.subVectors(M,f).multiplyScalar(n.panSpeed),Y(g.x,g.y),f.copy(M),n.update()}(e)}}(e))}function G(e){B(e),0===x.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",G)),n.dispatchEvent(r),l=i.NONE}function H(e){B(e)}function F(e){!1!==n.enabled&&!1!==n.enableZoom&&l===i.NONE&&(e.preventDefault(),n.dispatchEvent(s),function(e){e.deltaY<0?L(_()):e.deltaY>0&&j(_()),n.update()}(e),n.dispatchEvent(r))}function q(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:Y(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:Y(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:Y(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:Y(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function U(e){!1!==n.enabled&&e.preventDefault()}function B(e){delete S[e.pointerId];for(let t=0;t<x.length;t++)if(x[t].pointerId==e.pointerId)return void x.splice(t,1)}function W(e){let t=S[e.pointerId];void 0===t&&(t=new o.Vector2,S[e.pointerId]=t),t.set(e.pageX,e.pageY)}function K(e){const t=e.pointerId===x[0].pointerId?x[1]:x[0];return S[t.pointerId]}n.domElement.addEventListener("contextmenu",U),n.domElement.addEventListener("pointerdown",V),n.domElement.addEventListener("pointercancel",H),n.domElement.addEventListener("wheel",F,{passive:!1}),this.update()}}})),i.register("fUhpq",(function(t,n){e(t.exports,"TransformControls",(()=>u));var o=i("ilwiq");const a=new o.Raycaster,s=new o.Vector3,r=new o.Vector3,l=new o.Quaternion,c={X:new o.Vector3(1,0,0),Y:new o.Vector3(0,1,0),Z:new o.Vector3(0,0,1)},h={type:"change"},p={type:"mouseDown"},d={type:"mouseUp",mode:null},m={type:"objectChange"};class u extends o.Object3D{constructor(e,t){super(),void 0===t&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new Z;this._gizmo=n,this.add(n);const i=new C;this._plane=i,this.add(i);const a=this;function s(e,t){let o=t;Object.defineProperty(a,e,{get:function(){return void 0!==o?o:t},set:function(t){o!==t&&(o=t,i[e]=t,n[e]=t,a.dispatchEvent({type:e+"-changed",value:t}),a.dispatchEvent(h))}}),a[e]=t,i[e]=t,n[e]=t}s("camera",e),s("object",void 0),s("enabled",!0),s("axis",null),s("mode","translate"),s("translationSnap",null),s("rotationSnap",null),s("scaleSnap",null),s("space","world"),s("size",1),s("dragging",!1),s("showX",!0),s("showY",!0),s("showZ",!0);const r=new o.Vector3,l=new o.Vector3,c=new o.Quaternion,p=new o.Quaternion,d=new o.Vector3,m=new o.Quaternion,u=new o.Vector3,g=new o.Vector3,v=new o.Vector3,E=new o.Vector3;s("worldPosition",r),s("worldPositionStart",l),s("worldQuaternion",c),s("worldQuaternionStart",p),s("cameraPosition",d),s("cameraQuaternion",m),s("pointStart",u),s("pointEnd",g),s("rotationAxis",v),s("rotationAngle",0),s("eye",E),this._offset=new o.Vector3,this._startNorm=new o.Vector3,this._endNorm=new o.Vector3,this._cameraScale=new o.Vector3,this._parentPosition=new o.Vector3,this._parentQuaternion=new o.Quaternion,this._parentQuaternionInv=new o.Quaternion,this._parentScale=new o.Vector3,this._worldScaleStart=new o.Vector3,this._worldQuaternionInv=new o.Quaternion,this._worldScale=new o.Vector3,this._positionStart=new o.Vector3,this._quaternionStart=new o.Quaternion,this._scaleStart=new o.Vector3,this._getPointer=y.bind(this),this._onPointerDown=b.bind(this),this._onPointerHover=w.bind(this),this._onPointerMove=f.bind(this),this._onPointerUp=M.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){void 0!==this.object&&(this.object.updateMatrixWorld(),null===this.object.parent?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(void 0===this.object||!0===this.dragging)return;a.setFromCamera(e,this.camera);const t=g(this._gizmo.picker[this.mode],a);this.axis=t?t.object.name:null}pointerDown(e){if(void 0!==this.object&&!0!==this.dragging&&0===e.button&&null!==this.axis){a.setFromCamera(e,this.camera);const t=g(this._plane,a,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,p.mode=this.mode,this.dispatchEvent(p)}}pointerMove(e){const t=this.axis,n=this.mode,o=this.object;let i=this.space;if("scale"===n?i="local":"E"!==t&&"XYZE"!==t&&"XYZ"!==t||(i="world"),void 0===o||null===t||!1===this.dragging||-1!==e.button)return;a.setFromCamera(e,this.camera);const p=g(this._plane,a,!0);if(p){if(this.pointEnd.copy(p.point).sub(this.worldPositionStart),"translate"===n)this._offset.copy(this.pointEnd).sub(this.pointStart),"local"===i&&"XYZ"!==t&&this._offset.applyQuaternion(this._worldQuaternionInv),-1===t.indexOf("X")&&(this._offset.x=0),-1===t.indexOf("Y")&&(this._offset.y=0),-1===t.indexOf("Z")&&(this._offset.z=0),"local"===i&&"XYZ"!==t?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),o.position.copy(this._offset).add(this._positionStart),this.translationSnap&&("local"===i&&(o.position.applyQuaternion(l.copy(this._quaternionStart).invert()),-1!==t.search("X")&&(o.position.x=Math.round(o.position.x/this.translationSnap)*this.translationSnap),-1!==t.search("Y")&&(o.position.y=Math.round(o.position.y/this.translationSnap)*this.translationSnap),-1!==t.search("Z")&&(o.position.z=Math.round(o.position.z/this.translationSnap)*this.translationSnap),o.position.applyQuaternion(this._quaternionStart)),"world"===i&&(o.parent&&o.position.add(s.setFromMatrixPosition(o.parent.matrixWorld)),-1!==t.search("X")&&(o.position.x=Math.round(o.position.x/this.translationSnap)*this.translationSnap),-1!==t.search("Y")&&(o.position.y=Math.round(o.position.y/this.translationSnap)*this.translationSnap),-1!==t.search("Z")&&(o.position.z=Math.round(o.position.z/this.translationSnap)*this.translationSnap),o.parent&&o.position.sub(s.setFromMatrixPosition(o.parent.matrixWorld))));else if("scale"===n){if(-1!==t.search("XYZ")){let e=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(e*=-1),r.set(e,e,e)}else s.copy(this.pointStart),r.copy(this.pointEnd),s.applyQuaternion(this._worldQuaternionInv),r.applyQuaternion(this._worldQuaternionInv),r.divide(s),-1===t.search("X")&&(r.x=1),-1===t.search("Y")&&(r.y=1),-1===t.search("Z")&&(r.z=1);o.scale.copy(this._scaleStart).multiply(r),this.scaleSnap&&(-1!==t.search("X")&&(o.scale.x=Math.round(o.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),-1!==t.search("Y")&&(o.scale.y=Math.round(o.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),-1!==t.search("Z")&&(o.scale.z=Math.round(o.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if("rotate"===n){this._offset.copy(this.pointEnd).sub(this.pointStart);const e=20/this.worldPosition.distanceTo(s.setFromMatrixPosition(this.camera.matrixWorld));"E"===t?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):"XYZE"===t?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(s.copy(this.rotationAxis).cross(this.eye))*e):"X"!==t&&"Y"!==t&&"Z"!==t||(this.rotationAxis.copy(c[t]),s.copy(c[t]),"local"===i&&s.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(s.cross(this.eye).normalize())*e),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),"local"===i&&"E"!==t&&"XYZE"!==t?(o.quaternion.copy(this._quaternionStart),o.quaternion.multiply(l.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),o.quaternion.copy(l.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),o.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(h),this.dispatchEvent(m)}}pointerUp(e){0===e.button&&(this.dragging&&null!==this.axis&&(d.mode=this.mode,this.dispatchEvent(d)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse((function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}))}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(h),this.dispatchEvent(m),this.pointStart.copy(this.pointEnd))}getRaycaster(){return a}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}update(){console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.")}}function y(e){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:e.button};{const t=this.domElement.getBoundingClientRect();return{x:(e.clientX-t.left)/t.width*2-1,y:-(e.clientY-t.top)/t.height*2+1,button:e.button}}}function w(e){if(this.enabled)switch(e.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(e))}}function b(e){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(e)),this.pointerDown(this._getPointer(e)))}function f(e){this.enabled&&this.pointerMove(this._getPointer(e))}function M(e){this.enabled&&(this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(e)))}function g(e,t,n){const o=t.intersectObject(e,!0);for(let e=0;e<o.length;e++)if(o[e].object.visible||n)return o[e];return!1}u.prototype.isTransformControls=!0;const v=new o.Euler,E=new o.Vector3(0,1,0),P=new o.Vector3(0,0,0),x=new o.Matrix4,S=new o.Quaternion,_=new o.Quaternion,T=new o.Vector3,O=new o.Matrix4,A=new o.Vector3(1,0,0),I=new o.Vector3(0,1,0),Y=new o.Vector3(0,0,1),j=new o.Vector3,L=new o.Vector3,X=new o.Vector3;class Z extends o.Object3D{constructor(){super(),this.type="TransformControlsGizmo";const e=new o.MeshBasicMaterial({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new o.LineBasicMaterial({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const a=e.clone();a.color.setHex(16711680);const s=e.clone();s.color.setHex(65280);const r=e.clone();r.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const h=e.clone();h.color.setHex(255),h.opacity=.5;const p=e.clone();p.opacity=.25;const d=e.clone();d.color.setHex(16776960),d.opacity=.25;e.clone().color.setHex(16776960);const m=e.clone();m.color.setHex(7895160);const u=new o.CylinderGeometry(0,.04,.1,12);u.translate(0,.05,0);const y=new o.BoxGeometry(.08,.08,.08);y.translate(0,.04,0);const w=new o.BufferGeometry;w.setAttribute("position",new o.Float32BufferAttribute([0,0,0,1,0,0],3));const b=new o.CylinderGeometry(.0075,.0075,.5,3);function f(e,t){const n=new o.TorusGeometry(e,.0075,3,64,t*Math.PI*2);return n.rotateY(Math.PI/2),n.rotateX(Math.PI/2),n}b.translate(0,.25,0);const M={X:[[new o.Mesh(u,a),[.5,0,0],[0,0,-Math.PI/2]],[new o.Mesh(u,a),[-.5,0,0],[0,0,Math.PI/2]],[new o.Mesh(b,a),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new o.Mesh(u,s),[0,.5,0]],[new o.Mesh(u,s),[0,-.5,0],[Math.PI,0,0]],[new o.Mesh(b,s)]],Z:[[new o.Mesh(u,r),[0,0,.5],[Math.PI/2,0,0]],[new o.Mesh(u,r),[0,0,-.5],[-Math.PI/2,0,0]],[new o.Mesh(b,r),null,[Math.PI/2,0,0]]],XYZ:[[new o.Mesh(new o.OctahedronGeometry(.1,0),p.clone()),[0,0,0]]],XY:[[new o.Mesh(new o.BoxGeometry(.15,.15,.01),h.clone()),[.15,.15,0]]],YZ:[[new o.Mesh(new o.BoxGeometry(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new o.Mesh(new o.BoxGeometry(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},g={X:[[new o.Mesh(new o.CylinderGeometry(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new o.Mesh(new o.CylinderGeometry(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new o.Mesh(new o.CylinderGeometry(.2,0,.6,4),n),[0,.3,0]],[new o.Mesh(new o.CylinderGeometry(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new o.Mesh(new o.CylinderGeometry(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new o.Mesh(new o.CylinderGeometry(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new o.Mesh(new o.OctahedronGeometry(.2,0),n)]],XY:[[new o.Mesh(new o.BoxGeometry(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new o.Mesh(new o.BoxGeometry(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new o.Mesh(new o.BoxGeometry(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},v={START:[[new o.Mesh(new o.OctahedronGeometry(.01,2),i),null,null,null,"helper"]],END:[[new o.Mesh(new o.OctahedronGeometry(.01,2),i),null,null,null,"helper"]],DELTA:[[new o.Line(function(){const e=new o.BufferGeometry;return e.setAttribute("position",new o.Float32BufferAttribute([0,0,0,1,1,1],3)),e}(),i),null,null,null,"helper"]],X:[[new o.Line(w,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new o.Line(w,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new o.Line(w,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},E={XYZE:[[new o.Mesh(f(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new o.Mesh(f(.5,.5),a)]],Y:[[new o.Mesh(f(.5,.5),s),null,[0,0,-Math.PI/2]]],Z:[[new o.Mesh(f(.5,.5),r),null,[0,Math.PI/2,0]]],E:[[new o.Mesh(f(.75,1),d),null,[0,Math.PI/2,0]]]},P={AXIS:[[new o.Line(w,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},x={XYZE:[[new o.Mesh(new o.SphereGeometry(.25,10,8),n)]],X:[[new o.Mesh(new o.TorusGeometry(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new o.Mesh(new o.TorusGeometry(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new o.Mesh(new o.TorusGeometry(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new o.Mesh(new o.TorusGeometry(.75,.1,2,24),n)]]},S={X:[[new o.Mesh(y,a),[.5,0,0],[0,0,-Math.PI/2]],[new o.Mesh(b,a),[0,0,0],[0,0,-Math.PI/2]],[new o.Mesh(y,a),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new o.Mesh(y,s),[0,.5,0]],[new o.Mesh(b,s)],[new o.Mesh(y,s),[0,-.5,0],[0,0,Math.PI]]],Z:[[new o.Mesh(y,r),[0,0,.5],[Math.PI/2,0,0]],[new o.Mesh(b,r),[0,0,0],[Math.PI/2,0,0]],[new o.Mesh(y,r),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new o.Mesh(new o.BoxGeometry(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new o.Mesh(new o.BoxGeometry(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new o.Mesh(new o.BoxGeometry(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new o.Mesh(new o.BoxGeometry(.1,.1,.1),p.clone())]]},_={X:[[new o.Mesh(new o.CylinderGeometry(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new o.Mesh(new o.CylinderGeometry(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new o.Mesh(new o.CylinderGeometry(.2,0,.6,4),n),[0,.3,0]],[new o.Mesh(new o.CylinderGeometry(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new o.Mesh(new o.CylinderGeometry(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new o.Mesh(new o.CylinderGeometry(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new o.Mesh(new o.BoxGeometry(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new o.Mesh(new o.BoxGeometry(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new o.Mesh(new o.BoxGeometry(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new o.Mesh(new o.BoxGeometry(.2,.2,.2),n),[0,0,0]]]},T={X:[[new o.Line(w,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new o.Line(w,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new o.Line(w,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function O(e){const t=new o.Object3D;for(const n in e)for(let o=e[n].length;o--;){const i=e[n][o][0].clone(),a=e[n][o][1],s=e[n][o][2],r=e[n][o][3],l=e[n][o][4];i.name=n,i.tag=l,a&&i.position.set(a[0],a[1],a[2]),s&&i.rotation.set(s[0],s[1],s[2]),r&&i.scale.set(r[0],r[1],r[2]),i.updateMatrix();const c=i.geometry.clone();c.applyMatrix4(i.matrix),i.geometry=c,i.renderOrder=1/0,i.position.set(0,0,0),i.rotation.set(0,0,0),i.scale.set(1,1,1),t.add(i)}return t}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=O(M)),this.add(this.gizmo.rotate=O(E)),this.add(this.gizmo.scale=O(S)),this.add(this.picker.translate=O(g)),this.add(this.picker.rotate=O(x)),this.add(this.picker.scale=O(_)),this.add(this.helper.translate=O(v)),this.add(this.helper.rotate=O(P)),this.add(this.helper.scale=O(T)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const t="local"===("scale"===this.mode?"local":this.space)?this.worldQuaternion:_;this.gizmo.translate.visible="translate"===this.mode,this.gizmo.rotate.visible="rotate"===this.mode,this.gizmo.scale.visible="scale"===this.mode,this.helper.translate.visible="translate"===this.mode,this.helper.rotate.visible="rotate"===this.mode,this.helper.scale.visible="scale"===this.mode;let n=[];n=n.concat(this.picker[this.mode].children),n=n.concat(this.gizmo[this.mode].children),n=n.concat(this.helper[this.mode].children);for(let e=0;e<n.length;e++){const o=n[e];let i;if(o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition),i=this.camera.isOrthographicCamera?(this.camera.top-this.camera.bottom)/this.camera.zoom:this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(i*this.size/4),"helper"!==o.tag){if(o.quaternion.copy(t),"translate"===this.mode||"scale"===this.mode){const e=.99,n=.2;"X"===o.name&&Math.abs(E.copy(A).applyQuaternion(t).dot(this.eye))>e&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),"Y"===o.name&&Math.abs(E.copy(I).applyQuaternion(t).dot(this.eye))>e&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),"Z"===o.name&&Math.abs(E.copy(Y).applyQuaternion(t).dot(this.eye))>e&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),"XY"===o.name&&Math.abs(E.copy(Y).applyQuaternion(t).dot(this.eye))<n&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),"YZ"===o.name&&Math.abs(E.copy(A).applyQuaternion(t).dot(this.eye))<n&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),"XZ"===o.name&&Math.abs(E.copy(I).applyQuaternion(t).dot(this.eye))<n&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)}else"rotate"===this.mode&&(S.copy(t),E.copy(this.eye).applyQuaternion(l.copy(t).invert()),-1!==o.name.search("E")&&o.quaternion.setFromRotationMatrix(x.lookAt(this.eye,P,I)),"X"===o.name&&(l.setFromAxisAngle(A,Math.atan2(-E.y,E.z)),l.multiplyQuaternions(S,l),o.quaternion.copy(l)),"Y"===o.name&&(l.setFromAxisAngle(I,Math.atan2(E.x,E.z)),l.multiplyQuaternions(S,l),o.quaternion.copy(l)),"Z"===o.name&&(l.setFromAxisAngle(Y,Math.atan2(E.y,E.x)),l.multiplyQuaternions(S,l),o.quaternion.copy(l)));o.visible=o.visible&&(-1===o.name.indexOf("X")||this.showX),o.visible=o.visible&&(-1===o.name.indexOf("Y")||this.showY),o.visible=o.visible&&(-1===o.name.indexOf("Z")||this.showZ),o.visible=o.visible&&(-1===o.name.indexOf("E")||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some((function(e){return o.name===e})))&&(o.material.color.setHex(16776960),o.material.opacity=1)}else o.visible=!1,"AXIS"===o.name?(o.position.copy(this.worldPositionStart),o.visible=!!this.axis,"X"===this.axis&&(l.setFromEuler(v.set(0,0,0)),o.quaternion.copy(t).multiply(l),Math.abs(E.copy(A).applyQuaternion(t).dot(this.eye))>.9&&(o.visible=!1)),"Y"===this.axis&&(l.setFromEuler(v.set(0,0,Math.PI/2)),o.quaternion.copy(t).multiply(l),Math.abs(E.copy(I).applyQuaternion(t).dot(this.eye))>.9&&(o.visible=!1)),"Z"===this.axis&&(l.setFromEuler(v.set(0,Math.PI/2,0)),o.quaternion.copy(t).multiply(l),Math.abs(E.copy(Y).applyQuaternion(t).dot(this.eye))>.9&&(o.visible=!1)),"XYZE"===this.axis&&(l.setFromEuler(v.set(0,Math.PI/2,0)),E.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(x.lookAt(P,E,I)),o.quaternion.multiply(l),o.visible=this.dragging),"E"===this.axis&&(o.visible=!1)):"START"===o.name?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):"END"===o.name?(o.position.copy(this.worldPosition),o.visible=this.dragging):"DELTA"===o.name?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),s.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),s.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(s),o.visible=this.dragging):(o.quaternion.copy(t),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=-1!==this.axis.search(o.name)))}super.updateMatrixWorld(e)}}Z.prototype.isTransformControlsGizmo=!0;class C extends o.Mesh{constructor(){super(new o.PlaneGeometry(1e5,1e5,2,2),new o.MeshBasicMaterial({visible:!1,wireframe:!0,side:o.DoubleSide,transparent:!0,opacity:.1,toneMapped:!1})),this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),"scale"===this.mode&&(t="local"),j.copy(A).applyQuaternion("local"===t?this.worldQuaternion:_),L.copy(I).applyQuaternion("local"===t?this.worldQuaternion:_),X.copy(Y).applyQuaternion("local"===t?this.worldQuaternion:_),E.copy(L),this.mode){case"translate":case"scale":switch(this.axis){case"X":E.copy(this.eye).cross(j),T.copy(j).cross(E);break;case"Y":E.copy(this.eye).cross(L),T.copy(L).cross(E);break;case"Z":E.copy(this.eye).cross(X),T.copy(X).cross(E);break;case"XY":T.copy(X);break;case"YZ":T.copy(j);break;case"XZ":E.copy(X),T.copy(L);break;case"XYZ":case"E":T.set(0,0,0)}break;default:T.set(0,0,0)}0===T.length()?this.quaternion.copy(this.cameraQuaternion):(O.lookAt(s.set(0,0,0),T,E),this.quaternion.setFromRotationMatrix(O)),super.updateMatrixWorld(e)}}C.prototype.isTransformControlsPlane=!0})),i.register("7MGRS",(function(t,n){e(t.exports,"default",(()=>i));var o=function(){var e=0,t=document.createElement("div");function n(e){return t.appendChild(e.dom),e}function i(n){for(var o=0;o<t.children.length;o++)t.children[o].style.display=o===n?"block":"none";e=n}t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",(function(n){n.preventDefault(),i(++e%t.children.length)}),!1);var a=(performance||Date).now(),s=a,r=0,l=n(new o.Panel("FPS","#0ff","#002")),c=n(new o.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=n(new o.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:t,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){r++;var e=(performance||Date).now();if(c.update(e-a,200),e>=s+1e3&&(l.update(1e3*r/(e-s),100),s=e,r=0,h)){var t=performance.memory;h.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){a=this.end()},domElement:t,setMode:i}};o.Panel=function(e,t,n){var o=1/0,i=0,a=Math.round,s=a(window.devicePixelRatio||1),r=80*s,l=48*s,c=3*s,h=2*s,p=3*s,d=15*s,m=74*s,u=30*s,y=document.createElement("canvas");y.width=r,y.height=l,y.style.cssText="width:80px;height:48px";var w=y.getContext("2d");return w.font="bold "+9*s+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=n,w.fillRect(0,0,r,l),w.fillStyle=t,w.fillText(e,c,h),w.fillRect(p,d,m,u),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(p,d,m,u),{dom:y,update:function(l,b){o=Math.min(o,l),i=Math.max(i,l),w.fillStyle=n,w.globalAlpha=1,w.fillRect(0,0,r,d),w.fillStyle=t,w.fillText(a(l)+" "+e+" ("+a(o)+"-"+a(i)+")",c,h),w.drawImage(y,p+s,d,m-s,u,p,d,m-s,u),w.fillRect(p+m-s,d,s,u),w.fillStyle=n,w.globalAlpha=.9,w.fillRect(p+m-s,d,s,a((1-l/b)*u))}}};var i=o}));
//# sourceMappingURL=goals.d2f7260e.js.map