


// ------------- add end remove active class for links in navBar --------------
// ----------------------------------------------------------------------------

let links = document.querySelectorAll(".list-item");

links.forEach((link)=> {
    link.addEventListener("click" , function(e) {
        console.log(e.currentTarget)
       links.forEach((link) => {
        link.classList.remove("active")
       })
        e.currentTarget.classList.add("active");
    })
})



//--------------------- for sticky navBar ---------------------
// ---------------------------------------------------------------
let homeSection = document.querySelector("#home");
console.log(homeSection)
let observeSection= new IntersectionObserver(function(entries) {

            if(entries[0].isIntersecting === false) {
                document.body.classList.add("sticky");
                document.querySelector(".nav-btns button").style = "color : #4c4d4d";
            }else {
                document.body.classList.remove("sticky");
                document.querySelector(".nav-btns button").style = "color : #fff";
            }

            

})


observeSection.observe(homeSection);


// -------------Open NavBar for mobile --------------
// ---------------------------------------------------

let openBtn = document.querySelector(".btn[ name='menu']");

let closeBtn = document.querySelector(".btn[ name='close']");
let header = document.querySelector(".header")
console.log(openBtn , closeBtn , header)

openBtn.addEventListener("click" , function() {
    console.log("okkkkkkkk")
    header.classList.add("open-nav");
    
})


closeBtn.addEventListener("click" , function() {
    header.classList.remove("open-nav");
})



// -------------------------------------------------------------------------------
// ----------<<<<<  type script >>>-----------------------------------------------

let type = new Typed(".auto-type", {
    strings: ["I'm  ", "a ", "Freelancer "],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------




// ---------------------------------------------------------------------------------
// -------------------<<< counter on scroll && Progress on scroll  >>>---------------

//count
let counters = document.querySelectorAll(".about-counter h4");
let aboutSection = document.querySelector("#about");
let start = false;

// progress
let bars= document.querySelector(".bars");
let progress = document.querySelectorAll(".progress span");
let progressArray = Array.from(progress)


// count
function countOnScroll(element) {

    let goal = element.dataset.gaol;
    // console.log(element.textContent)

    let count = setInterval(() => {



        if (element.textContent != goal) {
            element.textContent++

        } else {
            clearInterval(count)
        }

    }, 4000 / goal);
}




window.onscroll = function () {


    if (window.scrollY > aboutSection.offsetTop) {
        if (start === false) {
            counters.forEach((counter) => {
                countOnScroll(counter)

            })
        } else {
            start = true;
        }

    }


    // -- progress --

    if(window.scrollY > bars.offsetTop - 600) {
   
        progressArray.forEach((pro)=> {
         
           pro.style.width = pro.dataset.width;

        })
    }

}

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------





// --------------Portfolio Taps -------------------
// -----------------------------------------------


const portfolioList = document.querySelectorAll(".portfolio-list li a");
const allImages = document.querySelectorAll(".image");


let imagesArray = Array.from(allImages);



portfolioList.forEach((list)=> {
    list.addEventListener('click' , function(e) {
        console.log(e.currentTarget.textContent)
        imagesArray.forEach((myImage)=> {
            myImage.style = "display:none";

            if(e.currentTarget.textContent === "All") {
                myImage.style = "display:block";
            }
           
        })
console.log()

       
let blockImaged = document.querySelectorAll(`.${e.currentTarget.textContent}`);

blockImaged.forEach((Image)=> {
    Image.style.display = "block"
})      
    })

  
})


