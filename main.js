$('.imgswap').click(function(e){
        let srcImg =$(e.target).attr('src');
        $('#imgcoco').attr('src',srcImg)
})



let proudctOffset=$("#pro-main").offset().top
$(window).scroll(function(){
        let windoscroll =$(window).scrollTop()
        if(windoscroll> proudctOffset-100){
                $("#Navpar").css('background','rgba(20,20,30,0.4');
                $("#Navpar").css('height','45px',2000);

                $(".btn-arrow").fadeIn(600)
        }else{
                $("#Navpar").css('background','transparent')
                $("#Navpar").css('height','60px');
                $(".btn-arrow").fadeOut(600);
        }
})

$('.btn-arrow').click(function(){
        
        $('html,body').animate({scrollTop:0})
})


$('a[href^="#"]').click(function(e){
        $(e.target).parent().css('border-bottom','solid 2px black');
        $(e.target).parent().siblings().css('border-bottom','none')

});
 
