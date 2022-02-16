import{S as X,P as $,W as ee,I as te,A as ne,T as c,a as v,M as x,b as d,c as C,D as oe,G as R,d as se,e as ae,f as q,g as re,h as ie,i as k,O as ce,V as de}from"./vendor.c8177b83.js";const le=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))w(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&w(p)}).observe(document,{childList:!0,subtree:!0});function b(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function w(o){if(o.ep)return;o.ep=!0;const s=b(o);fetch(o.href,s)}};le();const n=new X,ue=new X;let l=new $(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.setZ(-10);l.position.setY(25);const a=new ee({alpha:!0,antialias:!0,canvas:document.querySelector("#bg")}),I=new te(a,l,a.domElement);a.setPixelRatio(window.devicePixelRatio);a.setSize(window.innerWidth,window.innerHeight);l.position.setZ(30);a.xr.enabled=!0;document.body.appendChild(ne.createButton(a));window.addEventListener("resize",pe);function pe(){l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}a.render(n,l);const m=20,me=new c().load("../Resources/Textures/earthTexture.jpg");new c().load("../Resources/Maps/earthNormalMap.tif");const he=new v(3,32,32),we=new x({map:me}),r=new d(he,we);r.position.set(m,0,10);n.add(r);const fe=new c().load("../Resources/Textures/sun.jpg"),ge=new v(10,32,32),ye=new C({map:fe}),V=new d(ge,ye);n.add(V);const be=new c().load("../Resources/Textures/marsTexture.jpg"),xe=new v(3/2,32,32),Te=new x({map:be}),i=new d(xe,Te);i.position.setX(m*1.5);n.add(i);const Le=new c().load("../Resources/Textures/moonTexture.jpg"),Ee=new v(3*.25,32,32),Me=new x({map:Le}),T=new d(Ee,Me);T.position.setX(m+8);n.add(T);const ve=new c().load("../Resources/Textures/psycheTexture.jpg"),Ce=new oe(1),D=new x({map:ve}),h=new d(Ce,D);h.position.setX(m*2.5);r.position.setX(m);var f=new R;const Z=new se;Z.load("../Resources/Models/PsycheModel.stl",function(t){const e=new d(t,D);e.position.setX(m*2.5),n.add(e),f.add(e),n.add(f)},t=>{console.log(t.loaded/t.total*100+"% loaded")},t=>{console.log(t)});new x;Z.load("../Resources/Models/SpaceCraft.stl",function(t){const e=new d(t,D);e.position.setX(m*2.5),e.scale.set(.005,.005,.005),n.add(e),f.add(e)},t=>{console.log(t.loaded/t.total*100+"% loaded")},t=>{console.log(t)});const G=new de;let g=new ae;g.setSize(.4);g.mesh.material.side=q;n.add(g.mesh);function Re(){this.userData.isSelecting=!0,this.userData.skipFrames=2}function Ie(){this.userData.isSelecting=!1}let L=a.xr.getController(0);L.addEventListener("selectstart",Re);L.addEventListener("selectend",Ie);L.userData.skipFrames=0;n.add(L);function Be(t){const e=t.userData;G.set(0,0,-.2).applyMatrix4(t.matrixWorld),e.isSelecting===!0&&(e.skipFrames>=0?(e.skipFrames--,g.moveTo(G)):(g.lineTo(G),g.update()))}const K=re();document.body.appendChild(K.dom);const Fe=new ie(16050587,5,150);n.add(Fe);I.add(r);I.add(i);I.add(V);const Se=new k(5,3),je=new c().load("../Resources/Textures/earthLabelTexture.jpg"),Ae=new C({map:je,side:q}),B=new d(Se,Ae);B.position.set(r.position.x,r.position.y+5,r.position.z);const F=B.clone();F.rotation.y+=3.141;F.position.set(r.position.x,r.position.y+5,r.position.z-.01);n.add(B);n.add(F);const Pe=new k(5,3),ke=new c().load("../Resources/Textures/marsLabelTexture.jpg"),De=new C({map:ke}),S=new d(Pe,De);S.position.set(i.position.x,i.position.y+5,i.position.z);const j=S.clone();j.rotation.y+=3.141;j.position.set(i.position.x,i.position.y+5,i.position.z-.01);n.add(S);n.add(j);const Ge=new k(5,3),ze=new c().load("../Resources/Textures/psycheLabelTexture.jpg"),Ne=new C({map:ze}),A=new d(Ge,Ne);A.position.set(h.position.x,h.position.y+5,h.position.z);const P=A.clone();P.rotation.y+=3.141;P.position.set(h.position.x,h.position.y+5,h.position.z-.01);n.add(A);n.add(P);const Oe=new c().load("../Resources/Textures/spaceBackground.jpg");n.background=Oe;let z=!1;const We=["The Psyche mission will begin by launching from our home planet Earth!","This is the Psyche spacecraft. It is an unmanned orbiting spacecraft","The current launch date is set for August 01, 2022"],He=["Resources/Images/earthFact1.jpeg","Resources/Images/earthFact2.jpeg","Resources/Images/earthFact3.jpeg"];let N=!1;const Xe=["The Psyche spacecraft will fly by Mars on its way to Psyche","The fly by will give the spacecraft the extra speed it needs for its journey","The fly by is expected to happen sometime in 2023"],qe=["Resources/Images/marsFact1.jpeg","Resources/Images/marsFact2.jpeg","Resources/Images/marsFact3.jpeg"];r.addEventListener("click",t=>{z?O():(z=!0,U("Earth"),W("Earth"))});i.addEventListener("click",t=>{N?O():(N=!0,U("Mars"),W("Mars"))});function O(){u=2,document.getElementById("fact-card").innerText="",z=!1,N=!1}function U(t){document.getElementById("fact-card").innerText="";const e=document.createElement("div");e.setAttribute("class","card");const b=document.createElement("img");b.setAttribute("class","card-img-top"),b.setAttribute("id","card-img");const w=document.createElement("div");w.setAttribute("class","card-body");const o=document.createElement("p");o.setAttribute("class","card-text"),o.setAttribute("id","fact-text"),w.appendChild(o);const s=document.createElement("div");s.setAttribute("class","card-button-container");const p=document.createElement("button"),M=document.createElement("button"),Q=document.createTextNode("Close"),_=document.createTextNode("Read More");p.setAttribute("class","control-button"),M.setAttribute("class","control-button"),p.appendChild(Q),M.appendChild(_),s.appendChild(p),s.appendChild(M),e.appendChild(b),e.appendChild(w),e.appendChild(s),document.getElementById("fact-card").appendChild(e),p.addEventListener("click",O),M.addEventListener("click",function(){W(t)})}let u=0,Y="";function W(t){u==2?u=0:t!=Y?(console.log("different identifier, setting factIndex to 0"),u=0,Y=t):u++,console.log("Updating "+t+" with factIndex: "+u);let e;switch(t){case"Earth":e=document.createTextNode(We[u]),document.getElementById("fact-text").innerHTML="",document.getElementById("fact-text").appendChild(e),document.getElementById("card-img").setAttribute("src",He[u]);break;case"Mars":e=document.createTextNode(Xe[u]),document.getElementById("fact-text").innerHTML="",document.getElementById("fact-text").appendChild(e),document.getElementById("card-img").setAttribute("src",qe[u]);break;default:console.log("Error in showNextFact switch")}}const Ve=new ce(l,a.domElement);var y=new R;y.add(r);y.add(T);y.add(B);y.add(F);n.add(y);var E=new R;E.add(i);E.add(S);E.add(j);n.add(E);var H=new R;H.add(T);n.add(H);f.add(A);f.add(P);function J(){a.setAnimationLoop(Ze)}function Ze(){requestAnimationFrame(J),r.rotation.y+=.003,i.rotation.y+=.003,y.rotation.y+=5e-4,E.rotation.y+=4e-4,H.rotation.y+=5e-4,f.rotation.y+=2e-4,T.rotation.y+=.003,Ve.update(),Be(L),I.update(),K.update(),a.render(n,l),a.autoClear=!1,a.render(ue,l)}J();
