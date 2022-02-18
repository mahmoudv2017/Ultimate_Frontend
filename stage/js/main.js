$( () => {
    'use strict';

    $('.toggle-sidebar').on('click' , () => {
        $('.sidebar , .content-area').toggleClass('no-sidebar')
    })

    $('.toggle-submenu').on('click' , function() {
        
        $(this).find(".fa-angle-right").toggleClass('down')
        $(this).next('.child-links').slideToggle()
    })

    $(".notification-icon").on('mousedown' , function(){
        $(this).css('background-color' , 'red')
    })
    $(".notification-icon").on('mouseup' , function(){
        $(this).css('background-color' , '#939393')
    })

    $(".toggle-fullscreen").on("click" , function () {
        $(this).toggleClass('full-screen')

        if($(this).hasClass('full-screen')){
            openFullscreen()
        }else{
            closeFullscreen()
        }
    })


    $('.toggle-settings').on('click' , function () {
      $(this).parent().toggleClass('hide-settings')
      $('.fa-cog').toggleClass('fa-spin')
    })

    var themes = []

     $('.color-settings , li').each( function() {
        themes.push($(this).data('theme'))
     }) 

    $('.color-settings , li').on('click' , function() {

      $(this).addClass('active').siblings().removeClass('active')
      $('body').removeClass(themes).addClass($(this).data('theme'))
    })

} )



var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}