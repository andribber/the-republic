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

function carregaDestaques(genero=''){
    parouEm = 0;
    let xhr = new XMLHttpRequest;
    xhr.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=840364f0ff622ef0996a655803cc34ac&language=pt-BR&region=BR&include_adult=true&page=1&with_genres=${genero}`);
    xhr.onload = () => {
        setTimeout(()=>{
            poster = JSON.parse(xhr.responseText)["results"];
            for(let i=0; i<4; i++){

                let mobile = '';
                if(i<2){
                    mobile = 'mobile-hide medium-hide';
                }

                let id = poster[i]["id"];
                let title = poster[i]["title"];
                let foto = poster[i]["poster_path"];
                let date = poster[i]['release_date'];
                let dataInvertida = date.split('-').reverse().join('/');
                let avaliacao = poster[i]['vote_average'];

                let addPoster = document.getElementById("addPoster");

                if (parouEm==0){
                    addPoster.innerHTML = `
                    <div class="col-sm-12 col-md-6 col-lg-3 ${mobile} img-responsive imgLanc">
                        <div class="imgInserida" codigo="${id}"><a href="http://www.themoviedb.org/movie/${id}" target="_blank"><img src="https://image.tmdb.org/t/p/w300/${foto}"" alt="">
                        <h6>${title}</h6>
                        <h2>Lançamento: ${dataInvertida}</h2>
                        <h2>Nota: ${avaliacao}</h2>
                        </div></a>
                    </div>`;
                }
                else{
                    addPoster.innerHTML += `
                    <div class="col-sm-12 col-md-6 col-lg-3 ${mobile} img-responsive imgLanc">
                        <div class="imgInserida" codigo="${id}"><a href="http://www.themoviedb.org/movie/${id}" target="_blank"><img src="https://image.tmdb.org/t/p/w300/${foto}" alt="">
                        <h6>${title}</h6>
                        <h2>Lançamento: ${dataInvertida}</h2>
                        <h2>Nota: ${avaliacao}</h2>
                        </div></a>
                    </div>`;
                }

                parouEm++;
            }
            
        },200);
    };
    xhr.send();

}

function carregaMaisDestaque(){
    let continua = parouEm;
    let pare = parouEm+3;

    if(parouEm==20){
        alert("Limite de Carregamento");
    }

    for(let i=continua; i<(pare+1); i++){

        let mobile = '';
        if(i%2==0){
            mobile = 'mobile-hide medium-hide';
        }

        let id = poster[i]["id"];
        let title = poster[i]["title"];
        let foto = poster[i]["poster_path"];
        let date = poster[i]['release_date'];
        let dataInvertida = date.split('-').reverse().join('/');
        let avaliacao = poster[i]['vote_average'];

        let addPoster = document.getElementById("addPoster");
        addPoster.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-3 ${mobile} img-responsive imgLanc">
            <div class="imgInserida" codigo="${id}"><a href="http://www.themoviedb.org/movie/${id}" target="_blank"><img src="https://image.tmdb.org/t/p/w300/${foto}" alt="">
            <h6>${title}</h6>
            <h2>Lançamento: ${dataInvertida}</h2>
            <h2>Nota: ${avaliacao}</h2>
            </div></a>
        </div>`;
        parouEm++;
    }
}


function mudaGenero(gen=0){
    let visor = document.getElementById('catGen');
    let cat
    let idCat = '';

    switch (gen){
        case 0:
            cat="TODOS";
            idCat = '';
            break;
        case 1:
            cat="Ação";
            idCat = '28';
            break;
        case 2:
            cat="Aventura";
            idCat = '12';
            break;
        case 3:
            cat="Romance";
            idCat = '10749';
            break;
        case 4:
            cat="Comédia";
            idCat = '35';
            console.log("comédia ta funcionado ué");
            break;
        case 5:
            cat="Animação";
            idCat = '16';
            break;
        case 6:
            cat="Crime";
            idCat = '80';
            break;
        case 7:
            cat="Documentário";
            idCat = '99';
            break;
        case 8:
            cat="Drama";
            idCat = '18';
            break;
        case 9:
            cat="Familia";
            idCat = '10751';
            break;
        case 10:
            cat="Fantasia";
            idCat = '14';
            break;
        case 11:
            cat="História";
            idCat = '36';
            break;
        case 12:
            cat="Horror";
            idCat = '27';
            break;
        case 13:
            cat="Musical";
            idCat = '10402';
            break;
        case 14:
            cat="Mistério";
            idCat = '9648';
            break;
        case 15:
            cat="Ficção Ciêntifica";
            idCat = '878';
            break;
        case 16:
            cat="Guerra";
            idCat = '10752';
            break;
        case 17:
            cat="Velho Oeste";
            idCat = '37';
            break;
        case 18:
            cat="Suspense";
            idCat = '53';
            break;
    }
    visor.innerHTML = `Categoria: ${cat}`;
    carregaDestaques(idCat);
}




window.onload = () => {    
    let entrada = document.getElementById('barraPesquisa');
    let btnPesquisa = document.getElementById('botaoPesquisa');
    btnPesquisa.addEventListener('click', () => {
        localStorage.chave = entrada.value;
        document.location.href = 'pesquisa.html';
    });

   let xhr = new XMLHttpRequest;
   xhr.open('GET', `https://api.themoviedb.org/3/trending/movie/day?api_key=840364f0ff622ef0996a655803cc34ac&language=pt-BR`);
   xhr.onload = () => {
   let item = JSON.parse (xhr.responseText);
   console.log(item);
   let i = 0;
   

   for (let j=0; j<1; j++){
   let addLancamento = document.getElementById('lancamento');
   let id = item['results'][i]['id'];
   let date = item['results'][i]['release_date'];
   let dataInvertida = date.split('-').reverse().join('/');
   let avaliacao = item['results'][i]['vote_average'];

   
  
   addLancamento.innerHTML += 

   `     <div class= "col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 img-responsive imgLanc" id=innerImg">
           <div class="imgInserida" codigo="${id}"><a href="http://www.themoviedb.org/movie/${id}" target="_blank"><img src="https://image.tmdb.org/t/p/w300/${item['results'][i]["poster_path"]}" alt="LANÇAMENTO" ></a>
               <h2>${item['results'][i]["title"]}</h2>
               <h2>Lançamento: ${dataInvertida}</h2>
               <h2>Nota: ${avaliacao}</h2>
           </div>
        </div>
        `;
    i++;
    id = item['results'][i]['id'];
    date = item['results'][i]['release_date'];
    dataInvertida = date.split('-').reverse().join('/');
    avaliacao = item['results'][i]['vote_average'];
    addLancamento.innerHTML += `
        <div class= "col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 img-responsive imgLanc" id=innerImg">
           <div class="imgInserida" codigo="${id}"><a href="http://www.themoviedb.org/movie/${id}" target="_blank"><img src="https://image.tmdb.org/t/p/w300/${item['results'][i]["poster_path"]}" alt="LANÇAMENTO" ></a>
               <h2>${item['results'][i]["title"]}</h2>
               <h2>Lançamento: ${dataInvertida}</h2>
               <h2>Nota: ${avaliacao}</h2>
           </div>
        </div>`;
    i++;
    id = item['results'][i]['id'];
    date = item['results'][i]['release_date'];
    dataInvertida = date.split('-').reverse().join('/');
    avaliacao = item['results'][i]['vote_average'];
    addLancamento.innerHTML += `
        <div class= "col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 img-responsive imgLanc" id=innerImg">
           <div class="imgInserida" codigo="${id}"><a href="http://www.themoviedb.org/movie/${id}" target="_blank"><img src="https://image.tmdb.org/t/p/w300/${item['results'][i]["poster_path"]}" alt="LANÇAMENTO" ></a>
               <h2>${item['results'][i]["title"]}</h2>
               <h2>Lançamento: ${dataInvertida}</h2>
               <h2>Nota: ${avaliacao}</h2>
           </div>
        </div>`;
    i++
    id = item['results'][i]['id'];
    date = item['results'][i]['release_date'];
    dataInvertida = date.split('-').reverse().join('/');
    avaliacao = item['results'][i]['vote_average'];
    addLancamento.innerHTML += `
        <div class= "col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 img-responsive imgLanc" id=innerImg">
           <div class="imgInserida" codigo="${id}"><a href="http://www.themoviedb.org/movie/${id}" target="_blank"><img src="https://image.tmdb.org/t/p/w300/${item['results'][i]["poster_path"]}" alt="LANÇAMENTO" ></a>
               <h2>${item['results'][i]["title"]}</h2>
               <h2>Lançamento: ${dataInvertida}</h2>
               <h2>Nota: ${avaliacao}</h2>
           </div>
        </div>`;
   i++;

   };
}
   xhr.send();
    
   carregaDestaques();
   maisDestaque.onclick = carregaMaisDestaque;

   genTodos.onclick = () => mudaGenero(0);
   genAcao.onclick = () => mudaGenero(1);
   genAventura.onclick = () => mudaGenero(2);
   genRomance.onclick = () => mudaGenero(3);
   genComedia.onclick = () => mudaGenero(4);
   genAnima.onclick = () => mudaGenero(5);
   genCrime.onclick = () => mudaGenero(6);
   genDoc.onclick = () => mudaGenero(7);
   genDrama.onclick = () => mudaGenero(8);
   genFamilia.onclick = () => mudaGenero(9);
   genFanta.onclick = () => mudaGenero(10);
   genHist.onclick = () => mudaGenero(11);
   genHorror.onclick = () => mudaGenero(12);
   genMusica.onclick = () => mudaGenero(13);
   genMisterio.onclick = () => mudaGenero(14);
   genSciFi.onclick = () => mudaGenero(15);
   genGuerra.onclick = () => mudaGenero(16);
   genVelho.onclick = () => mudaGenero(17);
   genSus.onclick = () => mudaGenero(18);
};