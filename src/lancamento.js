window.onload = () => {    


    let xhr = new XMLHttpRequest;
    xhr.open('GET', `https://api.themoviedb.org/3/trending/movie/day?api_key=840364f0ff622ef0996a655803cc34ac&language=pt-BR`);
    xhr.onload = () => {
    let item = JSON.parse (xhr.responseText);
    console.log(item);
    let i = 0;
 
    for (let j=0; j<5; j++){
    let addLancamento = document.getElementById('lancamento');
   
    addLancamento.innerHTML += 
 
    `     <div class= "col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 img-responsive imgLanc" id=innerImg">
            <div><img src="https://image.tmdb.org/t/p/w300/${item['results'][i]["poster_path"]}" alt="LANÇAMENTO" >
                <h2>${item['results'][i]["title"]}</h2>
            </div>
         </div>`;
     i++;
     addLancamento.innerHTML += `
         <div class= "col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 img-responsive imgLanc" id=innerImg">
            <div><img src="https://image.tmdb.org/t/p/w300/${item['results'][i]["poster_path"]}" alt="LANÇAMENTO" >
                <h2>${item['results'][i]["title"]}</h2>
            </div>
         </div>`;
     i++;
     addLancamento.innerHTML += `
         <div class= "col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 img-responsive imgLanc" id=innerImg">
            <div><img src="https://image.tmdb.org/t/p/w300/${item['results'][i]["poster_path"]}" alt="LANÇAMENTO" >
                <h2>${item['results'][i]["title"]}</h2>
            </div>
         </div>`;
     i++
     addLancamento.innerHTML += `
         <div class= "col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 img-responsive imgLanc" id=innerImg">
            <div><img src="https://image.tmdb.org/t/p/w300/${item['results'][i]["poster_path"]}" alt="LANÇAMENTO" >
                <h2>${item['results'][i]["title"]}</h2>
            </div>
         </div>`;
    i++;
 
    };
 }
    xhr.send();
}