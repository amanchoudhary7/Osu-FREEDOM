
var tl=gsap.timeline()
function locomotiveScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#parent"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#parent" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#parent", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#parent").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

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
        delay:0.4,
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



locomotiveScroll();
// cursorFollow(); 
loaderAnimatn();
page1animatn();


