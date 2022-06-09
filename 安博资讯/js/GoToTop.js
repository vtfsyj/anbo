/**
 * Created by doraqiao.
 */
 (function($){
    //鍙傛暟opt琛ㄧず鍚庢湡鏍规嵁闇€姹傝缃甶con鐨刢ss灞炴€у€�
    jQuery.fn.gotoTop = function(opt){
        var ele = this;
        var win = $(window);
        var doc = $('html,body');
        var index = false;

        //榛樿icon鐨刢ss灞炴€у€�
        var defaultOpt = {
            offset : 420,
            speed : 500,
            iconSpeed : 200,
            animationShow : {'opacity' : '1'},
            animationHide : {'opacity' : '0'}
        };

        //灏嗚嚜瀹氫箟icon鐨刢ss灞炴€у€兼洿鏂板埌options涓�
        var options = $.extend(defaultOpt,opt);

        //鐐瑰嚮icon杩斿洖椤堕儴
        ele.click(function(){
            doc.animate({scrollTop : '0'},options.speed);
        });

        //鍒ゆ柇icon鍔ㄧ敾鏍峰紡鏄笉鏄痶ransform
        $.each(options.animationShow,function(i){
            if(i == 'transform'){
                index = true;
            }
        });

        //icon鍔ㄧ敾鏍峰紡鏄剧ず鏃�
        function animateShow(){
            if(index){
                ele.css(options.animationShow);
            }else{
                ele.stop().animate(options.animationShow,options.iconSpeed);
            }
        }

        //icon鍔ㄧ敾闅愯棌鏃�
        function animateHide(){
            if(index){
                ele.css(options.animationHide);
            }else{
                ele.stop().animate(options.animationHide,options.iconSpeed);
            }
        }

        //褰撳睆骞曠殑楂樺害澶т簬options.offset鏃讹紝鏄剧ずicon锛堝墠鎻愭槸icon浜嬪厛闅愯棌浜嗭級
        win.scroll(function(){
            /*                console.log(win.scrollTop())*/
            if(win.scrollTop() > options.offset){
                animateShow();
            }else{
                animateHide();
            }
        });

        //濡傛灉灞忓箷閲岄《閮ㄧ殑楂樺害澶т簬璁剧疆鐨刼ffset锛屽垯鐩存帴灏唅con鏄剧ず鍑烘潵锛堣€屼笉鏄瓑婊氬姩浜嬩欢鍙戠敓鍚庢墠鏄剧ず鍑烘潵锛�
        if(win.scrollTop() > options.offset){
            ele.css(options.animationShow);
        }else{
            ele.css(options.animationHide);
        }
    }
}(jQuery));
