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




let worksDiv = document.getElementById('works');
const partners = document.getElementById('partners');
const projects = document.getElementById('projects');
// console.log(worksDiv.offsetHeight);
// console.log("Total Heigth  " + document.body.scrollHeight);
// console.log("  Kitta Scroll Kare  "+window.scrollY);
// console.log("  Work Div kitta Door hai upper se  "+worksDiv.offsetTop);
// console.log((document.body.scrollHeight*0.68));

const scrollAnime = ()=>{
   if((document.body.scrollHeight*0.55)<=window.scrollY){
        worksDiv.classList.add('appearAnime');
    }

    if((document.body.scrollHeight*0.50)>=window.scrollY){
       { let i=0;
        let clearPartners = setInterval(()=>{
            partners.innerText = i+1;
            i++;
            if (i > 10) {
                return i =0;
            }
        },100)
        setTimeout(()=>{
            clearInterval(clearPartners)
            return;
        },1000);
    }
    {
        let i=0;
        let clearProjects = setInterval(()=>{
            projects.innerText = i+1;
            i++;
            if (i > 50) {
                return i =0;
            }
        },100)
        setTimeout(()=>{
            clearInterval(clearProjects)
            return;
        },5000);
    }


    }
}

window.addEventListener('scroll',()=>{
    scrollAnime();
})


// if(){
//     worksDiv.classList.add('appearAnime');
//     console.log(document.body.offsetHeight*0.85);
// }


 


