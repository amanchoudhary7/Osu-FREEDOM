
var tl=gsap.timeline()

function cursorFollow(){
    document.addEventListener("mousemove",function(dets){
        // console.log(dets.x);
        // console.log(dets.y);
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y, 
        })
    })

    Shery.makeMagnet("#rightnav h5" );
}
function loaderAnimatn(){
    tl.from(".line h1",{
        y:150,
        stagger:0.2,
        // overflow:hidden is added to line CSS for that animation for text to appear coming from beside a line [ katt ta hua dikhega neeche se aate hue]
    
        duration:0.6,
        delay:0.2,
        // opacity:0,

    });
    tl.from("#line1-part1, .line #now",{
        delay:-0.4,
        duration:1,
        opacity:0,
        onStart:function(){
                            h5=document.querySelector("#line1-part1 h5").textContent;
                            var intH5=parseInt(h5)
                            setInterval(function(){
                                if(intH5<100)
                                {
                                    intH5++;
                                    document.querySelector("#line1-part1 h5").textContent=intH5;
                                }
                        
                            },25)
                        
                        }
    })

    tl.to(".line",{
        stagger:0.2,
        opacity:0,
        delay:1.4,
    })
    tl.to("#loader",{
        // opacity:0.4,
        duration:0.8,
        y:-1000,
        delay:0.1,

        ease:Power4,
    })
    tl.to("#loader",{
    display:"none"
    })

}

function page1animatn(){
tl.from("#navbar",{
    opacity:0,
})

tl.from(".tagline h1",{
    y:150,
    delay:-0.5,
    stagger:0.2,
})
}




cursorFollow();
loaderAnimatn();
page1animatn();


