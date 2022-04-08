const marioAlive = document.querySelector('#active')
const marioDead = document.querySelector('#gameOver')

marioAlive.addEventListener('click', () => {
    if(marioDead.classList.contains('open')){
        marioDead.classList.add('active');
        marioAlive.classList.remove('active')
    }
})
marioDead.addEventListener('click',() => {
    if(marioAlive.classList.contains('closed')){
        marioAlive.classList.add('active');
        marioDead.classList.remove('active')
    }
}) ;