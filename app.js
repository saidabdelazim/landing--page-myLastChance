
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const sections = [...document.querySelectorAll('section')];
const navBar = document.getElementById('navbar__list');

function creatListItem(){
    for (sec of sections) {
      const li = document.createElement("li");
      li.innerHTML = `<a  href="#${sec.id}" data-nav='${sec.id}'class= "menu__link">${sec.dataset.nav}</a>`;
      navBar.appendChild(li);
    // navBar.firstChild.setAttribute('class', 'active'); // added line

    }

  };

creatListItem()
// const navLi = document.querySelectorAll('.navbar__menu #navbar__list li a');
 //console.log(navLi)
//////////////////////////////////////////////////////////////

// onscroll = function () {
//   const sect = document.querySelectorAll('section')
//   let scrollPosition = document.documentElement.scrollTop;
//   sect.forEach(section => {
//     if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
//       console.log(section.getAttribute.id)
//     }
//   })
// }





/////////////// //////////////////////////////////////////////
// window.onscroll = () => {
    
//   document.querySelectorAll('section').forEach((elem) => {
//     // let  = navbarUl.querySelector(`[data-nav=${sec.id}]`); 7
//     const activeLink = document.querySelectorAll('.navbar__menu #navbar__list li');
      
 
//     if (
//       elem.getBoundingClientRect().top >= -350 &&
//       elem.getBoundingClientRect().top <= 200
            
//     ) {
//       elem.classList.add('your-active-class');
//       //elem.style.cssText = "background-color:lime";
          
//     } else {
//       elem.classList.remove('your-active-class');
//       elem.style.cssText = "background-color:nono";

//     }
//   });
// }



///////////////////////////////////////////
// window.addEventListener('scroll', () => {
 
//   let current = "";
//     console.log(scrollY);
//     sections.forEach(section => {

//         const sectionTop = section.offsetTop;
//         //console.log(sectionTop);
//         const sectionHeight = section.clientHeight;

//         if (scrollY >= sectionTop) {
//           current = section.getAttribute("id");
//             section.classList.add('your-active-class');
//           section.style.cssText = "background-color:yellow";

//       } else { section.classList.remove('your-active-class'); }
  
//     })




// })


////////////////////////////////////////////////////////////////////////////////////


const sectionInView = () => {
  const observer = new IntersectionObserver(
    function (elements) {
     elements.forEach((elemnt) => {
       // console.log(elemnt)
        let activeLink = navBar.querySelector(`[data-nav=${elemnt.target.id}]`);
        if (elemnt.isIntersecting) {
          elemnt.target.classList.add("your-active-class");
          activeLink.classList.add("active");
          location.hash = `${elemnt.target.id}`;
        } else {
          elemnt.target.classList.remove("your-active-class");
          activeLink.classList.remove("active");
        }
      });
    },
    // options //
    {
      threshold: 0.7,
      rootMargin: "50px",
   
  }
  );
   document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
};
sectionInView();
//////////////////////////////////////////////////////////////////////////


   ///////////////////////////////////scroll smooth just try and learning///////////////////////////////////////////////


// for (const li of navLi) {
//   li.addEventListener("click", (e)=> {
//   e.preventDefault();
//   const href = this.getAttribute("href");
//   const offsetTop = document.querySelector(href).offsetTop;

//   scroll({
//     top: offsetTop,
//     behavior: "smooth"
//   });setTimeout(() => {
//     location.hash = href
//   }, 200);
// }
// );
// }
 ///////////////////////////////////scroll smooth///////////////////////////////////////////////
navBar.addEventListener("click", (el) => {
  el.preventDefault();
  if (el.target.dataset.nav) {
    document
      .getElementById(`${el.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      location.hash = `${el.target.dataset.nav}`;
    }, 170);
  }
});