// JavaScript Document
$('.main_visual').slick({
        arrows:true,
        autoplay:true,
        autoplaySpeed:3000,
        dots: false,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
});    
$('.slide2').slick({
        arrows:true,
        autoplay:false,
        dots: false,
        infinite: true,
        speed: 300,
        fade: false,
        cssEase: 'linear'
});    
$('.slide3').slick({
        arrows:true,
        autoplay:false,
        dots: false,
        infinite: true,
        speed: 300,
        fade: false,
        cssEase: 'linear'
});    
$('.slide4').slick({
        arrows:true,
        autoplay:false,
        dots: false,
        infinite: true,
        speed: 300,
        fade: false,
        cssEase: 'linear'
});    


$(function(){
    $(".morebtn a").click(function(){
        $(".morebtn").hide(0);
        $(".more").fadeIn("slow");
        return false;
    });
    if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
        $(".facname").click(function(){
            if($("+div",this).css("display")=="none"){
                $(".facinfo").slideUp("fast");
                $("+div",this).slideToggle("fast");
                $(".detail").removeClass("open");
                $(this).parent().addClass("open");
            } else {
                $(".facinfo").slideUp("fast");
                $(".detail").removeClass("open");
            }
        });
    }
    $("#spmenu-btn").click(function(){
        $("#gnavi").slideToggle("fast");
        $(this).toggleClass("open");
    });
});


//$(function(){
//    if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
//        $('#bigmap img').okzoom({
//            width: 240,  // ルーペの幅
//            height:240,  // ルーペの高さ
//            round:false,  // ルーペの形
//            border: "1px solid #ccc", // ルーペのボーダー指定
//            shadow: "0 0 3px #000"  // ルーペの影指定
//        });
//    }
//});


$(function(){
    if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
        $("#langlink").hover(function(){
            $(".lang:not(:animated)").fadeIn("fast");
        },function(){
            $(".lang:not(:animated)").fadeOut("fast");
        });
    }
});


