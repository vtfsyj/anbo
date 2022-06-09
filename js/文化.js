$(function () {
    // $(window).on("resize",function () {
    //     console.log($(window).height())
    //     console.log($(window).width())
    //     $(".lb").stop(true).animate({height:$(window).height()/2},200)
    //     $(".swiper").stop(true).animate({height:$(window).height()/2},200)
    //     // $(".swiper-slide div").stop(true).animate({height:$(window).height()/2},200)
    // })
    // $(".swiper-pagination-bullet").css({
    //     width:50,
    //     height:50,
    // })

    // 分页器
    var kg = true;
    $(".swiper-slide img").each(function (a) {
        $(".swiper-pagination").children().eq(a).css("backgroundImage", "url(" + $(this).attr("src") + ")")
    })
    $(".shade img").attr("src", "../images/暂停.png")
    $(".right").animate({ height: "100%" }, 2000, function () {
        $(".left").animate({ height: "100%" }, 2000, function () {
            $(".shade img").attr("src", "../images/播放2.png")
            $(".left").stop().css("height", "0px");
            $(".right").stop().css("height", "0px");
            kg=false;
        })
    })
    $(".swiper-pagination").on("click", function () {
        $(".left").stop().css("height", "0px");
        $(".right").stop().css("height", "0px");
        $(".shade img").attr("src", "../images/暂停.png");
        $(".right").animate({ height: "100%" }, 2000, function () {
            $(".left").animate({ height: "100%" }, 2000, function () {
                $(".shade img").attr("src", "../images/播放2.png")
                $(".left").stop().css("height", "0px");
                $(".right").stop().css("height", "0px");
                kg=false;
            })
        })
    })
    $(".shade").on("click", function () {
        if (kg) {
            kg = false;
            $(".right").stop(true);
            $(".left").stop(true);
            $(".shade img").attr("src", "../images/播放2.png")
            
        } else {
            kg = true;
            if ($(".right").css("height") == "105px") {
                $(".shade img").attr("src", "../images/暂停.png");
                $(".left").animate({ height: "100%" }, 2000, function () {
                    $(".left").css("height", "0px");
                    $(".right").css("height", "0px");
                    $(".shade img").attr("src", "../images/播放2.png")
                    kg = false;
                })
            } else {
                $(".shade img").attr("src", "../images/暂停.png");
                $(".right").animate({ height: "100%" }, 2000, function () {
                    $(".left").animate({ height: "100%" }, 2000, function () {
                        $(".left").css("height", "0px");
                        $(".right").css("height", "0px");
                        $(".shade img").attr("src", "../images/播放2.png")
                        kg = false;
                    })
                })
            }

        }
    })
})

