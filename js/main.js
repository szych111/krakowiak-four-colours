const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

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

    //modal for history items//
    
    const $histModal = $('.history-modal')

    $('.hist-item').on('click', (e) => {
        $histModal.toggleClass('history-modal--on');
        console.log(e.target)
        $histModal.text(e.target)
    });

    $(document).mouseup(e => {
        if(!$histModal.is(e.target)
        && $histModal.has(e.target).length === 0) {
            $histModal.removeClass('history-modal--on');
        }
    });

    // $( "*", document.body ).click(function( event ) {
    //     event.stopPropagation();
    //     let domElement = $( this ).get( 0 );
    //     $histModal.text( "Clicked on - " + domElement.html );
    //   });

    // -- // -- // -- //
        
    })
