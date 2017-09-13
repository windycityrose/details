/**
 * Created by 李华东 on 2017/9/6.
 */
window.onload=function(){
    function orient() {

        //alert('gete');

        if (window.orientation == 0 || window.orientation == 180) {

            $("body").attr("class", "portrait");

            orientation = 'portrait';

            return false;

        }

        else if (window.orientation == 90 || window.orientation == -90) {

            $("body").attr("class", "landscape");

            orientation = 'landscape';



            return false;

        }

    }
    orient();

};
$(function(){
   $('.filter .pullBtn').on("click",function(){
       if($(this).find("div").hasClass("sx")){
           $(this).find("div").removeClass("sx");
       }else {
           $(this).find("div").addClass("sx")
       }
   })
   $(window).on("scroll",function(){
   		if($(this).scrollTop()<=$('.filter').offset().top){
   			$('.filter').removeClass('float');
   		}
   		if($(this).scrollTop()>$('.filter').offset().top){
   			$('.filter').addClass('float');
   		}
   })
   $('.pullBtn').on('click',function(){
   		$(this).addClass('active').siblings().removeClass('active');
   })
   $('.typeBindTap').on('click',function(){
   		$(this).find('span').eq(1).addClass('ac');
   		$(this).parent().siblings().find('span').removeClass('ac');
   })
});