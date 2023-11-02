// --> LOCOMOTIVE SCROLL <--

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// --> CUSTOM CURSOR <--
var timeout;

function mousemovements_Animation(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);
        
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;
        // console.log(xdiff,ydiff) 

        xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
        yscale = gsap.utils.clamp(0.8, 1.2, ydiff);
        
        xprev = dets.clientX; 
        yprev = dets.clientY;

        custom_cursor(xscale,yscale );

        timeout = setTimeout(function(){
            document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        },100)
    });
}
mousemovements_Animation()

function custom_cursor(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}
custom_cursor()





// --> ANIMATION OF HOME PAGE <--
function homepage_Animation(){
    var TL = gsap.timeline();
    
    TL.from("#nav", { 
        y: '-10',
        delay:-0.1,
        opacity:0,
        duration: 1.2,
        ease: Expo.easeInOut
    })
        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 1.5,
            delay: -1,
            stagger: 0.2
        })
        .from("#home-footer",{
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut, 
        })

}
homepage_Animation()