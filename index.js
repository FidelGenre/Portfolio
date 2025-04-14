/*sidemenu*/

let sidemeu = document.getElementById("sidemenu");

    function openmenu(){
        sidemeu.style.right = "0";
    }

    function closemenu(){
    sidemeu.style.right = "-200px";
}

/*sidemenu*/

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
            botonArriba.style.right = -100 + "px";
        }
    })
}

irArriba();

/*up*/

/*cv*/

function descargarArchivo() {
    if (confirm("¿Deseas descargar el archivo?")) {
    window.location.href = "https://drive.google.com/file/d/1tqa5oUkb-R4y3A2OlHFU3t4naFoQ8sqv/view?usp=sharing";
    }
}

/*cv*/

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

