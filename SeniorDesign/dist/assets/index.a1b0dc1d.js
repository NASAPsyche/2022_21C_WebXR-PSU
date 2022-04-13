var ne=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)};var l=(t,e,a)=>(ne(t,e,"read from private field"),a?a.call(t):e.get(t)),d=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)},u=(t,e,a,c)=>(ne(t,e,"write to private field"),c?c.call(t,a):e.set(t,a),a);import{M as oe,a as C,S as re,b as y,c as ye,d as ie,P as we,R as be,W as xe,T as g,G as O,e as K,f as Me,D as Te,A as Ce,O as Ie,V as Ee,g as Pe,h as Q}from"./vendor.b052d864.js";const Re=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}};Re();function I(t,e){let a=null;return t=="texture"?a=new oe({map:e}):t=="color"?a=new oe({color:e}):t=="texture-basic"?a=new C({map:e}):a=new C({color:e}),a}function ce(t,e,a,c,o,r,m=1,f=1,M=1,G){const ae=new re;let T=null;return ae.load(t,function(w){T=new y(w,o),T.position.set(e,a,c),T.scale.set(m,f,M),G.add(T),r.add(T)},w=>{console.log(w.loaded/w.total*100+"% loaded")},w=>{console.log(w)}),G}var F,L;class Fe{constructor(e,a){d(this,F,void 0);d(this,L,void 0);u(this,F,e),u(this,L,a)}getFact(){return l(this,F)}getTimeWindow(){return l(this,L)}}F=new WeakMap,L=new WeakMap;var j,v,k,B,A,D,S,X,b,x,Y;class z extends y{constructor(e,a=32,c=32,o,r,m,f){super();d(this,j,void 0);d(this,v,void 0);d(this,k,void 0);d(this,B,void 0);d(this,A,void 0);d(this,D,void 0);d(this,S,void 0);d(this,X,void 0);d(this,b,void 0);d(this,x,void 0);d(this,Y,void 0);u(this,j,e),u(this,v,a),u(this,k,c),u(this,B,o),u(this,A,r),u(this,D,m),u(this,S,f),u(this,X,!1),u(this,b,[]),u(this,Y,0);let M=new ye(l(this,j),l(this,v),l(this,k));u(this,x,new y(M,l(this,S))),l(this,x).position.set(l(this,B),l(this,A),l(this,D))}getMesh(){return l(this,x)}initializeFactCards(e){}addFactCard(e,a){let c=new Fe(e,a);l(this,b).add(c)}getFactCard(e=0,a=null){if(a==null)return l(this,b)[e]}}j=new WeakMap,v=new WeakMap,k=new WeakMap,B=new WeakMap,A=new WeakMap,D=new WeakMap,S=new WeakMap,X=new WeakMap,b=new WeakMap,x=new WeakMap,Y=new WeakMap;const n=new ie;new ie;let i=new we(75,window.innerWidth/window.innerHeight,.1,1e3);const le=new be,de=new Ee;document.addEventListener("click",st);n.position.set(0,-10,-20);n.rotateX(-20);i.position.setZ(-10);i.position.setY(25);const h=new xe({alpha:!0,antialias:!0,canvas:document.querySelector("#bg")});h.autoClear=!1;h.setPixelRatio(window.devicePixelRatio);h.setSize(window.innerWidth,window.innerHeight);i.position.setZ(30);function Le(){h.xr.enabled=!0;let t=h.xr.getController(0);n.add(t),document.body.appendChild(Pe.createButton(h,{optionalFeatures:["dom-overlay"],domOverlay:{root:document.getElementById("ar-overlay")}})),h.setAnimationLoop(fe)}Le();window.addEventListener("resize",je);function je(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)}h.render(n,i);const E=20;let s=[];const ve=new g().load("../Resources/Textures/earthTexture.jpg");new g().load("../Resources/Maps/earthNormalMap.tif");const ke=I("texture",ve);s[s.length]=new z(3,32,32,E,0,10,ke);n.add(s[s.length-1].getMesh());s[s.length-1].getMesh().userData.clickable=!0;s[s.length-1].getMesh().userData.name="Earth";const Be=new g().load("../Resources/Textures/sun.jpg"),Ae=I("texture-basic",Be);s[s.length]=new z(10,32,32,0,0,0,Ae);s[s.length-1].getMesh().userData.clickable=!0;s[s.length-1].getMesh().userData.name="Sun";n.add(s[s.length-1].getMesh());const De=new g().load("../Resources/Textures/marsTexture.jpg"),Se=I("texture",De);s[s.length]=new z(3/2,32,32,-(E*1.5),0,0,Se);n.add(s[s.length-1].getMesh());s[s.length-1].getMesh().userData.clickable=!0;s[s.length-1].getMesh().userData.name="Mars";const Ge=new g().load("../Resources/Textures/moonTexture.jpg"),Oe=I("texture",Ge);s[s.length]=new z(3*.25,32,32,E+8,0,0,Oe);n.add(s[s.length-1].getMesh());const P=new O,ze=new g().load("../Resources/Textures/psycheTexture.jpg"),N=I("texture",ze);ce("../Resources/Models/PsycheModel.stl",0,0,-2,N,n);ce("../Resources/Models/SpaceCraft.stl",0,0,0,N,n,.005,.005,.005);const Ne=new K(5,3),We=new g().load("../Resources/Textures/psycheLabelTexture.jpg"),He=new C({map:We}),W=new y(Ne,He),ue=new re;ue.load("../Resources/Models/PsycheModel.stl",function(t){const e=new y(t,N);e.position.setZ(-(E*2.5)),e.userData.clickable=!0,e.userData.name="Psyche",n.add(e),P.add(e),W.position.set(e.position.x,e.position.y+5,e.position.z),n.add(W),P.add(W),n.add(P)},t=>{console.log(t.loaded/t.total*100+"% loaded")},t=>{console.log(t)});ue.load("../Resources/Models/SpaceCraft.stl",function(t){const e=new y(t,N);e.position.setZ(-(E*2.5)),e.scale.set(.005,.005,.005),n.add(e),P.add(e)},t=>{console.log(t.loaded/t.total*100+"% loaded")},t=>{console.log(t)});const qe=new Me(16050587,5,150);n.add(qe);const Ze=new K(5,3),Je=new g().load("../Resources/Textures/earthLabelTexture.jpg"),Ve=new C({map:Je,side:Te}),H=new y(Ze,Ve);H.position.set(s[0].getMesh().position.x,s[0].getMesh().position.y+5,s[0].getMesh().position.z);n.add(H);const Xe=new K(5,3),Ye=new g().load("../Resources/Textures/marsLabelTexture.jpg"),Ke=new C({map:Ye}),q=new y(Xe,Ke);q.position.set(s[2].getMesh().position.x,s[2].getMesh().position.y+5,s[2].getMesh().position.z);n.add(q);const he=new g().load("../Resources/Textures/spaceBackground.jpg");n.background=he;let U=!1,_=!1;const Qe=["The Psyche mission will begin by launching from our home planet Earth!","This is the Psyche spacecraft. It is an unmanned orbiting spacecraft.","The current launch date is set for August 01, 2022.","The Psyche spacecraft features two massive solar panels that total 800 square feet.","The Psyche spacecraft will relay information back to Earth using cutting-edge laser technology."],Ue=["Resources/Images/earthFact1.jpeg","Resources/Images/earthFact2.jpeg","Resources/Images/earthFact3.jpeg","Resources/Images/earthFact4.jpg","Resources/Images/earthFact5.jpg"];let $=!1;const _e=["The Psyche spacecraft will fly by Mars on its way to Psyche.","The fly by will give the spacecraft the extra speed it needs for its journey.","The spacecraft will gain speed from Mars using its gravitational pull. This is called a 'gravity assist.'","The gravity assist will also save fuel, money, and time.","The fly by is expected to happen sometime in 2023."],$e=["Resources/Images/marsFact1.jpeg","Resources/Images/marsFact2.jpeg","Resources/Images/marsFact3.jpg","Resources/Images/marsFact4.jpg","Resources/Images/marsFact5.JPG"];let ee=!1;const et=["Psyche lies in the asteroid belt between Mars and Jupiter.","Psyche is a unique asteroid, rich in metal. Scientists believe that studying it will reveal secrets about the formation of planets.","The spacecraft is set to arrive at Psyche in 2026, where it will orbit for 21 months.","As the spacecraft orbits Psyche, it will map the surface and study its properties. Information will be relayed back to Earth for study.","The name 'Psyche' comes from the Greek goddess of the soul."],tt=["Resources/Images/psycheFact1.jpg","Resources/Images/psycheFact2.jpg","Resources/Images/psycheFact3.JPG","Resources/Images/psycheFact4.jpg","Resources/Images/psycheFact5.jpg"];function st(t){de.set(t.clientX/window.innerWidth*2-1,-(t.clientY/window.innerHeight)*2+1),le.setFromCamera(de,i);const e=le.intersectObjects(n.children);if(e.length>0&&e[0].object.userData.clickable){const a=e[0];console.log(a),a.object.userData.name=="Earth"?_?Z():(_=!0,te("Earth"),J("Earth")):a.object.userData.name=="Mars"?$?Z():($=!0,te("Mars"),J("Mars")):a.object.userData.name=="Psyche"?ee?Z():(ee=!0,te("Psyche"),J("Psyche")):a.object.userData.name=="Sun"&&(U?(nt(),U=!1):(U=!0,at()))}}function at(){n.background=null}function nt(){n.background=he}function Z(){p=4,document.getElementById("fact-card").innerText="",_=!1,$=!1,ee=!1}function te(t){document.getElementById("fact-card").innerText="";const e=document.createElement("div");e.setAttribute("class","card");const a=document.createElement("img");a.setAttribute("class","card-img-top"),a.setAttribute("id","card-img");const c=document.createElement("div");c.setAttribute("class","card-body");const o=document.createElement("p");o.setAttribute("class","card-text"),o.setAttribute("id","fact-text"),c.appendChild(o);const r=document.createElement("div");r.setAttribute("class","card-button-container");const m=document.createElement("button"),f=document.createElement("button"),M=document.createTextNode("Close"),G=document.createTextNode("Read More");m.setAttribute("class","control-button"),f.setAttribute("class","control-button"),m.appendChild(M),f.appendChild(G),r.appendChild(m),r.appendChild(f),e.appendChild(a),e.appendChild(c),e.appendChild(r),document.getElementById("fact-card").appendChild(e),m.addEventListener("click",Z),f.addEventListener("click",function(){J(t)})}let p=0,me="";function J(t){p==4?p=0:t!=me?(console.log("different identifier, setting factIndex to 0"),p=0,me=t):p++;let e;switch(t){case"Earth":e=document.createTextNode(Qe[p]),document.getElementById("fact-text").innerHTML="",document.getElementById("fact-text").appendChild(e),document.getElementById("card-img").setAttribute("src",Ue[p]);break;case"Mars":e=document.createTextNode(_e[p]),document.getElementById("fact-text").innerHTML="",document.getElementById("fact-text").appendChild(e),document.getElementById("card-img").setAttribute("src",$e[p]);break;case"Psyche":e=document.createTextNode(et[p]),document.getElementById("fact-text").innerHTML="",document.getElementById("fact-text").appendChild(e),document.getElementById("card-img").setAttribute("src",tt[p]);break;default:console.log("Error in showNextFact switch")}}function ot(){const t=document.createElement("div");t.setAttribute("id","prompt"),t.setAttribute("class","on-top");const e=document.createElement("p");e.setAttribute("id","prompt-text"),e.innerText=`Click on Earth, Mars,
or Psyche for more info!`,t.appendChild(e),document.getElementById("ar-overlay").appendChild(t)}const pe=new Ce(16776656,.5);i.add(pe);n.add(pe);const rt=new Ie(i,h.domElement),R=new O;R.add(s[0].getMesh());R.add(s[3].getMesh());R.add(H);n.add(R);const V=new O;V.add(s[2].getMesh());V.add(q);n.add(V);const se=new O;se.add(s[3].getMesh());n.add(se);function ge(){h.setAnimationLoop(fe)}function fe(){requestAnimationFrame(ge),s[0].getMesh().rotation.y+=.003,s[2].getMesh().rotation.y+=.003,R.rotation.y+=5e-4,V.rotation.y+=4e-4,se.rotation.y+=5e-4,P.rotation.y+=2e-4,s[3].getMesh().rotation.y+=.003,H.lookAt(new Q(i.position.x,i.position.y,i.position.z)),q.lookAt(new Q(i.position.x,i.position.y,i.position.z)),W.lookAt(new Q(i.position.x,i.position.y,i.position.z)),rt.update(),h.render(n,i),h.autoClear=!1}ot();ge();