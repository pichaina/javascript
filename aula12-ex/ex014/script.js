function verificar() {
    var data = new Date() //hora do sistema
    var ano = data.getFullYear() //pega 4 numeros do ano
    var fano = document.getElementById('txtano') // formulario ano
    var res = document.querySelector('div#res') 
    if (fano.value.length == 0 || Number(fano.value) > ano) { //se não colocar ano ou errar
        window.alert('[ERRO] Verificar os dados e tente novamente!') 
    } else {
        var fsex = document.getElementsByName('radsex') // bolinhas do sexo
        var idade = ano - Number(fano.value) // ano atual - idade
        //res.innerHTML = `idade calculada: ${idade}`- testar antes da próxima linha
        var genero = ''
        var img = document.createElement('img') //tag-elemento img
        img.setAttribute('id', 'foto') // img com id foto
        
        if (fsex[0].checked) { // 0 = masc / 1 = fem
            genero = 'Homem'
            if (idade >=0 && idade < 10) { // de 0 a 10 anos
                // Criança
                img.setAttribute('src', 'foto-bebe-m.png') //chama a foto
            } else if (/*idade >= 10 &&*/ idade < 22) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png') //chama a foto
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png') //chama a foto
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png') //chama a foto
            }            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) { // de 0 a 10 anos
                // Criança
                img.setAttribute('src', 'foto-bebe-f.png') //chama a foto
           
            } else if (/*idade >= 10 &&*/ idade < 22) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png') //chama a foto
           
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png') //chama a foto
           
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png') //chama a foto
            }          
        }
        res.style.textAlign = 'center' //centraliza a resposta no JS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        //adiciona o elemento imagem depois do codigo acima
        res.appendChild(img)
    }
}
