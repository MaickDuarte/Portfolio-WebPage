var foiCalculado = 0
function calcular(){
    var calculo = document.getElementById("calculo").innerHTML
    var resultado = document.getElementById("resultado").innerHTML

    
    if(calculo.length == 0){
        document.getElementById("calculo").innerHTML = "INSIRA UM NUMERO"
    } else {
        var calculoPrimario = eval(calculo)
        var calculoPString = String(calculoPrimario)
        var posicaoPonto = calculoPString.indexOf(".")
        if(posicaoPonto != -1){
            document.getElementById("resultado").innerHTML = calculoPString.substring(0, posicaoPonto+4)
        } else {
            document.getElementById("resultado").innerHTML = eval(calculo)  
        } 
    }
foiCalculado = 1  
}
function insertNum(num){
    var calculo = document.getElementById("calculo").innerHTML
    if(calculo[0] == "I"){
        calculo = ""
    } else {}
    document.getElementById("calculo").innerHTML = calculo + num
    foiCalculado = 0
}
function insertSimb(simb){
    var resultado = document.getElementById("resultado").innerHTML
    if(foiCalculado == 1){
        document.getElementById("calculo").innerHTML = resultado
    }
    var calculo = document.getElementById("calculo").innerHTML
    var ultimoNum = calculo[calculo.length -1]
   
    if(calculo.length == 0){

    } else if(ultimoNum == "/" || ultimoNum == "*" || ultimoNum == "-" || ultimoNum == "+" || ultimoNum == "."){
        document.getElementById("calculo").innerHTML = calculo.substring(0, calculo.length -1)
        calculo = document.getElementById("calculo").innerHTML
        document.getElementById("calculo").innerHTML = calculo + simb
    } else {
        document.getElementById("calculo").innerHTML = calculo + simb
    }
    foiCalculado = 0
}
function insertPonto(ponto){
    var calculo = document.getElementById("calculo").innerHTML
    var posicaoPonto = calculo.lastIndexOf(".")
    var ultimoSimb = ""
    for(var i = calculo.length; i >=0; i--){
        if(calculo[i] == "/" ||calculo[i] == "*" ||calculo[i] == "-" ||calculo[i] == "+" ){
            ultimoSimb = i
            break
        }
    }
    if(ultimoSimb > posicaoPonto){
        posicaoPonto = -1
    }

    if(posicaoPonto != -1){

    } else {
        document.getElementById("calculo").innerHTML = calculo + ponto
    }
}
function apagarTudo(){
    foiCalculado = 0
    var calculo = document.getElementById("calculo").innerHTML
    var calculo = document.getElementById("resultado").innerHTML
    document.getElementById("calculo").innerHTML = ""
    document.getElementById("resultado").innerHTML = ""
}
function apagarUltimo(){
    foiCalculado = 0
    var calculo = document.getElementById("calculo").innerHTML
    if(calculo[0] == "I"){
        return apagarTudo()
    } else {
        document.getElementById("calculo").innerHTML = calculo.substring(0, calculo.length -1)
    }
}

function porcentagem(){
    var calculo = document.getElementById("calculo").innerHTML
    var ultimoSimb = ""
    var ultimoSimbPosition = ""
    for(var i = calculo.length; i>=0; i--){
        if(calculo[i] == "/" || calculo[i] == "*" || calculo[i] == "-" || calculo[i] == "+"){
            ultimoSimb = calculo[i]
            ultimoSimbPosition = i
            break
        }
    }
    var calculoInicio = calculo.substring(0,ultimoSimbPosition)
    var calculoFinal = calculo.substring(ultimoSimbPosition +1,calculo.length)

    var calculoInicio = eval(calculoInicio)
    var resultadoFinal = ""
    if(ultimoSimb == "*" || ultimoSimb == "/"){
        calculoFinal = calculoFinal / 100
        resultadoFinal =calculoInicio + ultimoSimb + calculoFinal

    } else if (ultimoSimb == "+" || ultimoSimb == "-"){
        calculoFinal = calculoInicio * calculoFinal / 100
        resultadoFinal = calculoInicio + ultimoSimb + calculoFinal

    } else {
        resultadoFinal = calculo / 100
    }
    document.getElementById("calculo").innerHTML = resultadoFinal
}
