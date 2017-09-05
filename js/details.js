/**
 * Created by 李华东 on 2017/9/6.
 */
window.onload=function(){
    function hengpin(){
        if(window.orientation==90||window.orientation==-90){
            window.location.reload();

        }
        if(window.orientation==0){
            window.location.reload();

        }

    }
    window.addEventListener("onorientationchange"  in window  ? "orientationchange" : "resize",hengpin,false);
}
