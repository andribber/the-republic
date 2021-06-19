



window.onload = ()=> { 
    let textoPesquisa = localStorage.getItem('chave');
    let textoQuery = textoPesquisa.replaceAll(' ', '+');
    
    let xhr = new XMLHttpRequest;
    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=840364f0ff622ef0996a655803cc34ac&language=pt-BR&query=${textoQuery}&page=1&include_adult=true&region=BR`);
    xhr.onload = () => {
        let resposta = JSON.parse(xhr.responseText);
        console.log(resposta);
     };
    
    xhr.send();
}