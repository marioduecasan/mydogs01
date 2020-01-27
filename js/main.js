//declarando variables para el menu

const faBar = document.getElementById('faBar');
const nav = document.getElementById('nav');
let estado = true;

//creando evento mostrar ocultar menu

faBar.addEventListener('click', Menu);

function Menu(){
    if(estado){
        nav.style.transform = "translateX(0%)";
        estado = false;     
    }else{
        nav.style.transform = "translateX(-100%)";
        estado = true;
    } 
}


