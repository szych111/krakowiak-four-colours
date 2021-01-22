$(document).ready(function () {
    $(document).on('load', function() {
        $('#onloadModal').addClass('onloadModal-open');
    })

    const $menu = $('.nav-menu-holder');

    $(document).mouseup(e => {
        if(!$menu.is(e.target)
        && $menu.has(e.target).length === 0) {
            $menu.removeClass('nav-menu-open');
        }
    });

    $('.nav-menu-button').on('click', () => {
        $menu.toggleClass('nav-menu-open');
    });

    $('.main-menu-item').on('click', () => {
        $menu.toggleClass('nav-menu-open');
    });

//     var audio = document.getElementById("myAudio");

// $('#play-pause-button').on("click",function(){
//   if($(this).hasClass('fa-play'))
//    {
//      $(this).removeClass('fa-play');
//      $(this).addClass('fa-pause');
//      audio.play();
//    }
//   else
//    {
//      $(this).removeClass('fa-pause');
//      $(this).addClass('fa-play');
//      audio.pause();
//    }
// });

// audio.onended = function() {
//      $("#play-pause-button").removeClass('fa-pause');
//      $("#play-pause-button").addClass('fa-play');
// };
        
        
    })