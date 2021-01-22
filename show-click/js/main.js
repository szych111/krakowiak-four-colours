let allButtons = document.getElementsByTagName('button');


for(let i = 0; i<allButtons.length; i++) {
    allButtons[i].addEventListener('click', function(){
        let navContainer = document.getElementById('nav');
        navContainer.classList.add('visible');
        this.parentNode.appendChild(navContainer);
    });
}