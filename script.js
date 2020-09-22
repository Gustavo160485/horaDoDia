function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() //aqui ele esta pegando a hora da maquina
    //var hora = 8    //      desabilitando da para manipular manualmente
    msg.innerHTML = `Agora são <strong>${hora}h</strong> - Horário de Brasilia`
    
    if (hora >= 0 && hora < 12 ) {
        //Bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background ='yellow'
       

        
        
    }else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background ='gray'


    }else {
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background ='black'
        
        



    }
}