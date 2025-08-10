

var nav = document.getElementById("navbar")
var hero = document.getElementById("hero")
var navLink1 = document.getElementById("navLink1")
var navLink2 = document.getElementById("navLink2")
var navLink3 = document.getElementById("navLink3")
var navLink4 = document.getElementById("navLink4")
var navLink5 = document.getElementById("navLink5")
var navLink6 = document.getElementById("navLink6")
var navLink7 = document.getElementById("navLink7")
var btn = document.getElementById("navbarToggler")

var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;

var count1 = setInterval(() => {
    if(counter1 >= 850)
    {
        clearInterval(count1)
        return
    }
    counter1++
    document.getElementById("counter1").innerHTML = counter1
    
}, 5);

var count2 = setInterval(() => {
    if(counter2 >= 230)
    {
        clearInterval(count2)
        return
    }
    counter2++
    document.getElementById("counter2").innerHTML = counter2
    
}, 5);

var count3 = setInterval(() => {
    if(counter3 >= 9450)
    {
        clearInterval(count3)
        return
    }
    counter3++
    document.getElementById("counter3").innerHTML = counter3
    
}, .0001);

var count4 = setInterval(() => {
    if(counter4 >= 780)
    {
        clearInterval(count4)
        return
    }
    counter4++
    document.getElementById("counter4").innerHTML = counter4
    
}, 5);

window.addEventListener("scroll" ,function(){
   
    if(window.scrollY > 700)
    {
        nav.classList.add("scrolled");
        btn.classList.add("color");
        hero.style.color="black";
        //  navLink.style.setProperty("--bgColor" , "black");
        navLink2.classList.remove("navLink");
        navLink2.classList.add("navLinks");
        navLink3.classList.remove("navLink");
        navLink3.classList.add("navLinks");
        navLink4.classList.remove("navLink");
        navLink4.classList.add("navLinks");
        navLink5.classList.remove("navLink");
        navLink5.classList.add("navLinks");
        navLink6.classList.remove("navLink");
        navLink6.classList.add("navLinks");
        navLink7.classList.remove("navLink");
        navLink7.classList.add("navLinks");
    }
    else
    {
        nav.classList.remove("scrolled");
        btn.classList.remove("color");
        hero.style.color="white";
        // navLink.style.setProperty("--bgColor" , "white");
        navLink1.classList.remove("navLinks");
        navLink1.classList.add("navLink");
      
    }
})

var typed = new Typed("#element", {
        strings: [ "Designer", "Larry Daniels" , "Developer"],
        typeSpeed: 45,
        loop: true,
        backSpeed: 45,
      });

