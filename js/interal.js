/**
 * Created by 李华东 on 2017/9/6.
 */
/*window.onload=function(){
    function hengpin(){
        if(window.orientation==90||window.orientation==-90){
            window.location.reload();
        }
        if(window.orientation==0){
            window.location.reload();
        }
    }
    window.addEventListener("onorientationchange"  in window  ? "orientationchange" : "resize",hengpin,false);
};*/
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