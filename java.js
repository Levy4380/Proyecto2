const no_button=document.getElementById('no');
const yes_button = document.getElementById('yes');
const close_button = document.querySelectorAll('.close');
const contenedor = document.getElementById('contenedor');
const mensajePositivo = document.getElementById('mensaje-positivo');
const mensajeNegativo = document.getElementById('mensaje-negativo');

let cambiarLugar = function(){
    randomNumber = function(max){
        const number = Math.random();
        const integerNumber = Math.floor(number*(max- 100));
        return integerNumber;
    };

    const i = randomNumber(window.innerHeight);
    const j = randomNumber(window.innerWidth);

    no_button.style.left= j + 'px' ; 
    no_button.style.top = i + 'px';
    no_button.style.position = 'absolute';
};

// no_button.addEventListener('mouseover',cambiarLugar);
no_button.addEventListener('click',function(e){
    e.preventDefault();
    console.log('funcionooo')
    mensajeNegativo.style.visibility= 'visible';
    contenedor.style.visibility='hidden';
    document.body.style.backgroundColor = 'red';
    mensajeNegativo.style.backgroundColor = 'white';
});
yes_button.addEventListener('click',function(e){
    e.preventDefault();
    console.log('funcionooo')
    mensajePositivo.style.visibility= 'visible';
    contenedor.style.visibility='hidden';
    document.body.style.backgroundColor = 'red';
    mensajePositivo.style.backgroundColor = 'white';
});

   close_button.forEach(element => {

       element.addEventListener('click',function(e){
    e.preventDefault();
    console.log('funcionooo')
    mensajePositivo.style.visibility= 'hidden';
    mensajeNegativo.style.visibility= 'hidden';
    contenedor.style.visibility='visible';
    document.body.style.backgroundColor = 'white';

});
    
   });



