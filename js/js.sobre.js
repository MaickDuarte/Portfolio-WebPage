/* 
padrao: lista-habilidades e menu-experiencias com style="display: none;"
ao clicar em 'PRINCIPAIS HABILIDADES' 
- escolha = display:none;
- lista-habilidades = display: flex;
- menu-experiencias = display: none;
ao clicar em EXPERIENCIAS PROFISSIONAIS
- escolha = display:none;
- lista-habilidades = display: none;
- menu-experiencias = display: flex;
ao clicar em JOVEM APRENDIZ
- jovem-experiencia = display: flex;
- tecnico-experiencia = display: none;
ao clicar em TECNICO DE SUPORTE EM TI
- jovem-experiencia = display: none;
- tecnico-experiencia = display: flex;
*/
var escolha = document.querySelector("#escolha");
var ph = document.querySelector("#ph");
var ep = document.querySelector("#ep");
var habilidades = document.querySelector("#listaHabilidades");
var experiencias = document.querySelector("#menuExperiencias");
var jovem = document.querySelector("#jovemExperiencia");
var tecnico = document.querySelector("#tecnicoExperiencia");
var tj = document.querySelector("#tituloJovem");
var tt = document.querySelector("#tituloTecnico");


function mostrarHabilidades(){
    escolha.style.display = "none";
    habilidades.style.display = "flex";
    experiencias.style.display = "none";
    ph.style.cssText = "text-decoration: underline #390981";
    ep.style.cssText = "text-decoration: none";
}

function mostrarExperiencias(){
    escolha.style.display = "none";
    habilidades.style.display = "none";
    experiencias.style.display = "flex";
    ph.style.cssText = "text-decoration: none";
    ep.style.cssText = "text-decoration: underline #390981"; 
}

function mostrarJovem(){
    jovem.style.display = "flex";
    tecnico.style.display = "none";
    tj.style.cssText = "text-decoration: underline #390981";
    tt.style.cssText = "none";
}
function mostrarTecnico(){
    jovem.style.display = "none";
    tecnico.style.display = "flex";
    tj.style.cssText = "text-decoration: none";
    tt.style.cssText = "text-decoration: underline #390981";
}


/* adicionei um botao na tela com o font awesome
    ao clicar nele, vai adicionar uma classe no nav-bar que mostra o menu
    tambem vai adicionar o icone do X
*/
var menuBotao = document.querySelector("#menuBotao")
function abrirMenu(){
    var nav = document.querySelector(".nav-bar")
    nav.classList.toggle("nav-bar-aberto")

    var botao = document.querySelector(".fa-bars")
    botao.classList.toggle("fa-x")

}