var ne=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)};var l=(t,e,a)=>(ne(t,e,"read from private field"),a?a.call(t):e.get(t)),d=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)},u=(t,e,a,i)=>(ne(t,e,"write to private field"),i?i.call(t,a):e.set(t,a),a);import{M as oe,a as C,S as re,b as y,c as ye,d as we,P as be,R as xe,W as Me,T as p,G as O,e as K,f as Te,D as Ce,A as Re,O as Ie,V as Pe,g as Le,h as Q}from"./vendor.b052d864.js";const Ee=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}};Ee();function R(t,e){let a=null;return t=="texture"?a=new oe({map:e}):t=="color"?a=new oe({color:e}):t=="texture-basic"?a=new C({map:e}):a=new C({color:e}),a}function ce(t,e,a,i,o,r,m=1,f=1,M=1,G){const ae=new re;let T=null;return ae.load(t,function(w){T=new y(w,o),T.position.set(e,a,i),T.scale.set(m,f,M),G.add(T),r.add(T)},w=>{console.log(w.loaded/w.total*100+"% loaded")},w=>{console.log(w)}),G}var E,F;class Fe{constructor(e,a){d(this,E,void 0);d(this,F,void 0);u(this,E,e),u(this,F,a)}getFact(){return l(this,E)}getTimeWindow(){return l(this,F)}}E=new WeakMap,F=new WeakMap;var j,v,k,B,A,D,S,X,b,x,Y;class z extends y{constructor(e,a=32,i=32,o,r,m,f){super();d(this,j,void 0);d(this,v,void 0);d(this,k,void 0);d(this,B,void 0);d(this,A,void 0);d(this,D,void 0);d(this,S,void 0);d(this,X,void 0);d(this,b,void 0);d(this,x,void 0);d(this,Y,void 0);u(this,j,e),u(this,v,a),u(this,k,i),u(this,B,o),u(this,A,r),u(this,D,m),u(this,S,f),u(this,X,!1),u(this,b,[]),u(this,Y,0);let M=new ye(l(this,j),l(this,v),l(this,k));u(this,x,new y(M,l(this,S))),l(this,x).position.set(l(this,B),l(this,A),l(this,D))}getMesh(){return l(this,x)}initializeFactCards(e){}addFactCard(e,a){let i=new Fe(e,a);l(this,b).add(i)}getFactCard(e=0,a=null){if(a==null)return l(this,b)[e]}}j=new WeakMap,v=new WeakMap,k=new WeakMap,B=new WeakMap,A=new WeakMap,D=new WeakMap,S=new WeakMap,X=new WeakMap,b=new WeakMap,x=new WeakMap,Y=new WeakMap;const n=new we;let c=new be(75,window.innerWidth/window.innerHeight,.1,1e3);const ie=new xe,le=new Pe;document.addEventListener("click",nt);c.position.setZ(-10);c.position.setY(25);const de=document.querySelector("#bg"),je=de.getContext("webgl",{xrCompatible:!0}),h=new Me({alpha:!0,antialias:!0,canvas:de,context:je});h.autoClear=!1;h.setPixelRatio(window.devicePixelRatio);h.setSize(window.innerWidth,window.innerHeight);c.position.setZ(30);function ve(){h.xr.enabled=!0;let t=h.xr.getController(0);function e(){console.log("Clicked")}h.xr.setReferenceSpaceType("viewer"),n.position.y=-50,t.addEventListener("select",e),n.add(t),document.body.appendChild(Le.createButton(h,{optionalFeatures:["dom-overlay"],domOverlay:{root:document.getElementById("fact-card")}})),h.setAnimationLoop(fe)}ve();window.addEventListener("resize",ke);function ke(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)}const I=20;let s=[];const Be=new p().load("../Resources/Textures/earthTexture.jpg");new p().load("../Resources/Maps/earthNormalMap.tif");const Ae=R("texture",Be);s[s.length]=new z(3,32,32,I,0,10,Ae);n.add(s[s.length-1].getMesh());s[s.length-1].getMesh().userData.clickable=!0;s[s.length-1].getMesh().userData.name="Earth";const De=new p().load("../Resources/Textures/sun.jpg"),Se=R("texture-basic",De);s[s.length]=new z(10,32,32,0,0,0,Se);s[s.length-1].getMesh().userData.clickable=!0;s[s.length-1].getMesh().userData.name="Sun";n.add(s[s.length-1].getMesh());const Ge=new p().load("../Resources/Textures/marsTexture.jpg"),Oe=R("texture",Ge);s[s.length]=new z(3/2,32,32,-(I*1.5),0,0,Oe);n.add(s[s.length-1].getMesh());s[s.length-1].getMesh().userData.clickable=!0;s[s.length-1].getMesh().userData.name="Mars";const ze=new p().load("../Resources/Textures/moonTexture.jpg"),Ne=R("texture",ze);s[s.length]=new z(3*.25,32,32,I+8,0,0,Ne);n.add(s[s.length-1].getMesh());const P=new O,We=new p().load("../Resources/Textures/psycheTexture.jpg"),N=R("texture",We);ce("../Resources/Models/PsycheModel.stl",0,0,-2,N,n);ce("../Resources/Models/SpaceCraft.stl",0,0,0,N,n,.005,.005,.005);const He=new K(5,3),qe=new p().load("../Resources/Textures/psycheLabelTexture.jpg"),Ze=new C({map:qe}),W=new y(He,Ze),ue=new re;ue.load("../Resources/Models/PsycheModel.stl",function(t){const e=new y(t,N);e.position.setZ(-(I*2.5)),e.userData.clickable=!0,e.userData.name="Psyche",n.add(e),P.add(e),W.position.set(e.position.x,e.position.y+5,e.position.z),n.add(W),P.add(W),n.add(P)},t=>{console.log(t.loaded/t.total*100+"% loaded")},t=>{console.log(t)});ue.load("../Resources/Models/SpaceCraft.stl",function(t){const e=new y(t,N);e.position.setZ(-(I*2.5)),e.scale.set(.005,.005,.005),n.add(e),P.add(e)},t=>{console.log(t.loaded/t.total*100+"% loaded")},t=>{console.log(t)});const Je=new Te(16050587,5,150);n.add(Je);const Ve=new K(5,3),Xe=new p().load("../Resources/Textures/earthLabelTexture.jpg"),Ye=new C({map:Xe,side:Ce}),H=new y(Ve,Ye);H.position.set(s[0].getMesh().position.x,s[0].getMesh().position.y+5,s[0].getMesh().position.z);n.add(H);const Ke=new K(5,3),Qe=new p().load("../Resources/Textures/marsLabelTexture.jpg"),Ue=new C({map:Qe}),q=new y(Ke,Ue);q.position.set(s[2].getMesh().position.x,s[2].getMesh().position.y+5,s[2].getMesh().position.z);n.add(q);const he=new p().load("../Resources/Textures/spaceBackground.jpg");n.background=he;let U=!1,_=!1;const _e=["The Psyche mission will begin by launching from our home planet Earth!","This is the Psyche spacecraft. It is an unmanned orbiting spacecraft.","The current launch date is set for August 01, 2022.","The Psyche spacecraft features two massive solar panels that total 800 square feet.","The Psyche spacecraft will relay information back to Earth using cutting-edge laser technology."],$e=["Resources/Images/earthFact1.jpeg","Resources/Images/earthFact2.jpeg","Resources/Images/earthFact3.jpeg","Resources/Images/earthFact4.jpg","Resources/Images/earthFact5.jpg"];let $=!1;const et=["The Psyche spacecraft will fly by Mars on its way to Psyche.","The fly by will give the spacecraft the extra speed it needs for its journey.","The spacecraft will gain speed from Mars using its gravitational pull. This is called a 'gravity assist.'","The gravity assist will also save fuel, money, and time.","The fly by is expected to happen sometime in 2023."],tt=["Resources/Images/marsFact1.jpeg","Resources/Images/marsFact2.jpeg","Resources/Images/marsFact3.jpg","Resources/Images/marsFact4.jpg","Resources/Images/marsFact5.JPG"];let ee=!1;const st=["Psyche lies in the asteroid belt between Mars and Jupiter.","Psyche is a unique asteroid, rich in metal. Scientists believe that studying it will reveal secrets about the formation of planets.","The spacecraft is set to arrive at Psyche in 2026, where it will orbit for 21 months.","As the spacecraft orbits Psyche, it will map the surface and study its properties. Information will be relayed back to Earth for study.","The name 'Psyche' comes from the Greek goddess of the soul."],at=["Resources/Images/psycheFact1.jpg","Resources/Images/psycheFact2.jpg","Resources/Images/psycheFact3.JPG","Resources/Images/psycheFact4.jpg","Resources/Images/psycheFact5.jpg"];function nt(t){le.set(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight)*2+1),ie.setFromCamera(le,c);const e=ie.intersectObjects(n.children);if(e.length>0&&e[0].object.userData.clickable){const a=e[0];console.log(a),a.object.userData.name=="Earth"?_?Z():(_=!0,te("Earth"),J("Earth")):a.object.userData.name=="Mars"?$?Z():($=!0,te("Mars"),J("Mars")):a.object.userData.name=="Psyche"?ee?Z():(ee=!0,te("Psyche"),J("Psyche")):a.object.userData.name=="Sun"&&(U?(rt(),U=!1):(U=!0,ot()))}}function ot(){n.background=null}function rt(){n.background=he}function Z(){g=4,document.getElementById("fact-card").innerText="",_=!1,$=!1,ee=!1}function te(t){document.getElementById("fact-card").innerText="";const e=document.createElement("div");e.setAttribute("class","card");const a=document.createElement("img");a.setAttribute("class","card-img-top"),a.setAttribute("id","card-img");const i=document.createElement("div");i.setAttribute("class","card-body");const o=document.createElement("p");o.setAttribute("class","card-text"),o.setAttribute("id","fact-text"),i.appendChild(o);const r=document.createElement("div");r.setAttribute("class","card-button-container");const m=document.createElement("button"),f=document.createElement("button"),M=document.createTextNode("Close"),G=document.createTextNode("Read More");m.setAttribute("class","control-button"),f.setAttribute("class","control-button"),m.appendChild(M),f.appendChild(G),r.appendChild(m),r.appendChild(f),e.appendChild(a),e.appendChild(i),e.appendChild(r),document.getElementById("fact-card").appendChild(e),m.addEventListener("click",Z),f.addEventListener("click",function(){J(t)})}let g=0,me="";function J(t){g==4?g=0:t!=me?(console.log("different identifier, setting factIndex to 0"),g=0,me=t):g++;let e;switch(t){case"Earth":e=document.createTextNode(_e[g]),document.getElementById("fact-text").innerHTML="",document.getElementById("fact-text").appendChild(e),document.getElementById("card-img").setAttribute("src",$e[g]);break;case"Mars":e=document.createTextNode(et[g]),document.getElementById("fact-text").innerHTML="",document.getElementById("fact-text").appendChild(e),document.getElementById("card-img").setAttribute("src",tt[g]);break;case"Psyche":e=document.createTextNode(st[g]),document.getElementById("fact-text").innerHTML="",document.getElementById("fact-text").appendChild(e),document.getElementById("card-img").setAttribute("src",at[g]);break;default:console.log("Error in showNextFact switch")}}const ge=new Re(16776656,.5);c.add(ge);n.add(ge);const ct=new Ie(c,h.domElement),L=new O;L.add(s[0].getMesh());L.add(s[3].getMesh());L.add(H);n.add(L);const V=new O;V.add(s[2].getMesh());V.add(q);n.add(V);const se=new O;se.add(s[3].getMesh());n.add(se);function pe(){h.setAnimationLoop(fe)}function fe(){requestAnimationFrame(pe),s[0].getMesh().rotation.y+=.003,s[2].getMesh().rotation.y+=.003,L.rotation.y+=5e-4,V.rotation.y+=4e-4,se.rotation.y+=5e-4,P.rotation.y+=2e-4,s[3].getMesh().rotation.y+=.003,H.lookAt(new Q(c.position.x,c.position.y,c.position.z)),q.lookAt(new Q(c.position.x,c.position.y,c.position.z)),W.lookAt(new Q(c.position.x,c.position.y,c.position.z)),ct.update(),h.render(n,c),h.autoClear=!1}pe();
