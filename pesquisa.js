



window.onload = ()=> { 

    alert('CASO NÃO CARREGUE OS RESULTADOS, ATUALIZE A PÁGINA ;)');

    let entrada = document.getElementById('barraPesquisa');
    let btnPesquisa = document.getElementById('botaoPesquisa');
    btnPesquisa.addEventListener('click', () => {
        localStorage.chave = entrada.value;
        document.location.href = '';
    });

    let textoPesquisa = localStorage.getItem('chave');
    let textoQuery = textoPesquisa.replaceAll(' ', '+');
    
    let xhr = new XMLHttpRequest;
    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=840364f0ff622ef0996a655803cc34ac&language=pt-BR&query=${textoQuery}&page=1&include_adult=true&region=BR`);
    xhr.onload = () => {
        let resposta = JSON.parse(xhr.responseText);
        let total = resposta["total_results"];
        for (let i = 0; i<total; i++){
            let addPesquisa = document.getElementById('resultadoPesquisa');
            let id = resposta['results'][i]['id'];
            let date = resposta['results'][i]['release_date'];
            let dataInvertida = date.split('-').reverse().join('/');
            let avaliacao = resposta['results'][i]['vote_average'];
            let sinopse = resposta['results'][i]['overview'];

            addPesquisa.innerHTML += 
                `<div class="col-sm-12 col-md-6 col-lg-3 img-responsive imgLanc" >
                <div class="imgInserida" codigo="${id}"><a href="http://www.themoviedb.org/movie/${id}" target="_blank"><img src="https://image.tmdb.org/t/p/w300/${resposta['results'][i]["poster_path"]}" alt="BANNER INDISPONÍVEL" ></a>
               <h2>${resposta['results'][i]["title"]}</h2>
               <h2>Lançamento: ${dataInvertida}</h2>
               <h2>Nota: ${avaliacao}</h2>
                </div>
                </div>`;
        }
     };
    
    xhr.send();
}