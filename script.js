/* LINKS UTEIS

https://github.com/cavestri/themoviedb-javascript-library/

API KEY 840364f0ff622ef0996a655803cc34ac

<div id="addItem">
     <div class="row imgLanc">
         <div class="col-sm-12 col-md-6 col-lg-3" class="imagemLancamento">
             <div codigo="${id}"><img src="https://image.tmdb.org/t/p/w300/${foto}" alt="LANÇAMENTO" >
                 <h2>titulo</h2>
             </div>
         </div>
     </div>
</div>

*/

var apiKey = '840364f0ff622ef0996a655803cc34ac';

window.onload = () => {    


   let xhr = new XMLHttpRequest;
   xhr.open('GET', `https://api.themoviedb.org/3/trending/movie/day?api_key=840364f0ff622ef0996a655803cc34ac&language=pt-BR`);
   xhr.onload = () => {
   let item = JSON.parse (xhr.responseText);
   console.log(item);

   for (let i=0; i<10; i++){
   let addLancamento = document.getElementById('lancamento');
  
   addLancamento.innerHTML += 
   `<div class="col-sm-12 col-3">
           <div><img src="https://image.tmdb.org/t/p/w300/${item['results'][i]["poster_path"]}" alt="LANÇAMENTO" >
               <h2>${item['results'][i]["title"]}</h2>
           </div>
   </div>`;
   };
}
   xhr.send();
    
   let btn = document.getElementById('btnLancamento');
   btn.onclick = carregaMaisLancamento();
   
}