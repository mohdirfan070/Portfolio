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
        heroText.innerText = '{';
        return i = 0;
    }
}, 200)




let worksDiv = document.getElementById('works');

console.log(worksDiv.offsetHeight);
console.log("Total Heigth  " + document.body.scrollHeight);
console.log("  Kitta Scroll Kare  "+window.scrollY);
console.log("  Work Div kitta Door hai upper se  "+worksDiv.offsetTop);
console.log((document.body.scrollHeight*0.68));

console.log(document.body.offsetWidth);

const scrollAnime = () => {
    if ((document.body.scrollHeight * 0.55) <= window.scrollY) {
        worksDiv.classList.add('appearAnime');
    }
    // For max-width:850px
    if (document.body.offsetWidth <= 800) {
        // for Partners
        if ((document.body.scrollHeight * 0.50) >= window.scrollY) {
            const partners = document.getElementById('partners');
            {
                let i = 0;
                let clearPartners = setInterval(() => {
                    partners.innerText = i + 1;
                    i++;
                    if (i > 10) {
                        return i = 0;
                    }
                }, 100)
                setTimeout(() => {
                    clearInterval(clearPartners)
                    return;
                }, 1000);
            }
        }
        // For projects
        if ((document.body.scrollHeight * 0.52) >= window.scrollY) {

            const projectSpan1 = document.getElementById('projectSpan1');
            const projectSpan2 = document.getElementById('projectSpan2');
            // For Project Span 1
            projectSpan1.innerText=0;



             {
                let i = 0;
                let clearProjectSpan1 = setInterval(() => {
                    projectSpan1.innerText = i+1;
                    i++;
                    if (i >5) {
                        return i = 0;
                    }
                }, 1000)
                setTimeout(() => {
                    clearInterval(clearProjectSpan1)
                    return;
                }, 5000);
            }

             // For Project Span 2
             {
                let i = 0;
                let clearProjectSpan2 = setInterval(() => {
                    projectSpan2.innerText = i+1;
                    i++;
                    if (i >8) {
                        return i = 0;
                    }
                }, 100)
                setTimeout(() => {
                    clearInterval(clearProjectSpan2)
                     projectSpan2.innerText=0;
                    return;
                }, 4000);
            }

        }

        // For Clients
        if((document.body.scrollHeight * 0.54) >= window.scrollY){
            const Clients  = document.getElementById('clients');
            {
                let i = 0;
                let clearClients = setInterval(() => {
                    Clients.innerText = i+1;
                    i++;
                    if (i >25) {
                        return i = 0;
                    }
                }, 100)
                setTimeout(() => {
                    clearInterval(clearClients)
                     projectSpan2.innerText=0;
                    return;
                }, 2500);
            }
        }

        if((document.body.scrollHeight * 0.55) >= window.scrollY){
            const Meetings  = document.getElementById('meetings');
            {
                let i = 0;
                let clearMeetings = setInterval(() => {
                    Meetings.innerText = i+1;
                    i++;
                    if (i >100) {
                        return i = 0;
                    }
                }, 100)
                setTimeout(() => {
                    clearInterval(clearMeetings)
                    return;
                }, 5000);
            }
        }


    }else if((document.body.scrollHeight * 0.60) <= window.scrollY){
        const partners = document.getElementById('partners');

        {
            let i = 0;
            let clearPartners = setInterval(() => {
                partners.innerText = i + 1;
                i++;
                if (i > 10) {
                    return i = 0;
                }
            }, 100)
            setTimeout(() => {
                clearInterval(clearPartners)
                return;
            }, 1000);
        }

        const projectSpan1 = document.getElementById('projectSpan1');
        const projectSpan2 = document.getElementById('projectSpan2');
        const projectSpan3 = document.getElementById('projectSpan3');
        // For Project Span 1
         {
            let i = 0;
            let clearProjectSpan1 = setInterval(() => {
                projectSpan1.innerText = i+1;
                i++;
                if (i >5) {
                    return i = 0;
                }
            }, 1000)
            setTimeout(() => {
                clearInterval(clearProjectSpan1)
                return;
            }, 5000);
        }

         // For Project Span 2
         {
            let i = 0;
            let clearProjectSpan2 = setInterval(() => {
                projectSpan2.innerText = i+1;
                i++;
                if (i >8) {
                    return i = 0;
                }
            },200)
            setTimeout(() => {
                clearInterval(clearProjectSpan2)
                 projectSpan2.innerText=0;
                return;
            }, 4900);
        }

        const Clients  = document.getElementById('clients');
        {
            let i = 0;
            let clearClients = setInterval(() => {
                Clients.innerText = i+1;
                i++;
                if (i >25) {
                    return i = 0;
                }
            }, 100)
            setTimeout(() => {
                clearInterval(clearClients)
                 projectSpan2.innerText=0;
                return;
            }, 2500);
        }
        const Meetings  = document.getElementById('meetings');
            {
                let i = 0;
                let clearMeetings = setInterval(() => {
                    Meetings.innerText = i+1;
                    i++;
                    if (i >100) {
                        return i = 0;
                    }
                }, 100)
                setTimeout(() => {
                    clearInterval(clearMeetings)
                    return;
                }, 5000);
            }

    }

}

window.addEventListener('scroll', () => {
    scrollAnime();
})


// if(){
//     worksDiv.classList.add('appearAnime');
//     console.log(document.body.offsetHeight*0.85);
// }





