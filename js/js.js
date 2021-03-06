        // 轮播图
        $(function() {
            var index = 0;
            var timer = null;
            // 定时器自动播放
            function sliderTimer() {
                timer = setInterval(function() {
                    index++;
                    if (index == $('.slider li').length) {
                        index = 0;
                    }
                    sliderIndex(index)
                }, 3000)
            }
            sliderTimer()

            // 根据索引值点亮小圆点并显示对应图片
            function sliderIndex(index) {
                // 对应图片显示
                $('.slider li').eq(index).fadeIn('fast').siblings().fadeOut('fast');

                // 小圆点点亮
                $('.tab span').eq(index).addClass('show').siblings().removeClass('show')
            }

            // 小圆点点击事件
            $('.tab span').click(function() {
                clearInterval(timer)
                index = $(this).index()
                sliderIndex(index)
            })

            // 左侧按钮点击事件
            $('.arrow_left').click(function() {
                index--;
                if (index == -1) {
                    index = $('.slider li').length - 1;
                }
                sliderIndex(index)
            })

            // 右侧按钮点击事件
            $('.arrow_right').click(function() {
                index++;
                if (index == $('.slider li').length) {
                    index = 0;
                }
                sliderIndex(index)
            })

            $('ul li img').click(function() {
                    index++;
                    if (index == $('.slider li').length) {
                        index = 0;
                    }
                    sliderIndex(index)
                })
                // 鼠标移入轮播区域关闭定时器
            $('.slider').mouseenter(function() {
                clearInterval(timer);
            })

            // 鼠标移出轮播区域开启定时器
            $('.slider').mouseleave(function() {
                sliderTimer();
            })
            $('.slider .guanbi').click(function() {
                $('#slideWrap').fadeOut('fast')
                $('.slider').fadeOut('fast')
            })
        })