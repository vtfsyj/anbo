// $(function () {
//     $('.maskb1').mouseover(function () {
//         $('.toggmask').stop(true).show();
//     })
//     $('.maskb1').mouseout(function () {
//         $('.toggmask').stop(true).hide();
//     })
// })
$(document).ready(function () {
    $('.maskb1').hover(function () {
        $(this).stop().children('.toggmask').stop().slideDown()
    }, function () {
        $(this).stop().children('.toggmask').stop().slideUp()
    })

    
})
