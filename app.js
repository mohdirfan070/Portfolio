const BurgerMenu = document.getElementById('BurgerMenu');
const BurgerMenuList = document.getElementById('BurgerMenuList');
BurgerMenu.addEventListener('click',()=>{
    BurgerMenuList.classList.toggle('hidden');
})

function hideBurgerMenu(){
    BurgerMenu.click() &&  BurgerMenuList.classList.remove('hidden');
}