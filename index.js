import{a as C,i,S as L}from"./assets/vendor-CRCB-GUD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function y(a,r){try{return await C.get("https://pixabay.com/api/?",{params:{key:"45780077-211740ab05b8c84b50ffae6ce",q:`${a}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:`${r}`}})}catch(s){console.log(s)}}const b="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_602_57)'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.96912C7.03867%206.89927%207.12143%206.84386%207.21255%206.80605C7.30366%206.76824%207.40135%206.74878%207.5%206.74878C7.59865%206.74878%207.69633%206.76824%207.78745%206.80605C7.87857%206.84386%207.96133%206.89927%208.031%206.96912L12%2010.9396L15.969%206.96912C16.0387%206.89939%2016.1215%206.84407%2016.2126%206.80633C16.3037%206.7686%2016.4014%206.74917%2016.5%206.74917C16.5986%206.74917%2016.6963%206.7686%2016.7874%206.80633C16.8785%206.84407%2016.9613%206.89939%2017.031%206.96912C17.1007%207.03885%2017.156%207.12164%2017.1938%207.21274C17.2315%207.30385%2017.2509%207.4015%2017.2509%207.50012C17.2509%207.59874%2017.2315%207.69639%2017.1938%207.7875C17.156%207.8786%2017.1007%207.96139%2017.031%208.03112L13.0605%2012.0001L17.031%2015.9691C17.1007%2016.0389%2017.156%2016.1216%2017.1938%2016.2127C17.2315%2016.3039%2017.2509%2016.4015%2017.2509%2016.5001C17.2509%2016.5987%2017.2315%2016.6964%2017.1938%2016.7875C17.156%2016.8786%2017.1007%2016.9614%2017.031%2017.0311C16.9613%2017.1009%2016.8785%2017.1562%2016.7874%2017.1939C16.6963%2017.2316%2016.5986%2017.2511%2016.5%2017.2511C16.4014%2017.2511%2016.3037%2017.2316%2016.2126%2017.1939C16.1215%2017.1562%2016.0387%2017.1009%2015.969%2017.0311L12%2013.0606L8.031%2017.0311C7.96127%2017.1009%207.87848%2017.1562%207.78737%2017.1939C7.69626%2017.2316%207.59861%2017.2511%207.5%2017.2511C7.40138%2017.2511%207.30373%2017.2316%207.21262%2017.1939C7.12151%2017.1562%207.03873%2017.1009%206.969%2017.0311C6.89927%2016.9614%206.84395%2016.8786%206.80621%2016.7875C6.76847%2016.6964%206.74905%2016.5987%206.74905%2016.5001C6.74905%2016.4015%206.76847%2016.3039%206.80621%2016.2127C6.84395%2016.1216%206.89927%2016.0389%206.969%2015.9691L10.9395%2012.0001L6.969%208.03112C6.89915%207.96145%206.84374%207.87869%206.80593%207.78757C6.76812%207.69645%206.74866%207.59877%206.74866%207.50012C6.74866%207.40147%206.76812%207.30379%206.80593%207.21267C6.84374%207.12155%206.89915%207.03879%206.969%206.96912Z'%20fill='%23FAFAFB'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_602_57'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",d=document.querySelector(".gallery");function f(a){a.length===0&&i.warning({backgroundColor:"#EF4040",position:"center",iconUrl:b,message:"Sorry, there are no images matching your search query. Please try again!"});const r=a.map(s=>`<li class="gallery-card">
        <a class="gallery-link" href=${s.largeImageURL}>
          <img src=${s.webformatURL} data-source=${s.largeImageURL} alt=${s.tags} width="360">
        </a>
          <ul class="gallery-card-signature">
            <li><p class="gallery-card-signature-p">Likes</p><p class="gallery-card-signature-number">${s.likes}</p></li>
            <li><p class="gallery-card-signature-p">Views</p><p class="gallery-card-signature-number">${s.views}</p></li>
            <li><p class="gallery-card-signature-p">Comments</p><p class="gallery-card-signature-number">${s.comments}</p></li>
            <li><p class="gallery-card-signature-p">Downloads</p><p class="gallery-card-signature-number">${s.downloads}</p></li>
          </ul>
        </li>`).join("");l<=1?d.innerHTML=r:d.insertAdjacentHTML("beforeend",r)}const w=document.querySelector(".gallery"),v=document.querySelector(".search"),g=document.querySelector(".loader"),p=document.querySelector(".loaders"),h=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),n=document.querySelector(".button-load");let l=0,u=15,m="";async function q(a){try{w.innerHTML="",l=1,a.preventDefault();const o=a.target.elements.text.value.trim().toLowerCase();m=o,o===""&&(i.warning({backgroundColor:"#F4A460",position:"center",message:"Sorry, you haven't entered anything!"}),button.disabled=!0),g.classList.toggle("js-non-display");const t=(await y(o,l)).data.hits;f(t),n.classList.add("js-button-load"),(t.length===0||t.length<u)&&n.classList.toggle("js-button-load"),g.classList.toggle("js-non-display"),h.refresh()}catch(r){console.log(r)}}v.addEventListener("submit",q);async function x(a){try{l+=1,p.classList.toggle("js-non-display-pagination"),n.classList.toggle("js-button-load");const r=await y(m,l);f(r.data.hits),p.classList.toggle("js-non-display-pagination"),h.refresh();const s=r.data.total,o=Math.ceil(s/u);console.log(o),o<=l&&(i.warning({backgroundColor:"#FF4500",position:"center",message:"We're sorry, but you've reached the end of search results."}),n.classList.remove("js-button-load"));const t=document.querySelector(".gallery-card").getBoundingClientRect();window.scrollBy({top:`${t.height*2}`,behavior:"smooth"})}catch(r){console.log(r)}}n.addEventListener("click",x);
//# sourceMappingURL=index.js.map
