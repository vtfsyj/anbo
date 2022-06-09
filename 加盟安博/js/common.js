     // 下拉菜单
     $(function () {
         //鼠标进入的时候,其他的li标签透明度：0.5
         $(".nav ul li").hover(function () {

             $(this).children(".dropbox").stop(true).slideDown(200);

         }, function () {
             // 鼠标离开，其他li 透明度改为 1

             $(this).children(".dropbox").stop(true).slideUp(200);

         })

     });

     // 导航栏吸顶
     var ceiling = document.getElementById('ceiling');
     window.addEventListener("load", function () {

         document.onscroll = function () {
             if (window.pageYOffset > 100) {
                 ceiling.style.display = "block";
             } else {
                 ceiling.style.display = "none";
             }
         }
     })


     //  返回顶部
     $(function () {
         //示例
         $('.back').gotoTop({
             offset: 400, //距离顶部的位置
             speed: 500, //移动到顶部的速度
             /*     iconSpeed : 300, //icon动画样式的速度*/
             // animationShow : {
             //     'transform' : 'translate(0,0)',
             //     'transition': 'transform .5s ease-in-out'
             // }, //icon动画样式显示时
             // animationHide : {
             //     'transform' : 'translate(80px,0)',
             //     'transition': 'transform .5s ease-in-out'
             // } //icon动画样式隐藏时
         });

     });