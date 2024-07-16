const BurgerMenu = document.getElementById('BurgerMenu');
const BurgerMenuList = document.getElementById('BurgerMenuList');
BurgerMenu.addEventListener('click', () => {
    BurgerMenuList.classList.toggle('hidden');
})

function hideBurgerMenu() {
    BurgerMenu.click() && BurgerMenuList.classList.remove('hidden');
}


let heroText = document.getElementById('heroText');
heroText.innerText = '{';
const nameArray = ['M', 'o', 'h', 'a', 'm', 'm', 'e', 'd', ' ', 'I', 'r', 'f', 'a', 'n', '}'];
let i = 0;

 setInterval(() => {
    heroText.innerText += nameArray[i];
    i++;
    if (i > 15) {
         heroText.innerText='{';
         return i =0;
    }
}, 200)



 


