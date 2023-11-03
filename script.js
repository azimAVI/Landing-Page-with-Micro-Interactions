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


document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diff_rotate = 0;

    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5
        })

        
        // var TL = gsap.timeline();
        // var tag = elem.querySelector("h1");
        // TL.to(tag,{
        //     x:0,
        //     duration:1,
        //     delay: 0.6,
        //     yoyo: true,
        // })

    })

    elem.addEventListener("mousemove", function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diff_rotate = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,  
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diff_rotate*0.8),
            scrub:2
        })

        // var TL = gsap.timeline();
        // TL.to(elem.querySelector("h1"),{
        //     x:30,
        //     duration:1,
        //     delay: 0.5,
        //     yoyo: true,
        // })
    })

});


function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let session = "AM IST";

    if(hh > 12){
        session = "PM IST";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;

    let time = hh + ":" + mm + " " + session;

    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000); 

}

currentTime();