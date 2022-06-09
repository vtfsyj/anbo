$(function() {

    $('#totop').hide(); //隐藏go to top按钮

    $(window).scroll(function() {
        // console.log($(this).scrollTop());

        //当window的scrolltop距离大于1时，go to 
        if ($(this).scrollTop() > 100) {
            $('#totop').fadeIn();
        } else {
            $('#totop').fadeOut();
        }
    });

    $('#totop img').click(function() {
        $('html ,body').animate({ scrollTop: 0 }, 300);
        return false;
    });



});