(this["webpackJsonpDeep-Space"]=this["webpackJsonpDeep-Space"]||[]).push([[0],{21:function(t,e,a){},22:function(t,e,a){},24:function(t,e,a){"use strict";a.r(e);var o=a(7),c=a.n(o),i=a(15),n=a.n(i),b=(a(21),a(14)),s=(a(22),a(0)),j=a(1),r=a(2),O=a(3),h=function(){function t(){Object(r.a)(this,t);var e=new j.w(1,4,4),a=new j.s({color:"white",transparent:!0,opacity:.8}),o=new j.o(e,a);this.group=new j.n,this.group.add(o),this.type="star"}return Object(O.a)(t,[{key:"move",value:function(){this.group.position.x-=.5}}]),t}(),p=a.p+"static/media/2_no_clouds_4k.825a0ecf.jpg",u=a.p+"static/media/water_4k.f67af4c5.png",l=a.p+"static/media/fair_clouds_4k.67a542cb.png",d=function(){function t(){Object(r.a)(this,t);var e=new j.y,a=e.load(p),o=e.load(l),c=e.load(u),i=new j.w(1,8,8),n=new j.s({map:a,specularMap:c,specular:new j.f("grey")}),b=new j.w(1.01,12,12),s=new j.s({map:o,transparent:!0}),O=new j.o(i,n),h=new j.o(b,s);this.group=new j.n,this.group.add(O,h),this.type="planet"}return Object(O.a)(t,[{key:"move",value:function(t){this.group.position.x-=.08,this.group.rotation.y+=.001}}]),t}(),w=a.p+"static/media/moon_color.758452fb.png",y=function(){function t(){Object(r.a)(this,t);var e=(new j.y).load(w),a=new j.w(1,8,8),o=new j.s({map:e}),c=new j.o(a,o);this.group=new j.n,this.group.add(c),this.type="planet"}return Object(O.a)(t,[{key:"move",value:function(t){this.group.position.x-=.1,this.group.rotation.y+=.001}}]),t}(),v=function(){function t(e,a,o,c,i){Object(r.a)(this,t),this.geometry=new j.w(a),this.material=new j.s({color:e,transparent:!0,opacity:.8}),this.mesh=new j.o(this.geometry,this.material),this.group=new j.n,this.group.add(this.mesh),this.group.position.set(o.x,o.y,o.z),this.radius=a,this.velocity={x:c},this.stop=i+this.radius}return Object(O.a)(t,[{key:"move",value:function(){this.group.position.x+=this.velocity.x}}]),t}(),g=a(16),f=a(4),m=a(5),x=function t(e,a){e.material?(e.material.transparent=!0,e.material.opacity=a):e.group?e.group.children.forEach((function(e){t(e,a)})):e.children&&e.children.forEach((function(e){t(e,a)}))},M=a.p+"static/media/krakenEye.bc1d18a8.jpg",q=1.6,k=.7,P=.7,I=.85,A=.7,z=.75,V=[[0,2,0],[k,q,0],[Math.sqrt(k*k/2),q,Math.sqrt(k*k/2)],[0,q,.77],[-Math.sqrt(k*k/2),q,Math.sqrt(k*k/2)],[-k,q,0],[-Math.sqrt(k*k/2),q,-Math.sqrt(k*k/2)],[0,q,-k],[Math.sqrt(k*k/2),q,-Math.sqrt(k*k/2)],[I,P,0],[Math.sqrt(I*I/2),P,Math.sqrt(I*I/2)],[0,.63,1.02],[-Math.sqrt(I*I/2),P,Math.sqrt(I*I/2)],[-I,P,0],[-Math.sqrt(I*I/2),P,-Math.sqrt(I*I/2)],[0,P,-I],[Math.sqrt(I*I/2),P,-Math.sqrt(I*I/2)],[A,0,0],[Math.sqrt(A*A/2),0,Math.sqrt(A*A/2)],[0,0,.77],[-Math.sqrt(A*A/2),0,Math.sqrt(A*A/2)],[-A,0,0],[-Math.sqrt(A*A/2),0,-Math.sqrt(A*A/2)],[0,0,-A],[Math.sqrt(A*A/2),0,-Math.sqrt(A*A/2)],[z,-z,-A],[Math.sqrt(.28125),-z-Math.sqrt(.28125),-A],[0,-1.5,-A],[-Math.sqrt(.28125),-z-Math.sqrt(.28125),-A],[-z,-z,-A],[-Math.sqrt(.28125),-Math.sqrt(.28125),-A],[0,0,-A],[Math.sqrt(.28125),-Math.sqrt(.28125),-A],[0,-z,-A-.2]],C=function(t){Object(f.a)(a,t);var e=Object(m.a)(a);function a(t){var o;return Object(r.a)(this,a),(o=e.call(this)).scale=1,o.counter=t,o}return Object(O.a)(a,[{key:"getPoint",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new j.C,a=3*t-1.5,o=(1-t)*Math.sin(2*Math.PI*t+this.counter),c=0;return e.set(a,o,c).multiplyScalar(this.scale)}}]),a}(j.g),F=function(){function t(e,a,o){Object(r.a)(this,t);var c=[.5*Math.random(),.5*Math.random(),.5*Math.random()],i=new j.t({vertexColors:!0});i.side=j.j;var n=function(t){var e=new j.e,a=[[t[0]+.5,t[1]+.5,t[2]+.5],[t[0]+.3,t[1]+.3,t[2]+.3],[t[0]+.2,t[1]+.2,t[2]+.2]],o=new Float32Array([].concat(Object(s.a)(V[0]),Object(s.a)(V[1]),Object(s.a)(V[8]),Object(s.a)(V[0]),Object(s.a)(V[2]),Object(s.a)(V[1]),Object(s.a)(V[0]),Object(s.a)(V[3]),Object(s.a)(V[2]),Object(s.a)(V[0]),Object(s.a)(V[4]),Object(s.a)(V[3]),Object(s.a)(V[0]),Object(s.a)(V[5]),Object(s.a)(V[4]),Object(s.a)(V[0]),Object(s.a)(V[6]),Object(s.a)(V[5]),Object(s.a)(V[0]),Object(s.a)(V[7]),Object(s.a)(V[6]),Object(s.a)(V[0]),Object(s.a)(V[8]),Object(s.a)(V[7]),Object(s.a)(V[1]),Object(s.a)(V[9]),Object(s.a)(V[16]),Object(s.a)(V[1]),Object(s.a)(V[16]),Object(s.a)(V[8]),Object(s.a)(V[8]),Object(s.a)(V[16]),Object(s.a)(V[15]),Object(s.a)(V[8]),Object(s.a)(V[15]),Object(s.a)(V[7]),Object(s.a)(V[7]),Object(s.a)(V[15]),Object(s.a)(V[14]),Object(s.a)(V[7]),Object(s.a)(V[14]),Object(s.a)(V[6]),Object(s.a)(V[6]),Object(s.a)(V[14]),Object(s.a)(V[13]),Object(s.a)(V[6]),Object(s.a)(V[13]),Object(s.a)(V[5]),Object(s.a)(V[5]),Object(s.a)(V[13]),Object(s.a)(V[12]),Object(s.a)(V[5]),Object(s.a)(V[12]),Object(s.a)(V[4]),Object(s.a)(V[4]),Object(s.a)(V[12]),Object(s.a)(V[3]),Object(s.a)(V[3]),Object(s.a)(V[12]),Object(s.a)(V[11]),Object(s.a)(V[3]),Object(s.a)(V[11]),Object(s.a)(V[10]),Object(s.a)(V[3]),Object(s.a)(V[10]),Object(s.a)(V[2]),Object(s.a)(V[2]),Object(s.a)(V[10]),Object(s.a)(V[9]),Object(s.a)(V[2]),Object(s.a)(V[9]),Object(s.a)(V[1]),Object(s.a)(V[9]),Object(s.a)(V[17]),Object(s.a)(V[24]),Object(s.a)(V[9]),Object(s.a)(V[24]),Object(s.a)(V[16]),Object(s.a)(V[16]),Object(s.a)(V[24]),Object(s.a)(V[23]),Object(s.a)(V[16]),Object(s.a)(V[23]),Object(s.a)(V[15]),Object(s.a)(V[15]),Object(s.a)(V[23]),Object(s.a)(V[22]),Object(s.a)(V[15]),Object(s.a)(V[22]),Object(s.a)(V[14]),Object(s.a)(V[14]),Object(s.a)(V[22]),Object(s.a)(V[21]),Object(s.a)(V[14]),Object(s.a)(V[21]),Object(s.a)(V[13]),Object(s.a)(V[13]),Object(s.a)(V[21]),Object(s.a)(V[20]),Object(s.a)(V[13]),Object(s.a)(V[20]),Object(s.a)(V[12]),Object(s.a)(V[12]),Object(s.a)(V[20]),Object(s.a)(V[19]),Object(s.a)(V[12]),Object(s.a)(V[19]),Object(s.a)(V[11]),Object(s.a)(V[11]),Object(s.a)(V[19]),Object(s.a)(V[10]),Object(s.a)(V[10]),Object(s.a)(V[19]),Object(s.a)(V[18]),Object(s.a)(V[10]),Object(s.a)(V[18]),Object(s.a)(V[17]),Object(s.a)(V[10]),Object(s.a)(V[17]),Object(s.a)(V[9]),Object(s.a)(V[17]),Object(s.a)(V[25]),Object(s.a)(V[32]),Object(s.a)(V[17]),Object(s.a)(V[32]),Object(s.a)(V[24]),Object(s.a)(V[24]),Object(s.a)(V[32]),Object(s.a)(V[31]),Object(s.a)(V[24]),Object(s.a)(V[31]),Object(s.a)(V[23]),Object(s.a)(V[23]),Object(s.a)(V[31]),Object(s.a)(V[30]),Object(s.a)(V[23]),Object(s.a)(V[30]),Object(s.a)(V[22]),Object(s.a)(V[22]),Object(s.a)(V[30]),Object(s.a)(V[29]),Object(s.a)(V[22]),Object(s.a)(V[29]),Object(s.a)(V[21]),Object(s.a)(V[21]),Object(s.a)(V[29]),Object(s.a)(V[28]),Object(s.a)(V[21]),Object(s.a)(V[28]),Object(s.a)(V[20]),Object(s.a)(V[20]),Object(s.a)(V[28]),Object(s.a)(V[19]),Object(s.a)(V[19]),Object(s.a)(V[28]),Object(s.a)(V[27]),Object(s.a)(V[19]),Object(s.a)(V[27]),Object(s.a)(V[26]),Object(s.a)(V[19]),Object(s.a)(V[26]),Object(s.a)(V[18]),Object(s.a)(V[18]),Object(s.a)(V[26]),Object(s.a)(V[25]),Object(s.a)(V[18]),Object(s.a)(V[25]),Object(s.a)(V[17]),Object(s.a)(V[33]),Object(s.a)(V[24]),Object(s.a)(V[25]),Object(s.a)(V[33]),Object(s.a)(V[25]),Object(s.a)(V[26]),Object(s.a)(V[33]),Object(s.a)(V[26]),Object(s.a)(V[27]),Object(s.a)(V[33]),Object(s.a)(V[27]),Object(s.a)(V[28]),Object(s.a)(V[33]),Object(s.a)(V[28]),Object(s.a)(V[29]),Object(s.a)(V[33]),Object(s.a)(V[29]),Object(s.a)(V[30]),Object(s.a)(V[33]),Object(s.a)(V[30]),Object(s.a)(V[31]),Object(s.a)(V[33]),Object(s.a)(V[31]),Object(s.a)(V[32])));e.setAttribute("position",new j.d(o,3));for(var c=[],i=0;i<64;i++)c.push.apply(c,Object(s.a)(a[0]).concat(Object(s.a)(a[1]),Object(s.a)(a[2])));var n=new Float32Array(c);return e.setAttribute("color",new j.d(n,3)),e.computeVertexNormals(),e}(c),b=new j.o(n,i);b.rotateX(-Math.PI),b.rotateY(Math.PI/2);var O=(new j.y).load(M);i=new j.t({map:O});var h=new j.w(.2),p=new j.o(h,i);p.position.z=.62,p.rotation.set(.7,-1.5,1);var u=new j.w(.2),l=new j.o(u,i);l.position.z=-.62,l.rotation.set(-.7,1.5,1);var d=new C(0);(i=new j.t({color:new j.f(c[0]+.3,c[1]+.3,c[2]+.3)})).side=j.j;var w=new j.A(d,11,.2,3),y=-2.185,v=.77,g=.5,f=new j.o(w,i);f.position.set(y,v+g,0);var m=new j.o(w,i);m.position.set(y,v-g,0),m.rotateX(Math.PI/8);var x=new j.o(w,i);x.position.set(y,v,g),x.rotateX(2*Math.PI/8);var q=new j.o(w,i);q.position.set(y,v,-g),q.rotateX(3*Math.PI/8);var k=new j.o(w,i);k.position.set(y,v+Math.sqrt(.125),Math.sqrt(.125)),k.rotateX(4*Math.PI/8);var P=new j.o(w,i);P.position.set(y,v-Math.sqrt(.125),Math.sqrt(.125)),P.rotateX(5*Math.PI/8);var I=new j.o(w,i);I.position.set(y,v+Math.sqrt(.125),-Math.sqrt(.125)),I.rotateX(6*Math.PI/8);var A=new j.o(w,i);A.position.set(y,v-Math.sqrt(.125),-Math.sqrt(.125)),A.rotateX(7*Math.PI/8),this.tentacles=new j.n,this.tentacles.add(f,m,x,q,k,P,I,A),this.group=new j.n,this.group.add(b,p,l,this.tentacles),this.group.position.set(a.x,a.y,a.z),this.radius=e,this.group.scale.set(e,e,e),this.velocity={x:-.3,y:0},this.maxVelocity={y:.1},this.stop=o,this.health=100,this.cooldown={hit:0},this.type="kraken"}return Object(O.a)(t,[{key:"move",value:function(t){this.group.position.y<t.y?this.velocity.y=Math.min(this.velocity.y+.0015,this.maxVelocity.y):this.group.position.y>t.y&&(this.velocity.y=Math.max(this.velocity.y-.0015,-this.maxVelocity.y)),this.group.position.x+=this.velocity.x,this.group.position.y+=this.velocity.y,this.group.rotation.x=7*-this.velocity.y+Math.PI/2}},{key:"animate",value:function(t){var e,a=0,o=Object(g.a)(this.tentacles.children);try{for(o.s();!(e=o.n()).done;){var c=e.value,i=new C(t/15+a),n=new j.A(i,11,.2,3);c.geometry=n,a++}}catch(b){o.e(b)}finally{o.f()}}},{key:"updateCooldowns",value:function(){this.cooldown.hit>0&&(this.cooldown.hit--,0===this.cooldown.hit&&x(this,1))}}]),t}(),S=a.p+"static/media/enemyTexture.5837a82b.jpg",E=[[0,0,-.5],[0,0,.5],[.7,.45,0],[.7,-.45,0],[-.7,.45,0],[-.7,-.45,0],[0,.825,0],[0,-.825,0]],D=[[.5,.5],[.5,.5],[1,.75],[1,.25],[0,.75],[0,.25],[.5,1],[.5,0]],X=[[1,.1,.1],[.5,.1,0],[.6,.2,0],[.5,.2,0],[.3,.2,0],[.5,.2,0]],Y=function(){function t(e,a,o){Object(r.a)(this,t),this.radius=e,this.velocity={x:-.1,y:0},this.maxVelocity={y:.1},this.stop=o,this.health=100,this.cooldown={shoot:0,hit:0},this.type="ship";var c=new j.y,i=new j.q({map:c.load(S)}),n=function(){var t=new j.e,e=new Float32Array([].concat(Object(s.a)(E[0]),Object(s.a)(E[1]),Object(s.a)(E[2]),Object(s.a)(E[3]),Object(s.a)(E[4]),Object(s.a)(E[5]),Object(s.a)(E[6]),Object(s.a)(E[7])));t.setAttribute("position",new j.d(e,3));var a=new Float32Array([].concat(Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0]),Object(s.a)(X[0])));t.setAttribute("color",new j.d(a,3));var o=new Float32Array([].concat(Object(s.a)(D[1]),Object(s.a)(D[6]),Object(s.a)(D[4]),Object(s.a)(D[1]),Object(s.a)(D[4]),Object(s.a)(D[5]),Object(s.a)(D[1]),Object(s.a)(D[5]),Object(s.a)(D[7]),Object(s.a)(D[1]),Object(s.a)(D[7]),Object(s.a)(D[3]),Object(s.a)(D[1]),Object(s.a)(D[3]),Object(s.a)(D[2]),Object(s.a)(D[1]),Object(s.a)(D[2]),Object(s.a)(D[6]),Object(s.a)(D[0]),Object(s.a)(D[4]),Object(s.a)(D[6]),Object(s.a)(D[0]),Object(s.a)(D[6]),Object(s.a)(D[2]),Object(s.a)(D[0]),Object(s.a)(D[2]),Object(s.a)(D[3]),Object(s.a)(D[0]),Object(s.a)(D[3]),Object(s.a)(D[7]),Object(s.a)(D[0]),Object(s.a)(D[7]),Object(s.a)(D[5]),Object(s.a)(D[0]),Object(s.a)(D[5]),Object(s.a)(D[4])));return t.setAttribute("uv",new j.d(o,2)),t.setIndex([1,6,4,1,4,5,1,5,7,1,7,3,1,3,2,1,2,6,0,4,6,0,6,2,0,2,3,0,3,7,0,7,5,0,5,4]),t.computeVertexNormals(),t}(),b=new j.o(n,i),O=new j.q({color:"red"}),h=new j.q({color:11645361}),p=new j.h(.14,.14,1.1,7),u=new j.h(.14,.26,.6,8),l=new j.w(.14,7,7),d=new j.o(p,h),w=new j.o(u,h);w.position.y+=.7,d.position.x+=.72,d.position.y-=.18;var y=new j.o(p,h);y.position.x-=.72,y.position.y-=.18;var v=new j.z(.13,.03,20,20),g=new j.o(v,O),f=new j.o(v,O),m=new j.o(l,h);m.position.x+=.72,m.position.y+=.367;var x=new j.o(l,h);x.position.x-=.72,x.position.y+=.367;var M=new j.o(l,h);M.position.y+=1,g.position.x+=.72,f.position.x-=.72,g.position.y-=.73,f.position.y-=.73,g.rotation.x+=Math.PI/2,f.rotation.x+=Math.PI/2,this.group=new j.n,this.group.add(b),this.group.add(d),this.group.add(y),this.group.add(g),this.group.add(f),this.group.add(m),this.group.add(x),this.group.add(M),this.group.add(g),this.group.add(f),this.group.add(w),this.group.rotateZ(Math.PI/2),this.group.position.set(a.x,a.y,a.z),this.group.scale.set(e,e,e)}return Object(O.a)(t,[{key:"move",value:function(t){this.group.position.y<t.y?this.velocity.y=Math.min(this.velocity.y+.001,this.maxVelocity.y):this.group.position.y>t.y&&(this.velocity.y=Math.max(this.velocity.y-.001,-this.maxVelocity.y)),this.group.position.x+=this.velocity.x,this.group.position.y+=this.velocity.y,this.group.rotation.x=-this.velocity.y}},{key:"updateCooldowns",value:function(){this.cooldown.shoot>0&&this.cooldown.shoot--,this.cooldown.hit>0&&(this.cooldown.hit--,0===this.cooldown.hit&&x(this,1))}}]),t}(),_=[[0,1,.5],[.5,.9,.5],[.9,.5,.5],[1,0,.5],[.9,-.5,.5],[.5,-.9,.5],[0,-1,.5],[-.5,-.9,.5],[-.9,-.5,.5],[-1,0,.5],[-.9,.5,.5],[-.5,.9,.5],[0,2.25,0],[1.125,2.025,0],[2.025,1.125,0],[2.25,0,0],[2.025,-1.125,0],[1.125,-2.025,0],[0,-2.25,0],[-1.125,-2.025,0],[-2.025,-1.125,0],[-2.25,0,0],[-2.025,1.125,0],[-1.125,2.025,0],[0,.5,-4],[.25,.45,-4],[.45,.25,-4],[.5,0,-4],[.45,-.25,-4],[.25,-.45,-4],[0,-.5,-4],[-.25,-.45,-4],[-.45,-.25,-4],[-.5,0,-4],[-.45,.25,-4],[-.25,.45,-4],[0,.91,-5],[.4875,.8775,-5],[.8775,.4875,-5],[.91,0,-5],[.8775,-.4875,-5],[.4875,-.8775,-5],[0,-.91,-5],[-.4875,-.8775,-5],[-.8775,-.4875,-5],[-.91,0,-5],[-.8775,.4875,-5],[-.4875,.8775,-5]],N=[[0,.45,.65],[.5,.8,.9]],B=function(){function t(e,a,o){Object(r.a)(this,t);var c=new j.s({vertexColors:!0,opacity:.4,transparent:!0});c.side=j.j;var i=function(){var t=new j.e,e=new Float32Array([].concat(Object(s.a)(_[0]),Object(s.a)(_[1]),Object(s.a)(_[2]),Object(s.a)(_[3]),Object(s.a)(_[4]),Object(s.a)(_[5]),Object(s.a)(_[6]),Object(s.a)(_[7]),Object(s.a)(_[8]),Object(s.a)(_[9]),Object(s.a)(_[10]),Object(s.a)(_[11]),Object(s.a)(_[12]),Object(s.a)(_[13]),Object(s.a)(_[14]),Object(s.a)(_[15]),Object(s.a)(_[16]),Object(s.a)(_[17]),Object(s.a)(_[18]),Object(s.a)(_[19]),Object(s.a)(_[20]),Object(s.a)(_[21]),Object(s.a)(_[22]),Object(s.a)(_[23]),Object(s.a)(_[24]),Object(s.a)(_[25]),Object(s.a)(_[26]),Object(s.a)(_[27]),Object(s.a)(_[28]),Object(s.a)(_[29]),Object(s.a)(_[30]),Object(s.a)(_[31]),Object(s.a)(_[32]),Object(s.a)(_[33]),Object(s.a)(_[34]),Object(s.a)(_[35]),Object(s.a)(_[36]),Object(s.a)(_[37]),Object(s.a)(_[38]),Object(s.a)(_[39]),Object(s.a)(_[40]),Object(s.a)(_[41]),Object(s.a)(_[42]),Object(s.a)(_[43]),Object(s.a)(_[44]),Object(s.a)(_[45]),Object(s.a)(_[46]),Object(s.a)(_[47])));t.setAttribute("position",new j.d(e,3));var a=new Float32Array([].concat(Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[0]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1]),Object(s.a)(N[1])));return t.setAttribute("color",new j.d(a,3)),t.setIndex([0,6,1,1,6,2,2,6,3,3,6,4,4,6,5,7,6,8,8,6,9,9,6,10,10,6,11,11,6,0,12,0,13,13,0,1,13,1,14,14,1,2,14,2,15,15,2,3,15,3,16,16,3,4,16,4,17,17,4,5,17,5,18,18,5,6,18,6,19,19,6,7,19,7,20,20,7,8,20,8,21,21,8,9,21,9,22,22,9,10,22,10,23,23,10,11,23,11,12,12,11,0,24,12,25,25,12,13,25,13,14,26,25,14,26,14,27,27,14,15,27,15,28,28,15,16,28,16,17,29,28,17,29,17,30,30,17,18,30,18,19,31,30,19,31,19,20,32,31,20,32,20,33,33,20,21,33,21,22,34,33,22,34,22,23,35,34,23,35,23,12,24,35,12,36,24,37,37,24,25,37,25,38,38,25,26,38,26,39,39,26,27,39,27,40,40,27,28,40,28,41,41,28,29,41,29,42,42,29,30,42,30,43,43,30,31,43,31,44,44,31,32,44,32,45,45,32,33,45,33,46,46,33,34,46,34,47,47,34,35,47,35,36,36,35,24]),t.computeVertexNormals(),t}(),n=new j.o(i,c);n.position.x=1;var b=new j.c(2,.6,.6),O=new j.s({color:"red"}),h=new j.o(b,O);h.position.set(1.1,0,-1.5);var p=new j.o(b,O);p.position.set(1.1,0,-1.5),p.rotation.y=1.5708,this.group=new j.n,this.group.add(n,h,p),this.group.rotation.x=1.5708,this.group.scale.set(e,e,e),this.group.position.set(a.x,a.y,a.z),this.velocity={x:-.2,y:-.1},this.maxVelocity={y:.1},this.radius=e,this.stop=o,this.type="healthPotion"}return Object(O.a)(t,[{key:"move",value:function(t){this.group.position.y<-1?this.velocity.y=Math.min(this.velocity.y+.001,this.maxVelocity.y):this.group.position.y>2&&(this.velocity.y=Math.max(this.velocity.y-.001,-this.maxVelocity.y)),this.group.position.x+=this.velocity.x,this.group.position.y+=this.velocity.y}}]),t}(),W=a.p+"static/media/crystal.50c70b94.jpg",T=function(){function t(e,a,o){Object(r.a)(this,t);var c=(new j.y).load(W),i=new j.m;i.vertices.push(new j.C(-1,0,0),new j.C(1,0,0),new j.C(0,0,-1),new j.C(0,0,1),new j.C(0,-1.75,0),new j.C(0,1.75,0)),i.faces.push(new j.k(2,0,4),new j.k(3,4,0),new j.k(0,2,5),new j.k(3,0,5),new j.k(1,2,4),new j.k(1,4,3),new j.k(1,5,2),new j.k(1,3,5));for(var n=0;n<i.faces.length;n++)i.faceVertexUvs[i.faces[n].materialIndex].push([new j.B(0,0),new j.B(.5,0),new j.B(.5,.5)]);i.uvsNeedUpdate=!0;var b=new j.p({map:c,side:j.b,transparent:!0,opacity:.9,color:13426175}),s=new j.o(i,b),O=new j.o(new j.z(1.2,.125,10,50),new j.s({color:13217136}));O.rotation.x=Math.PI/2,this.group=new j.n,this.group.add(s,O),this.group.position.set(a.x,a.y,a.z),this.radius=e,this.group.scale.set(e,e,e),this.velocity={x:-.3,y:0},this.maxVelocity={y:.3},this.stop=o,this.health=80,this.cooldown={hit:0},this.type="pylon"}return Object(O.a)(t,[{key:"move",value:function(t){this.group.position.x+=-.15,this.group.rotation.y+=.05}},{key:"updateCooldowns",value:function(){this.cooldown.hit>0&&(this.cooldown.hit--,0===this.cooldown.hit&&x(this,1))}}]),t}(),U=function t(e,a){Object(r.a)(this,t),(new j.l).load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",(function(t){var o=new j.x("".concat(a),{font:t,size:.1,height:.01,curveSegments:4,bevelEnabled:!1});o.center();var c=new j.r,i=new j.o(o,c);e.score=i,e.add(e.score),i.position.set(.85,.7,-1)}))},G=function(){function t(){Object(r.a)(this,t),this.length=.8;var e=new j.c(this.length,.05,.01);e.translate(.5*this.length,0,0);var a=new j.r;this.health=new j.o(e,a),a=new j.s({color:"grey"}),(e=new j.c(this.length,.05,.009)).translate(.5*this.length,0,0),this.holder=new j.o(e,a),this.group=new j.n,this.group.add(this.health,this.holder),this.group.position.set(-1,.7,-1)}return Object(O.a)(t,[{key:"update",value:function(t){this.health.geometry=new j.c(this.length*t/100,.05,.01),this.health.geometry.translate(this.length*t/100*.5,0,0)}}]),t}(),L=function t(e,a){Object(r.a)(this,t),(new j.l).load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",(function(t){var o=new j.x("Game Over! You scored: ".concat(a,". Press any key to play again."),{font:t,size:.05,height:.01,curveSegments:4,bevelEnabled:!1});o.center();var c=new j.r,i=new j.o(o,c);e.restart=i,e.add(e.restart),i.position.set(0,0,-1)}))},Z=a.p+"static/media/shipBubble.d04a31b6.jpg",H=a.p+"static/media/spaceshiptexture.b95e56e8.jpg",J=[[.5,1,.5],[1,1,1],[1,1,.5],[0,.5,0],[.25,1,.75],[.5,.2,0],[0,.45,.65]],K=[[-.7,0,0],[0,0,.5],[.7,0,0],[0,0,-.5],[0,2.5,0],[0,-.3,0]],R=[[0,.5],[.5,.5],[1,.5],[.5,.5],[.5,1],[.5,0]],Q=[[0,0,0],[0,1.8,-.16],[0,1.8,.16],[0,1.5,.5],[0,1.5,-.5],[0,-.3,.16],[0,-.3,-.16],[0,-.5,.5],[0,-.5,-.5],[.3,0,0]],$=function(){var t=new j.e,e=new Float32Array([].concat(Object(s.a)(Q[0]),Object(s.a)(Q[2]),Object(s.a)(Q[1]),Object(s.a)(Q[0]),Object(s.a)(Q[1]),Object(s.a)(Q[4]),Object(s.a)(Q[0]),Object(s.a)(Q[4]),Object(s.a)(Q[6]),Object(s.a)(Q[0]),Object(s.a)(Q[6]),Object(s.a)(Q[8]),Object(s.a)(Q[0]),Object(s.a)(Q[8]),Object(s.a)(Q[7]),Object(s.a)(Q[0]),Object(s.a)(Q[7]),Object(s.a)(Q[5]),Object(s.a)(Q[0]),Object(s.a)(Q[5]),Object(s.a)(Q[3]),Object(s.a)(Q[0]),Object(s.a)(Q[3]),Object(s.a)(Q[2]),Object(s.a)(Q[9]),Object(s.a)(Q[1]),Object(s.a)(Q[2]),Object(s.a)(Q[9]),Object(s.a)(Q[2]),Object(s.a)(Q[3]),Object(s.a)(Q[9]),Object(s.a)(Q[3]),Object(s.a)(Q[5]),Object(s.a)(Q[9]),Object(s.a)(Q[5]),Object(s.a)(Q[7]),Object(s.a)(Q[9]),Object(s.a)(Q[7]),Object(s.a)(Q[8]),Object(s.a)(Q[9]),Object(s.a)(Q[8]),Object(s.a)(Q[6]),Object(s.a)(Q[9]),Object(s.a)(Q[6]),Object(s.a)(Q[4]),Object(s.a)(Q[9]),Object(s.a)(Q[4]),Object(s.a)(Q[1])));t.setAttribute("position",new j.d(e,3));var a=new Float32Array([].concat(Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6]),Object(s.a)(J[6])));return t.setAttribute("color",new j.d(a,3)),t.computeVertexNormals(),t},tt=function(){function t(e){Object(r.a)(this,t),this.boundary=e,this.velocity={x:0,y:0},this.maxVelocity={x:.3,y:.3},this.radius=1,this.health=100,this.cooldown={shoot:0,hit:0,spin:0};var a=new j.y,o=new j.q({map:a.load(Z)}),c=new j.q({vertexColors:!0}),i=new j.q({map:a.load(H)}),n=new j.q({color:6381921}),b=new j.q({color:8454079}),O=function(){var t=new j.e,e=new Float32Array([].concat(Object(s.a)(K[0]),Object(s.a)(K[1]),Object(s.a)(K[2]),Object(s.a)(K[3]),Object(s.a)(K[4]),Object(s.a)(K[5])));t.setAttribute("position",new j.d(e,3));var a=new Float32Array([].concat(Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1]),Object(s.a)(J[1])));t.setAttribute("color",new j.d(a,3));var o=new Float32Array([].concat(Object(s.a)(R[0]),Object(s.a)(R[1]),Object(s.a)(R[4]),Object(s.a)(R[1]),Object(s.a)(R[2]),Object(s.a)(R[4]),Object(s.a)(R[0]),Object(s.a)(R[5]),Object(s.a)(R[1]),Object(s.a)(R[1]),Object(s.a)(R[5]),Object(s.a)(R[2]),Object(s.a)(R[0]),Object(s.a)(R[4]),Object(s.a)(R[3]),Object(s.a)(R[3]),Object(s.a)(R[4]),Object(s.a)(R[2]),Object(s.a)(R[0]),Object(s.a)(R[3]),Object(s.a)(R[5]),Object(s.a)(R[2]),Object(s.a)(R[5]),Object(s.a)(R[3])));return t.setAttribute("uv",new j.d(o,2)),t.setIndex([0,1,4,1,2,4,0,5,1,1,5,2,0,4,3,3,4,2,0,3,5,2,5,3]),t.computeVertexNormals(),t}(),h=new j.o(O,i),p=$(),u=$(),l=new j.o(p,c),d=new j.o(u,c);l.position.x-=1,d.position.x+=1,d.rotateY(Math.PI);var w=new j.w(.35,4,4),y=new j.o(w,o),v=new j.h(.12,.12,.4,3),g=new j.o(v,n),f=new j.o(v,n),m=new j.z(.08,.06,20,20),x=new j.o(m,b),M=new j.o(m,b);x.position.x+=.35,x.position.y-=.35,x.rotation.x+=Math.PI/2,M.position.x-=.35,M.position.y-=.35,M.rotation.x+=Math.PI/2,y.position.y+=1.1,y.position.z+=.125,g.position.x+=.35,g.position.y-=.1,f.position.x-=.35,f.position.y-=.1,this.group=new j.n,this.group.add(h),this.group.add(l),this.group.add(d),this.group.add(y),this.group.add(g),this.group.add(f),this.group.add(x),this.group.add(M)}return Object(O.a)(t,[{key:"accelerate",value:function(t,e){this.velocity.x=Math.min(this.velocity.x+t,this.maxVelocity.x),this.velocity.y=Math.min(this.velocity.y+e,this.maxVelocity.y)}},{key:"move",value:function(){var t=this.boundary.x,e=this.boundary.y;this.velocity.x*=.97,this.velocity.y*=.97,this.group.position.x=Math.max(Math.min(this.group.position.x+this.velocity.x,t-this.radius),-t+this.radius),this.group.position.y=Math.max(Math.min(this.group.position.y+this.velocity.y,e-this.radius),-e+this.radius),Math.abs(this.group.position.x)===t&&(this.velocity.x=0),Math.abs(this.group.position.y)===e&&(this.velocity.y=0),this.group.rotation.x=-this.velocity.y+this.cooldown.spin}},{key:"updateCooldowns",value:function(){this.cooldown.shoot>0&&this.cooldown.shoot--,this.cooldown.hit>0&&(this.cooldown.hit--,0===this.cooldown.hit&&x(this,1)),this.cooldown.spin=Math.abs(this.cooldown.spin)>.01?.96*this.cooldown.spin:0}}]),t}(),et=10,at=function(t){var e=t.fieldOfView,a=t.width,o=t.height,c=t.nearPlane,i=t.farPlane,n={x:a/2*.03,y:o/2*.03},b={},r=new Set,O=new Set,p=new Set,u=new Set,l=new Set,w=new Set,g=0,f=!1,m=0,M=!1,q=new j.v,k=new j.u(e,a/o,c,i),P=new j.D;P.setSize(a,o),q.add(new j.a("white",.4));var I=new j.i("white",1);I.position.set(-3,3,3),I.target.position.set(0,0,0),q.add(I),q.add(I.target);var A=new j.n;q.add(A);var z=function(t){g+=t,A.remove(A.score),new U(A,g,k)};z(0),A.healthbar=new G,A.add(A.healthbar.group);var V=new tt(n);q.add(V.group),V.group.rotation.z=-Math.PI/2;for(var C=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=-50,o="planet"===t.type?2+3*Math.random():.1+Math.random()/8,c=Math.random()*a-o,i=(Math.random()*n.y*2-n.y)*(3+c/a),b=n.x*(3+c/a)+o,s=b-(e?Math.random()*b*2:0);t.group.position.set(s,i,c),t.group.scale.set(o,o,o),t.radius=o,t.stop=-b},S=function(t){var e=0===t?new d:new y;q.add(e.group),r.add(e),C(e,!0)},E=0;E<2;E++)S(E);for(var D=function(){var t=new h;q.add(t.group),r.add(t),C(t,!0)},X=0;X<50;X++)D();var _=!0,N=function(t){var e=t.group.position,a=e.x,o=e.y,c=e.z,i=t===V;a+=(t.radius+.2)*(i?1.5:-1.5);var b=t.velocity.x+(i?.8:-.5),s=new v(i?"cyan":"red",.2,{x:a,y:o,z:c},b,(n.x+.2)*(i?1:-1));q.add(s.group),i?(p.add(s),t.cooldown.shoot=15):(u.add(s),t.cooldown.shoot=75)},W=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t.forEach((function(c){c.move(V.group.position),e&&("kraken"===c.type?c.animate(m):"ship"===c.type&&0===c.cooldown.shoot&&(N(c),c.cooldown.shoot=75),c.updateCooldowns());(a&&Z(c,V)&&("healthPotion"===c.type?J(V,50,et):(J(V,-5,et),0===V.health&&Q()),e||K(t,c)),o)&&new Set([].concat(Object(s.a)(O),Object(s.a)(w))).forEach((function(e){Z(c,e)&&(J(e,-34,et),0===e.health&&(K("pylon"===e.type?w:O,e),z("pylon"===e.type?1e3:100)),K(t,c))}));(!o&&c.group.position.x<=c.stop||o&&c.group.position.x>=c.stop)&&("star"===c.type||"planet"===c.type?C(c):K(t,c))}))},Z=function(t,e){return!(t.cooldown&&t.cooldown.hit>0||e.cooldown&&e.cooldown.hit>0)&&H(t,e)<=t.radius+e.radius},H=function(t,e){return Math.sqrt(Math.pow(t.group.position.x-e.group.position.x,2)+Math.pow(t.group.position.y-e.group.position.y,2))-t.radius/2-e.radius/2},J=function(t,e,a){0===t.cooldown.hit&&(t.health=Math.min(Math.max(t.health+e,0),100),t.cooldown.hit=a,x(t,.2),t===V&&A.healthbar.update(V.health))},K=function(t,e){q.remove(e.group),t.delete(e)},R=function(){_=!_,M=!0},Q=function(){q.remove(V.group),new L(A,g,k),f=!0},$=new j.C,at=function(){b[38]|b[87]&&(_?(0===V.cooldown.spin&&V.velocity.y<2*-V.maxVelocity.y/3&&(V.cooldown.spin=2*Math.PI),V.accelerate(0,.01)):k.position.add(k.getWorldDirection($))),b[40]|b[83]&&(_?(0===V.cooldown.spin&&V.velocity.y>2*V.maxVelocity.y/3&&(V.cooldown.spin=2*-Math.PI),V.accelerate(0,-.01)):k.position.sub(k.getWorldDirection($))),b[37]|b[65]&&(_?V.accelerate(-.01,0):(k.rotateY(Math.PI/2),k.position.add(k.getWorldDirection($)),k.rotateY(-Math.PI/2))),b[39]|b[68]&&(_?V.accelerate(.01,0):(k.rotateY(Math.PI/2),k.position.sub(k.getWorldDirection($)),k.rotateY(-Math.PI/2))),b[32]|b[73]&&_&&0===V.cooldown.shoot&&(N(V),V.cooldown.shoot=15),b[80]?M||(R(),k.position.set(0,0,15)):M=!1};return{keyMap:b,camera:k,renderer:P,animate:function t(){if(window.requestAnimationFrame(t),P.render(q,k),at(),_){k.rotation.set(.2*V.group.position.y/n.y,.2*-V.group.position.x/n.x,0),A.position.set(k.position.x,k.position.y,k.position.z),A.rotation.set(k.rotation.x,k.rotation.y,k.rotation.z),V.move(),V.updateCooldowns(),W(r),W(O,!0,!f),W(p,!1,!1,!0),W(u,!1,!f),W(l,!1,!f),W(w,!0),m++;var e=Math.random();0===Math.floor(250*e)&&function(){var t=Math.random(),e=t>.6?1:1.4,a=2*n.x+e,o=Math.random()*n.y*2-n.y,c=t>.6?new F(e,{x:a,y:o,z:0},-a):new Y(e,{x:a,y:o,z:0},-a);q.add(c.group),O.add(c)}(),0===Math.floor(1e3*e)&&function(){var t=2*n.x+.3,e=Math.random()*n.y*2-n.y,a=new B(.3,{x:t,y:e,z:0},-t);q.add(a.group),l.add(a)}(),0===Math.floor(1500*e)&&function(){var t=2*n.x+.7,e=Math.random()*n.y*2-n.y,a=new T(.7,{x:t,y:e,z:0},-t);q.add(a.group),w.add(a)}()}},toggleAction:R,getAction:function(){return _},getGameOver:function(){return f},restart:function(){A.remove(A.restart),V=new tt(n),q.add(V.group),V.group.rotation.z=-Math.PI/2,O.forEach((function(t){K(O,t)})),p.forEach((function(t){K(p,t)})),u.forEach((function(t){K(u,t)})),l.forEach((function(t){K(l,t)})),w.forEach((function(t){K(w,t)})),g=0,z(0),J(V,0,1),f=!1}}},ot=a(8),ct=Math.PI/180,it=function(){var t=Object(o.useState)(null),e=Object(b.a)(t,2),a=e[0],c=e[1],i=Object(o.useState)(!1),n=Object(b.a)(i,2),s=n[0],j=n[1],r=Object(o.useRef)();Object(o.useEffect)((function(){var t=null===r||void 0===r?void 0:r.current;if(t){var e=at({fieldOfView:75,width:window.innerWidth,height:window.innerHeight,nearPlane:.1,farPlane:1e3}),a=e.camera,o=e.renderer;a.position.z=15,t.innerHTML="",t.appendChild(o.domElement),e.animate(),c(e)}}),[r]);var O=function(t){a.getGameOver()&&"keydown"===t.type&&a.restart(),a.keyMap[t.keyCode]="keydown"===t.type};return Object(ot.jsxs)("section",{className:"App",children:[Object(ot.jsx)("header",{}),Object(ot.jsx)("main",{ref:r,onMouseDown:function(){j(!a.getAction())},onMouseMove:function(t){if(s&&a){var e=a.camera;e.translateZ(-15),e.rotateY(t.movementX*ct),e.rotateX(t.movementY*ct),e.translateZ(15)}},onMouseUp:function(){j(!1)},onKeyDown:O,onKeyUp:O,tabIndex:"0"})]})},nt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(e){var a=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,n=e.getTTFB;a(t),o(t),c(t),i(t),n(t)}))};n.a.render(Object(ot.jsx)(c.a.StrictMode,{children:Object(ot.jsx)(it,{})}),document.getElementById("root")),nt()}},[[24,1,2]]]);
//# sourceMappingURL=main.8d951887.chunk.js.map