function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function open_Nav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function close_Nav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

$(document).ready(function (){
    $(window).scroll(function (event){
        var pos_body = $('html, body').scrollTop();
        console.log(pos_body)
        if(pos_body > 164){
            $('.back-to-top').removeClass('hiedden-top')
        }else {
            $('.back-to-top').addClass('hiedden-top')
        }if(pos_body < 300){
            $(".single_destination").fadeOut()
        }else {
            $('.single_destination').fadeIn(2000,"easeInCubic")
        }if(pos_body < 1090){
            $('.email-title').fadeOut()
            $('.from-email').fadeOut()
        }else {
            showemail();
        }if(pos_body < 1400){
            $('.single_destination1').fadeOut()
            $('.More-Places').fadeOut()
        }else {
            $('.single_destination1').fadeIn(2000, "easeInOutCubic")
            $('.More-Places').delay(500).fadeIn(1000)
        }
    })

    function showemail() {
        $('.email-title').fadeIn(2000, "easeInExpo")
        $('.from-email').delay(400).fadeIn(2000, "easeInExpo")
    }

    $('.overlay-0').mouseenter(function () {
        $('.single-0').animate({bottom:'+20px'})
    })

    $('.overlay-0').mouseleave(function () {
        $('.single-0').animate({bottom:'-0px'})
    })

    $('.overlay-1').mouseenter(function () {
        $('.single-1').animate({bottom:'+20px'})
    })

    $('.overlay-1').mouseleave(function () {
        $('.single-1').animate({bottom:'-0px'})
    })

    $('.overlay-2').mouseenter(function () {
        $('.single-2').animate({bottom:'+20px'})
    })

    $('.overlay-2').mouseleave(function () {
        $('.single-2').animate({bottom:'-0px'})
    })

    $('.overlay-3').mouseenter(function () {
        $('.single-3').animate({bottom:'+20px'})
    })

    $('.overlay-3').mouseleave(function () {
        $('.single-3').animate({bottom:'-0px'})
    })

    $('.overlay-4').mouseenter(function () {
        $('.single-4').animate({bottom:'+20px'})
    })

    $('.overlay-4').mouseleave(function () {
        $('.single-4').animate({bottom:'-0px'})
    })

    $('.overlay-5').mouseenter(function () {
        $('.single-5').animate({bottom:'+20px'})
    })

    $('.overlay-5').mouseleave(function () {
        $('.single-5').animate({bottom:'-0px'})
    })

    $('.back-to-top').click(function (){
        $('html, body').animate({scrollTop:0},100)
    })

    $('.page').click(function (){
        $('.page-slide').slideToggle(1000)
    })

    $('.blog').click(function (){
        $('.Blog-slide').slideToggle(1000)
    })
})