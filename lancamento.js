window.onload = () => {    


    let xhr = new XMLHttpRequest;
    xhr.open('GET', `https://api.themoviedb.org/3/trending/movie/day?api_key=840364f0ff622ef0996a655803cc34ac&language=pt-BR`);
    xhr.onload = () => {
    let item = JSON.parse (xhr.responseText);
    console.log(item);
    let i = 0;
 
    for (let j=0; j<5; j++){
        let addLancamento = document.getElementById('lancamento');
        let id = item['results'][i]['id'];
        let date = item['results'][i]['release_date'];
        let dataInvertida = date.split('-').reverse().join('/');
        let avaliacao = item['results'][i]['vote_average'];
        
       
        addLancamento.innerHTML += 
     
        `     <div class= "col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 img-responsive imgLanc" id=innerImg">
                <div codigo="${id}"><a href="http://www.themoviedb.org/movie/${id}" target="_blank"><img src="https://image.tmdb.org/t/p/w300/${item['results'][i]["poster_path"]}" alt="LANÇAMENTO" ></a>
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
                <div codigo="${id}"><a href="http://www.themoviedb.org/movie/${id}" target="_blank"><img src="https://image.tmdb.org/t/p/w300/${item['results'][i]["poster_path"]}" alt="LANÇAMENTO" ></a>
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
                <div codigo="${id}"><a href="http://www.themoviedb.org/movie/${id}" target="_blank"><img src="https://image.tmdb.org/t/p/w300/${item['results'][i]["poster_path"]}" alt="LANÇAMENTO" ></a>
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
                <div codigo="${id}"><a href="http://www.themoviedb.org/movie/${id}" target="_blank"><img src="https://image.tmdb.org/t/p/w300/${item['results'][i]["poster_path"]}" alt="LANÇAMENTO" ></a>
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
 
    };
 }
    xhr.send();
}