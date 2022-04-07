function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') 
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked && idade <= 2 ) {
            // Bebê
            gênero = 'Bebê'
            img.setAttribute('src','imgweb/baby-boy.png')
        } else if (fsex[0].checked && idade <= 12 ) {
            // Criança
            gênero = 'Menino'
            img.setAttribute('src','imgweb/boy.png')
        } else if (fsex[0].checked && idade <= 19 ) {
            // Jovem
            gênero = 'Garoto'
            img.setAttribute('src','imgweb/jovem-m.png')
        } else if (fsex[0].checked && idade <= 59 ) {
            // Adulto
            gênero = 'Homem'
            img.setAttribute('src','imgweb/homem.png')
        } else if (fsex[0].checked && idade < 100 ) {
            // Idoso
            gênero = 'Idoso'
            img.setAttribute('src','imgweb/idoso-m.png')
        } else if (fsex[1].checked && idade <= 2 ) {
            // Bebê
            gênero = 'Bebê'
            img.setAttribute('src','imgweb/baby-girl.png')
        } else if (fsex[1].checked && idade <= 12 ) {
            // Criança
            gênero = 'Menina'
            img.setAttribute('src','imgweb/girl.png')
        } else if (fsex[1].checked && idade <= 19 ) {
            // Jovem
            gênero = 'Garota'
            img.setAttribute('src','imgweb/jovem-f.png')
        } else if (fsex[1].checked && idade <= 59 ) {
            // Adulta
            gênero = 'Mulher'
            img.setAttribute('src','imgweb/mulher.png')
        } else if (fsex[1].checked && idade < 100 ) {
            // Idoso
            gênero = 'Idosa'
            img.setAttribute('src','imgweb/idoso-f.png')
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    } 
}