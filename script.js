const likeBtn = document.querySelectorAll('.likeBtn')

likeBtn.forEach((like) => {
    like.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('like');
    })
})

const navBtn = document.querySelector('.navBtn')
const smallMenu = document.querySelector('#smallMenu')
const closeBtn = document.querySelector('.closeBtn')

navBtn.addEventListener('click', (e) => {
    if(smallMenu.classList.contains('show')){

        smallMenu.classList.remove('show')
    }
    else{
        smallMenu.classList.add('show')
    }
})

closeBtn.addEventListener('click', (e) => {
    console.log(e.currentTarget)
    if(smallMenu.classList.contains('show')){

        smallMenu.classList.remove('show')
    }
    else{
        return
    }
})