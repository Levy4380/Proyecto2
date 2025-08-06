const no_button=document.getElementById('no');
const yes_button = document.getElementById('yes');
const contenedor = document.getElementById('contenedor');
const mensaje = document.getElementById('mensaje');

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

no_button.addEventListener('mouseover',cambiarLugar);
yes_button.addEventListener('click',function(e){
    e.preventDefault();
    console.log('funcionooo')
    mensaje?.style.visibility= 'visible';
    contenedor?.style.visibility='hidden';
    document.body.style.backgroundColor = 'red';
    mensaje?.style.backgroundColor = 'white';
});

