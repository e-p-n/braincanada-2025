 
// MORE/LESS BUTTONS

function showHide(id, size, text) {
    console.log("clicked");
    if (text === "long") {
        text = "Donateurs pour la période du 1<sup>er</sup>&nbsp;avril&nbsp;2024&nbsp;au&nbsp;31&nbsp;mars&nbsp;2025"
    }
    let more = text + " ▼";
    let less = text + " ▲";
    if (text === "More") {
        less = "Less ▲";
    } else if (text === "Plus") {
        less = "Moins ▲"
    }

    if (size === "large") {
        more = "▽";
        less = "△";
    }    
    let message = document.getElementById(id);
    console.log(message);
    let button = document.getElementById(id+'-button');
    if (button.innerHTML === more) {
        button.innerHTML = less;
        message.classList.add("open");
    } else {
        button.innerHTML = more;
        message.classList.remove("open");
    }

}

// OUR VISION animations
function getWidth() {
    if (self.innerWidth) {
      return self.innerWidth;
    }
  
    if (document.documentElement && document.documentElement.clientWidth) {
      return document.documentElement.clientWidth;
    }
  
    if (document.body) {
      return document.body.clientWidth;
    }
  }

function mouseOverSlideUp(event) {
    let screenWidth = getWidth();
    if(screenWidth > 871) {
        infoBox.classList.replace('ib-slide-up', 'ib-pop-up');
    } 


}

function mouseOverSlideDown(event) {

    infoBox.classList.replace('ib-pop-up', 'ib-pop-down');


}



// ANIMATION FOR MULTIPLE ITEMS

const yirObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate');
            console.log(entry.target.classList);
        }
        
    })

}
)


const ipObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        let infoBox = document.getElementById("info-box");
        if(entry.isIntersecting) {

            entry.target.classList.add("ip-slide-down");
        }
    },
    {
        rootMargin: "200px"
    })

})



yirObserver.observe(document.querySelector('.yir-covers'));
yirObserver.observe(document.querySelector('.approach-diagram'));
yirObserver.observe(document.querySelector('.animation-item'));


