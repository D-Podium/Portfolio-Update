/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader = document.getElementById("header")

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText", {
    strings : ["Designer", "Developer"], 
    loop : true,
    typeSpeed : 100,
    backSpeed: 80,
    backDelay : 2000
   })

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
    origin : 'top',
    distance : '80px',
    duration : 2000,
    reset : true
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay : 100})
  sr.reveal('.featured-text-info',{delay : 200})
  sr.reveal('.featured-text-btn',{delay : 200})
  sr.reveal('.social_icons',{delay : 200})
  sr.reveal('.featured-image',{delay : 300})

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box', {interval : 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin : 'left',
    distance : '80px',
    duration : 2000,
    reset : true
  })  

  srLeft.reveal('.about-info', {delay : 100})
  srLeft.reveal('.contact-info', {delay : 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin : 'right',
    distance : '80px',
    duration : 2000,
    reset : true
  })  

  srLeft.reveal('.skills-box', {delay : 100})
  srLeft.reveal('form', {delay : 100})


/* ----- CHANGE ACTIVE LINK ----- */
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight, sectionTop = current.offsetTop - 50, sectionId = current.getAttribute('id');

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
      } else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
    })
  }

  window.addEventListener('scroll', scrollActive)


  /* -------- FORM JS --------*/

  const form = document.querySelector("form");
  const fullName = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const subject = document.getElementById("subject");
  const msg = document.getElementById("message");

  function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${msg.value}`;
    
    Email.send({
      SecureToken : "ba30d7b0-ded7-47a6-a9fd-3d000bc20750",
      To : 'mikelsojez953@gmail.com',
      From : "mikelsojez953@gmail.com",
      Subject : subject.value,
      Body : bodyMessage
  }).then(
    message => {
      if (message !== "OK") {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
      }
    }
  );
  }

  function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
      if (item.value == "") {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }

      if (items[1].value != "") {
        checkEmail();
      }

      items[1].addEventListener("keyup", () => {
        checkEmail();
      });

      item.addEventListener("keyup", () => {
        if (item.value != "") {
          item.classList.remove("error");
          item.parentElement.classList.remove("error");
        }
        else {
          item.classList.add("error");
          item.parentElement.classList.add("error");
        }
      });
    }
  }

  function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");


    if (!email.value.match(emailRegex)) {
      email.classList.add("error");
      email.parentElement.classList.add("error");

      if (email.value != "") {
        errorTxtEmail.innerText = "Enter a valid email address";
      }
      else {
        errorTxtEmail.innerText = "Email Address can't be blank";
      }
    }
    else {
      email.classList.remove("error");
      email.parentElement.classList.remove("error");
    }
  }
   
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
  
    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !msg.classList.contains("error")) {
      sendEmail();
  
      form.reset();
      return false;
    }
    
  });
  
  