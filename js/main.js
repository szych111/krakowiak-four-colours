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
    
    })

const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear();
