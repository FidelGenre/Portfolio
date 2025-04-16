// Navigation active state
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile navigation
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    hamburger.textContent = navLinksContainer.classList.contains('active') ? '✕' : '☰';
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        hamburger.textContent = '☰';
    });
});


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

/*mouse*/

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
"#ababab",
"#ababab",
"#ababab",
"#ababab",
"#ababab",
"#ababab",
"#ababab",
"#ababab",
"#ababab",
"#ababab",
"#ababab",
"#ababab",
];

circles.forEach(function (circle, index) {
circle.x = 0;
circle.y = 0;
circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
coords.x = e.clientX;
coords.y = e.clientY;

});

function animateCircles() {

let x = coords.x;
let y = coords.y;

circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
});

requestAnimationFrame(animateCircles);
}

animateCircles();

/*mouse*/

/*up*/

function irArriba(){
    window.addEventListener("scroll", () => {
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        var botonArriba = document.getElementById("BotonArriba");
        if(scroll > 100){
            botonArriba.style.right = 20 + "px";
        }   else{
            botonArriba.style.right = -160 + "px";
        }
    })
}

irArriba();

/*up*/

function redirect1(){
    window.location.href = "https://fidelgenre.github.io/Coffee-Shop/";
}

function redirect2(){
    window.location.href = "https://fidelgenre.github.io/Fight-Game/";
}

function redirect3(){
    window.location.href = "https://fidelgenre.github.io/Slot-Machine/";
}