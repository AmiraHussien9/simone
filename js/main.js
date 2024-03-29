

// -------------------------------------------------
// -----  smooth scroll && scroll to top Button =-------


let allLinks = document.querySelectorAll("a");

allLinks.forEach(link => {
    link.addEventListener('click' , function(e) {

        e.preventDefault();
        console.log(link.getAttribute("href"));

        let href = link.getAttribute("href");

        

        if(href === "#") {
                window.scrollTo({
                    top:0,
                    behavior:"smooth"
                })
        }


        if(href !== "#" && href.startsWith('#') ) {
            
            let section = document.querySelector(href);
            section.scrollIntoView({behavior:"smooth"})
        }
    })
})


//--------------------- for sticky navBar  && display style for scroll to top button --------------------
// ---------------------------------------------------------------
let homeSection = document.querySelector("#home");


let observeSection= new IntersectionObserver(function(entries) {

            if(entries[0].isIntersecting === false) {
                document.body.classList.add("sticky");
                document.querySelector(".nav-btns button").style = "color : #4c4d4d";
                scrollBtn.style = "opacity : 1";
            }else {
                document.body.classList.remove("sticky");
                document.querySelector(".nav-btns button").style = "color : #fff";
                scrollBtn.style = "opacity : 0";
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
    header.classList.add("open-nav");
    
})


closeBtn.addEventListener("click" , function() {
    header.classList.remove("open-nav");
})






// ---- add and remove active class for links in navBar >>>-----
// ------------------------------------------------------------------------------------------------------

let scrollBtn  = document.querySelector(".fixed-icon ");

let links = document.querySelectorAll(".list-item");

links.forEach((link)=> {
    link.addEventListener("click" , function(e) {
        console.log(e.currentTarget)
       links.forEach((link) => {
        link.classList.remove("active")
       })
        e.currentTarget.classList.add("active");
        header.classList.remove("open-nav");
    })
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






// ----- prevent default submit button in form ---------
document.querySelector("form button[type='submit'] ").addEventListener("click" , function(e){
    e.preventDefault();
})




// ------------------------





const sections = document.querySelectorAll('section');
// simple function to use for callback in the intersection observer
const changeNav = (entries, observer) => {
	entries.forEach((entry) => {
		// verify the element is intersecting
		if(entry.isIntersecting && entry.intersectionRatio >= 0.55) {
			// remove old active class
			document.querySelector('.active').classList.remove('active');
			// get id of the intersecting section
			var id = entry.target.getAttribute('id');
            console.log(id)
			// find matching link & add appropriate class

            let link =  document.querySelector(`[href="#home"]`);
			 link.classList.add('active');
             console.log( link)
    
		}

       
	});
}

// init the observer
const options = {
	threshold: 0.55
}

const observer = new IntersectionObserver(changeNav, options);

// target the elements to be observed

sections.forEach((section) => {
	observer.observe(section);
});
// const options = {
// 	threshold: 0.55
// }



// let allSections = document.querySelectorAll("section");
// allSections.forEach((section)=> {
//     let observeAllSections = new IntersectionObserver(function(entries) {

// let thisSection = section.getAttribute("id");


//         console.log(entries)



//         entries.forEach(entry => {
//             // console.log(entry.isVisible)
    

//             links.forEach(link => {

//                 let href = link.getAttribute("href");
                
//                 console.log(`section id: `,section.getAttribute('id'))
//                 console.log(`href:`, href)
//                  console.log(entry.intersectionRatio )
              
//                 if(entry.isIntersecting && entry.intersectionRatio >= 0.55) {
//                     link.classList.add("active");
//                 }else  {
//                     link.classList.remove("active");
//                 }
//             })
//         })
// }
// , options);


// observeAllSections.observe(section)
// })




