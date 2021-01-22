let allSquares = document.getElementsByClassName('square');


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

setTimeout(function(){
    for(let i = 0; i<allSquares.length; i++) {
        let randomHeight = getRandomArbitrary(10, 60);
        allSquares[i].style.bottom = randomHeight + '%';
    }
}, 2000)
