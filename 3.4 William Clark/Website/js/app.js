var isOpen = false; //Variable Needs to be stored outside of function

$('.hamburger').click(function(){
  if (isOpen == false) {
      $('.hamburger').addClass('open');
      $('.hamburger_menu').addClass('open');
      $('.header').addClass('nav-open');
      $('.header').css("background","transparent");
      isOpen = true; /* flags nav menu opem*/
    }
    else {
      $('.hamburger').removeClass('open');
      $('.hamburger_menu').removeClass('open');
      $('.header').removeClass('nav-open');
      $('.header').css("background","linear-gradient(90deg, rgba(90, 185, 234, 1) 10%, rgba(86, 128, 233, 1) 42%, rgba(136, 96, 208, 1) 100%)");
      isOpen = false; /* flags nav menu closed*/
  }
});

$(function() {
  var selectedClass = "";
  $(".fil-cat").click(function(){ // listens for on clicked event on te buttons
  selectedClass = $(this).attr("data-rel"); //grabs value of data-rel
   $(".gallery-grid").fadeTo(100, 0.1); // opacity animation
  $(".gallery-grid div").not("."+selectedClass).fadeOut().removeClass('scale-anm'); //if grid item does not have the selected class remove scale-anm changing the way the images position
  setTimeout(function() {
    $("."+selectedClass).fadeIn().addClass('scale-anm');
    $(".gallery-grid").fadeTo(300, 1);
  }, 300);  
});
});

/*************BACKGROUND PARTICLES*****************
 **********************AND*************************
 *******************ANIMATIONS*********************/

 //Particle Initialization
particlesJS("bg", {
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 150
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 1
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.9,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.1,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 6,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 8,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.8,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 125,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 200,
        "size": 7,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 80,
        "duration": 10
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);; // Updates Animation every frame