$(function () {
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > $(".header-menu")[0].offsetTop) {
            $(".ceiling").css("display", "block")
            $(".ceiling").stop(true).animate({ opacity: "1" }, 100, function () {
            })
        } else {
            $(".ceiling").stop(true).animate({ opacity: "0" }, 100, function () {
                $(".ceiling").css("display", "none")
            })
        }
    })
})