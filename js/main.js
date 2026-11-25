var EMAIL="m.ahyan315@gmail.com";
var P=[
{n:"Dental Clinic Website",c:"Healthcare · Website",g:"#1fb5c9",b:"Dental<br>Clinic",img:["assets/projects/dental-1.jpg","assets/projects/dental-2.jpg"],d:"A modern clinic website with service listings, appointment booking and a patient-friendly layout.",f:["Modern landing page","Dental services section","Appointment booking","Contact information","Responsive design"],t:["Booking","Responsive","UI/UX"]},
{n:"Petrol Pump ERP System",c:"ERP · Business system",g:"#ffa500",b:"Petrol<br>Pump ERP",img:["assets/projects/erp-1.jpg","assets/projects/erp-2.jpg"],d:"A customised ERP for petrol pump operations, covering daily sales, fuel stock, transactions and reporting.",f:["Sales tracking","Fuel inventory management","Transaction management","Business reporting","Dashboard analytics"],t:["Inventory","Sales","Reports"]},
{n:"Clothing Brand Store",c:"Fashion · E-commerce",g:"#a34bff",b:"Clothing<br>Store",img:["assets/projects/fashion-1.jpg","assets/projects/fashion-2.jpg"],d:"A stylish online store with modern product displays, collections and a smooth shopping flow.",f:["Product listings","Clothing collections","Product categories","Shopping cart","Responsive storefront"],t:["Collections","Cart","Responsive"]},
{n:"Shopify Shoes Store",c:"Shopify · E-commerce",g:"#3b82f6",b:"Shoes<br>Store",img:["assets/projects/shoes-1.jpg","assets/projects/shoes-2.jpg"],d:"A conversion-focused Shopify store with clean product pages and organised collections.",f:["Shopify storefront","Shoe collections","Product detail pages","Responsive design","Modern e-commerce UI"],t:["Shopify","Product pages","Mobile-first"]}];
function slides(p){
 if(p.img.length)return p.img.map(function(s){return '<div class="sl"><img src="'+s+'" alt="'+p.n+'" loading="lazy"></div>'}).join('');
 var st='style="--g:'+p.g+'"';
 return '<div class="sl vs" '+st+'><div class="an">'+p.b+'</div><small>'+p.c+'</small></div><div class="sl vs" '+st+'><ul>'+p.f.slice(0,4).map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul></div>';
}
function show(p,auto){
 var n=p.img.length||2,h='<div class="show"><div class="trk">'+slides(p)+'</div>';
 h+='<button class="ar p" aria-label="Previous">‹</button><button class="ar n" aria-label="Next">›</button><div class="dots">';
 for(var i=0;i<n;i++)h+='<button aria-label="Slide '+(i+1)+'"></button>';
 var w=document.createElement('div');w.innerHTML=h+'</div></div>';var el=w.firstChild,i=0,tm,hov=false;
 var trk=el.querySelector('.trk'),ds=el.querySelectorAll('.dots button');
 function go(k){i=(k+n)%n;trk.style.transform='translateX(-'+i*100+'%)';ds.forEach(function(d,j){d.classList.toggle('on',j===i)})}
 el.querySelector('.p').onclick=function(e){e.stopPropagation();go(i-1)};
 el.querySelector('.n').onclick=function(e){e.stopPropagation();go(i+1)};
 ds.forEach(function(d,j){d.onclick=function(e){e.stopPropagation();go(j)}});
 go(0);el._go=go;if(auto&&!matchMedia('(prefers-reduced-motion:reduce)').matches){el.onmouseenter=function(){hov=true};el.onmouseleave=function(){hov=false};setInterval(function(){if(!hov&&!document.hidden)go(i+1)},5500)}
 return el;
}
var pg=document.getElementById('pg'),pv=document.getElementById('pv'),pvb=document.getElementById('pvb'),hideT,cur=-1;
P.forEach(function(p,k){
 var a=document.createElement('article');a.className='pc';a.tabIndex=0;a.setAttribute('aria-label',p.n+' – open preview');
 var sh=show(p,true);a.appendChild(sh);a._sh=sh;
 var inf=document.createElement('div');inf.className='inf';inf.innerHTML='<h3>'+p.n+'</h3><p>'+p.c+'</p><div class="tags">'+p.t.map(function(x){return '<span>'+x+'</span>'}).join('')+'</div>';a.appendChild(inf);
 pg.appendChild(a);
 var openT;
 a.addEventListener('mouseenter',function(){if(!desk())return;clearTimeout(hideT);clearTimeout(openT);openT=setTimeout(function(){openPv(k,a)},140)});
 a.addEventListener('mouseleave',function(){clearTimeout(openT);closeSoon()});
 a.addEventListener('click',function(){if(!desk())openPv(k,a)});
 a.addEventListener('keydown',function(e){if(e.key==='Enter'){openPv(k,a)}});
});
function desk(){return matchMedia('(hover:hover) and (min-width:900px)').matches}
function openPv(k,card){
 clearTimeout(hideT);var p=P[k],m=!desk();
 if(cur!==k){pv.innerHTML='<button class="x" aria-label="Close">×</button>';pv.appendChild(show(p,false));
  var b=document.createElement('div');b.className='bd';b.innerHTML='<h3>'+p.n+'</h3><p>'+p.d+'</p><ul>'+p.f.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul><div class="tags">'+p.t.map(function(x){return '<span>'+x+'</span>'}).join('')+'</div>';pv.appendChild(b);
  pv.querySelector('.x').onclick=closePv;cur=k}
 pv.classList.toggle('modal',m);pvb.classList.toggle('on',m);
 if(m){pv.style.left=pv.style.top=''}else{
  var r=card.getBoundingClientRect(),w=Math.min(520,innerWidth*.92),ph=pv.offsetHeight||380,x=r.right+14;
  if(x+w>innerWidth-12)x=r.left-w-14;if(x<12)x=Math.max(12,r.left+(r.width-w)/2);
  pv.style.left=x+'px';pv.style.top=Math.max(76,Math.min(r.top+r.height/2-ph/2,innerHeight-ph-16))+'px'}
 pv.classList.add('on');
}
function closePv(){pv.classList.remove('on');pvb.classList.remove('on');cur=-1}
function closeSoon(){clearTimeout(hideT);hideT=setTimeout(closePv,220)}
pv.addEventListener('mouseenter',function(){clearTimeout(hideT)});
pv.addEventListener('mouseleave',function(){if(desk())closeSoon()});
pvb.onclick=closePv;
addEventListener('keydown',function(e){if(e.key==='Escape')closePv()});
addEventListener('scroll',function(){if(desk()&&pv.classList.contains('on'))closePv()},{passive:true});
document.querySelectorAll('.skc').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')})});
var ft=document.getElementById('ft'),fi=0;
setInterval(function(){ft.style.opacity=0;setTimeout(function(){fi=(fi+1)%P.length;ft.textContent=P[fi].n;ft.style.opacity=1},400)},4500);

document.querySelector(".cut2").src=document.querySelector(".cut").src;
var RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(!RM){
 var rvs=document.querySelectorAll('section h2,section .lead,.pc,.skc,.st,.sv>div,.more,.ct2>*,.abg');
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target;io.unobserve(el);var d=el._d||0;setTimeout(function(){el.classList.add('in');setTimeout(function(){el.classList.remove('rv','in');el.style.transitionDelay=''},900)},d)})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
 rvs.forEach(function(el,i){el.classList.add('rv');el._d=(i%4)*90;io.observe(el)});
 var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){io2.unobserve(e.target);var s=e.target._sh;setTimeout(function(){if(s&&s._go)s._go(1)},900)}})},{threshold:.65});
 document.querySelectorAll('#pg .pc').forEach(function(c){io2.observe(c)});
 var hc=document.querySelector('.cut'),hb=document.querySelector('.big'),pi=document.querySelectorAll('.pc .sl img'),tk=false;
 function par(){tk=false;var y=scrollY,vh=innerHeight;
  if(y<vh*1.3){hc.style.transform='translate(-50%,'+(y*.06)+'px)';hb.style.transform='translate(-50%,'+(-y*.1)+'px)'}
  pi.forEach(function(im){var r=im.parentNode.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;var q=(r.top+r.height/2-vh/2)/vh;im.style.transform='translateY('+(q*-9)+'px) scale(1.1)'})}
 addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(par)}},{passive:true});par();
}

var bg=document.getElementById("bg"),nv=document.querySelector("header nav");
bg.addEventListener("click",function(){var o=nv.classList.toggle("open");bg.setAttribute("aria-expanded",o);bg.setAttribute("aria-label",o?"Close menu":"Open menu")});
nv.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){nv.classList.remove("open");bg.setAttribute("aria-expanded","false")})});
addEventListener("resize",function(){if(innerWidth>800){nv.classList.remove("open");bg.setAttribute("aria-expanded","false")}});

/* ============================================
   THEME SWITCHER — 3 interchangeable themes
   ============================================ */
(function(){
  var r=document.documentElement;
  var themes=["dark","light","ocean","ember"];
  var saved=localStorage.getItem("portfolio-theme");
  var current=(saved && themes.indexOf(saved)!==-1)?saved:"dark";
  r.setAttribute("data-theme",current);

  var btns=document.querySelectorAll(".theme-btn");
  function setActive(){
    btns.forEach(function(b){
      b.classList.toggle("active",b.getAttribute("data-theme")===current);
    });
  }
  setActive();

  btns.forEach(function(btn){
    btn.addEventListener("click",function(){
      current=btn.getAttribute("data-theme");
      r.setAttribute("data-theme",current);
      localStorage.setItem("portfolio-theme",current);
      setActive();
    });
  });
})();

addEventListener("scroll",function(){var h=document.documentElement;document.getElementById("bar").style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%"},{passive:true});
addEventListener("load",function(){setTimeout(function(){document.getElementById("load").classList.add("off")},500)});
