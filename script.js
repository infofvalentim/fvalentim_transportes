function toggleMenu(){

const menu=document.getElementById("menu");

menu.style.display =
menu.style.display === "block" ? "none" : "block";

}

/* contador animado */

const counters = document.querySelectorAll('.counter');

counters.forEach(counter=>{

counter.innerText='0';

const update=()=>{

const target=+counter.getAttribute('data-target');

const c=+counter.innerText;

const increment=target/200;

if(c<target){

counter.innerText=Math.ceil(c+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

}

update();

});
