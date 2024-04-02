const AbreMenu = document.getElementById('AbreMenu');

const FechaMenu = document.getElementById('FechaMenu');

const MenuLista = document.getElementById('Menu');

AbreMenu.addEventListener('click',function(){
    MenuLista.style.visibility= "visible";
});

FechaMenu.addEventListener('click',function(){
    MenuLista.style.visibility= "hidden";
});

MenuLista.addEventListener('click' , function(){
    if('click'!= MenuLista.children){
        MenuLista.style.visibility= "hidden";
    }
})




const LinkSobre = document.getElementById('LinkSobre');
const LinkProj = document.getElementById('LinkProj');
const LinkExp = document.getElementById('LinkExp');
const LinkCont = document.getElementById('LinkCont');

LinkSobre.addEventListener('click', function(){
    Menu.style.visibility= "hidden";
});
LinkProj.addEventListener('click', function(){
    Menu.style.visibility= "hidden";
});
LinkExp.addEventListener('click', function(){
    Menu.style.visibility= "hidden";
});
LinkCont.addEventListener('click', function(){
    Menu.style.visibility= "hidden";
});

const Proj1 = document.getElementById('P1');
const Proj2 = document.getElementById('P2');
const Proj3 = document.getElementById('P3');
const Proj4 = document.getElementById('P4');

const InfoP1 = document.getElementById('InfoP1');
const InfoP2 = document.getElementById('InfoP2');
const InfoP3 = document.getElementById('InfoP3');
const InfoP4 = document.getElementById('InfoP4');

const SairP1 = document.getElementById('SairP1');
const SairP2 = document.getElementById('SairP2');
const SairP3 = document.getElementById('SairP3');
const SairP4 = document.getElementById('SairP4');

Proj1.addEventListener("click", function(){
    InfoP1.style.display= "flex";
    Proj1.style.display= "none";
    InfoP1.scrollIntoView({ block: 'center',  behavior: 'smooth' });
});
Proj2.addEventListener("click", function(){
    InfoP2.style.display= "flex";
    Proj2.style.display= "none";
    InfoP2.scrollIntoView({ block: 'center',  behavior: 'smooth' });
});
Proj3.addEventListener("click", function(){
    InfoP3.style.display= "flex";
    Proj3.style.display= "none";
    InfoP3.scrollIntoView({ block: 'center',  behavior: 'smooth' });
});
Proj4.addEventListener("click", function(){
    InfoP4.style.display= "flex";
    Proj4.style.display= "none";
    InfoP4.scrollIntoView({ block: 'center',  behavior: 'smooth' });
});

SairP1.addEventListener("click", function(){
    InfoP1.style.display= "none";
    Proj1.style.display= "flex";
    Proj1.scrollIntoView({ block: 'center',  behavior: 'smooth' });
});
SairP2.addEventListener("click", function(){
    InfoP2.style.display= "none";
    Proj2.style.display= "flex";
    Proj2.scrollIntoView({ block: 'center',  behavior: 'smooth' });
});
SairP3.addEventListener("click", function(){
    InfoP3.style.display= "none";
    Proj3.style.display= "flex";
    Proj3.scrollIntoView({ block: 'center',  behavior: 'smooth' });
});
SairP4.addEventListener("click", function(){
    InfoP4.style.display= "none";
    Proj4.style.display= "flex";
    Proj4.scrollIntoView({ block: 'center',  behavior: 'smooth' });
});
