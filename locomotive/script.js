function loading(){
    var tl= gsap.timeline()

    tl.to("#yellow1",{
        top: "-100%",
        delay: "0.5",
        duration:"0.8",
        ease: "expo.out"
    })
    tl.from("#yellow2",{
        top: "-100%",
        delay: "0.5",
        duration: "0.8",
        ease: "expo.out"
    }, "anim")
    tl.to("#loader h1",{
        color: "black",
        delay: "0.6",
        duration: "0.7",
    }, "anime")
    tl.to("#loader",{
        opacity: "none",
        display: "none",
    })
}
loading()

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elems = document.querySelectorAll(".elem")
var page2 = document.querySelector("#page2")
elems.forEach(function(ele){
    ele.addEventListner("mouseenter",function(){
        var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundImage=`url(${bgimg})`
        
    })
})