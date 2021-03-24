$(document).ready(()=>{
    AOS.init();
    $(window).scroll(()=>{
        var positionTop = $(document).scrollTop();
        // console.log(positionTop);
        if((positionTop>1670)){
            $("#circle-1").addClass("circle");
            $("#circle-2").addClass("circle");
            $("#circle-3").addClass("circle");

        }
        if((positionTop>2300)){
            $("#circle-4").addClass("circle");
            $("#circle-5").addClass("circle");
            $("#circle-6").addClass("circle");
        }
        if($(window).width()<767){
            if((positionTop>2150&&positionTop<2350)){
                $("#circle-1").addClass("circle");    
            }
                 
        }
    })
})

