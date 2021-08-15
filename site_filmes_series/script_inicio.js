let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

if(localStorage.getItem('token') == null){

    //alert('Você não está logado!')
    window.location.href='../index.html'

}else{

    logado.innerHTML = `Olá ${userLogado.nome}`
}

function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href='../index.html'
}



/* Narcos serie  */

function btn_narcos(){

    let videoPlayer = document.querySelector(".videoPlayer")

    videoPlayer.poster = 'https://imgr.cineserie.com/2020/12/narcos-secrets-de-serie.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1'

    //videoPlayer.src = 'http://cdn99.one:80/series/lucassfontessantos/br48936/10454'
    videoPlayer.src = 'http://38.130.243.204/deliver/10454.mp4?ctoken=ArgDvpwyYRxfQCce.dll'
    document.querySelector(".videoPlayer").play()

}

/*Supernatura*/

function btn_supernatura(){

    let videoPlayer = document.querySelector(".videoPlayer")
    
    videoPlayer.setAttribute('style', 'display:block')

    videoPlayer.poster = 'https://ntvb.tmsimg.com/assets/p17057825_i_h11_aa.jpg'

    //videoPlayer.src = 'http://cdn99.one:80/series/lucassfontessantos/br48936/91939.mp4'
    videoPlayer.src = 'https://get.streamz.tw/getlink-ac730a8f24988e4c3b7bf893599e9db3.dll'

    document.querySelector(".videoPlayer").play()
    
}