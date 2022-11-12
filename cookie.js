import Cookies from 'js-cookie';
const COOKIE_NAME = 'visit';
const COOKIE_BLOCK = document.getElementById('cookie__js')
const COOKIE_BUTTON = document.querySelector('.cookie__button')

if(!Cookies.get(COOKIE_NAME)){
setTimeout(() => {
COOKIE_BLOCK.classList.add('is__show')
},1000)
}


COOKIE_BUTTON.addEventListener('click',()=>{
    COOKIE_BLOCK.classList.remove('is__show')

    Cookies.set(COOKIE_NAME,true,{
        expires: 2,
    })
})